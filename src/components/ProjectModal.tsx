import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Github, Award, CheckCircle2, Layers, Cpu, Radio, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Animated Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Animated Modal Dialog */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-neutral-200/90 overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar with Close Button */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-[#f9fafb]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-semibold text-neutral-600 uppercase tracking-wider">
                  {project.codename}
                </span>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-neutral-200/70 hover:bg-neutral-300 flex items-center justify-center text-neutral-700 transition cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Modal Image Hero */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-950">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6 text-white space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold text-emerald-300 mb-2 border border-white/20">
                  <Award className="w-3.5 h-3.5 text-amber-300" />
                  <span>{project.achievement}</span>
                </div>
                <h2 className="font-serif-display text-2xl sm:text-3xl font-medium text-white">
                  {project.title}
                </h2>
                <p className="text-xs sm:text-sm text-neutral-300 font-mono">
                  Role: {project.role} • {project.period}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              
              {/* Summary */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  Project Overview
                </h4>
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-neutral-50 rounded-2xl border border-neutral-100">
                {project.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="font-serif-display text-xl sm:text-2xl font-bold text-neutral-900">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-neutral-500 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Technical Engineering Highlights */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                  Engineering Deep-Dive & ML Pipeline
                </h4>
                <div className="space-y-3">
                  {project.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-3 text-neutral-700 text-sm leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack Pills */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2.5">
                  Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-mono font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer with Actions */}
            <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-xs text-neutral-500">
                Verified repository & code on GitHub
              </span>
              <div className="flex items-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-950 text-white text-xs font-medium hover:bg-neutral-800 transition shadow-xs"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </motion.a>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
