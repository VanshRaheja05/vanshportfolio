import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/vansh-portrait.jpg";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative pt-28 md:pt-32 pb-16 md:pb-24 bg-gradient-subtle overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1 fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium mb-6">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Available for Software Developer roles
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4 leading-[1.1]">
              Vansh Raheja
            </h1>

            <p className="text-lg md:text-xl text-primary font-medium mb-5">
              Aspiring Software Developer · FastAPI & AI Enthusiast
            </p>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              I develop efficient backend systems and real-world applications using FastAPI, AI, and modern development practices.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#projects">
                  View Projects <ArrowRight className="ml-1.5" size={16} />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/resume.pdf" download>
                  <Download className="mr-1.5" size={16} /> Download Resume
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href="#contact">
                  <Mail className="mr-1.5" size={16} /> Contact Me
                </a>
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end fade-in-up">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-accent rounded-3xl opacity-10 blur-2xl" />
              <div className="relative h-48 w-48 md:h-64 md:w-64 rounded-3xl overflow-hidden ring-4 ring-background shadow-elevated">
                <img
                  src="https://i.postimg.cc/rwtfGdmy/formalphoto.jpg"
                  alt="Vansh Raheja, Software Developer"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-14 md:mt-20 pt-10 border-t border-border">
          {[
            { value: "8.05", label: "CGPA" },
            { value: "92%", label: "ML Accuracy" },
            { value: "100+", label: "DSA Solved" },
            { value: "2027", label: "Graduating" },
          ].map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="text-2xl md:text-3xl font-bold text-foreground">{s.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
