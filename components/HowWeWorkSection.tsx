import FadeInSection from '@/components/FadeInSection';
import Image from 'next/image';
import { Shield, Lightbulb, Users } from 'lucide-react';

const principles = [
  {
    icon: Shield,
    title: 'Rigour',
    description: 'We apply strong research methods, ethical standards, and consistent quality checks.',
  },
  {
    icon: Lightbulb,
    title: 'Clarity',
    description: 'We turn complex data into simple, meaningful insights, visuals, and recommendations.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with clients to understand their goals and share skills through training and mentoring.',
  },
];

export default function HowWeWorkSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: '#FAF9F6' }}>
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none opacity-8">
        <Image
          src="/mainbackground2.jpg"
          alt=""
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#1E3A56' }}>
              How We Work
            </h2>
            <div className="section-divider mx-auto mb-6"></div>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#2B2B2B' }}>
              Our work is guided by three key principles.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <FadeInSection key={principle.title} delay={index * 0.15} direction="up">
                <div className="card h-full text-center group">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300" style={{ backgroundColor: '#C4B37E' }}>
                    <Icon className="h-10 w-10" style={{ color: '#1E3A56' }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#1E3A56' }}>{principle.title}</h3>
                  <p className="leading-relaxed" style={{ color: '#2B2B2B' }}>
                    {principle.description}
                  </p>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
