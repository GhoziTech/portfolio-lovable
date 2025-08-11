import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent", description: "Thanks! I will get back to you shortly." });
    }, 800);
  };

  return (
    <section id="contact" className="container mx-auto py-20">
      <h2 className="font-display text-3xl md:text-4xl mb-10">Contact</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={onSubmit} className="rounded-xl border p-6 space-y-4 bg-card">
          <div>
            <label className="block text-sm mb-2">Name</label>
            <input className="w-full rounded-md border px-3 h-11 focus:outline-none focus:ring-2 focus:ring-ring transition-shadow" placeholder="Your name" required />
          </div>
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input className="w-full rounded-md border px-3 h-11 focus:outline-none focus:ring-2 focus:ring-ring" type="email" placeholder="you@company.com" required />
          </div>
          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea className="w-full rounded-md border px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-ring" placeholder="How can I help?" required />
          </div>
          <Button type="submit" variant="hero" size="lg" disabled={loading}>{loading ? "Sending..." : "Send Message"}</Button>
        </form>
        <aside className="rounded-xl border p-6 bg-card">
          <p className="text-muted-foreground mb-4">Prefer email or socials?</p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3"><Mail /> <a className="story-link" href="mailto:hello@ghozitech.com">hello@ghozitech.com</a></li>
            <li className="flex items-center gap-3"><Github /> <a className="story-link" href="#" aria-label="GitHub">GitHub</a></li>
            <li className="flex items-center gap-3"><Linkedin /> <a className="story-link" href="#" aria-label="LinkedIn">LinkedIn</a></li>
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
