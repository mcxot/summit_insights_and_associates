'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: 'linear-gradient(to bottom, #1E3A56, #4C6F88)', borderTop: '1px solid #E4E3DF' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-4 hover:opacity-80 transition-opacity">
              <Image
                src="/LOGO FINALISED.png"
                alt="Summit Insights & Associates"
                width={240}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-base font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm transition-colors" style={{ color: 'rgba(255, 255, 255, 0.9)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C4B37E'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm transition-colors" style={{ color: 'rgba(255, 255, 255, 0.9)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C4B37E'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="text-sm transition-colors" style={{ color: 'rgba(255, 255, 255, 0.9)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C4B37E'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'}>
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/who-we-serve" className="text-sm transition-colors" style={{ color: 'rgba(255, 255, 255, 0.9)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C4B37E'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'}>
                  Who We Serve
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm transition-colors" style={{ color: 'rgba(255, 255, 255, 0.9)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C4B37E'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-base font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="tel:0541158139" 
                  className="text-sm transition-colors"
                  style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#C4B37E'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'}
                >
                  0541158139
                </a>
              </li>
              <li>
                <a 
                  href="mailto:dansoalex84@gmail.com" 
                  className="text-sm transition-colors"
                  style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#C4B37E'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'}
                >
                  dansoalex84@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8" style={{ borderTop: '1px solid rgba(228, 227, 223, 0.3)' }}>
          <p className="text-center text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            © {currentYear} Summit Insights & Associates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
