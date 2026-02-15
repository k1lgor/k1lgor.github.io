import { themeConfig } from "@/theme-config";
import styles from "./Contact.module.css";

export default function Contact() {
  const theme = themeConfig.theme;
  const isChristmas = theme === "christmas";
  const isPythonist = theme === "pythonist";

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          {isPythonist ? "def contact_me():" : "Get In Touch"}
        </h2>
        <p className={styles.subtitle}>
          {isPythonist
            ? "# Initializing connection to developer..."
            : "Let's connect and discuss your next project or opportunity"}
        </p>

        <div className={styles.content}>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>
              {isPythonist ? "@property" : "Contact Information"}
            </h3>
            <p className={styles.description}>
              {isPythonist
                ? "Available for high-impact DevOps projects and Python automation consulting."
                : "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."}
            </p>

            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <span className={styles.icon}>
                  {isPythonist ? ">>>" : isChristmas ? "📧" : "λ"}
                </span>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:ivanov.iv.plamen@gmail.com">
                    ivanov.iv.plamen@gmail.com
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.icon}>
                  {isPythonist ? ">>>" : isChristmas ? "📱" : "☎"}
                </span>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+359892758777">+359 892 758 777</a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.icon}>
                  {isPythonist ? ">>>" : isChristmas ? "📍" : "🗺"}
                </span>
                <div>
                  <h4>Location</h4>
                  <p>Varna, Bulgaria</p>
                </div>
              </div>
            </div>

            <div className={styles.social}>
              <h4 className={styles.socialTitle}>
                {isPythonist ? "related_links = [" : "Follow Me"}
              </h4>
              <div className={styles.socialLinks}>
                <a
                  href="https://linkedin.com/in/plamen-i-ivanov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <span className={styles.socialIcon}>
                    {isPythonist ? "🔗" : isChristmas ? "💼" : "🔗"}
                  </span>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/k1lgor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <span className={styles.socialIcon}>
                    {isPythonist ? "git" : isChristmas ? "💻" : "git"}
                  </span>
                  GitHub
                </a>
              </div>
              {isPythonist && <p className={styles.listClose}>]</p>}
            </div>
          </div>

          <div className={styles.formWrapper}>
            <div className={styles.formPlaceholder}>
              <span className={styles.formIcon}>
                {isPythonist ? "💬" : isChristmas ? "✉️" : "root@plamen:~#"}
              </span>
              <h3>
                {isPythonist ? "def send_message(self):" : "Send me a message"}
              </h3>
              <p>Contact form coming soon!</p>
              <p className={styles.formNote}>
                For now, feel free to reach out via email or LinkedIn
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
