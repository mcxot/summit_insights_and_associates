import WhoWeServeSection from '@/components/WhoWeServeSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Who We Serve | Summit Insights & Associates",
  description: "We support businesses, NGOs, government agencies, educational institutions, and individual professionals with research and data solutions.",
};

export default function WhoWeServePage() {
  return (
    <main className="pt-16">
      <WhoWeServeSection />
    </main>
  );
}

