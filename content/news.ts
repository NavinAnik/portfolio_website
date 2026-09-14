// News / updates feed. Reverse-chronological (the component sorts by `date` desc,
// so entry order here doesn't matter). Add an entry by appending an object — no JSX.

export type NewsTag = "PAPER" | "TALK" | "AWARD" | "MILESTONE" | "REVIEW";

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
    date: "2026-09-10",
    title: "Reviewed \"Rhythm Guided Multi Scale Convolutional Network for ECG Sensor-Based Abnormal Beat Classification\" for PLOS ONE",
    tag: "REVIEW",
    link: "https://www.webofscience.com/wos/author/record/QYS-0851-2026",
  },
];
