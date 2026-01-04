"use client";

import { useState } from "react";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Container Diet 🐳",
    description:
      'Container Diet is a futuristic, AI-powered CLI tool that analyzes your Docker images and Dockerfiles to provide actionable, "sassy but helpful" optimization advice. It helps you reduce image size, improve security, and follow best practices.',
    tech: ["Go", "TypeScript", "React + Vite", "OpenAI API"],
    image: "https://github.com/k1lgor/container-diet/raw/main/assets/logo.png",
    liveUrl: "https://k1lgor.github.io/container-diet/",
    githubUrl: "https://github.com/k1lgor/container-diet",
  },
  {
    title: "Secret Santa Paranoia Text Generator 🎅👀",
    description:
      "A chaotic, AI-powered web app designed to ruin friendships and make your Secret Santa group chat absolutely unhinged.",
    tech: ["React + Vite", "JavaScript", "Vercel", "OpenAI API"],
    image:
      "https://github.com/k1lgor/secret-santa-paranoia/raw/main/public/og-image.png",
    liveUrl: "https://k1lgor.github.io/secret-santa-paranoia/",
    githubUrl: "https://github.com/k1lgor/secret-santa-paranoia",
  },
  {
    title: "FPL Blog & Dashboard ⚽️",
    description:
      "A premium, data-driven platform for Fantasy Premier League (FPL) managers. This application leverages the official FPL API and OpenAI to provide real-time dashboards, automated scouting reports, and strategic insights.",
    tech: ["Next.js", "TypeScript", "OpenAI API", "TailwindCSS", "Vercel"],
    image: "/assets/fpl-blog.png",
    liveUrl: "https://fpl-blog.site/",
  },
  {
    title: "Hook Forge",
    description:
      "🚀 Futuristic AI-Powered Hook Generator for X (Twitter) Writers.",
    tech: [
      "React + Vite",
      "TypeScript",
      "Express",
      "OpenAI API",
      "Tailwind CSS",
      "Render",
      "Docker",
    ],
    image: "/assets/hook-forge.png",
    liveUrl: "https://hook-forge.onrender.com/",
    githubUrl: "https://github.com/k1lgor/hook-forge",
  },
  {
    title: "🚀 SVNfluence - AI-Powered SVN Command Generator",
    description:
      "An AI-driven web application that helps developers quickly find and understand SVN (Subversion) commands using natural language queries.",
    tech: ["Go + Gin", "OpenAI API", "Docker"],
    image: "/assets/svnfluence.png",
    liveUrl: "https://svnfluence.onrender.com/",
    githubUrl: "https://github.com/k1lgor/svnfluence",
  },
  {
    title: "GitHub Trends - Top 20 Repositories",
    description:
      "This project is a simple web application that fetches the top 20 GitHub repositories for a specific month and year, using the GitHub API.",
    tech: ["Go + Gin", "Docker", "Render", "GitHub API"],
    image: "/assets/github-trends.png",
    liveUrl: "https://github-trends.onrender.com/",
    githubUrl: "https://github.com/k1lgor/github-trends",
  },
  {
    title: "Sassy GitHub Wrap",
    description:
      'A futuristic AI that roasts your coding habits. Sassy GitHub Wrap generates a "Spotify Wrapped" style summary of your profile using GPT-4o.',
    tech: [
      "Next.js",
      "TypeScript",
      "Vercel",
      "GitHub API",
      "OpenAI API",
      "Tailwind CSS",
    ],
    image:
      "https://github.com/k1lgor/sassy-github-wrap/raw/main/public/banner.png",
    liveUrl: "https://sassy-github-wrap.vercel.app/",
    githubUrl: "https://github.com/k1lgor/sassy-github-wrap",
  },
  {
    title: "WiFi DoS 👨‍💻",
    description:
      "A WiFi Denial of Service (DoS) attack tool that targets a specific WiFi network by disconnecting all connected clients.",
    tech: ["Bash"],
    image: "/assets/wifi-dos.png",
    liveUrl:
      "https://github.com/k1lgor/wifi-dos/blob/main/ezgif.com-gif-maker.gif",
    githubUrl: "https://github.com/k1lgor/wifi-dos",
  },
  {
    title: "Fantasy AI",
    description:
      "Intelligent FPL manager tool using GPT-4o for optimal squads, transfers & insights.",
    tech: ["Python", "OpenAI API", "Streamlit"],
    image: "/assets/fantasy-ai.png",
    liveUrl: "https://fantasy-ai.streamlit.app/",
    githubUrl: "https://github.com/k1lgor/fantasy-ai",
  },
  {
    title: "Dragos IT Academy",
    description:
      "This project is a Flask-based web application for managing course enrollments, registrations, and course data.",
    tech: ["Python", "Flask", "Vercel"],
    image: "/assets/dragos-it-academy.png",
    liveUrl: "https://flask-pink-delta.vercel.app/",
    githubUrl: "https://github.com/k1lgor/flask",
  },
];

const ITEMS_PER_PAGE = 6;

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const currentProjects = projects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Optional: Scroll to top of projects section
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <p className={styles.subtitle}>
          A selection of my recent work and personal projects
        </p>

        <div className={styles.grid}>
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className={styles.projectCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.imageWrapper}>
                {project.image.startsWith("http") ||
                project.image.startsWith("/") ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.projectImage}
                  />
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <span className={styles.emoji}>{project.image}</span>
                  </div>
                )}
                <div className={styles.overlay}>
                  <a
                    href={project.liveUrl}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo →
                  </a>
                  <a
                    href={project.githubUrl}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub →
                  </a>
                </div>
              </div>

              <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.techStack}>
                  {project.tech.map((tech, i) => (
                    <span key={i} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              className={styles.navBtn}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              ← Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`${styles.pageBtn} ${
                  currentPage === page ? styles.active : ""
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}

            <button
              className={styles.navBtn}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
