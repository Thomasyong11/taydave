import { Button } from "@/components/ui/button";
import heroImage from "@assets/stock_images/road_construction_in_9e70e330.jpg";

export default function Hero() {
  return (
    <div className="relative h-[80vh] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/50" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" data-testid="text-hero-title">
          Connecting Vision, Policy, and Progress.
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed" data-testid="text-hero-subtitle">
          ROFIC helps governments and investors coordinate infrastructure, permitting, and partnerships for Ontario's Ring of Fire.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base" data-testid="button-partner-hero">
            Partner With Us
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-base bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
            data-testid="button-learn-more"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
