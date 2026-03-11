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
    src: '/img/blog-[slug].webp'
    alt: [descriptive alt text]
---
```

Ask the user for: title, excerpt (or generate one from the title), and tags. Generate the slug from the title. Leave the body empty after the frontmatter with a single HTML comment: `<!-- Write your post content here -->`.

The blog voice is literary, sharp, and culturally aware — similar to long-form cultural criticism.
