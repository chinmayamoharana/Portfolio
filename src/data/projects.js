export const projects = [
  {
    slug: "job-portal",
    img: "/project1.png",
    title: "Job Portal",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    stackLabel: "MERN Stack (MongoDB, Express, React, Node.js)",
    github: "https://github.com/chinmayamoharana?tab=repositories",
    accent: "from-blue-500 to-cyan-400",
    description:
      "Full-stack job platform with secure authentication, role-aware dashboards, and a smoother candidate-to-employer workflow.",
    summary:
      "A recruitment platform built to simplify job discovery, application management, and employer-side listing control.",
    problem:
      "Most academic job-board projects stop at CRUD. I wanted a more realistic product where different user roles could authenticate securely, manage listings, and interact with a system that feels closer to a production workflow.",
    solution:
      "I designed a full-stack job portal with JWT-based authentication, protected routes, listing management, and reusable frontend sections so candidates and recruiters could move through the product with less friction.",
    challenges: [
      "Designing role-based access patterns without making the frontend routing brittle.",
      "Structuring REST APIs so recruiter and applicant workflows stayed clean and maintainable.",
      "Keeping the UI responsive while handling dynamic listing data and authenticated states.",
    ],
    result:
      "The project demonstrates practical full-stack architecture, protected API design, and a scalable UI structure suitable for job marketplaces and admin-driven dashboards.",
    metrics: [
      { label: "Role Flows", value: "Candidate + Recruiter" },
      { label: "Core Focus", value: "Auth + REST APIs" },
      { label: "Outcome", value: "Production-style architecture" },
    ],
  },
  {
    slug: "finance-dashboard-system",
    img: "/image.png",
    title: "Finance Dashboard System",
    tech: [
      "React",
      "Django",
      "Django REST Framework",
      "MySQL",
      "JWT",
      "RBAC",
      "Recharts",
      "Tailwind CSS",
    ],
    stackLabel:
      "React.js, Django, Django REST Framework, MySQL, JWT, RBAC, Recharts, Tailwind CSS, Axios",
    github: "https://github.com/chinmayamoharana?tab=repositories",
    accent: "from-cyan-500 to-sky-400",
    description:
      "Finance analytics dashboard with role-based access, reporting views, charts, and admin controls for secure data visibility.",
    summary:
      "A business-focused dashboard for turning financial data into clearer insights for admins, analysts, and viewers.",
    problem:
      "Financial dashboards often need secure data access, different user permissions, and clean visual reporting. I wanted to build a system that handled those concerns together instead of treating charts as the only feature.",
    solution:
      "I created a React + Django dashboard with JWT authentication, role-based access control, summary modules, reporting APIs, and chart-driven UI to help different users access only the information relevant to them.",
    challenges: [
      "Mapping RBAC cleanly between backend permissions and frontend route visibility.",
      "Designing chart components that stayed readable on smaller screens.",
      "Optimizing summary/report endpoints so the dashboard remained responsive.",
    ],
    result:
      "The final system shows my ability to build secure SaaS-style dashboards with structured analytics, maintainable APIs, and polished frontend reporting.",
    metrics: [
      { label: "Roles", value: "Admin / Analyst / Viewer" },
      { label: "Primary Value", value: "Secure reporting" },
      { label: "Architecture", value: "React + DRF" },
    ],
  },
  {
    slug: "url-shortener",
    img: "/project2.png",
    title: "URL Shortener",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    stackLabel: "MERN Stack (MongoDB, Express, React, Node.js)",
    github: "https://github.com/chinmayamoharana?tab=repositories",
    accent: "from-violet-500 to-blue-400",
    description:
      "Compact URL management tool with hash generation, redirection logic, and a lightweight responsive interface.",
    summary:
      "A utility-focused product built to reduce long URLs into trackable, shareable short links.",
    problem:
      "Short-link products look simple, but they require thoughtful backend design around unique identifiers, fast redirects, and reliable persistence.",
    solution:
      "I implemented a full-stack URL shortener with generated hashes, MongoDB storage, and a responsive React interface for creating and using short links quickly.",
    challenges: [
      "Preventing hash collisions while keeping the solution lightweight.",
      "Designing a redirect flow that remained fast and predictable.",
      "Making the tool feel simple without removing useful feedback in the UI.",
    ],
    result:
      "This project highlights backend utility design, efficient database usage, and building simple products with clean end-to-end user flows.",
    metrics: [
      { label: "Focus", value: "Utility product" },
      { label: "Key Logic", value: "Hash + Redirect" },
      { label: "UI", value: "Responsive and minimal" },
    ],
  },
  {
    slug: "pdf-word-converter",
    img: "/project3.png",
    title: "PDF ↔ Word Converter",
    tech: ["React", "Django", "Python", "Django REST Framework"],
    stackLabel: "Django + React + Python",
    github: "https://github.com/chinmayamoharana?tab=repositories",
    accent: "from-emerald-500 to-cyan-400",
    description:
      "Document conversion workflow with secure upload handling and a frontend built for clarity during file operations.",
    summary:
      "A document-processing application focused on reliable file upload and conversion workflows.",
    problem:
      "File-based tools often suffer from poor UX and weak backend handling. I wanted to build a document conversion app that felt simple for users while still addressing file security and API structure.",
    solution:
      "I built a React frontend connected to a Django REST backend that accepts files securely, processes conversions, and keeps the UI focused on clear upload and result states.",
    challenges: [
      "Handling file uploads safely and predictably on the backend.",
      "Designing UI states for loading, success, and failure without confusion.",
      "Keeping the application responsive despite file-processing steps.",
    ],
    result:
      "The project demonstrates practical backend handling for file workflows and thoughtful frontend feedback around asynchronous operations.",
    metrics: [
      { label: "Core Area", value: "File workflows" },
      { label: "Stack", value: "React + Django" },
      { label: "Value", value: "Clear async UX" },
    ],
  },
  {
    slug: "ecommerce-website",
    img: "/project4.png",
    title: "E-commerce Website",
    tech: ["Django", "Python", "MySQL", "HTML", "CSS"],
    stackLabel: "Django + Python",
    github: "https://github.com/chinmayamoharana?tab=repositories",
    accent: "from-orange-500 to-amber-400",
    description:
      "Commerce platform with authentication, cart flow, order management, and a relational data model for core retail workflows.",
    summary:
      "A full-stack storefront project covering product discovery, purchasing flow, and admin-friendly order handling.",
    problem:
      "E-commerce projects combine several moving parts: users, products, carts, orders, and database relationships. I wanted to build one that proved I could manage those flows end to end.",
    solution:
      "I developed a Django-based commerce application with authentication, cart logic, order handling, and a structured relational schema to support product-driven workflows.",
    challenges: [
      "Modeling cart and order relationships cleanly in the database.",
      "Maintaining a straightforward checkout experience.",
      "Balancing admin needs with frontend usability.",
    ],
    result:
      "This project strengthened my backend modeling skills and showed how I approach complex, multi-step product workflows.",
    metrics: [
      { label: "Workflow", value: "Catalog to order" },
      { label: "Backend Focus", value: "Relational modeling" },
      { label: "Experience", value: "Full product flow" },
    ],
  },
  {
    slug: "cafe-management-system",
    img: "/project5.png",
    title: "Cafe Management System",
    tech: ["React", "PHP", "MySQL", "REST APIs"],
    stackLabel: "React + PHP + MySQL",
    github: "https://github.com/chinmayamoharana?tab=repositories",
    accent: "from-pink-500 to-rose-400",
    description:
      "Operational dashboard for cafe workflows with role-based access, admin/user areas, and API-backed management features.",
    summary:
      "An internal management product designed to streamline cafe-side operations and user-specific access.",
    problem:
      "Small business systems still need strong workflow structure. I wanted to build a role-based management tool that focused on everyday operational use instead of only public-facing UI.",
    solution:
      "I created a React frontend with a PHP + MySQL backend to support admin and user dashboards, data management, and API-integrated internal operations.",
    challenges: [
      "Designing separate permissions and views for different user types.",
      "Keeping the admin experience efficient without overwhelming the interface.",
      "Organizing API communication cleanly between frontend and backend.",
    ],
    result:
      "The outcome is a role-aware business management app that demonstrates dashboard thinking, CRUD architecture, and practical system design.",
    metrics: [
      { label: "Audience", value: "Internal operations" },
      { label: "Roles", value: "Admin + User" },
      { label: "Strength", value: "Dashboard workflow" },
    ],
  },
  {
    slug: "ats-resume-checker",
    img: "/project6.png",
    title: "ATS Resume Checker",
    tech: ["React", "Django", "Python", "NLP-style keyword analysis"],
    stackLabel: "Django + React + Python",
    github: "https://github.com/chinmayamoharana?tab=repositories",
    accent: "from-fuchsia-500 to-indigo-400",
    description:
      "Resume analysis tool that scores documents against ATS-style expectations with keyword extraction and feedback.",
    summary:
      "A career-tech utility focused on resume scoring and clearer job-readiness feedback.",
    problem:
      "Many candidates struggle to understand why their resumes underperform in ATS-driven hiring funnels. I wanted to build a tool that turns resume feedback into something more actionable.",
    solution:
      "I designed an analyzer that processes resume content, extracts important keywords, and provides a score-oriented feedback experience through a React interface and Django backend.",
    challenges: [
      "Converting resume content into meaningful keyword-based scoring logic.",
      "Presenting results in a way users can understand quickly.",
      "Keeping the workflow simple for a document-driven use case.",
    ],
    result:
      "This project demonstrates practical product thinking around analysis tools, user feedback loops, and backend-driven scoring systems.",
    metrics: [
      { label: "Type", value: "Career utility" },
      { label: "Engine", value: "Keyword scoring" },
      { label: "Goal", value: "Actionable feedback" },
    ],
  },
  {
    slug: "kanban-board-application",
    img: "/project7.png",
    title: "Kanban Board Application",
    tech: ["React", "Django REST Framework", "WebSockets", "Tailwind CSS", "JWT"],
    stackLabel: "React.js, Django REST Framework, WebSockets, Tailwind CSS",
    github: "https://github.com/chinmayamoharana?tab=repositories",
    accent: "from-sky-500 to-blue-500",
    description:
      "Collaborative task board with drag-and-drop management, JWT authentication, and real-time updates for team workflows.",
    summary:
      "A modern productivity app built to support collaborative planning, real-time activity, and smoother task movement.",
    problem:
      "Task management tools need more than simple CRUD. I wanted to build a system that felt collaborative, supported live updates, and reflected a more modern team workflow.",
    solution:
      "I developed a full-stack kanban board with authenticated users, drag-and-drop task movement, WebSocket-powered live updates, and a structured board experience for collaborative work.",
    challenges: [
      "Keeping real-time updates consistent across board states.",
      "Designing drag-and-drop interactions without harming responsiveness.",
      "Managing authenticated collaboration flows alongside live events.",
    ],
    result:
      "The project demonstrates real-time product thinking, interactive frontend behavior, and backend coordination for collaborative applications.",
    metrics: [
      { label: "Realtime", value: "WebSockets" },
      { label: "Interaction", value: "Drag and drop" },
      { label: "Use Case", value: "Collaborative workflow" },
    ],
  },
];

const hiddenProjectSlugs = new Set(["url-shortener"]);
const featuredProjectSlugs = [
  "job-portal",
  "finance-dashboard-system",
  "kanban-board-application",
];
const projectMap = new Map(projects.map((project) => [project.slug, project]));

export const visibleProjects = projects.filter(
  (project) => !hiddenProjectSlugs.has(project.slug)
);

export const featuredProjects = featuredProjectSlugs
  .map((slug) => projectMap.get(slug))
  .filter(Boolean);

export function getProjectBySlug(slug) {
  return projectMap.get(slug);
}

export function getRelatedProjects(slug, limit = 2) {
  return visibleProjects
    .filter((project) => project.slug !== slug)
    .slice(0, limit);
}
