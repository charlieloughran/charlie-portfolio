
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import FrontPage from "./pages/FrontPage";
// import InProgress from "./pages/InProgress";

import "./styles/App.css"


function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const initial = saved ?? (prefersLight ? "light" : "dark");

    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/projects/:slug" element={<FrontPage />} />
        </Routes>
      </main>

      <BackToTop />
      <Footer theme={theme} />
    </>
  );
}

export default App;
