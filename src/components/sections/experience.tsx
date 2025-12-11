import { TerminalWindow } from "@/components/ui/terminal-window";

const experiences = [
  {
    period: "2022.04 - Present",
    role: "Student of Computer Science",
    company: "Nagoya University",
    description:
      "Pursuing a Bachelor's degree in Computer Science. Learning about algorithms, theoritical computer science, computer architecture, machine learning, and more.",
    stack: ["C", "C++", "Python", "Haskell"],
  },
  {
    period: "2025.03 - 2025.10",
    role: "Web Developer Intern",
    company: "UNAIIT Inc.",
    description:
      "Developing web applications using modern frameworks and tools. Developed a full-stack web app for construction work from scratch.",
    stack: ["Flask", "Nuxt", "ASP.NET", "Azure", "Git"],
  },
  {
    period: "2025.04 - Present",
    role: "Software Platform Researcher",
    company: "Takada–Matsubara Laboratory",
    description:
      "Researching and developing software platforms, especially in embedded computing. Currently working on a NPU scheduler for real-time applications on Microcontrollers.",
    stack: ["C", "FreeRTOS"],
  },
  {
    period: "2025.10 - Present",
    role: "Data Science Intern",
    company: "Matsuo Institute Inc.",
    description:
      "Developing software for construction work. Working on RAG system using AWS and FastAPI to provide relevant information from large document datasets.",
    stack: ["FastAPI", "AWS", "Git", "GitHub"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 space-y-8">
      <h2 className="text-3xl font-bold tracking-tighter text-center">
        <span className="text-primary">~/</span> experience
      </h2>

      <div className="max-w-4xl mx-auto">
        <TerminalWindow title="system_logs.log" className="w-full">
          <div className="space-y-6 font-mono text-sm">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="border-l-2 border-muted pl-4 ml-2 relative"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-muted-foreground/20 border-2 border-background" />
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
                  <span className="text-blue-500 font-bold">
                    [{exp.period}]
                  </span>
                  <span className="text-primary font-bold">{exp.role}</span>
                  <span className="text-muted-foreground">@ {exp.company}</span>
                </div>
                <p className="text-foreground/80 mb-2">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-yellow-500 text-xs">Dependencies:</span>
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-muted px-1.5 py-0.5 rounded text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div className="pl-4 ml-2">
              <span className="animate-pulse text-primary">_</span>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
