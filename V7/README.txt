WHAT SHOULD WE DO? — Arya enrichment app (v12)

FILES
- index.html                 app (UI + logic)
- activities.js              data: 50 activities + 5 category templates + merge helper
- manifest.webmanifest       install metadata (now with icons)
- sw.js                      service worker (stale-while-revalidate)
- arya-hero.jpg              hero photo (re-compressed)
- icon-192.png / icon-512.png / icon-maskable-512.png / apple-touch-icon.png   app icons

DEPLOY (GitHub Pages)
Replace every file in your repo with this folder's contents and commit. The four
icon PNGs and the two extra icon files are NEW — make sure they get added, not just
the files that already existed. GitHub Pages redeploys automatically.

The service worker is stale-while-revalidate: the app opens instantly from cache and
pulls a fresh copy in the background, so future updates land on the next launch without
the v1 "stuck on an old version" problem. No manual Website Data clearing needed.

ADD TO HOME SCREEN
Open the site in Safari, tap Share, then Add to Home Screen. The icon is now a proper
paw mark instead of a screenshot.

WHAT CHANGED FROM V6
Data model
- activities.js is ~64% smaller. Content that was identical across every activity in a
  category (why it works, framing steps, pro tips, easier/senior variations) now lives
  once per category in CATEGORIES and is merged in at render time by mergeActivity().
  Each activity is a single editable line. Every one of the 50 activities renders
  byte-identically to v6 — only the storage shape changed.
- Dropped the dead "steps" field (it duplicated instructions[1]).

Code
- One render path (activityHTML) feeds both "Pick one" and "Plan a session," so content
  only has to be edited in one place. In v6 the two paths had already drifted.
- Fixed a bug where each new pick appended another meta footer, stacking them up.
- Values are HTML-escaped at render.

New feature — favorites
- Tap the heart on any activity to mark it one Arya loves. Favorited activities come up
  ~3x more often in "Pick one," so the picker gradually leans toward what works.

Motivation (adult-facing, not a kids' sticker chart)
- A five-channel "this week" balance meter shows which of Arya's needs
  (Sniff / Think / Train / Play / Chill) have been fed, and names the one she's lightest on.
- Visible day-streak, lifetime total (carried over from your old count), and favorite count.

Polish
- Category color system throughout; supervision notes now show a text label (not color
  alone) and are pulled up near the top of the card.
- Accessibility: live region announces the picked activity, focus moves to its title,
  visible keyboard focus, reduced-motion respected.
- Manifest icons + apple-touch-icon; hero image re-compressed; layout-shift guarded.
- Friendly display font (Fredoka) with a full system-font fallback, so it still looks
  right offline.

WHAT CHANGED FROM V7

Calendar view
- New third tab, "Calendar." Shows a month grid where each day carries a colored dot
  for every type of activity Arya did that day (using the same five category colors).
  Today is circled; tap any day with activity to see the list of what she did and when.
  Prev/next arrows move between months. Built entirely from the history the app already
  records, so past days you logged in v7 show up automatically.

Dark mode
- A sun/moon button in the top-right corner toggles light and dark. The choice is saved,
  and the first time the app opens it follows the phone's system setting. The theme is
  applied before the page paints, so there's no flash of the wrong mode on launch.

Notes
- Same files as v7 (only index.html and sw.js changed); the service worker cache is
  bumped to arya-v8 so the update rolls out on next launch.
- Her existing data — streak, favorites, totals, and history — carries straight over;
  nothing is reset.

WHAT CHANGED FROM V8

Type explanations
- The five type bars (Sniff / Think / Train / Play / Chill) now have a small "?" on each
  label, plus a "?" button by the "This week with Arya" heading. Tapping either opens a
  short legend explaining what each type means for Arya; tapping a specific label
  highlights that one. Only index.html and sw.js changed (cache bumped to arya-v9).

WHAT CHANGED FROM V9

Fix
- The type legend was showing by default and the "?" button did nothing: a CSS rule was
  overriding the hide. The legend now starts collapsed and the "?" (and each label)
  opens and closes it correctly. Only index.html and sw.js changed (cache -> arya-v10).

WHAT CHANGED FROM V10

Tailored to Arya (sound 6-year-old German Shepherd, beginner handler)
- All five type templates were rewritten with breed-aware "why it works" copy that speaks
  to a Shepherd's working/herding brain, scent heritage, drive, and off-switch. Kept at a
  beginner reading level. Because she's sound, joint talk is limited to one light warm-up
  note on Play rather than heavy restrictions.
- Every card now shows a short "For a German Shepherd" note. The 50 activities and their
  step-by-step instructions are unchanged; the tailoring is in the framing on each card.

Google Sheet logging (needs your URL to turn on)
- The app can POST each completed card (timestamp, card, type) to a Google Sheet you own,
  so you can see if and when she's using it and which cards. The sending code ships in this
  version but is OFF until you set LOG_URL.
- To enable: create a Sheet, add the Apps Script doPost from the chat, deploy it as a Web
  App (Execute as: Me, Access: Anyone), and paste the /exec URL into the LOG_URL constant
  near the top of the <script> in index.html (or send it over and it gets filled in).
- Logging is non-blocking and fire-and-forget: it never slows down a tap and fails silently
  offline. Only index.html, activities.js, and sw.js changed (cache -> arya-v11).

WHAT CHANGED FROM V11

- Google Sheet logging is now ON: LOG_URL is set to your deployed Apps Script web app, so
  each completed card posts (timestamp, card, type) to your Sheet. Only index.html and
  sw.js changed (cache -> arya-v12).
- If you ever redeploy the script and the URL changes, update the LOG_URL line near the top
  of the <script> in index.html.
