import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Calendar } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  index: number;
}

export default function BlogCard({ slug, title, excerpt, date, category, index }: BlogCardProps) {
  return (
    <Link href={`/insights/${slug}`}>
      <Card className="p-6 hover-elevate cursor-pointer h-full" data-testid={`card-blog-${index}`}>
        <Badge className="mb-4 bg-gold/10 text-gold-foreground" data-testid={`badge-category-${index}`}>
          {category}
        </Badge>
        <h3 className="text-xl font-semibold mb-3 text-card-foreground" data-testid={`text-blog-title-${index}`}>
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed" data-testid={`text-blog-excerpt-${index}`}>
          {excerpt}
        </p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span data-testid={`text-blog-date-${index}`}>{date}</span>
        </div>
      </Card>
    </Link>
  );
}
