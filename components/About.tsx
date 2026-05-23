import Image from "next/image";
import { themeConfig } from "@/theme-config";
import styles from "./About.module.css";

export default function About() {
  const theme = themeConfig.theme;
  const isChristmas = theme === "christmas";
  const isPythonist = theme === "pythonist";

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          {isPythonist ? "class About(Me):" : "About Me"}
        </h2>

        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <div className={styles.imagePlaceholder}>
              {/* <span className={styles.avatar}>👨‍💻</span> */}
              <Image
                src="/assets/profile.png"
                alt="Plamen Ivanov"
                className={styles.profileImage}
                width={200}
                height={200}
              />
            </div>
            <div className={styles.decoration} aria-hidden="true">
              {isPythonist ? "🐍" : isChristmas ? "✨" : "⚙️"}
            </div>
          </div>

          <div className={styles.text}>
            <h3 className={styles.subtitle}>
              {isPythonist
                ? "class Engineer(DevOps):"
                : "Passionate DevOps Engineer"}
            </h3>
            <p>
              I automate manual processes and build tools that enhance team
              productivity — whether through containerisation, CI/CD pipelines,
              or automation scripting. I look for patterns in how systems
              behave and use what I find to make them faster and more reliable.
            </p>
            <p>
              I am results-driven and thrive on challenges that expand my
              knowledge and problem-solving skills. Whether optimising
              deployment workflows or writing automation scripts,
              I bring a systematic, data-informed approach to every project.
            </p>

            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <span className={styles.icon} aria-hidden="true">🔍</span>
                <div>
                  <h4>Pattern-Driven</h4>
                  <p>Spotting systemic inefficiencies others miss</p>
                </div>
              </div>
              <div className={styles.highlight}>
                <span className={styles.icon} aria-hidden="true">📊</span>
                <div>
                  <h4>Data-Informed</h4>
                  <p>Quantitative reasoning guides every decision</p>
                </div>
              </div>
              <div className={styles.highlight}>
                <span className={styles.icon} aria-hidden="true">⚙️</span>
                <div>
                  <h4>Systematic Thinker</h4>
                  <p>Methodical approach to complex problems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
