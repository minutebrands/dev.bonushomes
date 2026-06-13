# bonushome.com

@C:\Users\shane\.claude\knowledge\all-projects.md

## This Project
- **Stack:** Next.js 15, Tailwind, Resend, Geist font — no database
- **Hosting:** Vercel → https://bonushomes.io
- **GitHub:** `minutebrands/bonushome` (minutebrands account)
- **Dev:** `npm run dev`

## Routes
- `/` — full marketing/lead gen page
- `/ria` — duplicate of home (kept for direct linking)
- `/book` — lead capture form

## Lead Capture (`/book`)
- Form fields: FirstName, LastName, Cell, Email, Company, # of RIAs, # of Offices, # of HNIs, AUM
- API route: `src/app/api/contact/route.ts`
- Email via Resend → `leads@bonushomes.io`, recipient set by `LEAD_NOTIFY_EMAIL` env var
- Salesforce stub ready — set `SALESFORCE_ENDPOINT` + `SALESFORCE_API_KEY` env vars to activate
- Zapier alternative: single `ZAPIER_WEBHOOK_URL` env var (discussed, not yet wired)

## Env Vars (Vercel + .env.local)
- `RESEND_API_KEY`
- `LEAD_NOTIFY_EMAIL`
- `SALESFORCE_ENDPOINT` (optional)
- `SALESFORCE_API_KEY` (optional)
