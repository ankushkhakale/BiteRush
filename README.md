# 🍔 BiteRush — Your Cravings, Delivered.

BiteRush is a modern food delivery web app that connects hungry users with the best local restaurants. Built with a sleek dark-themed UI, smooth animations, and a custom cursor, it offers a premium browsing experience from the moment you land on the page.

---

## ✨ Features

- **Animated Hero** — Bold landing section with floating food emojis and an *Order Now* call-to-action.
- **Food Categories** — Quickly filter by cuisine: Pizza, Sushi, Burgers, Tacos, Pasta, Desserts, Salads, and Ramen.
- **Popular Dishes** — A curated grid of top dishes from partner restaurants, each with name, price, and source restaurant.
- **How It Works** — A clean three-step guide: *Browse → Order → Enjoy*.
- **Custom Cursor** — A branded cursor experience that reacts to interactive elements.
- **Responsive Navbar** — A glass-morphism nav bar with links to Menu, Restaurants, Deals, and a Cart button.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui (Radix UI) |
| Animations | Framer Motion |
| Routing | React Router v6 |
| Data Fetching | TanStack Query v5 |
| Forms | React Hook Form + Zod |

---

## 🚀 Getting Started

**Prerequisites:** Node.js ≥ 18

```bash
# 1. Clone the repo
git clone https://github.com/ankushkhakale/BiteRush.git
cd BiteRush

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

### Other Commands

| Command | Description |
|---|---|
| `npm run build` | Production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Lint the source files |
| `npm test` | Run unit tests (Vitest) |

---

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components (Navbar, Hero, Footer, etc.)
├── data/             # Static data — menu items, restaurants, categories
├── hooks/            # Custom React hooks
├── lib/              # Utility helpers
├── pages/            # Route-level page components
└── test/             # Unit tests
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push and open a Pull Request

---

## 📄 License

This project is open-source. See [LICENSE](LICENSE) for details.
