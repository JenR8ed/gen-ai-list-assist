import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github, Code2, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const logs = [
    {
      date: "2026-04-30",
      title: "Initial Repository Structure",
      description: "Created gen-ai-list-assist repository with core pipeline files.",
      items: [
        "mcp_redis_server.py: Core state management",
        "review_dashboard.py: Monitoring UI",
        "waterfall_monitor.py: Execution tracking",
        "deploy_services.sh: Deployment automation",
        "SOP_Setup.md: Environment setup guide"
      ]
    },
    {
      date: "2026-04-30",
      title: "Synchronization & Roadmap",
      description: "Integrated Master Tracker and created development documentation.",
      items: [
        "ROADMAP.md: Master Tracker for execution phases",
        "README.md: Architecture overview",
        "dev_notebook.md: Interactive lab journal"
      ]
    }
  ];

  const environment = {
    os: "Ubuntu 22.04 (WSL2)",
    shell: "PowerShell 7.6.1 (Host) / Bash (Guest)",
    secrets: "Doppler (Project: ai-list-assist)",
    ide: "Antigravity IDE (Sanitized configuration)"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  AI List Assist
                </h1>
                <p className="text-xl text-muted-foreground font-medium">
                  Development Lab Notebook & Source of Truth
                </p>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
                Enterprise-grade, hybrid agentic e-commerce pipeline leveraging Gemini 3.1 Pro, Space Agent, and MCP for sanitized execution within a local-first WSL2 environment.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://github.com/JenR8ed/gen-ai-list-assist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
                >
                  <Github size={20} />
                  View Repository
                  <ExternalLink size={16} />
                </a>
                <Link href="/roadmap">
                  <Button variant="outline" className="border-2 border-accent text-accent hover:bg-accent/10">
                    View Roadmap
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl animate-slide-up">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663552240243/UkPbNjvbbgoxS5DYcvwtJX/ai-list-assist-hero-jQ62E3oZ9Y2WcFTVTUx2Bw.webp"
                alt="AI List Assist Pipeline Architecture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-foreground">Project Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 card-hover border-l-4 border-accent">
              <div className="flex items-start gap-4">
                <Code2 className="text-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Core Architecture</h3>
                  <p className="text-muted-foreground">
                    Gemini 3.1 Pro reasoning engine with Space Agent execution and MCP bridging for sanitized local-to-cloud integration.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 card-hover border-l-4 border-secondary">
              <div className="flex items-start gap-4">
                <Zap className="text-secondary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Execution Environment</h3>
                  <p className="text-muted-foreground">
                    Sanitized WSL2 (Ubuntu) instance with Doppler CLI for secret management and Redis Stack for state persistence.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 card-hover border-l-4 border-accent">
              <div className="flex items-start gap-4">
                <Github className="text-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Development Sync</h3>
                  <p className="text-muted-foreground">
                    Master Tracker and interactive lab journal ensure all development stays synchronized with the roadmap.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Logs */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-foreground">Development Logs</h2>
          <div className="space-y-8">
            {logs.map((log, idx) => (
              <div key={idx} className="timeline-item">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-accent">{log.date}</span>
                    <h3 className="text-2xl font-bold text-foreground">{log.title}</h3>
                  </div>
                  <p className="text-foreground/80">{log.description}</p>
                  <ul className="space-y-2 ml-4">
                    {log.items.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environment Specifications */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-foreground">Environment Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(environment).map(([key, value]) => (
              <Card key={key} className="p-6 accent-border">
                <h3 className="font-semibold text-lg mb-2 text-foreground capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <p className="text-muted-foreground font-mono text-sm">{value}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-accent/5 border-t border-border">
        <div className="container text-center space-y-6">
          <h2 className="text-4xl font-bold text-foreground">Ready to Explore?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive into the development roadmap, view technical documentation, or explore the GitHub repository to understand the full architecture.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link href="/roadmap">
              <Button className="bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/30">
                View Roadmap
              </Button>
            </Link>
            <a
              href="https://github.com/JenR8ed/gen-ai-list-assist"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="border-2 border-accent text-accent">
                GitHub Repository
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
