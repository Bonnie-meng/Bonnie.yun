import { profile } from "@/content/profile";

export const primaryNavigation = [
  { key: "home", href: "/" },
  { key: "experience", href: "/#experience" },
  { key: "work", href: "/work" },
  { key: "ai", href: "/#ai-workflow" },
  { key: "vibe", href: "/#vibe-coding" },
  { key: "about", href: "/about" },
  { key: "resume", href: profile.resumeUrl }
] as const;
