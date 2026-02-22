# ☕ JIT Coffee (The Odin Project)

A high-performance, single-page restaurant application built with vanilla JavaScript. This project follows the **Odin Project: Restaurant Page** requirements but utilizes a custom-built **Data-Driven Rendering Engine**.

## 🚀 The Concept

**JIT (Just-In-Time) Coffee** is designed for the high-performance professional. The app itself reflects this philosophy: it is fast, lightweight, and built with **SOLID principles** to ensure zero layout shift and maximum maintainability.

## 🛠️ Technical Architecture

Unlike traditional solutions that hardcode DOM manipulation, this project uses a **Recursive DOM Builder**.

### 1. The Rendering Engine (`Page.js`)

The core of the app is a `Page` class that accepts a "Host" element and a "Data Map." It recursively traverses the data object to build complex nested HTML structures using a single DOM paint via `DocumentFragment`.

### 2. Data-Driven Design

All page content is stored as pure JavaScript objects:

* **Separation of Concerns:** Content lives in `src/pages/`, logic lives in `src/scripts/`.
* **Scalability:** Adding a new menu item requires zero changes to the logic—simply update the data object.

### 3. Performance & UX

* **Zero Layout Shift:** Image dimensions are pre-reserved in the data maps and controlled via CSS aspect ratios.
* **Webpack 5:** Assets are bundled and optimized using Asset Modules and Loaders.
* **Semantic HTML:** Utilizes `<article>`, `<section>`, and `<header>` for SEO and accessibility.

## 📁 Project Structure

```text
src/
├── assets/           # Optimized images (hero, menu items)
├── scripts/
│   ├── Page.js       # The Rendering Engine (Class-based)
│   ├── pages/        # Page Data Objects (Home, Menu, Contact, About, Footer)
│   └── PageRender.js      # Main Router & Event Orchestration
├── styles/
│   ├── pages.css     # Clean, layout-driven CSS
│   └── reset.css     # CSS Reset for consistency
├── index.html     # Minimalist entry point
└── index.js       # Main JavaScript entry point (imports styles and PageRender)
```

## 🛠️ Local Setup

1. **Clone the repo:**

```bash
git clone https://github.com/your-username/jit-coffee.git
```

1. **Install dependencies:**

```bash
npm install
```

1. **Run development server:**

```bash
npm start
```

1. **Build for production:**

```bash
npm run build
```

## 📜 Reflections

This project was a deep dive into the power of the DOM API. By choosing to build a generic `builder` function instead of manual string literals, I learned how to handle recursion and mixed-content arrays to create flexible code that mimics the behavior of modern UI frameworks like React or Mithril.js.
live demo: <https://zololade.github.io/Restaurant-Page/>
