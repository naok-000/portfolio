import { HexViewer } from "@/components/ui/hex-viewer";

const skillsData = {
  languages: ["TypeScript", "Rust", "C++", "Python", "Go"],
  frontend: ["React", "Next.js", "TailwindCSS", "Three.js"],
  backend: ["Node.js", "PostgreSQL", "Redis", "Docker"],
  embedded: ["FreeRTOS", "ESP32", "STM32", "I2C/SPI"],
  tools: ["Git", "Linux", "AWS", "GitHub Actions"],
};

const skillsString = JSON.stringify(skillsData, null, 2);

export function Skills() {
  return (
    <section id="skills" className="py-20 space-y-8">
      <h2 className="text-3xl font-bold tracking-tighter text-center">
        <span className="text-primary">~/</span> skills
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-primary">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.languages.map((s) => (
                <span
                  key={s}
                  className="px-2 py-1 bg-muted rounded text-sm font-mono border border-border"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-primary">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.frontend.map((s) => (
                <span
                  key={s}
                  className="px-2 py-1 bg-muted rounded text-sm font-mono border border-border"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-primary">
              Backend & Cloud
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.backend.map((s) => (
                <span
                  key={s}
                  className="px-2 py-1 bg-muted rounded text-sm font-mono border border-border"
                >
                  {s}
                </span>
              ))}
              {skillsData.tools.map((s) => (
                <span
                  key={s}
                  className="px-2 py-1 bg-muted rounded text-sm font-mono border border-border"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-primary">
              Embedded / Low-level
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.embedded.map((s) => (
                <span
                  key={s}
                  className="px-2 py-1 bg-muted rounded text-sm font-mono border border-border"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-4 shadow-lg overflow-hidden">
          <div className="text-xs text-muted-foreground mb-2 border-b border-border pb-2 flex justify-between">
            <span>skills_dump.bin</span>
            <span>
              0x{skillsString.length.toString(16).toUpperCase()} bytes
            </span>
          </div>
          <HexViewer
            data={skillsString}
            className="h-[400px] overflow-y-auto"
          />
        </div>
      </div>
    </section>
  );
}
