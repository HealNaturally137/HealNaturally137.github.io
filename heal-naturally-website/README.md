
# Heal Naturally Labs · GitHub Pages

A simple, professional static site you can host on GitHub Pages and use as your organization website for Google Play Console verification.

## Quick Start

1. Create a new repo named `your-github-username.github.io` (or use a custom domain).
2. Upload the contents of this folder to the repo root.
3. In **Settings → Pages**, ensure the branch is set to `main` (or `master`) and folder is `/root`.
4. (Optional) Add a `CNAME` file with `yourdomain.com` if you own a domain and want a custom URL.
5. Replace placeholders in the HTML:
   - `yourdomain.com` → your real domain or `your-github-username.github.io`
   - `support@yourdomain.com` → your support email
   - Legal entity info in `contact.html`
6. Commit and push — your site will be live shortly at `https://your-github-username.github.io/` or your custom domain.

## Notes for Google Play

- A publicly accessible website is often sufficient, but a **custom domain that matches your legal entity** is best.
- Make sure the site includes:
  - Contact email and (ideally) registered address
  - Privacy Policy and Terms pages
  - App details / listing link

## Structure

```
/
├─ index.html
├─ about.html
├─ apps.html
├─ privacy.html
├─ terms.html
├─ support.html
├─ contact.html
├─ press.html
├─ 404.html
├─ robots.txt
├─ sitemap.xml
└─ assets/
   ├─ css/styles.css
   ├─ js/main.js
   └─ img/logo.svg
```
