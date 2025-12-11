import { TerminalWindow } from "@/components/ui/terminal-window";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="about"
      className="min-h-[80vh] flex flex-col justify-center items-center py-12 space-y-8"
    >
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          <span className="text-primary">&gt;</span> Hello, World!
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          I'm{" "}
          <span className="text-foreground font-semibold">
            Kobayashi Naotaro
          </span>
          .
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A Geek/Low-level Engineer bridging the gap between hardware and the
          web.
        </p>
      </div>

      <TerminalWindow
        title="zsh - kobayashinaotaro@macbook"
        className="w-full max-w-3xl shadow-2xl"
      >
        <div className="space-y-2">
          <div className="flex">
            <span className="text-green-500 mr-2">➜</span>
            <span className="text-blue-500 mr-2">~</span>
            <span className="text-foreground">whoami</span>
          </div>
          <div className="text-muted-foreground pl-4">kobayashinaotaro</div>

          <div className="flex pt-2">
            <span className="text-green-500 mr-2">➜</span>
            <span className="text-blue-500 mr-2">~</span>
            <span className="text-foreground">cat profile.json</span>
          </div>
          <div className="text-primary pl-4 whitespace-pre-wrap">
            {`{
  "role": "Engineer",
  "specialties": [
    "Web Development (React/Next.js)",
    "Embedded Systems (C/C++, Rust)",
    "Low-level Programming"
  ],
  "location": "Tokyo, Japan",
  "status": "Open to work"
}`}
          </div>

          <div className="flex pt-2">
            <span className="text-green-500 mr-2">➜</span>
            <span className="text-blue-500 mr-2">~</span>
            <span className="animate-pulse">_</span>
          </div>
        </div>
      </TerminalWindow>

      <div className="flex gap-4 pt-8">
        <Link
          href="#works"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-8 py-2"
        >
          View Works
        </Link>
        <Link
          href="https://github.com/kobayashinaotaro"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-8 py-2"
        >
          GitHub <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
