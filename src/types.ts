import type { LucideIcon } from "lucide-react";

export interface Tab {
  title: string;
  icon: LucideIcon;
  path: string;
  type?: never;
}

export interface NavSeparator {
  type: "separator";
  title?: never;
  icon?: never;
  path?: never;
}

export type TabItem = Tab | NavSeparator;

export interface Experience {
  company: string;
  role: string;
  period: string;
  desc: string;
  tech: string[];
  isCurrent: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Project {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  img: string;
  imgFit?: "cover" | "contain";
  github?: string;
  live?: string;
}
