import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" data-testid="text-contact-title">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed" data-testid="text-contact-subtitle">
                Let's discuss how ROFIC can support your infrastructure project.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <ContactForm />
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-6 text-foreground" data-testid="text-contact-info-title">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-foreground mb-1" data-testid="text-email-label">Email</h3>
                      <a href="mailto:hello@rofic.ca" className="text-muted-foreground hover:text-primary" data-testid="link-email">
                        hello@rofic.ca
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-foreground mb-1" data-testid="text-location-label">Location</h3>
                      <p className="text-muted-foreground" data-testid="text-location">
                        Northern Ontario, Canada
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-foreground mb-1" data-testid="text-response-label">Response Time</h3>
                      <p className="text-muted-foreground" data-testid="text-response-time">
                        We typically respond within 2 business days
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-muted/30 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3" data-testid="text-office-hours-title">
                    Office Hours
                  </h3>
                  <p className="text-muted-foreground" data-testid="text-office-hours">
                    Monday - Friday: 9:00 AM - 5:00 PM EST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
