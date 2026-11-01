# Dojo Java

A Duolingo-style Java course in a single web page: 34 bite-size stops covering the first four phases of a Java roadmap, laid out as a pixel-art night path through a Japanese-style dojo world.

**Live:** https://malekhamdi123456-afk.github.io/dojo-java/

## What's inside

| World | Phase | Topics |
|---|---|---|
| Lantern Village | 1 | Variables, math, if/switch, loops, arrays, methods, Strings |
| Bamboo Grove | 2 | Classes, constructors, encapsulation, inheritance, polymorphism, interfaces, records, enums |
| Dragon Keep | 3 | ArrayList, HashMap, Sets, generics, exceptions, files |
| Moon Garden | 4 | Lambdas, functional interfaces, streams, Optional, modern syntax, pattern matching |

Every stop has five parts: **Story → Syntax → Practice → Quiz → In the wild**.
Each world ends with a dungeon gate (a boss project) you build in your IDE.

- Exercises with hint and solution buttons
- Fill-in and "what prints?" answers are checked on the page
- Progress (XP, finished steps, quiz answers) is saved in your browser's localStorage
- Pick any lesson in any order

## Owner preview

Run the site on your own computer (open `index.html` directly, or a local server on `localhost`) and add `?owner` to the address. A panel appears that moves Gogii through all ten heart shards, plays the shard popups and the curse-breaking cinematic, previews Looka and Suzi (with their spells), and replays the intro. Nothing is saved until you press **Save this**, which makes what you see your real progress in that browser.

Owner mode only switches on for `file://`, `localhost`, `127.0.0.1` and `[::1]`. On the live site `?owner` does nothing, so visitors never see the panel.

## Run it locally

No build step. Open `index.html` in a browser.

## Tech

Plain HTML, CSS and JavaScript (`index.html`, `style.css`, `script.js`), no frameworks and no build step. The night scene is drawn on a canvas at low resolution and scaled up for the pixel look.

## Security

The site is fully static: no database, no server code, no forms, no network requests from the page. Progress lives only in each visitor's browser.

- `_headers` sets a strict Content-Security-Policy on Netlify: scripts load only from this site, no inline scripts, no eval, nothing can embed the page in a frame, and the page can't send data anywhere.
- Plus `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `Strict-Transport-Security` and cross-origin isolation headers.
- Saved progress is validated on load, so tampered localStorage data is ignored instead of breaking the page.
- Everything the visitor types is escaped before it's shown, and every input has a length cap (8,000 characters per build box), so a giant paste can't overflow saved progress.
- The same Content-Security-Policy is also set in a `<meta>` tag in `index.html`, so it applies on any host (GitHub Pages ignores `_headers`).
