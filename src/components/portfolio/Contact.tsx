import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { z } from "zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const contacts = [
  { icon: Mail, label: "Email", value: "work.vanshraheja@gmail.com", href: "mailto:work.vanshraheja@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 99539 22202", href: "tel:+919953922202" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/vanshraheja", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", value: "github.com/vanshraheja", href: "https://github.com" },
];

export const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast({
        title: "Please check your inputs",
        description: result.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    // Open mail client with prefilled message
    const subject = encodeURIComponent(`Portfolio Contact — ${result.data.name}`);
    const body = encodeURIComponent(`${result.data.message}\n\n— ${result.data.name} (${result.data.email})`);
    window.location.href = `mailto:work.vanshraheja@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSubmitting(false);
      toast({ title: "Opening your email client", description: "Thanks for reaching out!" });
      setForm({ name: "", email: "", message: "" });
    }, 600);
  };

  return (
    <section id="contact" className="bg-secondary/40 border-t border-border">
      <div className="section-container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Open to Software Developer roles, internships, and interesting collaborations. Let's talk.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border card-hover"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <c.icon className="text-primary" size={18} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground font-medium">{c.label}</div>
                  <div className="text-sm font-semibold text-foreground truncate">{c.value}</div>
                </div>
              </a>
            ))}
          </div>

          <Card className="p-6 border-border bg-background">
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={form.name}
                  maxLength={100}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  maxLength={255}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={form.message}
                  maxLength={1000}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about the role or opportunity..."
                  rows={4}
                  className="mt-1.5"
                />
              </div>
              <Button type="submit" className="w-full" disabled={submitting}>
                <Send size={16} className="mr-1.5" />
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
