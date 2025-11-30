import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
    siteName: "Plamen Ivanov Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plamen Ivanov - Automation & Productivity Specialist",
    description:
      "Personal portfolio of a passionate DevOps Engineer specializing in automation, CI/CD pipelines, containerization, and infrastructure as code. Building tools that enhance team productivity.",
    creator: "Plamen Ivanov",
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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
