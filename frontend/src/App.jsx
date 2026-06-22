import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import EditorPage from "./pages/EditorPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

import "./pages/HomePage.css";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <button
        className="theme-btn"
        onClick={() =>
          setTheme(theme === "dark" ? "light" : "dark")
        }
      >
        {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
      </button>

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/editor/:roomId"
          element={<EditorPage />}
        />

        <Route
          path="/signup"
          element={<SignupPage />}
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />
      </Routes>
    </>
  );
}

export default App;