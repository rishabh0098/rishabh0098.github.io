# Personal Website

Minimal personal portfolio site hosted on GitHub Pages.

**Live site:** https://rishabh0098.github.io

## Sections

- **About** — introduction and recent writing
- **CV** — education, experience, publications
- **Blog** — posts in `blog/posts/`

## Local preview

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000

## Publishing changes

Push to `main` on this repo. GitHub Pages serves the site directly from the repository root.

## Adding a blog post

1. Create `blog/posts/your-post-slug.html` (copy structure from `welcome.html`)
2. Add an entry to `blog/index.html` and optionally `index.html`

## Customization

Update placeholder text in `index.html`, `cv.html`, and contact links throughout the site.
