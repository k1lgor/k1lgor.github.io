"use client";

import { useEffect, useState } from "react";
import styles from "./Snowfall.module.css";

export default function Snowfall() {
  const [snowflakes, setSnowflakes] = useState<
    Array<{
      id: number;
      left: number;
      delay: number;
      duration: number;
      size: number;
    }>
  >([]);

  useEffect(() => {
    const flakes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      size: 0.5 + Math.random() * 1,
    }));
    // Using setTimeout to avoid synchronous setState inside useEffect (lint rule)
    setTimeout(() => {
      setSnowflakes(flakes);
    }, 0);
  }, []);

  return (
    <div className={styles.snowfall}>
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className={styles.snowflake}
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
            fontSize: `${flake.size}rem`,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
}
