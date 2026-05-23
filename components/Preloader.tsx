"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./Preloader.module.css";
import { themeConfig } from "@/theme-config";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const theme = themeConfig.theme;
  const isPythonist = theme === "pythonist";
  const isTerminal = theme === "terminal";

  const pythonLines = useMemo(
    () => [
      ">>> import sys",
      ">>> import plamen_ivanov",
      ">>> sys.version",
      "'3.12.0 (tags/v3.12.0:0fb3730, Oct 11 2023)'",
      ">>> plamen_ivanov.status",
      "{'engine': 'stable', 'uptime': '0ms'}",
      ">>> plamen_ivanov.boot()",
    ],
    [],
  );

  const terminalLines = useMemo(
    () => [
      "$ ./initialize_portfolio.sh",
      "Loading resources... [DONE]",
      "Starting system services... [DONE]",
      "Establishing secure connection... [DONE]",
      "$ portfolio --start",
    ],
    [],
  );

  const defaultLines = useMemo(
    () => [
      "Starting system...",
      "Loading configuration...",
      "Connecting to services...",
      "System ready.",
    ],
    [],
  );

  const activeLines = useMemo(
    () =>
      isPythonist
        ? pythonLines
        : isTerminal
          ? terminalLines
          : defaultLines,
    [isPythonist, isTerminal, pythonLines, terminalLines, defaultLines],
  );

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    let currentLineIndex = 0;
    const interval = setInterval(() => {
      if (currentLineIndex < activeLines.length) {
        setLines((prev) => [...prev, activeLines[currentLineIndex]]);
        currentLineIndex++;
        setProgress((currentLineIndex / activeLines.length) * 100);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(() => {
            setIsVisible(false);
            document.body.style.overflow = "auto";
          }, 500); // Wait for fade out
        }, 800);
      }
    }, 300);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "auto";
    };
  }, [activeLines]);

  if (!isVisible) return null;

  return (
    <div className={`${styles.preloader} ${isFinished ? styles.hidden : ""}`}>
      <div className={styles.terminal}>
        {lines.map((line, index) => (
          <div key={index} className={styles.line}>
            {line.startsWith(">>>") ? (
              <>
                <span className={styles.prompt}>&gt;&gt;&gt;</span>
                {line.substring(4)}
              </>
            ) : line.startsWith("$") ? (
              <>
                <span className={styles.prompt}>$</span>
                {line.substring(2)}
              </>
            ) : (
              line
            )}
          </div>
        ))}
        {!isFinished && (
          <div className={styles.line}>
            <span className={styles.cursor}></span>
          </div>
        )}
        <div className={styles.progressContainer}>
          <div
            className={styles.progressBar}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
