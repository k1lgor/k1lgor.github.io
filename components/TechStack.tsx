import {
  FaLinux,
  FaDocker,
  FaPython,
  FaJenkins,
  FaUsers,
  FaGitAlt,
  FaBitbucket,
  FaJira,
  FaConfluence,
  FaVuejs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiGnubash,
  SiGo,
  SiReact,
  SiGithubactions,
  SiJavascript,
  SiDjango,
  SiGin,
  SiPodman,
  SiGithub,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { BiBrain } from "react-icons/bi";
import styles from "./TechStack.module.css";
import { FaOpensuse, FaRedhat, FaDebian } from "react-icons/fa6";
import { GrArchlinux } from "react-icons/gr";

const techCategories = [
  {
    title: "Operating Systems",
    icon: <FaLinux />,
    skills: [
      { name: "RHEL", icon: <FaRedhat /> },
      { name: "Arch Linux", icon: <GrArchlinux /> },
      { name: "OpenSUSE", icon: <FaOpensuse /> },
      { name: "Debian", icon: <FaDebian /> },
    ],
  },
  {
    title: "DevOps & CI/CD",
    icon: <FaDocker />,
    skills: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "Podman", icon: <SiPodman /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "GitHub Actions", icon: <SiGithubactions /> },
      { name: "Jenkins", icon: <FaJenkins /> },
    ],
  },
  {
    title: "Programming & Scripting",
    icon: <VscCode />,
    skills: [
      { name: "Bash", icon: <SiGnubash /> },
      { name: "Python", icon: <FaPython /> },
      { name: "Go", icon: <SiGo /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
  },
  {
    title: "Version Control & Collaboration",
    icon: <FaGitAlt />,
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Bitbucket", icon: <FaBitbucket /> },
      { name: "ClearCase", icon: <FaGitAlt /> }, // Using Git icon as fallback
      { name: "Jira", icon: <FaJira /> },
      { name: "Confluence", icon: <FaConfluence /> },
    ],
  },
  {
    title: "Web Technologies & Frameworks",
    icon: <SiReact />,
    skills: [
      { name: "Vue.js", icon: <FaVuejs /> },
      { name: "Django DRF", icon: <SiDjango /> },
      { name: "Gin", icon: <SiGin /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
    ],
  },
  {
    title: "Soft Skills",
    icon: <FaUsers />,
    skills: [
      { name: "Professional Integrity", icon: <FaUsers /> },
      { name: "Adaptability", icon: <FaUsers /> },
      { name: "Professional Excellence", icon: <FaUsers /> },
      { name: "Technical Problem-Solving", icon: <BiBrain /> },
      { name: "Team Collaboration", icon: <FaUsers /> },
      { name: "AI Prompt Engineering", icon: <BiBrain /> },
      { name: "Agile/Scrum", icon: <FaUsers /> },
      { name: "Strategic Time Management", icon: <FaUsers /> },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className={styles.techStack}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Technical Arsenal</h2>
        <p className={styles.subtitle}>
          Tools and technologies I use to build scalable solutions
        </p>

        <div className={styles.grid}>
          {techCategories.map((category, index) => (
            <div
              key={index}
              className={styles.categoryCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className={styles.categoryTitle}>
                <span className={styles.icon}>{category.icon}</span>
                {category.title}
              </h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill, i) => (
                  <div key={i} className={styles.skillItem}>
                    <span className={styles.icon}>{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
