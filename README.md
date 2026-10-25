# ADUNNATI — Better Brands. Smarter Marketing. Real Growth.

A luxury, high-performance digital presence and marketing agency website built with **React**, **TypeScript**, and **Vite**. Features authentic 3D spatial card architecture, rich editorial typography, and seamless micro-interactions designed to convert ambitious brands.

---

## ✨ Features & Highlights

- **3D Spatial Floating Stage**: Hero canvas featuring genuine 3D perspective projection, chiseled stone plinth, and floating performance metric cards.
- **Zero-Gap Angled Junction**: Seamless transition from the Hero stage into the Services section with an authentic origami chevron fold and downward-sloping facet.
- **Interactive Service Capabilities**: Four distinct service cards (Digital Presence, Creative Production, Customer Acquisition, Growth Analytics) with custom dark studio visual mockups and ROAS bar visualization.
- **Featured Client Results**: Grid of high-impact case studies showcasing real performance metrics (Bajaj Capital, Organic India, Exide Care, MTR Foods).
- **"Let's Talk" Conversion Section**: Dedicated consultation stage with responsive desktop and mobile-optimized visual composition.
- **Architectural 4-Column Footer**: Monogram crest, categorized service directories, circular gold SVG badges, and terms/privacy modal overlays.
- **Responsive & Accessible**: Optimized for all viewports from 360px mobile to ultra-wide desktop screens with fluid typography and GPU-accelerated transforms.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Bespoke Vanilla CSS with comprehensive design tokens, glassmorphism, and responsive media queries.
- **Linter**: [Oxlint](https://oxc.rs/)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<username>/adunnati-website.git
   cd adunnati-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Scripts

- `npm run dev`: Launch the Vite development server with HMR.
- `npm run build`: Compile TypeScript and build the optimized production bundle to `/dist`.
- `npm run preview`: Locally preview the production build.
- `npm run lint`: Run Oxlint to verify code quality.

---

## 📁 Project Structure

```text
adunnati-website/
├── public/
│   └── assets/             # High-resolution artwork, mockups, brand marks
├── src/
│   ├── components/         # Modular React UI components
│   │   ├── About.tsx       # Studio and team narrative
│   │   ├── FeaturedWork.tsx # Client case studies grid
│   │   ├── Footer.tsx      # 4-column footer & legal modals
│   │   ├── Header.tsx      # Navigation bar & mobile drawer
│   │   ├── Hero.tsx        # 3D floating laptop stage & copy
│   │   ├── LetsTalk.tsx    # Consultation & contact stage
│   │   ├── Services.tsx    # 4 core capability cards
│   │   ├── Trust.tsx       # Client testimonials & logos
│   │   └── WhyAdunnati.tsx # Strategic value propositions
│   ├── App.tsx             # Root application shell
│   ├── index.css           # Core design tokens, keyframes & responsive rules
│   └── main.tsx            # Application entry point
├── .gitignore              # Clean git exclusion rules
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build configuration
```

---

## 📄 License

Proprietary © [ADUNNATI](https://adunnati.com). All rights reserved.
