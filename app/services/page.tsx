import ServicesSection from '@/components/ServicesSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Services | Summit Insights & Associates",
  description: "Survey design, data analysis, market research, training, academic support, and M&E services. Professional research solutions for businesses, NGOs, and institutions.",
};

export default function ServicesPage() {
  return (
    <main className="pt-16">
      <ServicesSection />
    </main>
  );
}

