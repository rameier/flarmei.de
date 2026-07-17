# Kontaktformular-Backend

Kleines PHP-Backend fuer das Kontaktformular auf flarmei.de. Es ist fuer einen normalen Webspace gedacht und wird separat von GitHub Pages deployed.

## Setup

1. `config.example.php` auf dem Webspace zu `config.php` kopieren.
2. Werte in `config.php` anpassen, vor allem `recipient_email`, `sender_email`, `allowed_origins` und Redirect-URLs.
3. Den Ordner `backend` auf den PHP-Webspace laden.
4. Das Formular der Kontaktseite auf `https://kontakt.flarmei.de/contact.php` posten lassen.

`config.php` ist in `.gitignore` eingetragen und sollte nicht ins Repo.

## Erwartete Formularfelder

```html
<form method="post" action="https://kontakt.flarmei.de/contact.php">
  <input type="text" name="name" autocomplete="name" required />
  <input type="email" name="email" autocomplete="email" required />
  <textarea name="message" required></textarea>

  <input type="text" name="website" tabindex="-1" autocomplete="off" hidden />
  <input type="hidden" name="started_at" value="" />

  <button type="submit">Senden</button>
</form>

<script>
  document.querySelector('input[name="started_at"]').value = Math.floor(Date.now() / 1000);
</script>
```

## Spam-Schutz

- Honeypot-Feld `website`
- Mindestzeit zwischen Seitenaufruf und Absenden ueber `started_at`
- Einfaches IP-basiertes Rate-Limit
- Origin/Referer-Pruefung gegen `allowed_origins`
- Absenderadresse bleibt serverseitig; Besucheradresse wird nur als `Reply-To` gesetzt

Fuer staerkeren Schutz kann spaeter noch Cloudflare Turnstile ergänzt werden.
