import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#eeeff2] border-t border-neutral-200/80 pt-12 pb-10 text-neutral-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-neutral-300/60">
          
          {/* Brand & Persona */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-neutral-900 text-white flex items-center justify-center font-serif-display font-medium text-base">
                JP
              </div>
              <span className="font-semibold text-neutral-900 text-base">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-neutral-500 max-w-sm">
              AI/ML Developer & Full-Stack Engineer • Computer Science at GLS Ahmedabad.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-neutral-600">
            <a href="#home" className="hover:text-neutral-950 transition">Home</a>
            <a href="#about" className="hover:text-neutral-950 transition">About</a>
            <a href="#projects" className="hover:text-neutral-950 transition">Projects</a>
            <a href="#skills" className="hover:text-neutral-950 transition">Skills</a>
            <a href="#achievements" className="hover:text-neutral-950 transition">Achievements</a>
            <a href="#contact" className="hover:text-neutral-950 transition">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white border border-neutral-300/80 flex items-center justify-center text-neutral-700 hover:text-black hover:border-black transition"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white border border-neutral-300/80 flex items-center justify-center text-neutral-700 hover:text-black hover:border-black transition"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-800 transition cursor-pointer ml-2 shadow-xs"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-3">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with machine learning craft and modern TypeScript.
          </div>
          <div className="flex items-center gap-4">
            <span>Ahmedabad, Gujarat, India</span>
            <span>•</span>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-neutral-900">
              {PERSONAL_INFO.email}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
