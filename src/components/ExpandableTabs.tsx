import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { TabItem } from "../types";

const buttonVariants: Variants = {
  initial: { gap: 0, paddingLeft: ".5rem", paddingRight: ".5rem" },
  animate: (isSelected: boolean) => ({
    gap: isSelected ? ".5rem" : 0,
    paddingLeft: isSelected ? "1rem" : ".5rem",
    paddingRight: isSelected ? "1rem" : ".5rem",
  }),
};

const spanVariants: Variants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "auto", opacity: 1 },
  exit: { width: 0, opacity: 0 },
};

const transition = { delay: 0.1, type: "spring" as const, bounce: 0, duration: 0.6 };

interface ExpandableTabsProps {
  tabs: TabItem[];
  className?: string;
  activeColor?: string;
  activePath: string;
  onChange?: (path: string) => void;
  layout?: "horizontal" | "vertical";
}

export default function ExpandableTabs({
  tabs,
  className,
  activeColor = "text-indigo-400",
  activePath,
  onChange,
  layout = "horizontal",
}: ExpandableTabsProps) {
  const outsideClickRef = useRef<HTMLDivElement>(null);

  const Separator = () => (
    <div
      className={
        layout === "horizontal"
          ? "mx-1 h-[24px] w-[1.2px] bg-current opacity-20"
          : "my-1 h-[1.2px] w-[24px] mx-auto bg-current opacity-20"
      }
    />
  );

  return (
    <div
      ref={outsideClickRef}
      className={`flex items-center gap-2 rounded-2xl border bg-white/60 dark:bg-zinc-900/60 p-1 shadow-lg backdrop-blur-xl border-white/20 dark:border-white/10 ${layout === "vertical" ? "flex-col w-fit" : "flex-row"
        } ${className}`}
    >
      {tabs.map((tab, index) => {
        if (tab.type === "separator") {
          return <Separator key={`sep-${index}`} />;
        }

        const Icon = tab.icon;
        const isSelected = activePath === tab.path;

        return (
          <motion.a
            key={tab.title}
            href={tab.path}
            variants={buttonVariants}
            initial={false}
            animate="animate"
            custom={isSelected}
            onClick={() => onChange?.(tab.path)}
            transition={transition}
            className={`relative flex items-center rounded-xl py-2 text-sm font-medium transition-colors duration-300 no-underline ${isSelected
              ? `bg-zinc-100/50 dark:bg-zinc-800/50 ${activeColor}`
              : "text-zinc-500 hover:bg-zinc-100/30 dark:hover:bg-zinc-800/30 hover:text-zinc-900 dark:hover:text-zinc-100"
              }`}
          >
            <Icon size={20} />
            <AnimatePresence initial={false}>
              {isSelected && (
                <motion.span
                  variants={spanVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={transition}
                  className="overflow-hidden whitespace-nowrap"
                >
                  {tab.title}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.a>
        );
      })}
    </div>
  );
}
