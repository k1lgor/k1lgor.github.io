import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>

        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <div className={styles.imagePlaceholder}>
              {/* <span className={styles.avatar}>👨‍💻</span> */}
              <img
                src="/assets/profile.png"
                alt="Plamen Ivanov"
                className={styles.profileImage}
              />
            </div>
            <div className={styles.decoration}>✨</div>
          </div>

          <div className={styles.text}>
            <h3 className={styles.subtitle}>Passionate DevOps Engineer</h3>
            <p>
              I love automating manual processes and building tools that enhance
              team productivity. With expertise in containerization, CI/CD
              pipelines, and cloud infrastructure, I help teams deliver software
              faster and more reliably.
            </p>
            <p>
              I am results-driven and thrive on challenges that expand my
              knowledge and problem-solving skills. Whether it's optimizing
              deployment workflows or implementing infrastructure as code, I'm
              always looking for ways to improve efficiency.
            </p>

            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <span className={styles.icon}>🎯</span>
                <div>
                  <h4>Mission-Driven</h4>
                  <p>Focused on delivering impactful solutions</p>
                </div>
              </div>
              <div className={styles.highlight}>
                <span className={styles.icon}>💡</span>
                <div>
                  <h4>Creative Thinker</h4>
                  <p>Always exploring innovative approaches</p>
                </div>
              </div>
              <div className={styles.highlight}>
                <span className={styles.icon}>🚀</span>
                <div>
                  <h4>Fast Learner</h4>
                  <p>Constantly adapting to new technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
