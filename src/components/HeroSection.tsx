import { motion } from "framer-motion";
import { Linkedin, Github, Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="mb-24 scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs border border-indigo-500/30 mb-6 backdrop-blur-sm font-bold"
      >
        BOOT_v2026.03_TS
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight [text-shadow:_0_1px_10px_rgb(0_0_0_/_20%)]"
      >
        Full-Stack Developer &{" "}
        <span className="text-indigo-600 dark:text-indigo-400">AI</span>{" "}
        Enthusiast.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-zinc-700 dark:text-zinc-300 text-lg md:text-xl max-w-2xl leading-relaxed font-bold bg-white/10 dark:bg-black/10 inline-block p-1 rounded backdrop-blur-[1px]"
      >
        I build scalable systems with Python, TypeScript, and Node.js. Focused
        on intelligent integration and clean logic.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap gap-4 mt-10"
      >
        <a
          href="https://linkedin.com/in/enzoitaliano/"
          target="_blank"
          rel="noreferrer"
          className="px-8 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:scale-105 transition-transform active:scale-95 no-underline font-bold flex items-center gap-2"
        >
          <Linkedin size={20} /> LinkedIn
        </a>
        <a
          href="https://github.com/EnzoItaliano"
          target="_blank"
          rel="noreferrer"
          className="px-8 py-3 border border-white/30 dark:border-white/20 bg-white/30 dark:bg-black/30 rounded-xl hover:bg-white/50 dark:hover:bg-black/50 transition-colors no-underline backdrop-blur-md font-bold flex items-center gap-2"
        >
          <Github size={20} /> GitHub
        </a>
        <a
          href="/cv.pdf"
          download
          className="px-8 py-3 border border-indigo-500/40 bg-indigo-500/10 hover:bg-indigo-500/20 rounded-xl transition-colors no-underline backdrop-blur-md font-bold flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:scale-105 active:scale-95"
        >
          <Download size={20} /> Download CV
        </a>
      </motion.div>
    </section>
  );
}
