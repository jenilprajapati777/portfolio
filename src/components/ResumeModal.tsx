import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, Award, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, ACHIEVEMENTS, CERTIFICATIONS, EDUCATION } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0 print:bg-white">
          {/* Animated Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm print:hidden"
            onClick={onClose}
          />

          {/* Animated Modal Dialog */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden my-6 print:m-0 print:border-none print:shadow-none print:rounded-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Control Bar (Hidden when printing) */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50 print:hidden">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-medium text-neutral-600 uppercase tracking-wider">
                  Curriculum Vitae • Jenil Prajapati
                </span>
              </div>

              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-neutral-300 text-xs font-medium text-neutral-800 hover:bg-neutral-100 transition cursor-pointer shadow-2xs"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-neutral-200/80 hover:bg-neutral-300 flex items-center justify-center text-neutral-700 transition cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>
            </div>

            {/* Printable Resume Document */}
            <div className="p-8 sm:p-12 space-y-8 max-h-[80vh] overflow-y-auto print:max-h-none print:p-8 text-neutral-900">
              
              {/* Resume Header */}
              <div className="border-b border-neutral-200 pb-6 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <h1 className="font-serif-display text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950">
                      {PERSONAL_INFO.name}
                    </h1>
                    <p className="text-base font-semibold text-neutral-700 pt-1">
                      {PERSONAL_INFO.role}
                    </p>
                  </div>
                  <div className="text-xs font-mono text-neutral-500 sm:text-right space-y-0.5">
                    <div>{PERSONAL_INFO.location}</div>
                    <div>+91 {PERSONAL_INFO.phone}</div>
                    <div>{PERSONAL_INFO.email}</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs pt-2 text-neutral-600">
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="underline hover:text-black">
                    LinkedIn Profile
                  </a>
                  <span>•</span>
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="underline hover:text-black">
                    GitHub: jenilprajapati777
                  </a>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-200 pb-1">
                  Professional Summary
                </h2>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {PERSONAL_INFO.bio}
                </p>
              </div>

              {/* Education */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-200 pb-1">
                  Education
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 pt-1">
                  <div>
                    <div className="text-sm font-bold text-neutral-900">{EDUCATION.institution}</div>
                    <div className="text-xs font-medium text-neutral-700">{EDUCATION.degree}</div>
                    <div className="text-xs text-neutral-600 mt-1">
                      <span className="font-semibold">Coursework:</span> {EDUCATION.coursework.join(', ')}
                    </div>
                  </div>
                  <div className="text-xs font-mono text-neutral-500 whitespace-nowrap">
                    {EDUCATION.period}
                  </div>
                </div>
              </div>

              {/* Featured Projects */}
              <div className="space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-200 pb-1">
                  Featured Machine Learning & Full-Stack Projects
                </h2>

                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                      <div>
                        <span className="text-sm font-bold text-neutral-950">{proj.title}</span>
                        <span className="text-xs text-neutral-500 ml-2">({proj.codename})</span>
                        <div className="text-xs text-emerald-800 font-semibold">{proj.achievement}</div>
                      </div>
                      <div className="text-xs font-mono text-neutral-500 whitespace-nowrap">
                        {proj.period}
                      </div>
                    </div>

                    <div className="text-xs text-neutral-600 font-mono">
                      Stack: {proj.stack.join(' • ')}
                    </div>

                    <ul className="list-disc list-inside space-y-1 text-xs text-neutral-700 pt-1">
                      {proj.bullets.map((b, idx) => (
                        <li key={idx} className="leading-relaxed">{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Technical Skills */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-200 pb-1">
                  Technical Skills
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                  {SKILL_CATEGORIES.map((cat, i) => (
                    <div key={i} className="text-neutral-700">
                      <span className="font-semibold text-neutral-950">{cat.title}:</span>{' '}
                      {cat.skills.map(s => s.name).join(', ')}
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements & Honors */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-200 pb-1">
                  National Honors & Hackathon Achievements
                </h2>
                <div className="space-y-2 pt-1">
                  {ACHIEVEMENTS.map((ach) => (
                    <div key={ach.id} className="text-xs text-neutral-700">
                      <div className="flex items-center justify-between font-semibold text-neutral-900">
                        <span>{ach.title}</span>
                        <span className="font-mono text-neutral-500">{ach.date}</span>
                      </div>
                      <div className="text-neutral-600">{ach.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-200 pb-1">
                  Certifications
                </h2>
                {CERTIFICATIONS.map((c, i) => (
                  <div key={i} className="text-xs text-neutral-700">
                    <div className="font-semibold text-neutral-900">{c.title}</div>
                    <div className="text-neutral-500 font-mono">{c.issuer} — {c.date}</div>
                  </div>
                ))}
              </div>

            </div>

            {/* Footer print note */}
            <div className="px-8 py-3 bg-neutral-50 border-t border-neutral-200 text-center text-xs text-neutral-500 print:hidden">
              Official portfolio & resume of Jenil Prajapati • Verified 2026
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
