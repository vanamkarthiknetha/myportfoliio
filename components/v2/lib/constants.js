export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/karthikvanam/",
  github: "https://github.com/vanamkarthiknetha",
  email: "mailto:vanamkarthiknetha@gmail.com",
  resume:
    "https://drive.google.com/file/d/1EGWxmU5q689VuOn2udgt6ifLzQGw5U9K/view?usp=sharing",
  intro:
    "https://drive.google.com/file/d/1iq8Z98Mv-sGJo-ijJdu4qgGw2N_rdjRC/view",
  leetcode: "https://leetcode.com/u/vanamkarthiknetha/",
  gfg: "https://www.geeksforgeeks.org/user/vanamkartim21/",
};

const EXPERIENCE_START = "2024-11-01";

const yearsOfExperience = () => {
  const start = new Date(EXPERIENCE_START);
  const now = new Date();
  const years = (now - start) / (1000 * 60 * 60 * 24 * 365.25);
  return `~${Math.round(years)}`;
};

export const CGPA = "8.78";

export const STATS = [
  { value: yearsOfExperience(), label: "Years of startup experience" },
];

export const EXTRA_SKILLS = {
  AI: {
    skills: [
      { label: "LiveKit", slug: "LiveKit" },
      { label: "LangChain", slug: "LangChain" },
      { label: "LangGraph", slug: "LangGraph" },
      { label: "LlamaIndex", slug: "LlamaIndex" },
      { label: "OpenAI / Gemini / Vercel SDK", slug: "LLM-SDKs" },
    ],
  },
};

export const SKILLS_ORDER = [
  "Languages",
  "Frontend",
  "Backend",
  "AI",
  "Cloud & DevOps",
  "Databases & Services",
  "Tools & Platforms",
];
