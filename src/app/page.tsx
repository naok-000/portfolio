import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Works } from "@/components/sections/works";

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      <Hero />
      <Experience />
      <Skills />
      <Works />
    </div>
  );
}
