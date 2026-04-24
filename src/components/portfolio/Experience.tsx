import { Briefcase, GraduationCap, School } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Experience = () => {
  return (
    <section id="experience" className="bg-secondary/40 border-y border-border">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Experience */}
          <div>
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle">Where I've sharpened my craft.</p>

            <Card className="p-6 border-border card-hover">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Briefcase className="text-primary" size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-foreground">Software Trainee</h3>
                    <span className="text-xs text-muted-foreground font-medium">Internship</span>
                  </div>
                  <p className="text-sm text-primary font-medium mb-3">Xebia</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground leading-relaxed">
                    <li className="flex gap-2"><span className="text-primary">•</span> Worked on real-world AI/ML workflows in a professional environment.</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Hands-on with data processing, model building, and evaluation pipelines.</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Developed strong analytical, collaboration, and communication skills.</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Education */}
          <div id="education" className="space-y-6">
            <h2 className="section-title">Education</h2>
            <p className="section-subtitle">Academic background.</p>

            <Card className="p-6 border-border card-hover">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="text-primary" size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-foreground">B.Tech, Computer Science</h3>
                    <span className="text-xs text-muted-foreground font-medium">2023 – 2027</span>
                  </div>
                  <p className="text-sm text-primary font-medium mb-3">Manav Rachna University</p>
                  <div className="flex gap-3 flex-wrap">
                    <span className="px-2.5 py-1 rounded-md bg-accent text-accent-foreground text-xs font-semibold">
                      CGPA 8.05
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                      Graduating 2027
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border card-hover">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <School className="text-primary" size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-foreground">Class 12th</h3>
                    <span className="text-xs text-muted-foreground font-medium">CBSE</span>
                  </div>
                  <p className="text-sm text-primary font-medium mb-3">DAV Public School</p>
                  <div className="flex gap-3 flex-wrap">
                    <span className="px-2.5 py-1 rounded-md bg-accent text-accent-foreground text-xs font-semibold">
                      Percentage 79%
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border card-hover">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <School className="text-primary" size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-foreground">Class 10th</h3>
                    <span className="text-xs text-muted-foreground font-medium">CBSE</span>
                  </div>
                  <p className="text-sm text-primary font-medium mb-3">DAV Public School</p>
                  <div className="flex gap-3 flex-wrap">
                    <span className="px-2.5 py-1 rounded-md bg-accent text-accent-foreground text-xs font-semibold">
                      Percentage 89%
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
