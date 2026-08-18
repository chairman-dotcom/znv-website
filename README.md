# znv-website

Static site source for [zero-n.com](https://zero-n.com), served via GitHub Pages (see [`CNAME`](CNAME)).

## Structure

- `index.html`, `about.aspx`, and other top-level `.html`/`.aspx` files — individual site pages
- `wp-content/`, `wp-includes/`, `wp-json/` — assets exported from the site's WordPress origin
- `afsb/`, `apotek/`, `thryve/` — subsection/demo pages
- `archive/` — archived snapshots of prior site versions
- `AFSB_Demo_*.html`, `unified_impact_demo.html` — standalone demo pages

## Deployment

Pages are served directly from this repository via GitHub Pages using the custom domain configured in `CNAME`. Pushing changes to the default branch updates the live site.
