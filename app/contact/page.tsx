import ContactSection from '@/components/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us | Summit Insights & Associates",
  description: "Get in touch with Summit Insights & Associates. Phone: 0541158139 | Email: dansoalex84@gmail.com. We're ready to help with your research needs.",
};

export default function ContactPage() {
  return (
    <main className="pt-16">
      <ContactSection />
    </main>
  );
}

