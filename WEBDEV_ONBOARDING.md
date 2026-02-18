# Anteater Electric Web Team – Quick Start

Welcome to the web team 👋  
You should be able to contribute in under 30 minutes.

---

## 🛠 Tech Stack
- Next.js
- TypeScript
- Tailwind CSS
- pnpm (package manager)

Main folders:
- `app/` → Pages & routing (App Router)
- `components/` → Reusable UI components
- `public/` → Images & static files
- `styles/` → Global styles

---

## ✅ Step 1: Install Prerequisites

Install:
- Node.js (LTS recommended)
- pnpm
- Git

Check versions:

node -v  
pnpm -v  

---

## 🚀 Step 2: Clone + Run

Clone the repo:

git clone <REPO_URL>  
cd <REPO_FOLDER>  

Install dependencies:

pnpm install  

Start development server:

pnpm dev  

Open in browser:

http://localhost:3000  

---

## 📜 Available Commands

pnpm dev      → Run locally  
pnpm build    → Production build test  
pnpm start    → Start production server  
pnpm lint     → Check code quality  

---

## 🌿 Branching Rules

Always create a new branch:

feature/<short-description>  
fix/<short-description>  

Example:
feature/update-homepage-hero  

---

## 🔁 Pull Request Rules

Keep PRs small and focused.

Include:
- What you changed
- Why you changed it
- Screenshots (for UI updates)

Before submitting:
- Run pnpm dev
- Run pnpm lint
- Check mobile view

---

## 🧪 First Tasks for New Members

Pick ONE:

1. Change text on a page inside `app/`
2. Add a small reusable component in `components/`
3. Add an image to `public/` and use it on a page
4. Fix spacing/layout issue for mobile

Goal: Make 1 clean PR within your first week.

---

## 🛠 Troubleshooting

If install fails:

Delete node_modules and reinstall:

rm -rf node_modules  
pnpm install  

If Node version issues occur, install the correct version using nvm.
