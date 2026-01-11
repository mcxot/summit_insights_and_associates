'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #1E3A56 0%, #4C6F88 50%, #88949C 100%)' }}>
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <Image
          src="/mainbackround3.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
          priority
          unoptimized
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(30, 58, 86, 0.7), rgba(76, 111, 136, 0.6), rgba(136, 148, 156, 0.8))' }}></div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ backgroundColor: 'rgba(196, 179, 126, 0.1)' }}></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: 'rgba(196, 179, 126, 0.1)', animationDelay: '1s' }}></div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
            SUMMIT INSIGHTS & ASSOCIATES
          </h1>

          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 tracking-wide drop-shadow-lg" style={{ color: '#C4B37E' }}>
            Insight. Evidence. Impact.
          </p>

          <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto mb-12 leading-relaxed font-medium drop-shadow-md" style={{ opacity: 0.95 }}>
            We provide high-quality research,analysis, and capacity-building solutions that help organisations, businesses, and 
            individuals make informed, evidence-based decisions.
         </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <Link href="/contact">
              <button className="btn-primary text-lg px-10 py-4">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to top, #FAF9F6, transparent)' }} />
    </div>
  );
}
