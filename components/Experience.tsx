import styles from "./Experience.module.css";

const experiences = [
  {
    company: "ICT Strypes",
    role: "",
    period: "Jun 2022 - Present",
    description:
      "Spearheaded DevOps modernization and automation initiatives, significantly reducing operational overhead and accelerating deployment cycles through CI/CD optimization and custom tooling.",
    achievements: [
      "Reduced operational overhead by 40%+ through automated CI/CD pipelines and infrastructure provisioning",
      "Modernized CI/CD infrastructure by migrating Jenkins pipelines to GitHub Actions, accelerating deployment cycles",
      "Developed automation scripts in Python, Bash, and Golang to eliminate manual tasks and improve development workflows",
    ],
  },
  {
    company: "MentorMate",
    role: "Software Development Trainee",
    period: "Feb 2022 - Mar 2022",
    description:
      "Intensive training program focused on modern frontend development practices, culminating in the delivery of robust web applications using the Vue.js ecosystem.",
    achievements: [
      "Built responsive frontend applications leveraging TypeScript, Vue.js, and SASS within tight deadlines",
      "Mastered modern web development workflows and best practices through hands-on project implementation",
      "Consistently met project milestones while rapidly adapting to new technologies and requirements",
    ],
  },
  {
    company: "Stamco Manning Varna Co. Ltd.",
    role: "Officer of the Watch (OOW)",
    period: "Jun 2015 - Jan 2022",
    description:
      "Ensured vessel safety and operational efficiency through rigorous adherence to maritime regulations, team leadership, and critical decision-making during navigational watches.",
    achievements: [
      "Maintained strict compliance with maritime safety protocols and regulations",
      "Supervised navigational watches and cargo operations, ensuring operational continuity",
      "Led crew teams during critical duties and emergency response procedures",
      "Managed time-sensitive operations in a demanding maritime environment",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Work Experience</h2>
        <p className={styles.subtitle}>
          My professional journey and key accomplishments
        </p>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={styles.timelineItem}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.timelineMarker}>
                <div className={styles.ornament}>🎄</div>
              </div>

              <div className={styles.timelineContent}>
                <div className={styles.period}>{exp.period}</div>
                <h3 className={styles.role}>{exp.role}</h3>
                <h4 className={styles.company}>{exp.company}</h4>
                <p className={styles.description}>{exp.description}</p>

                <ul className={styles.achievements}>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>
                      <span className={styles.checkmark}>✓</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
