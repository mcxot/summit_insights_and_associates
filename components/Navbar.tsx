'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'How We Work', href: '/how-we-work' },
  { name: 'Who We Serve', href: '/who-we-serve' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg ${
      isScrolled 
        ? 'shadow-2xl' 
        : ''
    }`} style={{ 
      backgroundColor: isScrolled ? 'rgba(30, 58, 86, 0.98)' : 'rgba(30, 58, 86, 0.90)', 
      borderBottom: `1px solid ${isScrolled ? 'rgba(228, 227, 223, 0.3)' : 'rgba(228, 227, 223, 0.15)'}` 
    }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="hover:opacity-90 transition-all">
            <Image
              src="/NEW TRANSPARENT  (300 x 50 px) (300 x 50 px).png"
              alt="Summit Insights & Associates"
              width={300}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-5 py-2.5 text-base font-semibold transition-all duration-300"
                  style={{ color: isActive ? '#C4B37E' : 'rgba(255, 255, 255, 0.9)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#FFFFFF';
                    const underline = e.currentTarget.querySelector('.nav-underline') as HTMLElement;
                    if (underline) underline.style.width = '100%';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
                    } else {
                      e.currentTarget.style.color = '#C4B37E';
                    }
                    const underline = e.currentTarget.querySelector('.nav-underline') as HTMLElement;
                    if (underline) underline.style.width = '0%';
                  }}
                >
                  {item.name}
                  <span 
                    className="nav-underline absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                    style={{ 
                      backgroundColor: '#C4B37E',
                      width: '0%'
                    }}
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2.5 text-white transition-colors"
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(196, 179, 126, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <X className="block h-7 w-7" />
            ) : (
              <Menu className="block h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden backdrop-blur-lg" style={{ borderTop: '1px solid rgba(228, 227, 223, 0.3)', backgroundColor: 'rgba(30, 58, 86, 0.95)' }}>
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative block px-4 py-3 text-base font-semibold transition-all duration-300"
                  style={{ color: isActive ? '#C4B37E' : 'rgba(255, 255, 255, 0.9)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#FFFFFF';
                    const underline = e.currentTarget.querySelector('.nav-underline-mobile') as HTMLElement;
                    if (underline) underline.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
                    } else {
                      e.currentTarget.style.color = '#C4B37E';
                    }
                    const underline = e.currentTarget.querySelector('.nav-underline-mobile') as HTMLElement;
                    if (underline) underline.style.opacity = '0';
                  }}
                >
                  {item.name}
                  <span 
                    className="nav-underline-mobile absolute bottom-0 left-4 right-4 h-0.5 transition-all duration-300"
                    style={{ 
                      backgroundColor: '#C4B37E',
                      opacity: 0
                    }}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
