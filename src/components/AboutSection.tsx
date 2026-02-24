const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-mono text-sm tracking-widest text-primary mb-8">
          // about me
        </h2>
        <div className="space-y-6 text-lg text-secondary-foreground leading-relaxed">
          <p>
            I'm <span className="text-foreground font-medium">Reyansh Gugnani</span>, a student passionate about 
            <span className="text-primary"> robotics</span> and building things that move, think, and interact 
            with the physical world.
          </p>
          <p className="text-muted-foreground">
            From designing circuits to writing control algorithms, I love working at the 
            intersection of mechanical engineering, electronics, and software. I'm always 
            exploring new ways to push the boundaries of what autonomous systems can do.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Robotics", "Embedded Systems", "Programming", "Problem Solving"].map((skill) => (
            <div
              key={skill}
              className="border border-glow rounded-lg px-4 py-3 text-center text-sm font-mono text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
