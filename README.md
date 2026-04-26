# Jack Leahy — Portfolio

A minimal cinematographer portfolio inspired by [kaisaul.com](https://www.kaisaul.com/).

Live: https://immediacopenclaw.github.io/jack-portfolio/

## Edit projects

All project data lives in [`projects.js`](projects.js). Add/edit entries to update the grid.

```js
{
  slug: "clio",            // URL slug for project page
  title: "Clio",
  director: "Jane Doe",
  year: "2025",
  thumb: "media/clio/thumb.jpg",   // still image (16:9 preferred)
  video: "media/clio/clio.mp4",    // local file OR embed URL
  videoType: "file",                // "file" or "embed"
  credits: {
    Director: "Jane Doe",
    Producer: "John Smith",
    Type: "Commercial"
  }
}
```

## Adding media

Put images and videos in `media/<slug>/` and reference them from `projects.js`.

For videos, GitHub Pages has a 100MB/file limit. For larger masters, use:
- **Bunny.net Stream** (recommended — cheap, fast, no branding)
- **Cloudflare Stream**
- **Vimeo Pro** (use embed URL with `videoType: "embed"`)

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Pushes to `main` auto-deploy via GitHub Pages.
