# JIPAY — Payment Gateway Solution landing page

Single-page Next.js 16 + Tailwind CSS 4 landing page with Telegram call-to-action buttons, trust badges and a partner gateway marquee.

```bash
cd jipay
npm install
cp .env.example .env.local   # set your Telegram link/handle
npm run dev                  # http://localhost:3000
npm run build && npm start
```

- **Telegram link**: set `NEXT_PUBLIC_TELEGRAM_URL` / `NEXT_PUBLIC_TELEGRAM_HANDLE` (defaults to `https://t.me/jipay`).
- **Copy, partners, stats, trust badges, FAQ**: edit `lib/content.ts`.
- **Logo**: `public/logo.jpg`.

When deploying on Vercel, set the project's Root Directory to `jipay`.
