import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface PartnerCategoryProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function PartnerCategory({ icon: Icon, title, description, index }: PartnerCategoryProps) {
  return (
    <Card className="p-6 hover-elevate text-center" data-testid={`card-partner-${index}`}>
      <div className="flex justify-center mb-4">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-card-foreground" data-testid={`text-partner-title-${index}`}>
        {title}
      </h3>
      <p className="text-sm text-muted-foreground" data-testid={`text-partner-desc-${index}`}>
        {description}
      </p>
    </Card>
  );
}
