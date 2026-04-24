import { Card } from "@/components/ui/card";
import { Code, Layers, Wrench, Library } from "lucide-react";

const groups = [
  {
    icon: Code,
    title: "Languages",
    items: ["Python", "C++", "SQL", "HTML", "CSS"],
  },
  {
    icon: Layers,
    title: "Frameworks",
    items: ["FastAPI", "Flask", "React (Vite)"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    icon: Library,
    title: "Libraries",
    items: ["Scikit-learn", "NumPy"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="bg-secondary/40 border-y border-border">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I use to build modern software.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g) => (
            <Card key={g.title} className="p-6 bg-background card-hover border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <g.icon className="text-primary" size={18} />
                </div>
                <h3 className="font-semibold text-foreground">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
