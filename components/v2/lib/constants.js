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
    "https://drive.google.com/file/d/15SK31-y0Qyhpy6PaaIwsfU_GnvuKdehD/view?usp=sharing",
  leetcode: "https://leetcode.com/u/vanamkarthiknetha/",
  gfg: "https://www.geeksforgeeks.org/user/vanamkartim21/",
};

const EXPERIENCE_START = "2024-11-01";

const yearsOfExperience = () => {
  const start = new Date(EXPERIENCE_START);
  const now = new Date();
  const years = (now - start) / (1000 * 60 * 60 * 24 * 365.25);
  const halved = Math.floor(years * 2) / 2;
  return halved % 1 === 0 ? `${halved}+` : `${halved.toFixed(1)}+`;
};

export const CGPA = "8.79";

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
