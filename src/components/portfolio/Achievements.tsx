import { Award, BookOpen, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const certs = [
  "Google Cloud Professional Data Engineer (2026)",
  "Microsoft Azure AI Certification",
  "Oracle Generative AI Certification",
];

const wins = [
  "Top 25 — SOLVE-A-THON 2025",
  "Top 5% — NPTEL Design Thinking",
  "2★ CodeChef",
  "100+ LeetCode Problems Solved",
];

const research = [
  { name: "ICIRD 2025", topic: "AI & Generative Models" },
  { name: "ICASS 2026", topic: "AI Employment Forecasting" },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="section-container">
      <h2 className="section-title">Achievements & Research</h2>
      <p className="section-subtitle">
        Certifications, recognitions, and published research.
      </p>

      <div className="grid md:grid-cols-3 gap-5">
        <Card className="p-6 border-border card-hover">
          <div className="flex items-center gap-2.5 mb-4">
            <Award className="text-primary" size={20} />
            <h3 className="font-semibold text-foreground">Certifications</h3>
          </div>
          <ul className="space-y-2.5">
            {certs.map((c) => (
              <li key={c} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                <span className="text-primary mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6 border-border card-hover">
          <div className="flex items-center gap-2.5 mb-4">
            <Star className="text-primary" size={20} />
            <h3 className="font-semibold text-foreground">Achievements</h3>
          </div>
          <ul className="space-y-2.5">
            {wins.map((w) => (
              <li key={w} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                <span className="text-primary mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                {w}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6 border-border card-hover">
          <div className="flex items-center gap-2.5 mb-4">
            <BookOpen className="text-primary" size={20} />
            <h3 className="font-semibold text-foreground">Research</h3>
          </div>
          <ul className="space-y-3">
            {research.map((r) => (
              <li key={r.name} className="text-sm">
                <div className="font-semibold text-foreground">{r.name}</div>
                <div className="text-muted-foreground">{r.topic}</div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
};
