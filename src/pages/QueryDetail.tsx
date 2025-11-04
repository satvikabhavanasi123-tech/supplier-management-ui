import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Building2, Calendar, User, FileText } from "lucide-react";
import Navigation from "@/components/Navigation";
import StatusBadge from "@/components/StatusBadge";
import QueryTimeline from "@/components/QueryTimeline";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const mockQueryData = {
  id: "q1",
  subject: "Allergen certification for organic tomatoes",
  description: "We need updated allergen certification documents for the organic tomatoes supplied in Q1 2024. Please provide documentation showing compliance with EU regulations 1169/2011 regarding food allergen labeling.",
  status: "pending" as const,
  supplier: {
    id: "1",
    name: "FreshProduce Co.",
    category: "Vegetables & Fruits",
  },
  submittedBy: "Jane Smith",
  submittedDate: "2024-01-15",
  priority: "Medium",
  timeline: [
    {
      id: "1",
      title: "Query Submitted",
      description: "Initial query sent to supplier",
      date: "Jan 15, 2024",
      status: "completed" as const,
    },
    {
      id: "2",
      title: "Awaiting Response",
      description: "Waiting for supplier to review and respond",
      date: "Jan 15, 2024",
      status: "current" as const,
    },
    {
      id: "3",
      title: "Documents Received",
      description: "Supplier provides requested documentation",
      date: "Expected: Jan 22, 2024",
      status: "pending" as const,
    },
    {
      id: "4",
      title: "Review Complete",
      description: "QA team reviews and approves documents",
      date: "Expected: Jan 25, 2024",
      status: "pending" as const,
    },
  ],
};

const QueryDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 animate-fade-in"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Suppliers
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="animate-scale-in shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <CardTitle className="text-2xl">{mockQueryData.subject}</CardTitle>
                  <StatusBadge status={mockQueryData.status} />
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    <span>{mockQueryData.supplier.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{mockQueryData.submittedBy}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{mockQueryData.submittedDate}</span>
                  </div>
                </div>
              </CardHeader>
              <Separator />
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Description
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {mockQueryData.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-up shadow-lg">
              <CardHeader>
                <CardTitle>Query Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <QueryTimeline events={mockQueryData.timeline} />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="animate-slide-in-right shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Query Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Status</p>
                  <StatusBadge status={mockQueryData.status} showIcon={false} />
                </div>
                <Separator />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Priority</p>
                  <p className="font-medium">{mockQueryData.priority}</p>
                </div>
                <Separator />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Supplier Category</p>
                  <p className="font-medium">{mockQueryData.supplier.category}</p>
                </div>
                <Separator />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Query ID</p>
                  <p className="font-mono text-sm">{mockQueryData.id}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-slide-in-right shadow-lg" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="text-lg">Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full">
                  Send Reminder
                </Button>
                <Button variant="outline" className="w-full">
                  Add Note
                </Button>
                <Button variant="outline" className="w-full">
                  Upload Document
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QueryDetail;
