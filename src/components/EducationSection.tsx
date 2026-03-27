import { motion } from "framer-motion";
import type { Education } from "../types";

const education: Education[] = [
  {
    institution: "Polytechnic Institute of Bragança (IPB)",
    degree: "Master of Science - Informatics",
    period: "2022 — 2023",
  },
  {
    institution: "Federal University of Technology — Paraná (UTFPR)",
    degree: "Bachelor of Science - Computer Science",
    period: "2018 — 2023",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="mb-24 scroll-mt-32">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl font-bold tracking-tighter bg-white/20 dark:bg-black/20 px-4 py-1 rounded backdrop-blur-sm">
          .education()
        </h2>
        <div className="h-px flex-grow bg-indigo-500/30" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/30 dark:bg-zinc-900/40 border border-white/20 dark:border-white/10 rounded-2xl p-6 backdrop-blur-md"
          >
            <h3 className="text-lg font-bold">{edu.institution}</h3>
            <div className="text-indigo-500 text-sm font-bold my-1">
              {edu.degree}
            </div>
            <div className="text-xs opacity-60">{edu.period}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
