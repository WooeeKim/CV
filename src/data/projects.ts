export type Project = {
  slug: string;
  title: string;
  course: string;
  year: string;
  summary: string;
  tags: string[];
  isFeatured?: boolean;
  link?: string;
};

export const projects: Project[] = [
  {
    slug: "washing-machine-clock",
    title: "Washing Machine Clock",
    course: "Interactive Space",
    year: "2025",
    summary:
      "A speculative installation that visualizes domestic time by translating washing machine states into ambient light patterns.",
    tags: ["Installation", "Interaction", "Lighting"],
    isFeatured: true
  },
  {
    slug: "credit-system-infographic",
    title: "Credit System Infographic",
    course: "Infographics",
    year: "2025",
    summary:
      "A compact poster that decodes the university credit system with layered typography and iconography for quick comprehension.",
    tags: ["Data Viz", "Print", "Information Design"],
    isFeatured: true
  },
  {
    slug: "urban-scent-map",
    title: "Urban Scent Map",
    course: "Independent",
    year: "2024",
    summary:
      "A web map that captures seasonal scent notes across neighborhoods, combining interviews with gentle data visualization.",
    tags: ["Web", "Cartography", "Research"],
    isFeatured: true,
    link: "https://example.com/urban-scent-map"
  },
  {
    slug: "micro-gesture-library",
    title: "Micro Gesture Library",
    course: "Interactive Systems",
    year: "2024",
    summary:
      "A library of micro-gestures prototyped with Arduino and capacitive sensors, exploring tactile cues for small devices.",
    tags: ["Prototype", "Hardware", "Arduino"]
  }
];
