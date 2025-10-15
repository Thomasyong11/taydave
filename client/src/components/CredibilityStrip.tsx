import { Badge } from "@/components/ui/badge";
import { Shield, Building2, Heart } from "lucide-react";

export default function CredibilityStrip() {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-gold" />
            <span className="text-foreground font-medium" data-testid="text-credibility-neutral">
              Neutral advisory
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Building2 className="h-5 w-5 text-gold" />
            <span className="text-foreground font-medium" data-testid="text-credibility-government">
              Government collaboration
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Heart className="h-5 w-5 text-gold" />
            <span className="text-foreground font-medium" data-testid="text-credibility-community">
              Community-first approach
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
