import { Link } from "react-router-dom";
import { Building2, MessageSquare, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import StatusBadge from "./StatusBadge";

interface Query {
  id: string;
  subject: string;
  status: "pending" | "in-progress" | "resolved" | "urgent";
  date: string;
}

interface SupplierCardProps {
  id: string;
  name: string;
  category: string;
  activeQueries: number;
  recentQuery: Query;
}

const SupplierCard = ({ id, name, category, activeQueries, recentQuery }: SupplierCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 group hover:border-primary/40 animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-accent group-hover:bg-primary/10 transition-colors">
              <Building2 className="h-5 w-5 text-accent-foreground group-hover:text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                {name}
              </h3>
              <p className="text-sm text-muted-foreground">{category}</p>
            </div>
          </div>
          <StatusBadge status={recentQuery.status} />
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MessageSquare className="h-4 w-4" />
          <span>{activeQueries} active {activeQueries === 1 ? 'query' : 'queries'}</span>
        </div>
        
        <div className="p-3 rounded-lg bg-muted/50 space-y-2">
          <p className="text-sm font-medium line-clamp-1">{recentQuery.subject}</p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            <span>{recentQuery.date}</span>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Link
            to={`/query/${recentQuery.id}`}
            className="flex-1 text-center px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors text-sm font-medium"
          >
            View Query
          </Link>
          <Link
            to={`/new-query?supplier=${id}`}
            className="flex-1 text-center px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-colors text-sm font-medium shadow-sm hover:shadow-md"
          >
            New Query
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default SupplierCard;
