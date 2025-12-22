# Link-in-bio Profile Card

A simple static page (HTML/CSS/JS) that recreates a clean Linktree-like profile card similar to the provided screenshot.

## Quick start

1. Open `index.html` in your browser (double-click on Windows), or serve it locally:

```bash
# Using PowerShell with Python installed
python -m http.server 8080
# then open http://localhost:8080
```

## Customize
- Avatar image: replace `assets/profile.svg` with your own image and update the path in `index.html`.
- Handle and bio: edit the text inside the `<h1 class="handle">` and `<p class="bio">` in `index.html`.
- Social links: update the `socials` object in `script.js` (WhatsApp and YouTube are provided as examples).
- CTA text: change the anchor text with id `ctaLink` in `index.html`.

## Notes
- Fonts use Google Fonts (Inter); the page still looks good with system fonts if offline.
- All assets are local; no external images are required.
