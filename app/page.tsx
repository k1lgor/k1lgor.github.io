import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import BlogPosts from "@/components/BlogPosts";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Snowfall from "@/components/Snowfall";
import TechStack from "@/components/TechStack";
import Preloader from "@/components/Preloader";
import { themeConfig } from "@/theme-config";

export default function Home() {
  const isChristmas = themeConfig.theme === "christmas";

  return (
    <>
      <Preloader />
      {isChristmas && <Snowfall />}
      <Navigation />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <BlogPosts />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
