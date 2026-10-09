# Greenfield International School

A multi-page React SPA for Greenfield International School.

## Tech Stack

- **React 18** — UI framework
- **Vite** — Build tool & dev server
- **Vanilla CSS-in-JS** — Inline styles with design tokens (no extra CSS library needed)

## Project Structure

```
greenfield-school/
├── index.html                    # HTML entry point
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                  # React root
    ├── App.jsx                   # Router + layout shell
    ├── styles/
    │   ├── tokens.js             # Design tokens (colors)
    │   └── GlobalStyle.jsx       # Global CSS injected via <style>
    ├── components/
    │   ├── TopBar.jsx            # Top contact/portal bar
    │   ├── Navbar.jsx            # Sticky navigation
    │   ├── Footer.jsx            # Site-wide footer
    │   ├── Illustrations.jsx     # SVG campus & students illustrations
    │   └── UI.jsx                # Shared primitives: Btn, SectionTitle, NewsletterBar
    └── pages/
        ├── HomePage.jsx          # Hero slider, features, about preview, events, stats
        ├── AboutPage.jsx         # Mission/Vision/Values, story, leadership
        ├── AcademicsPage.jsx     # Program cards
        ├── AdmissionsPage.jsx    # Why Greenfield, 5-step process, programs
        ├── StudentLifePage.jsx   # Clubs & activities
        ├── NewsPage.jsx          # News cards + events sidebar + newsletter
        └── ContactPage.jsx       # Contact form, info panel, map
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:5173

# 4. Build for production
npm run build
```

## Pages

| Route key       | Page             |
|-----------------|------------------|
| `home`          | Home             |
| `about-us`      | About Us         |
| `academics`     | Academics        |
| `admissions`    | Admissions       |
| `student-life`  | Student Life     |
| `news-&-events` | News & Events    |
| `contact-us`    | Contact Us       |

Navigation is client-side only (no React Router needed) — pages are swapped via `useState` in `App.jsx`.
