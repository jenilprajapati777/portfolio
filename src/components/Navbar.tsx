import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#f4f5f7]/85 backdrop-blur-md py-3 shadow-xs border-b border-neutral-200/60' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Monogram */}
          <a 
            href="#home" 
            id="nav-logo"
            className="flex items-center gap-3 group focus:outline-hidden"
          >
            <div className="w-9 h-9 rounded-xl bg-neutral-900 flex items-center justify-center text-white font-serif-display font-medium text-lg tracking-tight group-hover:scale-105 transition-transform">
              JP
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-neutral-900 text-sm tracking-tight leading-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] text-neutral-500 font-medium leading-none">
                AI/ML Engineer
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 bg-white/70 backdrop-blur-md px-6 py-2 rounded-full border border-neutral-200/80 shadow-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[13px] font-medium text-neutral-600 hover:text-neutral-950 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              id="nav-resume-btn"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium text-neutral-700 hover:text-neutral-950 hover:bg-neutral-200/60 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            <button
              id="nav-contact-btn"
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-950 text-white text-xs font-medium hover:bg-neutral-800 active:scale-95 transition-all shadow-xs cursor-pointer"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white border border-neutral-200 text-neutral-700"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 p-4 bg-white rounded-2xl border border-neutral-200 shadow-xl space-y-3">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-neutral-200 text-neutral-700 text-xs font-medium hover:bg-neutral-50"
              >
                <FileText className="w-3.5 h-3.5" />
                View Full Resume
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-neutral-950 text-white text-xs font-medium"
              >
                <Send className="w-3.5 h-3.5" />
                Get in touch
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
