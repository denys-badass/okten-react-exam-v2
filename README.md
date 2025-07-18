# 🎬 MovieHub

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Zustand](https://img.shields.io/badge/Zustand-FF9800?style=for-the-badge&logo=Zustand&logoColor=white)](https://zustand-demo.pmnd.rs/)
[![React Query](https://img.shields.io/badge/React%20Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)](https://tanstack.com/query/latest)

**MovieHub** is a student examination project created for the **React module at Okten School**. It is a web application for browsing and searching movies using **The Movie Database (TMDb)** API. The project includes responsive design, guest access, user authentication (based on dummy data), and modern frontend tooling.

---

## 📚 About the Project

This application allows users to:

- 🔍 Browse trending and popular movies
- 🧾 View detailed information about each film
- 🔐 Log in as a user or continue as a guest
  - Authentication uses the [DummyJSON Users API](https://dummyjson.com/users)
  - Example credentials: `username: emilys`, `password: emilyspass`
- 🧑‍💼 Display user name info with logout functionality
- 🧱 Explore responsive layouts and smooth UI using TailwindCSS

---

## 🚀 Technologies Used

- [React](https://react.dev/) — UI library
- [Vite](https://vitejs.dev/) — Fast build tool
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [React Router](https://reactrouter.com/) — Routing
- [Zustand](https://zustand-demo.pmnd.rs/) — State management
- [React Query](https://tanstack.com/query/latest) — Data fetching
- [Axios](https://axios-http.com/) — HTTP client
- [TailwindCSS](https://tailwindcss.com/) — Utility-first CSS
- [TMDb API](https://www.themoviedb.org/documentation/api) — Movie data provider

---

## ⚙️ Environment Variables

Create a `.env` file in the root of the project with the following content:

```env
VITE_API_AUTH_TOKEN=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTc0MGY1NzVmZmMyNDQzZDRjZTIzY2I4NTk1M2ZkMCIsIm5iZiI6MTc0NTgzMzY3MC4yNjIsInN1YiI6IjY4MGY0ZWM2NDYwMzU3MWVhZDBmOGI1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vOkM9zakig0Tx0krPqELgaIZBvfFX99Ykj8hq55MF7c
VITE_API_BASE_URL=https://api.themoviedb.org/3
VITE_MOVIE_IMAGE_URL=https://image.tmdb.org/t/p
```

- `VITE_API_AUTH_TOKEN` — Your TMDb API Bearer token
- `VITE_API_BASE_URL` — TMDb API base URL
- `VITE_MOVIE_IMAGE_URL` — Base URL for movie images

---

## 🛠️ Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/denys-badass/okten-react-exam-v2.git
   cd okten-react-exam-v2
   ```
2. **Install dependencies:**
   ```sh
   npm install
   # or
   pnpm install
   ```
3. **Create `.env` file:**
   - See the Environment Variables section above.
4. **Run the development server:**
   ```sh
   npm run dev
   # or
   pnpm dev
   ```
5. **Open in browser:**
   - Visit [http://localhost:5173](http://localhost:5173) (default Vite port)

---
