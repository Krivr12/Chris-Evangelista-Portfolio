import { Navbar } from "@/components/navbar";
import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import { Experience } from "@/sections/experience";
import { Projects } from "@/sections/projects";
import { Skills } from "@/sections/skills";
import { Certifications } from "@/sections/certifications";
import { BeyondWork } from "@/sections/beyond-work";
import { Contact } from "@/sections/contact";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <BeyondWork />
        <Contact />
      </main>
    </div>
  );
}

export default App;
