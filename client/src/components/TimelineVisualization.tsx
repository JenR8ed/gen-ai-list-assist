import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Filter, X } from "lucide-react";

interface TimelineEntry {
  date: string;
  title: string;
  description: string;
  items: string[];
  phase: "setup" | "development" | "testing";
  phaseLabel: string;
}

interface TimelineVisualizationProps {
  entries: TimelineEntry[];
}

export function TimelineVisualization({ entries }: TimelineVisualizationProps) {
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Get unique phases and dates
  const phases = useMemo(() => {
    const uniquePhases = Array.from(new Set(entries.map(e => e.phase)));
    return uniquePhases;
  }, [entries]);

  const dates = useMemo(() => {
    return Array.from(new Set(entries.map(e => e.date))).sort().reverse();
  }, [entries]);

  // Filter entries based on selected filters
  const filteredEntries = useMemo(() => {
    return entries.filter(entry => {
      const matchesPhase = selectedPhase ? entry.phase === selectedPhase : true;
      const matchesDate = selectedDate ? entry.date === selectedDate : true;
      return matchesPhase && matchesDate;
    });
  }, [entries, selectedPhase, selectedDate]);

  // Get phase color
  const getPhaseColor = (phase: string) => {
    switch (phase) {
      case "setup":
        return "bg-blue-100 text-blue-800";
      case "development":
        return "bg-purple-100 text-purple-800";
      case "testing":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Get phase label
  const getPhaseLabel = (phase: string) => {
    switch (phase) {
      case "setup":
        return "Phase 1: Setup";
      case "development":
        return "Phase 2: Development";
      case "testing":
        return "Phase 3: Testing";
      default:
        return "Unknown Phase";
    }
  };

  const clearFilters = () => {
    setSelectedPhase(null);
    setSelectedDate(null);
  };

  const hasActiveFilters = selectedPhase || selectedDate;

  return (
    <div className="space-y-8">
      {/* Filter Controls */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Filter size={20} className="text-accent" />
          <h3 className="text-lg font-semibold text-foreground">Filter Timeline</h3>
        </div>

        {/* Phase Filter */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            By Phase
          </label>
          <div className="flex flex-wrap gap-2">
            {phases.map((phase) => (
              <Button
                key={phase}
                onClick={() => setSelectedPhase(selectedPhase === phase ? null : phase)}
                variant={selectedPhase === phase ? "default" : "outline"}
                className={`transition-all duration-200 ${
                  selectedPhase === phase
                    ? "bg-accent text-accent-foreground"
                    : "border-accent text-accent hover:bg-accent/10"
                }`}
              >
                {getPhaseLabel(phase)}
              </Button>
            ))}
          </div>
        </div>

        {/* Date Filter */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            By Date
          </label>
          <div className="flex flex-wrap gap-2">
            {dates.map((date) => (
              <Button
                key={date}
                onClick={() => setSelectedDate(selectedDate === date ? null : date)}
                variant={selectedDate === date ? "default" : "outline"}
                className={`transition-all duration-200 flex items-center gap-2 ${
                  selectedDate === date
                    ? "bg-accent text-accent-foreground"
                    : "border-accent text-accent hover:bg-accent/10"
                }`}
              >
                <Calendar size={16} />
                {date}
              </Button>
            ))}
          </div>
        </div>

        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <Button
            onClick={clearFilters}
            variant="ghost"
            className="text-muted-foreground hover:text-foreground flex items-center gap-2"
          >
            <X size={16} />
            Clear Filters
          </Button>
        )}

        {/* Results Count */}
        <div className="text-sm text-muted-foreground pt-2">
          Showing {filteredEntries.length} of {entries.length} entries
        </div>
      </div>

      {/* Timeline Visualization */}
      <div className="space-y-6 pt-8 border-t border-border">
        {filteredEntries.length > 0 ? (
          filteredEntries.map((entry, index) => (
            <div key={index} className="timeline-item">
              <div className="space-y-3">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="text-sm font-mono font-semibold text-accent">
                        {entry.date}
                      </span>
                      <Badge className={`${getPhaseColor(entry.phase)} text-xs font-semibold`}>
                        {entry.phaseLabel}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{entry.title}</h3>
                  </div>

                  {/* Expand Button */}
                  <button
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                    className="mt-1 text-accent hover:text-accent/80 transition-colors"
                    aria-label={expandedIndex === index ? "Collapse" : "Expand"}
                  >
                    <svg
                      className={`w-6 h-6 transition-transform duration-300 ${
                        expandedIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </button>
                </div>

                {/* Description */}
                <p className="text-foreground/80">{entry.description}</p>

                {/* Expandable Items */}
                {expandedIndex === index && (
                  <div className="mt-4 space-y-2 pl-4 border-l-2 border-accent/30 animate-fade-in">
                    {entry.items.map((item, i) => (
                      <div
                        key={i}
                        className="text-muted-foreground flex items-start gap-3"
                      >
                        <span className="text-accent mt-1 flex-shrink-0">→</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No entries match the selected filters.
            </p>
            <Button
              onClick={clearFilters}
              variant="outline"
              className="mt-4 border-accent text-accent"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
