import type { SVGProps } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 1200 1227" fill="currentColor" {...props}>
    <path d="M714 519L1160 0H1054L666 455 357 0H0L468 681 0 1227H106L516 744 843 1227H1200L714 519Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer
      id="connect"
      className="pt-12 border-t border-white/30 dark:border-white/20 flex flex-col md:flex-row justify-between items-center gap-6"
    >
      <div className="text-sm text-zinc-700 dark:text-zinc-300 font-bold tracking-tight">
        © 2026 ENZO ITALIANO. // TS_DEPLOYED
      </div>
      <div className="flex gap-8">
        <a
          href="https://github.com/EnzoItaliano"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-700 dark:text-zinc-300 hover:text-indigo-500 transition-all hover:scale-125"
        >
          <Github size={22} />
        </a>
        <a
          href="https://linkedin.com/in/enzoitaliano/"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-700 dark:text-zinc-300 hover:text-indigo-500 transition-all hover:scale-125"
        >
          <Linkedin size={22} />
        </a>
        <a
          href="https://x.com"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-700 dark:text-zinc-300 hover:text-indigo-500 transition-all hover:scale-125"
        >
          <XIcon className="w-5 h-5" />
        </a>
        <a
          href="mailto:enzoitaliano@example.com"
          className="text-zinc-700 dark:text-zinc-300 hover:text-indigo-500 transition-all hover:scale-125"
        >
          <Mail size={22} />
        </a>
      </div>
    </footer>
  );
}
