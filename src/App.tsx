import { useState, useEffect } from "react";
import {
  Home,
  User,
  Layers,
  Terminal,
  Mail,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import type { TabItem } from "./types";
import ExpandableTabs from "./components/ExpandableTabs";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";
import StackSection from "./components/StackSection";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [activePath, setActivePath] = useState(window.location.hash || "#home");

  useEffect(() => {
    const handleHashChange = () => setActivePath(window.location.hash || "#home");
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    theme === "dark" ? root.classList.add("dark") : root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const tabs: TabItem[] = [
    { title: "Home", icon: Home, path: "#home" },
    { title: "About", icon: User, path: "#about" },
    { title: "Experience", icon: Briefcase, path: "#experience" },
    { title: "Education", icon: GraduationCap, path: "#education" },
    { title: "Projects", icon: Layers, path: "#projects" },
    { type: "separator" },
    { title: "Stack", icon: Terminal, path: "#stack" },
    { title: "Connect", icon: Mail, path: "#connect" },
  ];

  return (
    <div className="relative min-h-screen font-mono transition-colors duration-500 overflow-x-hidden selection:bg-indigo-500/30">
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://images8.alphacoders.com/137/thumb-1920-1373818.png')`,
          backgroundColor: theme === "dark" ? "#0a0a0f" : "#f0f0f5",
        }}
      />
      <div className="fixed inset-0 z-[1] bg-white/45 dark:bg-black/55 transition-colors duration-500" />
      <div className="fixed inset-0 z-[2] backdrop-blur-[1px] pointer-events-none" />

      <div className="relative z-10 text-zinc-900 dark:text-zinc-100">
        <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
          <ExpandableTabs
            tabs={tabs}
            layout="vertical"
            activePath={activePath}
            className="border-white/20 dark:border-white/10 shadow-2xl"
          />
        </aside>

        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <main className="max-w-5xl mx-auto px-6 py-12 lg:pl-32">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
          <StackSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}