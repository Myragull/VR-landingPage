# Virtual Reality Landing Page

## Setup installation
- install react with vite and tailwind
- for icons install lucide-react 
- clone the repo get the https link from the github repo than write : `git clone https://github.com/kushald/virtualr.git`
- copy the assets folder from the repo fro the images and videos
- copy the constants folder fro the tetx contents
- import the Poppins google font get the embed link and paste it in the index.css file top
---

## Navbar

- create a compoenents folder and made navbar as a component Navbar.jsx
- our navbar has a logo some links in the center and a few buttons okay will be using flex for that

## 📌 Navbar Container — Tailwind Cheatsheet

- `sticky top-0` → Makes navbar stick to top when scrolling (`position: sticky; top: 0;`)

- `z-50` → Keeps navbar above other elements (`z-index: 50`)

- `border-b` → Adds only bottom border

- `border-neutral-700/80` → Bottom border color = gray with 80% opacity (`rgba`)

- `backdrop-blur-lg` → Background blur behind navbar for glass effect (`backdrop-filter: blur()`)

- `container` → Adds a responsive `max-width` and centers content automatically.
- `mx-auto` → Centers the container horizontally (`margin-left: auto; margin-right: auto;`).
- `relative` → Makes `position: relative;` so any child with `absolute` is positioned relative to this container.
- `text-sm` → Sets base font size to `0.875rem` (`14px`).

- Tailwind uses lg: instead of manual @media queries

- ByDefault tailwind has 5 breakpoints

- ByDeafault tailwind designs first for mobile devices thats why the links hides

- `hidden` → `display: none;` by default (mobile = hide nav links)

- `lg:flex` → On screens `≥1024px` (`lg:`) → show links as horizontal flex row (`display: flex`)

- `space-x-12` → Horizontal spacing (`3rem` = `48px`) between each `<li>` child → only on `x` axis



## Qs:

- what are reusable components and how we create them and  use them 

## 📌 `<a>` vs `<button>` — When to use which?

| Element | `<a>` | `<button>` |
|---------|-------|-------------|
| **What is it for?** | Navigate to another page or URL | Perform an action on the current page |
| **Uses `href`?** | ✅ Yes (`href="..."`) | ❌ No |
| **Examples** | Link to `/signin`, `/signup`, or any page | Submit a form, open a modal, toggle a dropdown |

**Key rule:**  
- ✅ Use **`<a>`** when the user should **go somewhere** (new URL).  
- ✅ Use **`<button>`** when the user should **do something** (action on this page).

**Good navbar example:**  
- `Sign In` → `<a href="/signin">`
- `Open mobile menu` → `<button onClick={openMenu}>`

# 📌 Hero Section — Tailwind Responsive Utilities

## ✅ Responsive Headline

- `text-4xl` → base font size.
- `sm:text-6xl` → font size becomes larger at `640px` (small screens and up).
- `lg:text-7xl` → even larger at `1024px` (large screens and up).

---

## ✅ Responsive Container Spacing

- `mt-6` → margin-top: 1.5rem (24px) by default.
- `lg:mt-20` → margin-top changes to 5rem (80px) at `1024px` and up.

---

✅ **Used prefixes:**  
- `sm:` → applies at `640px` and up.  
- `lg:` → applies at `1024px` and up.

---
