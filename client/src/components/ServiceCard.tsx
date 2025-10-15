import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  return (
    <Card className="p-6 hover-elevate" data-testid={`card-service-${index}`}>
      <Icon className="h-10 w-10 text-primary mb-4" />
      <h3 className="text-xl font-semibold mb-3 text-card-foreground" data-testid={`text-service-title-${index}`}>
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed" data-testid={`text-service-desc-${index}`}>
        {description}
      </p>
    </Card>
  );
}
