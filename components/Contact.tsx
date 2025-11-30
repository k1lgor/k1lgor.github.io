import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <p className={styles.subtitle}>
          Let's connect and discuss your next project or opportunity
        </p>

        <div className={styles.content}>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Contact Information</h3>
            <p className={styles.description}>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <span className={styles.icon}>📧</span>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:ivanov.iv.plamen@gmail.com">
                    ivanov.iv.plamen@gmail.com
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.icon}>📱</span>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+359892758777">+359 892 758 777</a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.icon}>📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Varna, Bulgaria</p>
                </div>
              </div>
            </div>

            <div className={styles.social}>
              <h4 className={styles.socialTitle}>Follow Me</h4>
              <div className={styles.socialLinks}>
                <a
                  href="https://linkedin.com/in/plamen-i-ivanov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <span className={styles.socialIcon}>💼</span>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/k1lgor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <span className={styles.socialIcon}>💻</span>
                  GitHub
                </a>
                {/* <a
                  href="https://twitter.com/yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <span className={styles.socialIcon}>🐦</span>
                  Twitter
                </a> */}
              </div>
            </div>
          </div>

          <div className={styles.formWrapper}>
            <div className={styles.formPlaceholder}>
              <span className={styles.formIcon}>✉️</span>
              <h3>Send me a message</h3>
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
