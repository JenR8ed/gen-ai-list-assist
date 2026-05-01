import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Roadmap() {
  const phases = [
    {
      id: "phase-1",
      name: "Phase 1: Setup & Initialization",
      description: "Build the isolated local execution environment and sync protocols.",
      tasks: [
        { id: "1.0", title: "Dev Environment Sync", description: "Run handoff_workspace.sh", status: false },
        { id: "1.0.1", title: "Audit Sync Scripts", description: "Verify PS 7.6.1 compatibility", status: false },
        { id: "1.1", title: "WSL2 Initialization", description: "wsl --install", status: true },
        { id: "1.2", title: "Branded Naming", description: "Rename to AI-List-Assist-WSL", status: false },
        { id: "1.3", title: "Visual Sanitization", description: "Set Terminal colors", status: false },
        { id: "1.4", title: "Docker Deployment", description: "Install Docker & Redis Stack", status: false },
        { id: "1.5", title: "Space Agent Setup", description: "Clone & node space supervise", status: false }
      ]
    },
    {
      id: "phase-2",
      name: "Phase 2: Development & Integration",
      description: "Connect local execution to cloud reasoning (Gemini 3.1 Pro).",
      tasks: [
        { id: "2.1", title: "MCP Server Generation", description: "Create mcp_redis_server.py", status: true },
        { id: "2.2", title: "Antigravity Handoff", description: "Register MCP bridge", status: false },
        { id: "2.3", title: "VLM Expert Prompting", description: "Configure Gemini 3.1 Pro", status: false },
        { id: "2.4", title: "Deep Research Integration", description: "Connect Deep Research Agent", status: false },
        { id: "2.5", title: "Waterfall Implementation", description: "Run waterfall_monitor.py", status: true }
      ]
    },
    {
      id: "phase-3",
      name: "Phase 3: Testing & Deployment",
      description: "Launch review dashboard and package for students.",
      tasks: [
        { id: "3.1", title: "Streamlit Dashboard", description: "Launch review_dashboard.py", status: true },
        { id: "3.2", title: "Secure Tunneling", description: "Expose via localtunnel", status: false },
        { id: "3.3", title: "Pre-Flight Sanitization", description: "Doppler logout & Redis flush", status: false },
        { id: "3.4", title: "Sanitization & Export", description: "wsl --export to .tar", status: false },
        { id: "3.5", title: "GitHub Aggregation", description: "Upload README & Dev Notebook", status: true },
        { id: "3.6", title: "NotebookLM Sync", description: "Upload dev_notebook.md", status: false }
      ]
    }
  ];

  const getCompletionPercentage = (tasks: any[]) => {
    const completed = tasks.filter(t => t.status).length;
    return Math.round((completed / tasks.length) * 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 md:py-16 bg-card border-b border-border">
        <div className="container">
          <Link href="/">
            <Button variant="ghost" className="mb-6">← Back to Home</Button>
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Development Roadmap
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Master Tracker for the AI List Assist project. All tasks are synchronized with the GitHub repository and development environment.
          </p>
        </div>
      </section>

      {/* Phases */}
      <section className="py-16 md:py-24">
        <div className="container space-y-12">
          {phases.map((phase, phaseIdx) => {
            const completion = getCompletionPercentage(phase.tasks);
            return (
              <div key={phase.id} className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-foreground">{phase.name}</h2>
                    <Badge className="bg-accent text-accent-foreground text-sm px-3 py-1">
                      {completion}% Complete
                    </Badge>
                  </div>
                  <p className="text-lg text-muted-foreground">{phase.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-accent h-full transition-all duration-500"
                      style={{ width: `${completion}%` }}
                    />
                  </div>
                </div>

                {/* Tasks */}
                <div className="grid gap-4">
                  {phase.tasks.map((task) => (
                    <Card
                      key={task.id}
                      className={`p-6 card-hover border-l-4 ${
                        task.status ? 'border-accent bg-accent/5' : 'border-muted'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                          {task.status ? (
                            <CheckCircle2 className="text-accent" size={24} />
                          ) : (
                            <Circle className="text-muted-foreground" size={24} />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm font-mono font-semibold text-accent">{task.id}</span>
                            <h3 className="text-lg font-semibold text-foreground">{task.title}</h3>
                            {task.status && (
                              <Badge className="bg-accent/20 text-accent text-xs">Completed</Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground">{task.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Summary Stats */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-8">Overall Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6 accent-border">
              <p className="text-muted-foreground text-sm mb-2">Total Tasks</p>
              <p className="text-4xl font-bold text-foreground">
                {phases.reduce((sum, p) => sum + p.tasks.length, 0)}
              </p>
            </Card>
            <Card className="p-6 accent-border">
              <p className="text-muted-foreground text-sm mb-2">Completed</p>
              <p className="text-4xl font-bold text-accent">
                {phases.reduce((sum, p) => sum + p.tasks.filter(t => t.status).length, 0)}
              </p>
            </Card>
            <Card className="p-6 accent-border">
              <p className="text-muted-foreground text-sm mb-2">In Progress</p>
              <p className="text-4xl font-bold text-secondary">
                {phases.filter(p => p.id === 'phase-2').reduce((sum, p) => sum + p.tasks.filter(t => !t.status).length, 0)}
              </p>
            </Card>
            <Card className="p-6 accent-border">
              <p className="text-muted-foreground text-sm mb-2">Overall Progress</p>
              <p className="text-4xl font-bold text-accent">
                {Math.round((phases.reduce((sum, p) => sum + p.tasks.filter(t => t.status).length, 0) / phases.reduce((sum, p) => sum + p.tasks.length, 0)) * 100)}%
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container text-center space-y-6">
          <h3 className="text-2xl font-bold text-foreground">View Full Details</h3>
          <p className="text-muted-foreground">
            For complete documentation and implementation details, visit the GitHub repository.
          </p>
          <a
            href="https://github.com/JenR8ed/gen-ai-list-assist/blob/main/ROADMAP.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/30">
              View Full Roadmap on GitHub
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
