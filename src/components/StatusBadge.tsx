import { CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Status = "pending" | "in-progress" | "resolved" | "urgent";

interface StatusBadgeProps {
  status: Status;
  showIcon?: boolean;
}

const StatusBadge = ({ status, showIcon = true }: StatusBadgeProps) => {
  const config = {
    pending: {
      label: "Pending",
      icon: Clock,
      className: "bg-warning/10 text-warning border-warning/20 hover:bg-warning/20",
    },
    "in-progress": {
      label: "In Progress",
      icon: Clock,
      className: "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20",
    },
    resolved: {
      label: "Resolved",
      icon: CheckCircle2,
      className: "bg-success/10 text-success border-success/20 hover:bg-success/20",
    },
    urgent: {
      label: "Urgent",
      icon: AlertCircle,
      className: "bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20",
    },
  };

  const { label, icon: Icon, className } = config[status];

  return (
    <Badge variant="outline" className={className}>
      {showIcon && <Icon className="h-3 w-3 mr-1" />}
      {label}
    </Badge>
  );
};

export default StatusBadge;
