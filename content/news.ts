// News / updates feed. Reverse-chronological (the component sorts by `date` desc,
// so entry order here doesn't matter). Add an entry by appending an object — no JSX.
//
// TODO(content): replace the seeded placeholders below with real milestones.

export type NewsTag = "PAPER" | "TALK" | "AWARD" | "MILESTONE";

export interface NewsEntry {
  /** ISO date, e.g. "2026-08-01". Used for sorting and display. */
  date: string;
  title: string;
  /** Optional one-line detail shown under the title. */
  body?: string;
  /** Optional badge; styled like the publication status pills. */
  tag?: NewsTag;
  /** Optional external link; wraps the title when present. */
  link?: string;
}

export const news: NewsEntry[] = [
  {
    date: "2026-08-01",
    title: "TODO: paper accepted at Nature Scientific Reports",
    body: "TODO: one-line summary of the paper.",
    tag: "PAPER",
    // link: "https://…",
  },
  {
    date: "2026-06-15",
    title: "TODO: invited talk on perception under uncertainty",
    body: "TODO: venue / event name.",
    tag: "TALK",
  },
  {
    date: "2026-03-10",
    title: "TODO: award or recognition received",
    tag: "AWARD",
  },
  {
    date: "2026-01-05",
    title: "TODO: milestone — new role / model shipped / dataset released",
    tag: "MILESTONE",
  },
];
