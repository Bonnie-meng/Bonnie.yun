import type { LabEntrySlug } from "@/content/translations";

export type LabEntryType =
  | "video"
  | "experiment"
  | "note"
  | "prototype"
  | "side-project";

export type LabEntry = {
  slug: LabEntrySlug;
  type: LabEntryType;
  date: string;
  href: string;
  external?: boolean;
  sourceUrl?: string;
};

export const labEntries: LabEntry[] = [
  {
    slug: "vibe-coding-01",
    type: "video",
    date: "[DATE]",
    href: "/lab/vibe-coding-01",
    sourceUrl: "[VIDEO URL]"
  },
  {
    slug: "vibe-coding-02",
    type: "video",
    date: "[DATE]",
    href: "/lab/vibe-coding-02",
    sourceUrl: "[VIDEO URL]"
  },
  {
    slug: "bonnie-yun",
    type: "experiment",
    date: "2026",
    href: "/lab/bonnie-yun"
  }
];
