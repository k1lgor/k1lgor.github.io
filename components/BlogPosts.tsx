"use client";

import { useState } from "react";
import styles from "./BlogPosts.module.css";

const blogPosts = [
  {
    title: "Understanding Linux Commands - A Comprehensive Guide",
    excerpt:
      "A quick-start guide that takes you from basic file commands to advanced Linux tools and security essentials.",
    date: "Apr 22, 2023",
    readTime: "4 min read",
    category: ["Bash", "Linux", "DevOps"],
    url: "https://dev.to/k1lgor/understanding-linux-commands-a-comprehensive-guide-4o02",
  },
  {
    title: "Mastering the ssh Command - Tips and Tricks",
    excerpt:
      "A quick how-to on leveling up from plain logins to key-based, jump-host and port-forwarding tricks that make SSH your Swiss-army tunnel.",
    date: "Apr 9, 2023",
    readTime: "3 min read",
    category: ["SSH", "Linux", "DevOps"],
    url: "https://dev.to/k1lgor/mastering-the-ssh-command-tips-and-tricks-858",
  },
  {
    title: "Mastering the Powerful Linux Command - rsync",
    excerpt:
      "A concise guide to `rsync` that explains how to sync files locally or over SSH with options like `--archive`, `--delete` and `--progress` for fast, incremental backups and deployments.",
    date: "Apr 1, 2023",
    readTime: "3 min read",
    category: ["rsync", "Linux", "DevOps"],
    url: "https://dev.to/k1lgor/mastering-the-powerful-linux-command-rsync-1bd0",
  },
  {
    title: "Navigating Your Linux System with the cd Command",
    excerpt:
      "A bite-size refresher on every `cd` trick—absolute vs. relative paths, `cd ~`, `cd -`, `CDPATH` and tab completion—to hop around your Linux filesystem in fewer keystrokes.",
    date: "Mar 26, 2023",
    readTime: "3 min read",
    category: ["cd", "Linux", "DevOps"],
    url: "https://dev.to/k1lgor/navigating-your-linux-system-with-the-cd-command-2ljf",
  },
  {
    title: "Mastering Text Manipulation with the Cut Command in Linux",
    excerpt:
      "A quick primer on using the `cut` command to slice columns or characters from text files and command output with options like `-d`, `-f`, and `-c` for simple, speedy text extraction.",
    date: "Mar 26, 2023",
    readTime: "3 min read",
    category: ["cut", "Linux", "DevOps"],
    url: "https://dev.to/k1lgor/mastering-text-manipulation-with-the-cut-command-in-linux-1icm",
  },
  {
    title: "Efficiently Managing Processes with the ps Command in Linux",
    excerpt:
      "A fast walkthrough of the `ps` command that shows how to combine flags like `aux`, `ef` and custom `-o` formats to instantly spot and filter running processes.",
    date: "Mar 23, 2023",
    readTime: "3 min read",
    category: ["ps", "Linux", "DevOps"],
    url: "https://dev.to/k1lgor/efficiently-managing-processes-with-the-ps-command-in-linux-17p",
  },
  {
    title: "Managing Disk Space in Linux with the df Command",
    excerpt:
      "A short guide to the `df` command that teaches you to use `-h`, `-T`, `-i` and targeted path checks to see human-readable disk usage, filesystem types and inode stats at a glance.",
    date: "Mar 9, 2023",
    readTime: "2 min read",
    category: ["df", "Linux", "DevOps"],
    url: "https://dev.to/k1lgor/managing-disk-space-in-linux-with-the-df-command-3lh8",
  },
  {
    title: "Mastering the awk command in Linux",
    excerpt:
      "A crash course on `awk` that covers pattern-action pairs, built-in variables like `NR` and `$n`, and one-liners to filter, sum, or reformat text files on the fly.",
    date: "Mar 3, 2023",
    readTime: "3 min read",
    category: ["awk", "Linux", "DevOps"],
    url: "https://dev.to/k1lgor/mastering-the-awk-command-in-linux-5d34",
  },
  {
    title: "The Essential Guide to the sort Command in Linux",
    excerpt:
      "A rapid tour of `sort` that highlights `-n`, `-r`, `-k`, `-u` and `-h` flags to order numbers, columns, or human-sized units and ditch duplicates in a single pipeline.",
    date: "Feb 26, 2023",
    readTime: "2 min read",
    category: ["sort", "Linux", "DevOps"],
    url: "https://dev.to/k1lgor/the-essential-guide-to-the-sort-command-in-linux-ej0",
  },
  {
    title: "Discovering the Power of xargs Command in Linux",
    excerpt:
      "A quick look at `xargs` that shows how to turn piped lists into command arguments, use `-I` for placeholders, and run bulk operations in parallel with `-P` for faster workflows.",
    date: "Feb 22, 2023",
    readTime: "2 min read",
    category: ["xargs", "Linux", "DevOps"],
    url: "https://dev.to/k1lgor/discovering-the-power-of-xargs-command-in-linux-2jkb",
  },
  {
    title: "Compressing and Archiving Files with tar: Examples and Tips",
    excerpt:
      "A concise alphabetic roundup of Linux terms from “M” to “P” (like `mount`, `nice`, `passwd`, `pipe`) that gives a one-sentence definition and usage tip for each.",
    date: "Feb 11, 2023",
    readTime: "2 min read",
    category: ["tar", "Linux", "DevOps"],
    url: "https://dev.to/k1lgor/linux-from-a-to-z-part-5-4004",
  },
  {
    title: "Efficient Text Searching with grep: Examples and Tips",
    excerpt:
      "A speedy A-to-Z slice covering Linux concepts from “G” to “L” (grep, inode, journal, kernel, symlink, etc.) with a crisp one-liner explanation and quick usage tip per term.",
    date: "Feb 3, 2023",
    readTime: "3 min read",
    category: ["grep", "Linux", "DevOps"],
    url: "https://dev.to/k1lgor/linux-from-a-to-z-part-4-ge",
  },
  {
    title:
      "Unlock the power of the find command: A beginner's guide with examples",
    excerpt:
      "A brisk A-to-Z installment for letters “D” through “F” that defines essentials like daemon, environment, filesystem, and fork in one sentence each with a handy usage hint.",
    date: "Jan 31, 2023",
    readTime: "3 min read",
    category: ["find", "Linux", "DevOps"],
    url: "https://dev.to/k1lgor/linux-from-a-to-z-part-3-3dob",
  },
  {
    title:
      "Mastering the sed Command: Tips, Tricks, and Examples for Text Transformation in Linux",
    excerpt:
      "A quick A-to-Z leg covering letters “A” through “C” that gives one-sentence definitions and usage nuggets for terms like alias, bash, cron, and chmod.",
    date: "Jan 28, 2023",
    readTime: "2 min read",
    category: ["sed", "Linux", "DevOps"],
    url: "https://dev.to/k1lgor/linux-from-a-to-z-part-2-2k04",
  },
  {
    title:
      "Everything You Need to Know About the cat Command and Tips to Use it Effectively",
    excerpt:
      "The opening A-to-Z cheat-sheet that kick-starts the series by defining “absolute path” to “Zombie process” in one line each, giving newcomers a concise Linux vocabulary boost.",
    date: "Jan 21, 2023",
    readTime: "3 min read",
    category: ["cat", "Linux", "DevOps"],
    url: "https://dev.to/k1lgor/linux-from-a-to-z-part-1-4jfl",
  },
];

const ITEMS_PER_PAGE = 6;

export default function BlogPosts() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogPosts.length / ITEMS_PER_PAGE);
  const currentPosts = blogPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const blogSection = document.getElementById("blog");
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="blog" className={styles.blog}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Recent Blog Posts</h2>
        <p className={styles.subtitle}>
          Sharing knowledge and insights from my development journey
        </p>

        <div className={styles.grid}>
          {currentPosts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              className={styles.postCard}
              style={{ animationDelay: `${index * 0.15}s` }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.categories}>
                {post.category.map((cat, catIndex) => (
                  <span key={catIndex} className={styles.category}>
                    {cat}
                  </span>
                ))}
              </div>
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.excerpt}>{post.excerpt}</p>

              <div className={styles.meta}>
                <span className={styles.date}>📅 {post.date}</span>
                <span className={styles.readTime}>⏱️ {post.readTime}</span>
              </div>

              <div className={styles.readMore}>Read More →</div>
            </a>
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
