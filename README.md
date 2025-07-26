# Census Monkey Site

A modern Astro-based website for displaying Census Monkey Typewriter analyses.

## Architecture

This site uses **Astro** with **MDX** content collections to create a fast, modern presentation layer for AI-generated social science research from the [Census Monkey Typewriter](https://github.com/dshkol/census-monkey-typewriter) project.

### Key Features

- **Content Collections**: Organized analyses by category (serious, exploratory, whimsical)
- **MDX Support**: Rich markdown with embedded components
- **Fast Performance**: Astro's static site generation with minimal JavaScript
- **Responsive Design**: Tailwind CSS with typography plugin
- **SEO Optimized**: Proper meta tags and Open Graph support

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

Configured for deployment at `dshkol.com/cmt/` via Netlify with:
- Base URL: `/cmt`
- Site URL: `https://dshkol.com`

## Content Pipeline

The site is designed to work with analyses converted from the CMT R Markdown format to MDX:

1. **Source**: R scripts + RMD files in census-monkey-typewriter repo
2. **Content**: MDX files in `src/content/analyses/`
3. **Assets**: Images and data in `public/images/`
4. **Output**: Static site optimized for fast loading

## Adding New Analyses

1. Convert RMD to MDX format
2. Copy images to `public/images/{analysis-name}/`
3. Update image paths to use `/cmt/images/` prefix
4. Ensure frontmatter matches schema in `src/content/config.ts`

## Proof of Concept

Currently includes one analysis:
- **Infrastructure Inequality Gradient**: Demonstrates the full conversion pipeline from CMT RMD to Astro MDX format

---

Part of the [dshkol.com](https://dshkol.com) ecosystem.
