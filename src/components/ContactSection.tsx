import { Linkedin, Mail, Github } from "lucide-react";

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/reyanshgugnani",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:hello@reyansh.dev",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "#",
    icon: Github,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-mono text-sm tracking-widest text-primary mb-8">
          // get in touch
        </h2>
        <p className="text-2xl md:text-3xl font-light text-foreground mb-4">
          Let's build something <span className="text-gradient font-medium">together</span>.
        </p>
        <p className="text-muted-foreground mb-12 max-w-md mx-auto">
          I'm always open to discussing robotics projects, collaborations, or just geeking out about tech.
        </p>

        <div className="flex items-center justify-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
            >
              <link.icon className="w-4 h-4" />
              <span className="text-sm font-mono">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
