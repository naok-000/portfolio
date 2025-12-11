import Link from "next/link";
import { Terminal } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Terminal className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">
              kobayashinaotaro
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="#about"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              ~/about
            </Link>
            <Link
              href="#experience"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              ~/experience
            </Link>
            <Link
              href="#skills"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              ~/skills
            </Link>
            <Link
              href="#works"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              ~/works
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Add search or command palette later */}
          </div>
          <div className="flex items-center">
            <span className="text-xs text-muted-foreground mr-2">
              SYS.STATUS: ONLINE
            </span>
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          </div>
        </div>
      </div>
    </header>
  );
}
