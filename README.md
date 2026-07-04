# ryanchou24.github.io

Personal site for Ryan Zhou — hand-crafted static site, **no build step required**.
GitHub Pages serves it as-is.

## Structure

```
index.html      page shell (sections + meta tags)
404.html        redirects old /blog/:id links into the hash router
css/main.css    the whole design system
js/data.js      ★ ALL CONTENT LIVES HERE — profile, experience, blog posts
js/main.js      rendering, typewriter, scroll effects, hash router, markdown
assets/img/     images
```

## How to edit content

Everything visible on the site comes from `js/data.js`:

- **Add a blog post** — append an object to the `posts` array (newest first):

  ```js
  {
    "id": "my-new-post",            // becomes the URL: /#/post/my-new-post
    "title": "Post title",
    "description": "One-line teaser shown on the card.",
    "content": "Markdown here.\n\n## Headings, **bold**, lists all work.",
    "tags": ["AI", "Product"],
    "date": "January 5, 2026",
    "readTime": "3 minute read",
    "image": "https://…or /assets/img/…",  // optional; gradient fallback if missing
    "accent": "cyan",               // violet | cyan | mint | amber | rose | blue
    "emoji": "🚀"
  }
  ```

- **Update experience** — edit the `experience` array.
- **Change bio / roles / links** — edit `profile`.

## Local preview

```
python3 -m http.server 8000
# open http://localhost:8000
```
