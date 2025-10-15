import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Hammer, Shield, Users, DollarSign, BarChart3, Handshake } from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "Infrastructure Readiness",
    description: "Assessing and coordinating infrastructure capabilities to support regional development initiatives.",
  },
  {
    icon: Shield,
    title: "Regulatory & Environmental Guidance",
    description: "Navigating complex regulatory frameworks and environmental compliance requirements.",
  },
  {
    icon: Handshake,
    title: "Partnership & Engagement Strategy",
    description: "Facilitating meaningful partnerships with Indigenous communities and stakeholders.",
  },
  {
    icon: DollarSign,
    title: "Investment & Funding Advisory",
    description: "Identifying funding opportunities and coordinating grant application processes.",
  },
  {
    icon: BarChart3,
    title: "Impact & Benefits Planning",
    description: "Planning for long-term community benefits and sustainable development outcomes.",
  },
  {
    icon: Users,
    title: "Coordination Support",
    description: "Bringing together the right people and organizations at the right time.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" data-testid="text-services-title">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed" data-testid="text-services-subtitle">
                Strategic coordination and advisory services for complex infrastructure projects in Ontario's Ring of Fire.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} index={index} />
              ))}
            </div>

            <div className="bg-gold/10 border border-gold/20 rounded-lg p-8 text-center">
              <p className="text-lg text-foreground font-medium" data-testid="text-services-disclaimer">
                ROFIC acts as advisor and connector; delivery is performed by partner firms.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
