import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What does ROFIC do?",
    answer: "ROFIC provides strategic coordination and advisory services for infrastructure projects in Ontario's Ring of Fire region. We connect government, investors, and communities to ensure projects align with policy, environmental standards, and community needs.",
  },
  {
    question: "Does ROFIC perform construction work?",
    answer: "No. ROFIC acts as a consultant and coordinator. We connect you with qualified partners who perform the actual construction and technical work.",
  },
  {
    question: "Who are your typical clients?",
    answer: "We work with government agencies, private investors, Indigenous communities, and development firms looking to navigate the complex regulatory and partnership landscape of the Ring of Fire region.",
  },
  {
    question: "How does ROFIC ensure neutrality?",
    answer: "We maintain independence by serving as advisors, not direct participants in project execution. Our focus is on facilitating collaboration and ensuring compliance, not promoting specific commercial interests.",
  },
  {
    question: "What is the Ring of Fire?",
    answer: "The Ring of Fire is a region in Northern Ontario rich in critical minerals and resources. It represents a significant opportunity for infrastructure development, economic growth, and partnership with Indigenous communities.",
  },
];

export default function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full" data-testid="accordion-faq">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`} data-testid={`accordion-item-${index}`}>
          <AccordionTrigger className="text-left" data-testid={`accordion-trigger-${index}`}>
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground" data-testid={`accordion-content-${index}`}>
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
