import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Autonomous Line Follower",
    description: "A PID-controlled robot that navigates complex line patterns with high precision using IR sensors and real-time adjustments.",
    tags: ["Arduino", "PID Control", "Sensors"],
  },
  {
    title: "Gesture-Controlled Arm",
    description: "A robotic arm controlled via hand gestures using flex sensors and an accelerometer, enabling intuitive manipulation.",
    tags: ["Servo Motors", "IMU", "Embedded C"],
  },
  {
    title: "Smart Environment Monitor",
    description: "An IoT-based system that tracks temperature, humidity, and air quality, displaying live data on a web dashboard.",
    tags: ["IoT", "Sensors", "Web Dashboard"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-sm tracking-widest text-primary mb-12">
          // projects
        </h2>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group border border-border rounded-lg p-6 md:p-8 hover:border-primary/20 hover:glow transition-all duration-300 bg-card/50"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-full border border-border text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
