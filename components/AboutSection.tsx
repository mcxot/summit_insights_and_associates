import FadeInSection from '@/components/FadeInSection';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: '#FAF9F6' }}>
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none opacity-8">
        <Image
          src="/mainbackground.jpg"
          alt=""
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#1E3A56' }}>
              Welcome to Summit Insights & Associates
            </h2>
            <div className="section-divider mx-auto mb-8"></div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="card-glass">
            <p className="text-lg leading-relaxed mb-6 text-left" style={{ color: '#2B2B2B' }}>
              At Summit Insights & Associates, we turn questions into clear and actionable insights. 
              We provide high-quality research, analysis, and capacity-building solutions that 
              help organisations, businesses, and individuals make informed and evidence-based decisions.
            </p>
            <p className="text-lg leading-relaxed text-left" style={{ color: '#2B2B2B' }}>
              Whether you&apos;re exploring a new market, evaluating a programme, testing a concept, 
              or working on an academic project, we deliver the data, analysis, interpretation, 
              and training you need.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
