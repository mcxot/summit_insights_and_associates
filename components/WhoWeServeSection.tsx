import FadeInSection from '@/components/FadeInSection';
import Image from 'next/image';

const clientTypes = [
  'Businesses and Start-ups',
  'NGOs and Development Organisations',
  'Government Agencies',
  'Educational and Research Institutions',
  'Students and Individual Professionals',
];

export default function WhoWeServeSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #88949C, #4C6F88, #88949C)' }}>
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <Image
          src="/mainbackround5.jpg"
          alt=""
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      <div className="mx-auto max-w-5xl relative z-10">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Who We Serve
            </h2>
            <div className="section-divider mx-auto mb-6"></div>
            <p className="text-xl text-white max-w-2xl mx-auto drop-shadow-md" style={{ opacity: 0.95 }}>
              We support a diverse range of clients across sectors.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="card-glass">
            <div className="flex flex-wrap justify-center gap-4">
              {clientTypes.map((client) => (
                <span key={client} className="badge cursor-default">
                  {client}
                </span>
              ))}
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.4}>
          <div className="mt-16 text-center">
            <div className="card">
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#1E3A56' }}>
                Let&apos;s Work Together
              </h3>
              <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: '#2B2B2B' }}>
                If you need reliable evidence or want to build your team&apos;s research and data skills, 
                Summit Insights & Associates is ready to help.
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
