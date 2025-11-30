"use client";

import { useState } from "react";
import styles from "./Certificates.module.css";

const certificates = [
  {
    name: "Leadership Skills Development",
    issuer: "Equinox Partners",
    date: "Aug 2025",
    credentialId: "",
    verifyUrl: "",
  },
  {
    name: "Django Basics",
    issuer: "SoftUni",
    date: "Mar 2024",
    credentialId: "",
    verifyUrl: "https://softuni.bg/certificates/details/207384/ead50adc",
  },
  {
    name: "GitHub Actions - The Complete Guide",
    issuer: "Udemy",
    date: "Dec 2022",
    credentialId: "UC-012038b1-03ad-4fc8-a9dc-17dc020930fa",
    verifyUrl:
      "https://www.udemy.com/certificate/UC-012038b1-03ad-4fc8-a9dc-17dc020930fa/",
  },
  {
    name: "DevOps - Containerization, CI/CD & Monitoring",
    issuer: "SoftUni",
    date: "Nov 2022",
    credentialId: "",
    verifyUrl: "https://softuni.bg/certificates/details/147847/a8898499",
  },
  {
    name: "Python OOP",
    issuer: "SoftUni",
    date: "Apr 2022",
    credentialId: "",
    verifyUrl: "https://softuni.bg/certificates/details/131156/db558654",
  },
  {
    name: "Linux System Administration",
    issuer: "SoftUni",
    date: "Jan 2022",
    credentialId: "",
    verifyUrl: "https://softuni.bg/certificates/details/122964/cc388973",
  },
];

const ITEMS_PER_PAGE = 6;

export default function Certificates() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(certificates.length / ITEMS_PER_PAGE);
  const currentCertificates = certificates.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const certSection = document.getElementById("certificates");
    if (certSection) {
      certSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="certificates" className={styles.certificates}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Certificates & Achievements</h2>
        <p className={styles.subtitle}>
          Professional certifications and continuous learning milestones
        </p>

        <div className={styles.grid}>
          {currentCertificates.map((cert, index) => (
            <div
              key={index}
              className={styles.certCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.badge}>🏆</div>

              <h3 className={styles.name}>{cert.name}</h3>
              <p className={styles.issuer}>{cert.issuer}</p>

              <div className={styles.details}>
                <div className={styles.detail}>
                  <span className={styles.label}>Issued:</span>
                  <span className={styles.value}>{cert.date}</span>
                </div>
                <div className={styles.detail}>
                  {cert.credentialId && (
                    <>
                      <span className={styles.label}>ID:</span>
                      <span className={styles.value}>{cert.credentialId}</span>
                    </>
                  )}
                </div>
              </div>

              <a
                href={cert.verifyUrl || "#"}
                className={`${styles.verifyBtn} ${
                  !cert.verifyUrl || cert.verifyUrl === "#"
                    ? styles.disabled
                    : ""
                }`}
                target={
                  !cert.verifyUrl || cert.verifyUrl === "#"
                    ? undefined
                    : "_blank"
                }
                rel="noopener noreferrer"
                aria-disabled={!cert.verifyUrl || cert.verifyUrl === "#"}
              >
                Verify Certificate →
              </a>
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
