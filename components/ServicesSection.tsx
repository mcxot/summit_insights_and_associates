import FadeInSection from '@/components/FadeInSection';
import Image from 'next/image';
import { 
  ClipboardList, 
  BarChart3, 
  TrendingUp, 
  GraduationCap, 
  BookOpen, 
  Target 
} from 'lucide-react';

const services = [
  {
    icon: ClipboardList,
    title: 'Survey Design & Data Collection',
    description: 'Questionnaire, interview guides, fieldwork coordination, and accurate primary data.',
  },
  {
    icon: BarChart3,
    title: 'Data Analysis & Reporting',
    description: 'Quantitative and qualitative analysis, dashboards, and easy-to-understand visual reports.',
  },
  {
    icon: TrendingUp,
    title: 'Market & Social Research',
    description: 'Consumer studies, feasibility assessments, perception surveys, and impact evaluations for private, public, and non-profit clients.',
  },
  {
    icon: GraduationCap,
    title: 'Training & Capacity Building',
    description: 'Practical, hands-on training in research methods, data collection tools, analysis software (SPSS, Stata, Excel), report writing, and article publication.',
  },
  {
    icon: BookOpen,
    title: 'Academic & Institutional Research Support',
    description: 'Proposal development, instrument design, data analysis assistance, and results write-ups for students, lecturers, and research units.',
  },
  {
    icon: Target,
    title: 'Monitoring & Evaluation (M&E)',
    description: 'Baseline, midline, and endline studies, performance assessments, and learning reports to measure and improve programme results.',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #4C6F88, #1E3A56, #4C6F88)' }}>
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <Image
          src="/mainbackround4.jpg"
          alt=""
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Our Services
            </h2>
            <div className="section-divider mx-auto mb-6"></div>
            <p className="text-xl text-white max-w-2xl mx-auto drop-shadow-md" style={{ opacity: 0.95 }}>
              We offer a complete suite of research, consulting, and training services.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeInSection key={service.title} delay={index * 0.1}>
                <div className="card h-full group">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300" style={{ backgroundColor: '#C4B37E' }}>
                    <Icon className="h-7 w-7" style={{ color: '#1E3A56' }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#1E3A56' }}>{service.title}</h3>
                  <p className="leading-relaxed" style={{ color: '#2B2B2B' }}>
                    {service.description}
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
