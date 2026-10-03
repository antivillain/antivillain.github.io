---
name: new-post
description: Scaffold a new blog post with correct frontmatter for the Astro content collection
---

Create a new markdown file in src/content/blog/ with the filename based on a slugified version of the title (lowercase, hyphens instead of spaces, no special characters).

Use this frontmatter schema exactly:

```
---
title: [TITLE]
excerpt: [1-2 sentence excerpt that is compelling and under 160 characters]
publishDate: '[Month DD YYYY]'
tags:
  - [tag]
isFeatured: false
seo:
  image:
    src: '../../assets/img/blog-[slug].webp'
    alt: [descriptive alt text]
---
```

Images live in `src/assets/img/` (not `public/`) so Astro can optimize them. The `seo.image.src` path and any image in the post body must be relative to the post file, e.g. `![Alt text](../../assets/img/blog-[slug].webp)`. The build fails if the image file doesn't exist yet, so remind the user to add it to `src/assets/img/` first.

Ask the user for: title, excerpt (or generate one from the title), and tags. Generate the slug from the title. Leave the body empty after the frontmatter with a single HTML comment: `<!-- Write your post content here -->`.

The blog voice is literary, sharp, and culturally aware — similar to long-form cultural criticism.
