import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "portfolio",
    description:
      "This portfolio site. A personal website to showcase my projects and skills. Built with Next.js and Tailwind CSS, deployed on GitHub Pages.",
    tags: ["Next.js", "React", "Tailwind", "GitHub Pages"],
    github: "https://github.com/naok-000/portfolio",
    demo: "https://naok-000.github.io/portfolio/",
    status: "Active",
  },
  {
    title: "gpu-reservation",
    description:
      "A GPU reservation system for shared computing environments. Users can book in natural language; priorities auto-set by purpose. Assignment submitted upon selection as an outstanding student in Matsuo Lab's course.",
    tags: ["FastAPI", "Nuxt", "SQLite", "Docker", "Foundation LLM"],
    status: "Archived",
  },
  {
    title: "taskflow",
    description:
      "Simple task management web app. My first full-stack web application, built with Express, EJS, and MongoDB. Features user authentication, task CRUD operations, and responsive design.",
    tags: ["Express", "EJS", "MongoDB"],
    github: "https://github.com/naok-000/taskflow",
    demo: "https://taskflow-qoay.onrender.com/",
    status: "Archived",
  },
];

export function Works() {
  return (
    <section id="works" className="py-20 space-y-8">
      <h2 className="text-3xl font-bold tracking-tighter text-center">
        <span className="text-primary">~/</span> works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="space-y-1">
                <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="text-xs text-muted-foreground font-mono">
                  Status:{" "}
                  <span
                    className={
                      project.status === "Active"
                        ? "text-green-500"
                        : "text-muted-foreground"
                    }
                  >
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                )}
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                )}
              </div>
            </div>

            <p className="text-muted-foreground text-sm mb-6 min-h-[60px]">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2 py-1 rounded bg-muted text-muted-foreground border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
