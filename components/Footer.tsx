"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.branding}>
            <h3 className={styles.logo}>
              <span className={styles.logoText}>Plamen Ivanov</span>
              <span className={styles.logoIcon}>🎄</span>
            </h3>
            <p className={styles.tagline}>
              Automating workflows, one script at a time
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>Quick Links</h4>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>

            <div className={styles.linkGroup}>
              <h4>Connect</h4>
              <a
                href="https://www.linkedin.com/in/plamen-i-ivanov/"
                target="_blank"
                rel="noopener noreferrer"
              >
                💼 LinkedIn
              </a>
              <a
                href="https://github.com/k1lgor"
                target="_blank"
                rel="noopener noreferrer"
              >
                💻 GitHub
              </a>
              <a href="mailto:ivanov.iv.plamen@gmail.com">📧 Email</a>
            </div>

            <div className={styles.linkGroup}>
              <h4>Resources</h4>
              <a href="/cv.pdf" download className={styles.cvButton}>
                📄 Download CV
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
            ↑ Back to Top
          </button>
        </div>
      </div>

      <div className={styles.decoration}>
        <span className={styles.ornament}>🎁</span>
        <span className={styles.ornament}>⭐</span>
        <span className={styles.ornament}>🎄</span>
      </div>
    </footer>
  );
}
