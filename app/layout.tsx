import type { Metadata } from "next";
import "./globals.css";
import { themeConfig } from "@/theme-config";

const baseUrl = "https://k1lgor.github.io/d-portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Plamen Ivanov - Automation & Productivity Specialist",
  description:
    "Personal portfolio of a passionate DevOps Engineer specializing in automation, CI/CD pipelines, containerization, and infrastructure as code. Building tools that enhance team productivity.",
  keywords: [
    "DevOps Engineer",
    "Automation",
    "CI/CD",
    "Docker",
    "Kubernetes",
    "Python",
    "Golang",
    "Infrastructure as Code",
    "Linux",
  ],
  authors: [{ name: "Plamen Ivanov" }],
  creator: "Plamen Ivanov",
  openGraph: {
    type: "website",
    title: "Plamen Ivanov - Automation & Productivity Specialist",
    description:
      "Explore my portfolio featuring automation tools, CI/CD pipelines, and infrastructure projects.",
    url: "https://k1lgor.github.io/d-portfolio/",
    siteName: "Plamen Ivanov Portfolio",
    images: [
      {
        url: "/assets/profile.png",
        width: 800,
        height: 800,
        alt: "Plamen Ivanov",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plamen Ivanov - Automation & Productivity Specialist",
    description:
      "Personal portfolio of a passionate DevOps Engineer specializing in automation, CI/CD pipelines, containerization, and infrastructure as code. Building tools that enhance team productivity.",
    creator: "@k1lgor",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentTheme = themeConfig.theme;

  return (
    <html lang="en" data-theme={currentTheme} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://k1lgor.github.io/d-portfolio/" />
      </head>
      <body>{children}</body>
    </html>
  );
}
