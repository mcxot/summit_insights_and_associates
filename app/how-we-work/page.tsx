import HowWeWorkSection from '@/components/HowWeWorkSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "How We Work | Summit Insights & Associates",
  description: "Our work is guided by three key principles: Rigour, Clarity, and Collaboration. Learn about our research methodology and approach.",
};

export default function HowWeWorkPage() {
  return (
    <main className="pt-16">
      <HowWeWorkSection />
    </main>
  );
}

