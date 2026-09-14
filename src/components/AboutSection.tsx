import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, CheckCircle, Terminal, BookOpen, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white/60 border-y border-neutral-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Story & Philosophy */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-xs font-semibold uppercase tracking-wider text-neutral-700 shadow-2xs">
              <Terminal className="w-3.5 h-3.5 text-neutral-800" />
              <span>Engineering Journey</span>
            </div>

            <h2 className="font-serif-display text-4xl sm:text-5xl font-normal tracking-tight text-neutral-900 leading-tight">
              Bridging Machine Learning Research with Practical Deployment
            </h2>

            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed font-normal">
              {PERSONAL_INFO.bio}
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ y: -3 }}
                className="p-4 rounded-2xl bg-neutral-50/90 border border-neutral-200/70 space-y-1.5 transition-all shadow-2xs hover:shadow-md group"
              >
                <div className="flex items-center gap-2 text-neutral-900 font-semibold text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                  <span>Computer Vision & SAR</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Filtering radar speckle noise and extracting spatial insights through extreme atmospheric conditions.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -3 }}
                className="p-4 rounded-2xl bg-neutral-50/90 border border-neutral-200/70 space-y-1.5 transition-all shadow-2xs hover:shadow-md group"
              >
                <div className="flex items-center gap-2 text-neutral-900 font-semibold text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                  <span>End-to-End Product Delivery</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  From training neural networks to architecting responsive Flutter and React interfaces with cloud backends.
                </p>
              </motion.div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="text-xs font-semibold text-neutral-900 hover:text-black inline-flex items-center gap-2 underline underline-offset-4 cursor-pointer group"
              >
                <span>Read detailed curriculum vitae & course transcripts</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-500 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Academic Foundation Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl bg-neutral-900 text-white p-6 sm:p-8 shadow-2xl border border-neutral-800 space-y-6 overflow-hidden">
              
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs font-mono tracking-wider uppercase text-neutral-400">
                    Academic Background
                  </span>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800/60">
                  Expected 2027
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif-display text-2xl font-medium text-white">
                  {EDUCATION.degree}
                </h3>
                <div className="text-sm text-neutral-300 font-medium">
                  {EDUCATION.institution}
                </div>
                <div className="flex items-center gap-4 text-xs text-neutral-400 pt-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                    {EDUCATION.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                    {EDUCATION.location}
                  </span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-neutral-400">
                  <BookOpen className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Key Coursework</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {EDUCATION.coursework.map((course, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 rounded-lg bg-neutral-800/90 text-neutral-200 text-xs font-medium border border-neutral-700/60 transition-colors hover:bg-neutral-700 cursor-default"
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                <span>Status</span>
                <span className="text-white font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Undergraduate CS Junior</span>
                </span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
