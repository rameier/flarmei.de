<?php

declare(strict_types=1);

$configPath = __DIR__ . '/config.php';

if (!is_file($configPath)) {
    http_response_code(500);
    echo 'Missing backend/config.php. Copy config.example.php to config.php and adjust it on your webspace.';
    exit;
}

/** @var array<string, mixed> $config */
$config = require $configPath;

function redirect_to(array $config, string $type, string $reason = '')
{
    $key = $type === 'success' ? 'success_redirect' : 'error_redirect';
    $target = (string) ($config[$key] ?? '/');

    if ($reason !== '') {
        $separator = strpos($target, '?') !== false ? '&' : '?';
        $target .= $separator . 'reason=' . rawurlencode($reason);
    }

    header('Location: ' . $target, true, 303);
    exit;
}

function reject_silently(array $config)
{
    redirect_to($config, 'success');
}

function post_string(string $key): string
{
    $value = $_POST[$key] ?? '';
    return is_string($value) ? trim($value) : '';
}

function strip_header_value(string $value): string
{
    return trim(str_replace(["\r", "\n"], ' ', $value));
}

function origin_is_allowed(array $config): bool
{
    $allowedOrigins = $config['allowed_origins'] ?? [];

    if (!is_array($allowedOrigins) || $allowedOrigins === []) {
        return true;
    }

    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';

    if (!is_string($origin) || $origin === '') {
        $referer = $_SERVER['HTTP_REFERER'] ?? '';
        if (!is_string($referer) || $referer === '') {
            return false;
        }

        $parts = parse_url($referer);
        if ($parts === false) {
            return false;
        }
        $scheme = isset($parts['scheme']) ? (string) $parts['scheme'] : '';
        $host = isset($parts['host']) ? (string) $parts['host'] : '';
        $origin = $scheme !== '' && $host !== '' ? $scheme . '://' . $host : '';
    }

    foreach ($allowedOrigins as $allowedOrigin) {
        if (is_string($allowedOrigin) && rtrim($origin, '/') === rtrim($allowedOrigin, '/')) {
            return true;
        }
    }

    return false;
}

function rate_limit_allows(array $config): bool
{
    $seconds = (int) ($config['rate_limit_seconds'] ?? 0);

    if ($seconds <= 0) {
        return true;
    }

    $dir = (string) ($config['rate_limit_dir'] ?? '');

    if ($dir === '') {
        return true;
    }

    if (!is_dir($dir) && !mkdir($dir, 0700, true) && !is_dir($dir)) {
        return true;
    }

    $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $ip = is_string($ip) ? $ip : 'unknown';
    $file = rtrim($dir, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . hash('sha256', $ip) . '.txt';
    $now = time();
    $last = is_file($file) ? (int) file_get_contents($file) : 0;

    if ($last > 0 && ($now - $last) < $seconds) {
        return false;
    }

    file_put_contents($file, (string) $now, LOCK_EX);
    return true;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirect_to($config, 'error', 'method');
}

if (!origin_is_allowed($config)) {
    reject_silently($config);
}

$honeypotField = (string) ($config['honeypot_field'] ?? 'website');
if (post_string($honeypotField) !== '') {
    reject_silently($config);
}

$startedAtField = (string) ($config['started_at_field'] ?? 'started_at');
$startedAt = (int) post_string($startedAtField);
$minSubmitSeconds = (int) ($config['min_submit_seconds'] ?? 0);
if ($minSubmitSeconds > 0 && ($startedAt <= 0 || time() - $startedAt < $minSubmitSeconds)) {
    reject_silently($config);
}

$name = strip_header_value(post_string('name'));
$email = strip_header_value(post_string('email'));
$message = post_string('message');
$maxMessageLength = (int) ($config['max_message_length'] ?? 4000);

if ($name === '' || $email === '' || $message === '') {
    redirect_to($config, 'error', 'validation');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    redirect_to($config, 'error', 'email');
}

if ($maxMessageLength > 0 && strlen($message) > $maxMessageLength) {
    redirect_to($config, 'error', 'too_long');
}

$recipient = strip_header_value((string) ($config['recipient_email'] ?? ''));
$senderEmail = strip_header_value((string) ($config['sender_email'] ?? ''));
$senderName = strip_header_value((string) ($config['sender_name'] ?? 'Kontaktformular'));
$subject = strip_header_value((string) ($config['mail_subject'] ?? 'Neue Kontaktanfrage'));

if (!filter_var($recipient, FILTER_VALIDATE_EMAIL) || !filter_var($senderEmail, FILTER_VALIDATE_EMAIL)) {
    http_response_code(500);
    echo 'Invalid mail configuration.';
    exit;
}

if (!rate_limit_allows($config)) {
    redirect_to($config, 'error', 'rate_limited');
}

$body = implode("\n", [
    'Neue Nachricht ueber flarmei.de',
    '',
    'Name: ' . $name,
    'E-Mail: ' . $email,
    'IP: ' . ($_SERVER['REMOTE_ADDR'] ?? 'unbekannt'),
    '',
    'Nachricht:',
    $message,
]);

$headers = [
    'From: ' . $senderName . ' <' . $senderEmail . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = mail($recipient, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    redirect_to($config, 'error', 'send_failed');
}

redirect_to($config, 'success');
