import { motion } from "framer-motion";
import type { Experience } from "../types";

const experiences: Experience[] = [
  {
    company: "CGI",
    role: "Software Engineer",
    period: "Jan 2026 — Present",
    desc: "Working in a Domain-Driven Design (DDD) environment to architect scalable enterprise solutions.",
    tech: ["DDD", "Clean Architecture", "TypeScript"],
    isCurrent: true,
  },
  {
    company: "Apside Portugal",
    role: "Software Engineer / Tech Lead",
    period: "Aug 2024 — Dec 2025",
    desc: "Technical Lead for a Stellantis internal project. Engineered high-performance Python APIs with FastAPI.",
    tech: ["Python", "FastAPI", "Leadership", "API Design"],
    isCurrent: false,
  },
  {
    company: "Dataway IT",
    role: "Software Developer",
    period: "Dec 2021 — Jun 2022",
    desc: "Full-stack developer utilizing TypeScript and Vue.js for high-impact social projects.",
    tech: ["TypeScript", "NestJS", "Vue.js", "TypeORM"],
    isCurrent: false,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="mb-24 scroll-mt-32">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl font-bold tracking-tighter bg-white/20 dark:bg-black/20 px-4 py-1 rounded backdrop-blur-sm">
          .experience()
        </h2>
        <div className="h-px flex-grow bg-indigo-500/30" />
      </div>
      <div className="relative">
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-indigo-500/20" />
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-10"
            >
              <div className="absolute left-0 top-1.5 w-[24px] h-[24px] rounded-full border border-indigo-500/50 bg-white dark:bg-zinc-900 flex items-center justify-center z-10 backdrop-blur-sm">
                {exp.isCurrent && (
                  <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                )}
              </div>
              <div className="bg-white/30 dark:bg-zinc-900/40 border border-white/20 dark:border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-lg">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <span className="text-indigo-500 font-bold">
                      @ {exp.company}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-zinc-500 bg-white/20 dark:bg-black/20 px-3 py-1 rounded-full border border-white/10 h-fit mt-2 md:mt-0">
                    {exp.period}
                  </div>
                </div>
                <p className="text-zinc-700 dark:text-zinc-300 mb-6 font-medium leading-relaxed">
                  {exp.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-widest bg-white/40 dark:bg-white/5 px-2 py-1 rounded border border-white/20 font-bold opacity-80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
