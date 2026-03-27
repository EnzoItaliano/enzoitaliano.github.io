import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";
import type { Project } from "../types";
import waterReminderImg from "../assets/water-reminder.png";
import yupooDownloaderImg from "../assets/yupoo-downloader.png";
import competitorMonitorImg from "../assets/9s51vu9s51vu9s51.png";

const projects: Project[] = [
  {
    id: "monitor",
    title: "Competitor Monitor",
    desc: "AI-Powered Amazon Market Intelligence: Automated scraping & sentiment analysis dashboard with GPT-4.",
    tags: ["Python", "Selenium", "GPT-4"],
    img: competitorMonitorImg,
    github: "https://github.com/EnzoItaliano/competitor-monitor",
    live: "https://competitor-monitor.streamlit.app/",
  },
  {
    id: "todo",
    title: "Universal REST API",
    desc: "Dual-Stack implementation (FastAPI & Node.js) with Argon2id security and JWT-based RBAC.",
    tags: ["FastAPI", "Node.js", "Security"],
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    github: "https://github.com/EnzoItaliano/todo-app-backend",
  },
  {
    id: "water",
    title: "Water Reminder RPG",
    desc: "A gamified Chrome Extension that turns hydration into an RPG battle. Defeat monsters by staying hydrated!",
    tags: ["JavaScript", "Chrome API", "RPG"],
    img: waterReminderImg,
    imgFit: "contain",
    github: "https://github.com/EnzoItaliano/water-reminder-rpg-extension",
    live: "https://chromewebstore.google.com/detail/adpmoefhmghcohibihbmdpcohcfnemcn",
  },
  {
    id: "yupoo",
    title: "Yupoo Downloader",
    desc: "Specialized Chrome Extension to bypass CDN firewalls and download high-resolution albums.",
    tags: ["JavaScript", "Automation"],
    img: yupooDownloaderImg,
    imgFit: "contain",
    github:
      "https://github.com/EnzoItaliano/images-downloader-for-yupoo-extension",
    live: "https://chromewebstore.google.com/detail/images-downloader-for-yup/hiillffkjndkollikgnofjijhigjlmeb",
  },
  {
    id: "audio",
    title: "Audio Enhancer",
    desc: "DeepFilterNet noise reduction app producing master-ready WAVs through a Streamlit interface.",
    tags: ["Python", "AI", "Streamlit"],
    img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop",
    github: "https://github.com/EnzoItaliano/audio-enhancer",
    live: "https://audio-enhancer-enzoitaliano.streamlit.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="mb-24 scroll-mt-32">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl font-bold tracking-tighter bg-white/20 dark:bg-black/20 px-4 py-1 rounded backdrop-blur-sm">
          .projects()
        </h2>
        <div className="h-px flex-grow bg-indigo-500/30" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative flex flex-col bg-white/40 dark:bg-zinc-900/50 border border-white/30 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all backdrop-blur-md"
          >
            <div className="aspect-video mb-6 overflow-hidden rounded-xl border border-white/20">
              <img
                src={proj.img}
                alt={proj.title}
                className={`w-full h-full ${proj.imgFit === "contain" ? "object-contain" : "object-cover"} grayscale group-hover:grayscale-0 transition-all duration-700`}
              />
            </div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-bold">{proj.title}</h3>
              <div className="flex gap-3">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-500 hover:text-indigo-500 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                )}
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-500 hover:text-indigo-500 transition-colors"
                  >
                    <Globe size={20} />
                  </a>
                )}
              </div>
            </div>
            <p className="text-zinc-700 dark:text-zinc-300 mb-6 text-sm font-medium flex-grow">
              {proj.desc}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {proj.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-widest bg-indigo-500/10 dark:bg-indigo-500/20 px-2 py-1 rounded-md border border-indigo-500/20 font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
