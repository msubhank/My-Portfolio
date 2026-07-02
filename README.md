# Muhammad Subhan Kashif - Professional Developer Portfolio

A modern, high-performance, and visually striking developer portfolio website designed to showcase projects, professional experience, core skills, and background. Built using React 19, TypeScript, Vite, Tailwind CSS v4, and Motion animations.

🔗 **Live Link:** [https://github.com/msubhank/My-Portfolio](https://github.com/msubhank/My-Portfolio)

---

## ✨ Features

- **Fluid Dark Aesthetics:** Premium high-contrast dark theme configured using HSL-tailored colors.
- **Interactive Experience & Micro-Animations:** Driven by `Motion` for layout transitions, card hovers, and header tracking.
- **Fully Responsive Layout:** Optimized for mobile, tablet, and desktop screens with custom navigation toggle drawer.
- **Interactive Resume Viewer:** In-browser modal to preview the developer resume instantly.
- **Rich Contact Form:** Integrated with validation, input clearing states, and dynamic status feedback.
- **Modular Design:** Built with isolated, structured React components for scalability.

---

## 🛠️ Tech Stack & Libraries

- **Core Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 6](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Motion v12](https://motion.dev/)
- **Iconography:** [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

Follow these instructions to run the project locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation & Run

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/msubhank/My-Portfolio.git
   cd My-Portfolio
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000` (or the port specified in your terminal).

4. **Build for Production:**
   ```bash
   npm run build
   ```
   The production-ready assets will be compiled into the `dist` directory.

---

## 📁 Project Structure

```text
├── assets/             # Static design files and configuration
├── src/
│   ├── components/     # Modular website section components (Navbar, Hero, Skills, etc.)
│   ├── data.ts         # Portfolio text data, project list, and social links
│   ├── types.ts        # TypeScript interface definitions
│   ├── index.css       # Tailwind entry and custom styling rules
│   ├── main.tsx        # React mounting entry-point
│   └── App.tsx         # Main layout assembly and scroll tracking
├── index.html          # HTML entry-point
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite build & alias configurations
```

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
