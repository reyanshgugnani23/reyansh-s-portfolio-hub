const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <a href="#" className="font-mono text-sm text-primary font-medium">
          RG<span className="text-muted-foreground">.</span>
        </a>
        <div className="flex items-center gap-8">
          {["about", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="font-mono text-xs tracking-wider text-muted-foreground hover:text-primary transition-colors uppercase"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
