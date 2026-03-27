import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="mb-24 scroll-mt-32">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl font-bold tracking-tighter bg-white/20 dark:bg-black/20 px-4 py-1 rounded backdrop-blur-sm">
          .about()
        </h2>
        <div className="h-px flex-grow bg-indigo-500/30" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/30 dark:bg-zinc-900/40 border border-white/20 dark:border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xl font-bold text-indigo-500 uppercase tracking-widest">
              Full-Stack Logic
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
              I am a software engineer focused on building intelligent digital
              solutions. My background ranges from leading Python API
              development for automotive leaders to crafting gamified user
              experiences.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs text-indigo-500 font-bold uppercase tracking-widest">
              Core Skills
            </h4>
            <ul className="text-sm space-y-1 opacity-80 font-bold">
              <li>• Python / FastAPI</li>
              <li>• Node.js / TypeScript</li>
              <li>• AI & Data Integration</li>
              <li>• System Architecture</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
