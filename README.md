# 🪄 Hogwarts House Sorter

Step right up to the Great Hall, put on the Sorting Hat, and discover your true Hogwarts house!
This magical quiz blends personality traits, values, and intuition to sort you into Gryffindor, Hufflepuff, Ravenclaw, or Slytherin — with style worthy of the wizarding world.


## ✨ Features

* **Authentic Hogwarts Aesthetic** – Inspired by the films, with rich gradients and magical effects.
* **Dynamic Sorting Ceremony** – Multiple sorting methods (quiz, values-based, personality assessment).
* **Borderline Results** – See if you’re close to multiple houses (e.g., Gryffindor–Ravenclaw).
* **Trait Radar Chart** – Visualize your compatibility with each house.
* **Personalized House Welcome** – Greetings from your Head of House.
* **Detailed House Analysis** – Learn exactly why you belong where you do.
* **Admin Panel** – Manage questions, users, analytics, and adjust house capacity.
* **Responsive & Accessible** – Mobile-first design, screen reader support, and keyboard navigation.
* **Engaging Animations** – House reveal sequences, smooth transitions, and magical UI touches.
* **Shareable Results** – Post your house badge and results directly to social media.


## 🛠 Tech Stack

* **Frontend**: React + TypeScript + Vite
* **UI**: Tailwind CSS + shadcn/ui + Radix UI
* **State Management**: React Query
* **Form Handling**: React Hook Form + Zod
* **Charts**: (optional) Chart.js or similar for trait visualization

---

## 📂 Folder Structure

```
├── public/
│   ├── hogwarts-preview.png        # Open Graph preview image
│   ├── favicon.ico                 # Custom Hogwarts favicon
│   └── other static assets
├── src/
│   ├── assets/                     # Images, icons, decorative assets
│   ├── components/                 # UI components
│   ├── pages/                      # Page-level components
│   ├── hooks/                       # Custom React hooks
│   ├── utils/                       # Helper functions
│   ├── styles/                      # Tailwind configs, custom CSS
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

---

## 🚀 Getting Started

**Prerequisites**:

* [Node.js](https://nodejs.org/) (v18 or later)
* npm (comes with Node)

**Installation**:

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd hogwarts-house-sorter

# Install dependencies
npm install
```

**Development**:

```bash
npm run dev
```

**Production Build**:

```bash
npm run build
npm run preview
```

---

## 🌐 Deployment

You can deploy this on **Vercel**, **Netlify**, or any static hosting provider.
For Vercel:

1. Push your project to GitHub.
2. Connect your repository to Vercel.
3. Set build command: `npm run build`
4. Set output directory: `dist/`
5. Deploy.

---

## 🧙‍♂️ Credits

Inspired by J.K. Rowling’s Harry Potter series. This is a project made by a potter-head for educational and entertainment purposes only.
All rights to the Harry Potter universe belong to Warner Bros. and J.K. Rowling.

