import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FileText, Database, Settings, BookOpen } from "lucide-react";

export default function Documentation() {
  const docs = [
    {
      icon: BookOpen,
      title: "README.md",
      description: "Project overview, core architecture, and getting started guide.",
      url: "https://github.com/JenR8ed/gen-ai-list-assist/blob/main/README.md",
      tags: ["Overview", "Architecture"]
    },
    {
      icon: FileText,
      title: "ROADMAP.md",
      description: "Master tracker with all execution phases and task status.",
      url: "https://github.com/JenR8ed/gen-ai-list-assist/blob/main/ROADMAP.md",
      tags: ["Tracking", "Phases"]
    },
    {
      icon: Settings,
      title: "SOP_Setup.md",
      description: "Standard Operating Procedure for local instance setup.",
      url: "https://github.com/JenR8ed/gen-ai-list-assist/blob/main/SOP_Setup.md",
      tags: ["Setup", "Environment"]
    },
    {
      icon: Database,
      title: "dev_notebook.md",
      description: "Development lab notebook and interactive lab journal.",
      url: "https://github.com/JenR8ed/gen-ai-list-assist/blob/main/dev_notebook.md",
      tags: ["Logs", "Journal"]
    }
  ];

  const components = [
    {
      name: "mcp_redis_server.py",
      description: "Enterprise-grade Redis server for MCP state management.",
      language: "Python",
      features: ["State Management", "JSON Serialization", "Redis Integration"]
    },
    {
      name: "review_dashboard.py",
      description: "Streamlit-based dashboard for pipeline monitoring.",
      language: "Python",
      features: ["Real-time Monitoring", "Agent States", "Data Refresh"]
    },
    {
      name: "waterfall_monitor.py",
      description: "Sequential task execution logger for pipeline health.",
      language: "Python",
      features: ["Task Logging", "Performance Tracking", "Status Reporting"]
    },
    {
      name: "deploy_services.sh",
      description: "Sanitized deployment script for all core services.",
      language: "Bash",
      features: ["Doppler Integration", "Service Startup", "Automated Deployment"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 md:py-16 bg-card border-b border-border">
        <div className="container">
          <Link href="/">
            <Button variant="ghost" className="mb-6">← Back to Home</Button>
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Documentation
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Complete reference for the AI List Assist project, including guides, SOPs, and component documentation.
          </p>
        </div>
      </section>

      {/* Documentation Files */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-8">Documentation Files</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {docs.map((doc, idx) => {
              const Icon = doc.icon;
              return (
                <a
                  key={idx}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <Card className="p-6 card-hover border-l-4 border-accent h-full hover:shadow-lg">
                    <div className="flex items-start gap-4">
                      <Icon className="text-accent flex-shrink-0 mt-1" size={28} />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {doc.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{doc.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {doc.tags.map((tag) => (
                            <Badge key={tag} className="bg-accent/20 text-accent text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Components */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-8">Core Components</h2>
          <div className="space-y-6">
            {components.map((comp, idx) => (
              <Card key={idx} className="p-6 accent-border">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-foreground font-mono">
                      {comp.name}
                    </h3>
                    <Badge className="bg-secondary text-secondary-foreground">
                      {comp.language}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{comp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {comp.features.map((feature) => (
                      <Badge key={feature} className="bg-accent/10 text-accent text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Environment Reference */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-8">Environment Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 accent-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">System Requirements</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-accent">•</span>
                  <span><strong>OS:</strong> Ubuntu 22.04 (WSL2)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">•</span>
                  <span><strong>Python:</strong> 3.11+</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">•</span>
                  <span><strong>Redis:</strong> Stack 7.0+</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">•</span>
                  <span><strong>Docker:</strong> Latest</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 accent-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Dependencies</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-accent">•</span>
                  <span><strong>Doppler CLI:</strong> Secret management</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">•</span>
                  <span><strong>Streamlit:</strong> Dashboard UI</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">•</span>
                  <span><strong>Redis-py:</strong> Python client</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">•</span>
                  <span><strong>Gemini API:</strong> Cloud reasoning</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 md:py-16 bg-accent/5 border-t border-border">
        <div className="container text-center space-y-6">
          <h3 className="text-2xl font-bold text-foreground">Ready to Get Started?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow the SOP_Setup.md guide to initialize your local development environment.
          </p>
          <a
            href="https://github.com/JenR8ed/gen-ai-list-assist"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/30">
              View Repository
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
