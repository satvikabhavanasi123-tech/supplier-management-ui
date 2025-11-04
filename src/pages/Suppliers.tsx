import { useState } from "react";
import { Plus, Search, MessageSquare, Clock, AlertCircle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import SupplierCard from "@/components/SupplierCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const mockSuppliers = [
  {
    id: "1",
    name: "FreshProduce Co.",
    category: "Vegetables & Fruits",
    activeQueries: 2,
    recentQuery: {
      id: "q1",
      subject: "Allergen certification for organic tomatoes",
      status: "pending" as const,
      date: "2024-01-15",
    },
  },
  {
    id: "2",
    name: "DairyBest Suppliers",
    category: "Dairy Products",
    activeQueries: 1,
    recentQuery: {
      id: "q2",
      subject: "Lactose-free milk shelf life inquiry",
      status: "in-progress" as const,
      date: "2024-01-14",
    },
  },
  {
    id: "3",
    name: "GrainMasters Ltd.",
    category: "Grains & Cereals",
    activeQueries: 3,
    recentQuery: {
      id: "q3",
      subject: "Gluten testing certificates needed",
      status: "urgent" as const,
      date: "2024-01-16",
    },
  },
  {
    id: "4",
    name: "SeaHarvest Inc.",
    category: "Seafood",
    activeQueries: 1,
    recentQuery: {
      id: "q4",
      subject: "Mercury level testing documentation",
      status: "resolved" as const,
      date: "2024-01-10",
    },
  },
  {
    id: "5",
    name: "PackagePro Solutions",
    category: "Packaging Materials",
    activeQueries: 2,
    recentQuery: {
      id: "q5",
      subject: "BPA-free certification for containers",
      status: "in-progress" as const,
      date: "2024-01-13",
    },
  },
];

const Suppliers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredSuppliers = mockSuppliers.filter((supplier) => {
    const matchesSearch =
      supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      supplier.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || supplier.recentQuery.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Supplier Management
          </h1>
          <p className="text-muted-foreground">
            Track and manage queries with your food suppliers
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow animate-fade-in">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Total Queries</span>
              <div className="p-2 rounded-lg bg-primary/10">
                <MessageSquare className="h-4 w-4 text-primary" />
              </div>
            </div>
            <p className="text-3xl font-bold">{mockSuppliers.reduce((acc, s) => acc + s.activeQueries, 0)}</p>
          </div>
          
          <div className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow animate-fade-in" style={{ animationDelay: "0.05s" }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Pending</span>
              <div className="p-2 rounded-lg bg-warning/10">
                <Clock className="h-4 w-4 text-warning" />
              </div>
            </div>
            <p className="text-3xl font-bold">{mockSuppliers.filter(s => s.recentQuery.status === 'pending').length}</p>
          </div>
          
          <div className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Urgent</span>
              <div className="p-2 rounded-lg bg-destructive/10">
                <AlertCircle className="h-4 w-4 text-destructive" />
              </div>
            </div>
            <p className="text-3xl font-bold">{mockSuppliers.filter(s => s.recentQuery.status === 'urgent').length}</p>
          </div>
          
          <div className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Resolved</span>
              <div className="p-2 rounded-lg bg-success/10">
                <CheckCircle2 className="h-4 w-4 text-success" />
              </div>
            </div>
            <p className="text-3xl font-bold">{mockSuppliers.filter(s => s.recentQuery.status === 'resolved').length}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8 animate-fade-in-up">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search suppliers by name or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={statusFilter} onValueChange={(value) => setStatusFilter(value)}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="urgent">Urgent</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
            </SelectContent>
          </Select>

          <Link to="/new-query">
            <Button className="w-full md:w-auto shadow-md hover:shadow-lg transition-shadow">
              <Plus className="h-4 w-4 mr-2" />
              New Query
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSuppliers.map((supplier, index) => (
            <div key={supplier.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <SupplierCard {...supplier} />
            </div>
          ))}
        </div>

        {filteredSuppliers.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-muted-foreground">No suppliers found matching your criteria</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Suppliers;
