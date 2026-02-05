
import Dark from "../assets/icons/mode-icon_Moon-White.png";
import Light from "../assets/icons/mode-icon_Sun-Black.png";

interface ThemeToggleProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <div
      className={`theme-toggle-wrapper ${theme === "light" ? "light" : ""}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <div className="slider">
        <img
          src={theme === "dark" ? Dark : Light}
          alt={theme === "dark" ? "Moon Icon" : "Sun Icon"}
          style={{ width: "16px", height: "16px" }}
        />
      </div>
    </div>
  );
}
