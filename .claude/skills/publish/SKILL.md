---
name: publish
description: Commit and push new/updated content to trigger the GitHub Pages deploy
disable-model-invocation: true
---

You are publishing content to the anti-villain.com blog (GitHub Pages, deploys on push to master).

Steps:

1. Run `git status` to see what has changed
2. Show the user a list of files to be committed — only stage files inside src/content/
3. Ask for confirmation before proceeding
4. Stage only the content files: `git add src/content/`
5. Write a commit message in the format: `content: [brief description of what changed]`
6. Commit and push to master
7. Confirm push succeeded and remind the user the GitHub Actions deploy will take ~1-2 minutes

Do NOT commit src/components/, src/layouts/, src/styles/, config files, or anything in dist/ unless the user explicitly requests it.
