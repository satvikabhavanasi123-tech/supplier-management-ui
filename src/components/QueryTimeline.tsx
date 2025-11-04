import { CheckCircle2, Circle, Clock } from "lucide-react";

interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  status: "completed" | "current" | "pending";
}

interface QueryTimelineProps {
  events: TimelineEvent[];
}

const QueryTimeline = ({ events }: QueryTimelineProps) => {
  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <div key={event.id} className="flex gap-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
          <div className="flex flex-col items-center">
            <div
              className={`p-2 rounded-full ${
                event.status === "completed"
                  ? "bg-success/10 text-success"
                  : event.status === "current"
                  ? "bg-primary/10 text-primary"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {event.status === "completed" ? (
                <CheckCircle2 className="h-5 w-5" />
              ) : event.status === "current" ? (
                <Clock className="h-5 w-5 animate-pulse" />
              ) : (
                <Circle className="h-5 w-5" />
              )}
            </div>
            {index < events.length - 1 && (
              <div
                className={`w-0.5 h-12 mt-2 ${
                  event.status === "completed" ? "bg-success/30" : "bg-border"
                }`}
              />
            )}
          </div>
          <div className="flex-1 pb-8">
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-medium">{event.title}</h4>
              <span className="text-xs text-muted-foreground">{event.date}</span>
            </div>
            <p className="text-sm text-muted-foreground">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QueryTimeline;
