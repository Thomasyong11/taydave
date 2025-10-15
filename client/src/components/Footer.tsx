import { Link } from "wouter";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4" data-testid="text-footer-about-title">About ROFIC</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed" data-testid="text-footer-about-desc">
              Ring of Fire Infrastructure Consultants provides strategic coordination and advisory services for Ontario's Ring of Fire development.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4" data-testid="text-footer-links-title">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm text-primary-foreground/80 hover:text-primary-foreground" data-testid="link-footer-services">Services</Link></li>
              <li><Link href="/partners" className="text-sm text-primary-foreground/80 hover:text-primary-foreground" data-testid="link-footer-partners">Partner Network</Link></li>
              <li><Link href="/why-rofic" className="text-sm text-primary-foreground/80 hover:text-primary-foreground" data-testid="link-footer-why">Why ROFIC</Link></li>
              <li><Link href="/insights" className="text-sm text-primary-foreground/80 hover:text-primary-foreground" data-testid="link-footer-insights">Insights</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4" data-testid="text-footer-contact-title">Contact</h3>
            <div className="flex items-center gap-2 mb-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:hello@rofic.ca" className="text-sm text-primary-foreground/80 hover:text-primary-foreground" data-testid="link-footer-email">
                hello@rofic.ca
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4" data-testid="text-footer-disclaimer-title">Disclaimer</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed" data-testid="text-footer-disclaimer">
              ROFIC provides consulting and coordination services and does not perform construction.
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60" data-testid="text-footer-copyright">
            © {new Date().getFullYear()} Ring of Fire Infrastructure Consultants. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
