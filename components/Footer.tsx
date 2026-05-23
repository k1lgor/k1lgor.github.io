"use client";

import { themeConfig } from "@/theme-config";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const theme = themeConfig.theme;
  const isChristmas = theme === "christmas";
  const isPythonist = theme === "pythonist";

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.branding}>
            <h3 className={styles.logo}>
              <span className={styles.logoText}>Plamen Ivanov</span>
              <span className={styles.logoIcon}>
                {isPythonist ? "🐍" : isChristmas ? "🎄" : "⚡"}
              </span>
            </h3>
            <p className={styles.tagline}>
              {isPythonist
                ? (<>
                  while alive:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;code_and_automate()
                </>)
                : "Automating workflows, one script at a time"}
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>{isPythonist ? "import sys" : "Quick Links"}</h4>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>

            <div className={styles.linkGroup}>
              <h4>{isPythonist ? "import socket" : "Connect"}</h4>
              <a
                href="https://www.linkedin.com/in/plamen-i-ivanov/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {isPythonist ? "🔗" : isChristmas ? "💼" : "🔗"} LinkedIn
              </a>
              <a
                href="https://github.com/k1lgor"
                target="_blank"
                rel="noopener noreferrer"
              >
                {isPythonist ? "git" : isChristmas ? "💻" : "git"} GitHub
              </a>
              <a href="mailto:ivanov.iv.plamen@gmail.com">
                {isPythonist ? ">>>" : isChristmas ? "📧" : "📧"} Email
              </a>
            </div>

            <div className={styles.linkGroup}>
              <h4>{isPythonist ? "from future import" : "Resources"}</h4>
              <a href="/cv.pdf" download className={styles.cvButton}>
                {isPythonist ? "λ" : isChristmas ? "📄" : "📄"} Download CV
              </a>
              <a href="#blog">Blog Posts</a>
              <a href="#certificates">Certificates</a>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Plamen Ivanov. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={styles.backToTop}
          >
            {isPythonist ? "return_to_top()" : "↑ Back to Top"}
          </button>
        </div>
      </div>

      <div className={styles.decoration} aria-hidden="true">
        {isPythonist ? (
          <>
            <span className={styles.ornament}>🐍</span>
            <span className={styles.ornament}>📦</span>
            <span className={styles.ornament}>🧪</span>
          </>
        ) : isChristmas ? (
          <>
            <span className={styles.ornament}>🎁</span>
            <span className={styles.ornament}>⭐</span>
            <span className={styles.ornament}>🎄</span>
          </>
        ) : (
          <>
            <span className={styles.ornament}>⚡</span>
            <span className={styles.ornament}>⚙️</span>
            <span className={styles.ornament}>🛠️</span>
          </>
        )}
      </div>
    </footer>
  );
}
