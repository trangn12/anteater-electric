# Anteater Electric Web Team – Quick Start

Welcome to the web team 👋  
You should be able to contribute in under 30 minutes.

---

# 🛠 Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- npm (package manager)

Main folders:

- `app/` → Pages & routing (Next.js App Router)
- `components/` → Reusable UI components
- `public/` → Images & static files
- `styles/` → Global styles

---

# ✅ Step 1: Install Prerequisites

Install:

- Node.js (v22 recommended)
- Git
- VSCode (recommended)

Check versions:

node -v  
npm -v  

Expected:

Node ≥ 22  
npm ≥ 10  

---

# 🚀 Step 2: Clone + Run

Clone the repo:

git clone <REPO_URL>  
cd anteater-electric  

Install dependencies:

npm install  

Start development server:

npm run dev  

Open in browser:

http://localhost:3000

---

# 📜 Available Commands

npm run dev      → Run locally  
npm run build    → Production build test  
npm run start    → Start production server  
npm run lint     → Check code quality  

---

# 🌿 Branching Rules

Always create a new branch before making changes.

Branch formats:

feature/<short-description>  
fix/<short-description>  

Example:

feature/update-homepage-hero

---

# 🔁 Pull Request Rules

Keep PRs small and focused.

Include:

- What you changed
- Why you changed it
- Screenshots (for UI updates)

Before submitting a PR:

Run the site locally:

npm run dev  

Check lint:

npm run lint  

Test mobile view.

---

# 🧪 First Tasks for New Members

Pick ONE:

1. Change text on a page inside `app/`
2. Add a reusable component in `components/`
3. Add an image to `public/` and display it on a page
4. Fix spacing/layout issue for mobile

Goal: Make **1 clean PR within your first week.**

---

# 🛠 Troubleshooting

### If install fails

Delete dependencies and reinstall.

Mac/Linux:

rm -rf node_modules
rm package-lock.json
npm install

Windows PowerShell:

Remove-Item node_modules -Recurse -Force
Remove-Item package-lock.json -Force
npm install

---

### If Node version issues occur

Install the correct version using **nvm**.

Recommended version:

Node 22

---

### If dependencies conflict

Run:

npm ls

This shows which packages depend on each other.

---

# 💡 Tips

Images must be placed inside:

public/

Example usage:

```jsx
<img src="/images/car.jpg" />