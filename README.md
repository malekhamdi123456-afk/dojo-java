# Java Night Trail

A Duolingo-style Java course in a single web page: 34 bite-size stops covering the first four phases of a Java roadmap, laid out as a pixel-art night trail.

**Live:** https://malekhamdi123456-afk.github.io/java-night-trail/

## What's inside

| World | Phase | Topics |
|---|---|---|
| Lantern Village | 1 | Variables, math, if/switch, loops, arrays, methods, Strings |
| Bamboo Grove | 2 | Classes, constructors, encapsulation, inheritance, polymorphism, interfaces, records, enums |
| Mountain Shrine | 3 | ArrayList, HashMap, Sets, generics, exceptions, files |
| Moon Garden | 4 | Lambdas, functional interfaces, streams, Optional, modern syntax, pattern matching |

Every stop has five parts: **Story → Syntax → Practice → Quiz → In the wild**.
Each world ends with a gate project you build in your IDE.

- Exercises with hint and solution buttons
- Fill-in and "what prints?" answers are checked on the page
- Progress (XP, finished steps, quiz answers) is saved in your browser's localStorage
- Pick any lesson in any order

## Run it locally

No build step. Open `index.html` in a browser.

## Tech

Plain HTML, CSS and JavaScript (`index.html`, `style.css`, `script.js`), no frameworks and no build step. The night scene is drawn on a canvas at low resolution and scaled up for the pixel look.

## Security

The site is fully static: no database, no server code, no forms, no network requests from the page. Progress lives only in each visitor's browser.

- `_headers` sets a strict Content-Security-Policy on Netlify: scripts load only from this site, no inline scripts, no eval, nothing can embed the page in a frame, and the page can't send data anywhere.
- Plus `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `Strict-Transport-Security` and cross-origin isolation headers.
- Saved progress is validated on load, so tampered localStorage data is ignored instead of breaking the page.
- Everything the visitor types is escaped before it's shown.
