"use client";

import { useEffect, useState } from "react";
import styles from "./Navigation.module.css";
import { themeConfig } from "@/theme-config";

export default function Navigation() {
  const theme = themeConfig.theme;
  const isChristmas = theme === "christmas";
  const isPythonist = theme === "pythonist";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: isPythonist ? "import home" : "Home" },
    { id: "about", label: isPythonist ? "from about import me" : "About" },
    { id: "skills", label: isPythonist ? "import skills" : "Skills" },
    { id: "experience", label: isPythonist ? "import exp" : "Experience" },
    { id: "projects", label: isPythonist ? "import projects" : "Projects" },
    { id: "blog", label: isPythonist ? "import blog" : "Blog" },
    {
      id: "certificates",
      label: isPythonist ? "import certs" : "Certificates",
    },
    { id: "contact", label: isPythonist ? "import contact" : "Contact" },
  ];

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoText}>Plamen Ivanov</span>
          <span className={styles.logoIcon}>
            {isPythonist ? "🐍" : isChristmas ? "🎄" : "⚡"}
          </span>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul
          className={`${styles.navList} ${
            isMobileMenuOpen ? styles.mobileOpen : ""
          }`}
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={styles.navLink}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
