import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";

// todo: remove mock functionality - replace with real blog posts
const blogPosts = [
  {
    slug: "ring-of-fire-opportunity",
    title: "Understanding the Ring of Fire Opportunity",
    excerpt: "An overview of the economic potential and strategic importance of Ontario's Ring of Fire region for critical minerals development.",
    date: "March 15, 2024",
    category: "Industry Insights",
  },
  {
    slug: "indigenous-partnerships",
    title: "Building Meaningful Indigenous Partnerships",
    excerpt: "Best practices for engaging with Indigenous communities in infrastructure development and resource projects.",
    date: "March 8, 2024",
    category: "Partnership",
  },
  {
    slug: "regulatory-landscape",
    title: "Navigating Ontario's Regulatory Landscape",
    excerpt: "Key considerations for environmental assessments, permitting, and compliance in Northern Ontario infrastructure projects.",
    date: "February 28, 2024",
    category: "Regulatory",
  },
];

export default function Insights() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" data-testid="text-insights-title">
                Insights
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed" data-testid="text-insights-subtitle">
                Perspectives on infrastructure development, policy, and partnerships in Ontario's Ring of Fire.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <BlogCard key={post.slug} {...post} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
