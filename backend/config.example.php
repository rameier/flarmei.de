<?php

return [
    // Copy this file to config.php on your PHP webspace and adjust the values.
    'recipient_email' => 'recipient@example.com',
    'sender_email' => 'contact@example.com',
    'sender_name' => 'Example Website Contact Form',
    'mail_subject' => '[example.com] New contact request',

    // Only accept form submissions that come from these site origins.
    'allowed_origins' => [
        'https://example.com',
        'https://www.example.com',
    ],

    'success_redirect' => 'https://example.com/contact/?sent=1',
    'error_redirect' => 'https://example.com/contact/?error=1',

    // Lightweight spam controls.
    'honeypot_field' => 'website',
    'started_at_field' => 'started_at',
    'min_submit_seconds' => 3,
    'rate_limit_seconds' => 120,
    'max_message_length' => 4000,

    // Keep this outside the public web root if your hosting package allows it.
    'rate_limit_dir' => sys_get_temp_dir() . '/example-contact-rate',
];
