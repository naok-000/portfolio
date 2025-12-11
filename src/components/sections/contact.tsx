import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/naok-000",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/naotaro-kobayashi-48830631a/",
    icon: Linkedin,
  },
  {
    name: "X",
    href: "https://x.com/nao_k000",
    icon: Twitter,
  },
  {
    name: "Email",
    href: "mailto:naotaro.kobayashi.000@gmail.com",
    icon: Mail,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 container mx-auto px-4">
      <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">
        <span className="text-primary">&gt;</span> Contact Me
      </h2>
      <div className="flex justify-center gap-8">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="group relative p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all duration-300 hover:scale-110"
            aria-label={link.name}
          >
            <link.icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-primary">
              {link.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
