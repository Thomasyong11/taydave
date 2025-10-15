import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import RoleCards from "@/components/RoleCards";
import CredibilityStrip from "@/components/CredibilityStrip";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <RoleCards />
        <CredibilityStrip />
        
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-cta-title">
              Ready to move your project forward?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90" data-testid="text-cta-subtitle">
              Let's discuss how ROFIC can support your infrastructure goals.
            </p>
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" data-testid="button-get-started">
              Get Started
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
