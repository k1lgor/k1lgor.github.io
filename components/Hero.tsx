"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { themeConfig } from "@/theme-config";

export default function Hero() {
  const [text, setText] = useState("");
  const theme = themeConfig.theme;
  const isChristmas = theme === "christmas";
  const isPythonist = theme === "pythonist";

  const fullText = isPythonist
    ? "import plamen_ivanov"
    : "Hi, I'm Plamen Ivanov";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.greeting}>
            <span className={styles.wave}>{isPythonist ? "🐍" : "👋"}</span>
            <span className={styles.greetingText}>
              {isPythonist
                ? "from future import success"
                : "Welcome to my portfolio"}
            </span>
          </div>

          <h1 className={styles.title}>
            {text}
            <span className={styles.cursor}>|</span>
          </h1>

          <p className={styles.subtitle}>
            {isPythonist
              ? "DevOps Engineer | Automation Specialist | Problem Solver"
              : "Automation Specialist | Productivity Enhancer | Problem Solver"}
          </p>

          <p className={isPythonist ? styles.docstring : styles.description}>
            {isPythonist ? (
              <>
                {`"""`}
                <br />
                I automate manual processes and build tools that enhance team
                productivity. Results-driven and thrive on challenges that
                expand knowledge and problem-solving skills.
                <br />
                {`"""`}
              </>
            ) : (
              "I automate manual processes and build tools that enhance team productivity. Results-driven and thrive on challenges that expand knowledge and problem-solving skills."
            )}
          </p>

          <div className={styles.ctas}>
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              {isPythonist ? "run_projects()" : "View My Work"}
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`${styles.btn} ${styles.btnSecondary}`}
            >
              {isPythonist ? "class Contact:" : "Get In Touch"}
            </button>
          </div>
        </div>

        {isChristmas && (
          <div className={styles.decorations}>
            <div className={styles.ornament}>🎄</div>
            <div className={styles.ornament}>⭐</div>
            <div className={styles.ornament}>🎁</div>
          </div>
        )}
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
}
