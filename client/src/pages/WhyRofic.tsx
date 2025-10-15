import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import { CheckCircle } from "lucide-react";

const proofPoints = [
  {
    title: "Neutrality",
    description: "We serve as independent advisors, not direct participants in project execution.",
  },
  {
    title: "Public-Sector Literacy",
    description: "Deep understanding of government processes, funding mechanisms, and policy frameworks.",
  },
  {
    title: "Risk Awareness",
    description: "Proactive identification and mitigation of regulatory, environmental, and community risks.",
  },
  {
    title: "Transparent Process",
    description: "Clear communication and documentation at every stage of coordination.",
  },
];

export default function WhyRofic() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" data-testid="text-why-title">
                Why ROFIC
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed" data-testid="text-why-subtitle">
                Trusted coordination for complex infrastructure projects.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {proofPoints.map((point, index) => (
                <div key={index} className="flex gap-4" data-testid={`div-proof-${index}`}>
                  <CheckCircle className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground" data-testid={`text-proof-title-${index}`}>
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed" data-testid={`text-proof-desc-${index}`}>
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-foreground" data-testid="text-faq-title">
                Frequently Asked Questions
              </h2>
              <FAQAccordion />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
