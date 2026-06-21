# Personal Website (private source)

Minimal personal portfolio site. Source lives in this **private** repo; pushes to `main` auto-deploy to the public [rishabh0098.github.io](https://github.com/rishabh0098/rishabh0098.github.io) repo for GitHub Pages.

**Live site:** https://rishabh0098.github.io

## Sections

- **About** — introduction and recent writing
- **CV** — education, experience, publications
- **Blog** — posts in `blog/posts/`

## Deploying changes

GitHub Free does not support Pages on private repos, so the setup uses two repositories:

| Repo | Visibility | Purpose |
|------|------------|---------|
| [website](https://github.com/rishabh0098/website) | Private | Source code (edit here) |
| [rishabh0098.github.io](https://github.com/rishabh0098/rishabh0098.github.io) | Public | GitHub Pages deployment |

### Option 1: Local deploy script (no secrets needed)

```bash
./scripts/deploy.sh
```

### Option 2: Automatic deploy via GitHub Actions

1. Create a [fine-grained personal access token](https://github.com/settings/tokens?type=beta) with **Contents: Read and write** on `rishabh0098.github.io`
2. Add it as a secret named `PAGES_DEPLOY_TOKEN` on the private `website` repo
3. Pushes to `main` will auto-deploy

## Local preview

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000

## Adding a blog post

1. Create `blog/posts/your-post-slug.html` (copy structure from `welcome.html`)
2. Add an entry to `blog/index.html` and optionally `index.html`

## Customization

Update placeholder text in `index.html`, `cv.html`, and contact links throughout the site.
