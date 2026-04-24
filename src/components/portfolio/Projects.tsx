import { Github, ExternalLink, Brain, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: Brain,
    name: "MentalGlow-AI",
    desc: "AI-based mental health prediction system achieving 92% accuracy. Includes mood tracking and personalized suggestions to support user wellbeing.",
    tech: ["Python", "Scikit-learn", "FastAPI", "NumPy"],
    metric: "92% Accuracy",
    github: "https://github.com/vanshraheja",
  },
  {
    icon: FileText,
    name: "Resume Analyzer Web App",
    desc: "Full-stack FastAPI + React application that uses NLP to extract skills from resumes and matches them to job descriptions, returning a match score.",
    tech: ["FastAPI", "React", "NLP", "Python"],
    metric: "Full-Stack",
    github: "https://github.com/vanshraheja",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">
        Real-world applications built with measurable impact.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <Card key={p.name} className="p-7 card-hover border-border flex flex-col">
            <div className="flex items-start justify-between mb-5">
              <div className="h-11 w-11 rounded-xl bg-gradient-accent flex items-center justify-center">
                <p.icon className="text-primary-foreground" size={22} />
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent text-accent-foreground">
                {p.metric}
              </span>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-2">{p.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground text-xs font-medium"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <Button asChild variant="outline" size="sm">
                <a href={p.github} target="_blank" rel="noopener noreferrer">
                  <Github size={14} className="mr-1.5" /> GitHub
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <a href={p.github} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={14} className="mr-1.5" /> Live
                </a>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
