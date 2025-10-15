import { Card } from "@/components/ui/card";
import { FileText, Users, Network, ClipboardCheck, DollarSign } from "lucide-react";

const roles = [
  {
    icon: FileText,
    title: "Policy & Strategy Alignment",
    description: "Coordinating government priorities with project objectives.",
  },
  {
    icon: Users,
    title: "Indigenous Partnership Facilitation",
    description: "Building meaningful relationships with Indigenous communities.",
  },
  {
    icon: Network,
    title: "Contractor & Vendor Network Access",
    description: "Connecting you with vetted, qualified partners.",
  },
  {
    icon: ClipboardCheck,
    title: "Feasibility & Environmental Coordination",
    description: "Ensuring regulatory compliance and environmental stewardship.",
  },
  {
    icon: DollarSign,
    title: "Funding & Grant Advisory",
    description: "Navigating funding opportunities and application processes.",
  },
];

export default function RoleCards() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground" data-testid="text-our-role-title">
          Our Role
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <Card 
              key={index} 
              className="p-6 hover-elevate"
              data-testid={`card-role-${index}`}
            >
              <role.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-card-foreground" data-testid={`text-role-title-${index}`}>
                {role.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed" data-testid={`text-role-desc-${index}`}>
                {role.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
