import { Link, useLocation } from "react-router-dom";
import { Package, ListChecks } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <ListChecks className="h-5 w-5 text-primary" />
            </div>
            <span className="font-semibold text-lg">QA Query Manager</span>
          </Link>
          
          <div className="flex gap-2">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                isActive("/")
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "hover:bg-accent text-muted-foreground hover:text-accent-foreground"
              }`}
            >
              <Package className="h-4 w-4" />
              <span className="hidden sm:inline">Suppliers</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
