// All the site content lives here. Edit this file, not the page.

export const links = [
  { label: "GitHub", href: "https://github.com/Cyber-Dragon-18" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rodrigo-coelho-8b5222277/" },
  { label: "CV", href: "/cv.pdf" },
  { label: "Email", href: "mailto:rodrimcoelho@gmail.com" },
];

export const about = [
  "I'm a computer science graduate now studying bioinformatics at the University of Porto, where I split my time between algorithms, data and molecular dynamics.",
  "Outside of coursework I build small, practical tools, like the logistics app used by AEFCUP, and bigger experiments, like a cloud platform from scratch or a Hollow Knight-inspired platformer.",
];

// To add a screenshot to a project: put the image in public/projects/ and add
//   image: "/projects/<file-name>.png",
// to that project below. Cards without an image simply don't show one.
export const projects = [
  {
    title: "Logistics App for AEFCUP",
    text: "Full-stack operations platform engineered in vanilla Go (net/http) and PostgreSQL to coordinate live event logistics.",
    tags: ["Go", "PostgreSQL", "Cloudinary", "Render"],
    repo: "https://github.com/Cyber-Dragon-18/Logistica-AEFCUP",
  },
  {
    title: "Mychorrhiza",
    text: "A 2D platformer inspired by Hollow Knight with an earth theme, with a custom character controller, combat and boss fights.",
    tags: ["Unity", "C#", "Game development"],
    repo: "https://github.com/Cyber-Dragon-18/Mychorrhiza",
  },
  {
    title: "GridLock",
    text: "A self-hosted cloud platform built from scratch on OpenStack: six Flask microservices (auth, storage, data normalization, databases, containers and compute) with a web dashboard.",
    tags: ["Python", "Flask", "OpenStack", "Docker", "GCP"],
    repo: "https://github.com/Cyber-Dragon-18/GridLock",
  },
  {
    title: "RallyPaper",
    text: "A mobile-first app for a city rally event, handling team scoring, clues and judge scorecards.",
    tags: ["Go", "PostgreSQL"],
    repo: "https://github.com/Cyber-Dragon-18/RallyPaper",
  },
  {
    title: "Smart bookshelf",
    text: "A bookshelf application that keeps a catalogue of my books and connects to hardware on the shelf itself.",
    tags: ["Go", "PostgreSQL", "Hardware integration"],
    status: "Still in development",
  },
];

export const stack = [
  { group: "Languages", items: ["Python", "C", "Java", "Go", "Haskell", "C#", "JavaScript", "Assembly", "SQL"] },
  { group: "Web", items: ["HTML5", "CSS3", "React", "Next.js", "Tailwind CSS"] },
  { group: "Terminal and systems", items: ["Bash", "Linux", "Git"] },
  { group: "Bioinformatics", items: ["VMD", "AMBER", "Protein Data Bank"] },
  {
    group: "Cloud, databases, tools and engines",
    items: ["PostgreSQL", "Flask", "Docker", "OpenStack", "Google Cloud", "Nginx", "Unity", "GitHub"],
  },
];

export const education = [
  { when: "Now", what: "MSc in Bioinformatics, Faculdade de Ciências da Universidade do Porto (FCUP)" },
  {
    when: "Before",
    what: "BSc in Computer Science. Coursework included algorithms, machine learning, artificial intelligence, computability and complexity, large-scale data science and decision support methods.",
  },
  {
    when: "Currently learning",
    what: "Molecular dynamics simulations and large-scale biological data pipelines for my MSc. On the side, studying digital forensics, memory analysis, and network packet inspection to prepare for technical forensic roles (Polícia Judiciária).",
  },
  {
    when: "Currently Building",
    what: "Core gameplay mechanics, physics controllers, and systems architecture for an unannounced team game project inside our student nucleus."
  }
];