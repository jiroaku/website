# Blog Posts

Each blog post should be in its own folder with an `index.md` (or `index.mdx`) file. This allows you to include images and other assets alongside your post.

**Quick start:**
1. Create a new folder (e.g., `my-new-post`)
2. Copy `TEMPLATE.md` to `my-new-post/index.md`
3. Add any images to the same folder
4. Reference images in your frontmatter using `featureImage: image.jpg`

## Frontmatter Format

Each post should start with frontmatter:

\`\`\`yaml
---
title: Your Post Title
date: 2024-01-15
excerpt: A short description of your post
tags:
  - tag1
  - tag2
category: tutorial
published: true
---
\`\`\`

## Fields

- **title** (required): The post title
- **date** (required): Publication date (YYYY-MM-DD format)
- **excerpt** (required): Short description shown in post lists
- **tags** (optional): Array of tags
- **category** (optional): Post category (defaults to 'uncategorized')
- **published** (optional): Set to `false` to hide from blog (defaults to `true')
- **featureImage** (optional): Path to feature image relative to post folder (e.g., `hero.jpg`)

## Folder Structure

```
content/blog/
  my-new-post/
    index.md          # Your post content
    hero.jpg          # Feature image (optional)
    other-image.png   # Other images you can reference
  another-post/
    index.md
    ...
```

## Example

Create a folder `my-new-post/` with `index.md`:

\`\`\`markdown
---
title: My New Post
date: 2024-01-20
excerpt: This is a great post about something interesting.
tags:
  - web-dev
  - nextjs
category: tutorial
published: true
featureImage: hero.jpg
---

# My New Post

Write your content here using Markdown syntax.

You can reference images in the same folder: ![alt text](other-image.png)
\`\`\`

## Example

Create a file like `my-new-post.md`:

\`\`\`markdown
---
title: My New Post
date: 2024-01-20
excerpt: This is a great post about something interesting.
tags:
  - web-dev
  - nextjs
category: tutorial
published: true
---

# My New Post

Write your content here using Markdown syntax.

## Features

- Code blocks with syntax highlighting
- Math equations with KaTeX
- Images and links
- And more!
\`\`\`

The post will automatically appear on your blog!

