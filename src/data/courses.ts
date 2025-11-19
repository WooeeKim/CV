type CourseProject = {
  title: string;
  slug?: string;
};

export type Course = {
  id: string;
  name: string;
  semester: string;
  projects: CourseProject[];
};

export const courses: Course[] = [
  {
    id: "infographics-2025",
    name: "Infographics",
    semester: "2025 Spring",
    projects: [
      { title: "Credit System Infographic", slug: "credit-system-infographic" }
    ]
  },
  {
    id: "interactive-space-2025",
    name: "Interactive Space",
    semester: "2025 Spring",
    projects: [{ title: "Washing Machine Clock", slug: "washing-machine-clock" }]
  },
  {
    id: "interactive-systems-2024",
    name: "Interactive Systems",
    semester: "2024 Fall",
    projects: [{ title: "Micro Gesture Library", slug: "micro-gesture-library" }]
  },
  {
    id: "independent-2024",
    name: "Independent",
    semester: "2024",
    projects: [{ title: "Urban Scent Map", slug: "urban-scent-map" }]
  }
];
