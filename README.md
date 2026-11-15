# Yixiang Health Foods — B2B Independent Site

US B2B freeze-dried vegetable ingredient site, rebuilt from Stitch prototypes using the **Yixiang Global Health** design system.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS v4
- Design tokens follow the Yixiang Global Health system (Hanken Grotesk, Inter, JetBrains Mono)

## Run

```bash
export PATH="$HOME/.local/node/bin:$PATH"   # if using the local Node install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/products` | Catalog + deep dive + sample kit |
| `/request-quote` | B2B RFQ / sample form |
| `/applications` `/quality` `/supply` | Placeholders |

## Notes

- RFQ submit is local success UI only (no email backend yet).
- Product macro photos live in `public/products/`.
