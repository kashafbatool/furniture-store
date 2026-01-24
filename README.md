# Furniture Storefront

A modern, bilingual furniture storefront and auction experience built with React, Vite, and Tailwind CSS. The UI blends high‑impact merchandising (seasonal hero, featured collections, lookbook scenes) with rich discovery tools (category hierarchy, search, filters, and recommendations) so shoppers can quickly find and act on listings.

## ✨ Highlights

- **Discovery-first storefront** with hero content, featured collections, new arrivals, and curated recommendations.
- **Category hierarchy** that supports room → category → subcategory navigation.
- **Advanced filtering** for dimensions, materials, styles, colors, price range, and stock status.
- **Listing detail flow** with clear next-step actions (add to cart, bid/buy, schedule visit, contact).
- **Bilingual experience** (English/Urdu) with RTL support and typographic polish.

## 🧰 Tech Stack

- **React 18** for UI composition
- **Vite** for fast dev/build
- **Tailwind CSS** for utility-first styling
- **lucide-react** for icons

## 🚀 Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run the dev server

```bash
npm run dev
```

Open the URL printed in your terminal (usually `http://localhost:5173`).

### 3) Build for production

```bash
npm run build
```

### 4) Preview the production build

```bash
npm run preview
```

## 📂 Project Structure

```
.
├── index.html
├── src
│   ├── App.jsx          # App entry wiring
│   ├── FurnitureApp.jsx # Main storefront UI
│   ├── index.css        # Tailwind base + custom utilities
│   └── main.jsx         # React root
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🛍️ Key Screens

- **Home / Browse**: hero, featured collections, filters, and listing grid.
- **Lookbook**: “shop the look” styled room scenes.
- **Listing Detail**: quick actions for bid/buy, cart, scheduling, and contact.
- **Favorites & Recently Viewed**: personalized experience loops.

## 🌍 Localization

Toggle between **English** and **Urdu** in the header. The UI flips to **RTL** automatically for Urdu to keep layout and typography natural.

## 🧩 Customization Ideas

- Swap in real product data from a backend or CMS.
- Add authentication and user profiles.
- Connect checkout and payment providers.
- Persist favorites, cart, and recently viewed to local storage or database.

## 🧪 Scripts

- `npm run dev` – start the development server
- `npm run build` – build for production
- `npm run preview` – preview the production build

---

If you'd like, I can also add a CONTRIBUTING guide, CI checks, or deployment instructions (Vercel/Netlify).
