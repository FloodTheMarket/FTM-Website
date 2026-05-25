# FTM Website Deployment

## Vercel Deployment

1. Push this project to a GitHub repository.
2. Open Vercel and choose **Add New Project**.
3. Import the GitHub repository.
4. Keep the framework preset as **Next.js**.
5. Use the default commands:
   - Install command: `pnpm install`
   - Build command: `pnpm build`
   - Output directory: leave blank
6. Deploy.

Vercel will build the site from the `main` branch by default. Every future push to the production branch will trigger a fresh deployment.

## Local Preview

Install dependencies:

```bash
pnpm install
```

Run locally:

```bash
pnpm dev
```

Build locally:

```bash
pnpm build
```

## Custom Domain

After deployment:

1. Open the project in Vercel.
2. Go to **Settings > Domains**.
3. Add the domain, for example `floodthemarket.co.uk`.
4. Follow Vercel's DNS instructions.
5. If the domain is managed elsewhere, update the DNS records with the values Vercel provides.
6. Once DNS verifies, set the preferred production domain.

## Future Updates

Edit the site in:

- `app/page.tsx` for page content, links and sections
- `app/layout.tsx` for metadata and social preview settings
- `public/` for public logo, favicon and image assets
- `app/globals.css` for global visual styling

Commit and push changes to redeploy through Vercel.
