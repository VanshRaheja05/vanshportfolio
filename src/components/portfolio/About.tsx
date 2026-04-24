import { Code2, Cpu, Target, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

const highlights = [
  {
    icon: Code2,
    title: "Backend-Focused",
    desc: "Building APIs and scalable backend systems with FastAPI and Python.",
  },
  {
    icon: Cpu,
    title: "AI Applications",
    desc: "Shipping ML-powered features with measurable real-world impact.",
  },
  {
    icon: Target,
    title: "Problem Solver",
    desc: "100+ DSA problems solved with strong analytical thinking.",
  },
  {
    icon: Trophy,
    title: "Strong Academics",
    desc: "B.Tech CSE · CGPA 8.05 · Graduating 2027.",
  },
];

export const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">
        A B.Tech Computer Science student passionate about Software Development and Backend Engineering. I focus on building production-ready APIs and AI applications that solve real problems — backed by strong fundamentals and a measurable track record.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {highlights.map((h) => (
          <Card key={h.title} className="p-6 card-hover border-border">
            <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center mb-4">
              <h.icon className="text-primary" size={20} />
            </div>
            <h3 className="font-semibold text-foreground mb-1.5">{h.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};
