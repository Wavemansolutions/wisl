# Waveman Integrated Solutions — Professional B2B Platform

A polished Next.js platform for an international managed technology, cybersecurity and automation services company.

## Included
- Approved visual homepage with animated technology-partner strip
- Professionally rebranded Services, Solutions, About, Resources and Contact pages
- Consistent logo lockup, typography, colour system, spacing and footer
- Supabase-powered consultation form
- Responsive desktop, tablet and mobile layouts
- Vercel-ready configuration

## Run locally
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Supabase
Copy `.env.example` to `.env.local`, add the project URL and anon key, then run `supabase/schema.sql` in the Supabase SQL editor.

## Before launch
Replace `hello@wavemansolutions.com` with the final business email and add verified testimonials, certifications and partner status only where formally authorised.

## Responsive services update

- Every service card now opens a dedicated `/services/[slug]` page.
- Phones automatically receive a purpose-built mobile homepage through CSS media queries.
- Internal pages include a touch-friendly hamburger navigation menu.
- Service detail pages are statically generated for fast Vercel deployment.
