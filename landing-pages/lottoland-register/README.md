# ₹100 Registration Landing Page

A single static page (`index.html` + `img/`) built to turn ad clicks into registrations.
There is no build step. Upload the folder to any static host or CDN (Cloudflare Pages, Netlify, S3 + CloudFront, Nginx).

- Page weight: about 42 KB HTML (CSS and JS are inline) plus about 140 KB of WebP images. Images below the fold load lazily.
- No external fonts or libraries. The Meta Pixel loads only if you set an ID.

## Before going live (required)

1. **Edit `CONFIG` at the bottom of `index.html`:**
   - `registerUrl`: your tracked registration link. It must open the **sign-up form directly**, not the operator's home page.
   - `clickIdParam`: the sub-id parameter your affiliate platform reads, for example `subid`, `sub1`, `aff_sub` or `clickref`.
   - `metaPixelId`: optional. Leave it empty for TrafficStars-only traffic.
   - `links`: the URLs for T&C, privacy, responsible gaming, support and affiliates.
2. The offer-terms section points readers to the full T&C for wagering, validity, eligible games and licence details. Add exact figures there if you want them on the page.
3. **Check the jackpot amounts** in the games section against the live site. They come from the 16 Oct 2026 snapshot.

## TrafficStars setup

Campaign URL:

```
https://your-domain.com/?click_id={click_id}&zone_id={zone_id}&campaign_id={campaign_id}&utm_source=trafficstars
```

The page stores `click_id` and passes it to every Register button as `?subid=<click_id>` (or whatever you set in `clickIdParam`). It also forwards UTM, zone and campaign values, plus `lp_v` (the A/B variant) and `lp_cta` (which button was clicked).

In TrafficStars, set up **S2S postback** conversion tracking. Then, in your affiliate or tracker platform, set the postback to fire on **completed registration** and return the sub-id as `{click_id}`. That way TrafficStars optimises for registrations, not clicks. Break results down by `zone_id` and block zones that send clicks but no registrations.

## Funnel events

| Step | Where it's measured |
|---|---|
| Ad click | TrafficStars stats |
| Landing page view | `dataLayer` event `lp_view` / Meta `PageView` |
| Register Now click | `dataLayer` event `register_click` (with `cta_position`) / Meta custom `RegisterClick` |
| Registration started / completed | Operator or affiliate platform. Fire the postback (and Meta `CompleteRegistration` via Pixel + CAPI) **there** |

Other events: `scroll_depth` (25/50/75/100) and `explore_more_open`.
`clickBeaconUrl` (optional) sends each click to your own endpoint so you can report on it.

**Meta dedup:** `CompleteRegistration` must be sent from the registration platform, with the **same `event_id`** in both Pixel and CAPI. The page forwards the `fbp`/`fbc` browser IDs on the registration link so the backend can include them in CAPI.

## A/B test

- Variant **A** headline: "Register free & get ₹100 to play" (offer-led)
- Variant **B** headline: "Play for ₹3 Crore — your first ₹100 is on us" (jackpot-led)

Visitors are split 50/50 and keep the same variant on later visits. To force a variant (for example, one per ad set), add `&v=a` or `&v=b` to the URL. The variant is passed on as `lp_v`, so you can compare **completed registrations** per variant on the affiliate platform, not just clicks. To test other copy, edit the `.va` / `.vb` elements.

## What changed vs. the old page

- The hero has one goal: the ₹100 offer in the headline, with **Register Now** directly under it and visible without scrolling on a 360×640 phone.
- One primary CTA ("Register Now – Claim ₹100"), styled the same everywhere. It appears in the header, hero, steps, games, mid-page band and final section, and in a **sticky bar on mobile** once the hero button scrolls out of view.
- 6 featured games instead of 30+. The rest sit in a collapsed "Explore more games" list, and every game links to registration.
- Offer terms are stated openly on the page, along with trust signals, payment methods, responsible-gaming copy, an FAQ and an 18+ notice.
- No countdowns, fake scarcity or winning promises.
- The large affiliate recruitment block is now a small footer link, so it no longer pulls attention from registration.
