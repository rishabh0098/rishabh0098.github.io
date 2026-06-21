#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

git clone --depth 1 https://github.com/rishabh0098/rishabh0098.github.io.git "$TMP/pages"

rsync -av --delete \
  --exclude '.git' \
  --exclude '.github' \
  --exclude 'scripts' \
  --exclude '.gitignore' \
  "$ROOT/" "$TMP/pages/"

cd "$TMP/pages"
git add -A
if git diff --cached --quiet; then
  echo "No changes to deploy."
  exit 0
fi

git commit -m "Deploy site from private website repo"
git push origin main

echo "Deployed to https://rishabh0098.github.io"
