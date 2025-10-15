import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PartnerCategory from "@/components/PartnerCategory";
import { Building2, Leaf, Briefcase, Users } from "lucide-react";

const categories = [
  {
    icon: Building2,
    title: "Engineering Firms",
    description: "Structural and civil engineering specialists with regional expertise.",
  },
  {
    icon: Leaf,
    title: "Environmental Consultants",
    description: "Environmental assessment and sustainability experts.",
  },
  {
    icon: Briefcase,
    title: "Project Management",
    description: "Experienced PMO and project coordination teams.",
  },
  {
    icon: Users,
    title: "Indigenous-Owned Contractors",
    description: "Qualified Indigenous businesses and contractors.",
  },
];

export default function Partners() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" data-testid="text-partners-title">
                Partner Network
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed" data-testid="text-partners-subtitle">
                Connecting the right people to the right opportunities through our vetted network of qualified partners.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {categories.map((category, index) => (
                <PartnerCategory key={index} {...category} index={index} />
              ))}
            </div>

            <div className="bg-muted/30 rounded-lg p-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground text-center" data-testid="text-vetting-title">
                Our Vetting Process
              </h2>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed" data-testid="text-vetting-desc">
                We carefully evaluate partners based on experience, capacity, cultural competency, and commitment to sustainable practices. Our goal is to match the right expertise with each project's unique requirements.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
