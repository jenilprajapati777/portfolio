import React from 'react';
import { motion } from 'motion/react';
import { ACHIEVEMENTS, CERTIFICATIONS } from '../data/portfolioData';
import { Trophy, Award, Sparkles, CheckCircle2, ShieldCheck, ArrowUpRight, Medal } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-16 sm:py-24 bg-white/70 border-y border-neutral-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6"
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-xs font-semibold uppercase tracking-wider text-neutral-700 shadow-2xs">
              <Trophy className="w-3.5 h-3.5 text-amber-600" />
              <span>Recognition & Honors</span>
            </div>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 leading-tight">
              Hackathons & Certifications
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base max-w-xl">
              Competitive national hackathon placements and verified artificial intelligence credentials.
            </p>
          </div>
          
          <div className="text-xs text-neutral-400 font-mono">
            COMPETITIVE AI & RESEARCH MERITS
          </div>
        </motion.div>

        {/* 2-Column Grid: Hackathons & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Hackathon Awards (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
              <Medal className="w-4 h-4 text-amber-500" />
              <span>Hackathon Podiums & National Finalist Awards</span>
            </div>

            {ACHIEVEMENTS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 sm:p-8 rounded-3xl bg-neutral-50/90 border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 border border-amber-200/80 text-[11px] font-semibold">
                      <Trophy className="w-3 h-3 text-amber-700" />
                      <span>{item.rank}</span>
                    </div>
                    <h3 className="font-serif-display text-xl sm:text-2xl font-medium text-neutral-900 pt-1 group-hover:text-emerald-950 transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xs text-neutral-500 font-medium">
                      {item.organization} • {item.date}
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-700 text-xs font-mono font-medium shadow-2xs">
                    {item.badge}
                  </span>
                </div>

                <p className="text-sm text-neutral-700 leading-relaxed">
                  {item.description}
                </p>

                {item.projectLinked && (
                  <div className="pt-2 flex items-center gap-2 text-xs text-neutral-500">
                    <span>Platform:</span>
                    <span className="font-semibold text-neutral-900">{item.projectLinked}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Certifications Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Verified Certifications</span>
            </div>

            {CERTIFICATIONS.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="relative p-6 sm:p-8 rounded-3xl bg-neutral-900 text-white shadow-2xl border border-neutral-800 space-y-5 overflow-hidden group"
              >
                {/* Subtle ambient scanline highlight */}
                <motion.div
                  animate={{
                    x: ['-100%', '200%']
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: 'linear',
                    repeatDelay: 3
                  }}
                  className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent pointer-events-none -skew-x-12"
                />

                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-neutral-800 flex items-center justify-center text-emerald-400 group-hover:bg-neutral-700 transition-colors">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/80">
                    Verified {cert.date}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-serif-display text-xl sm:text-2xl font-medium text-white leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-medium text-neutral-400">
                    {cert.issuer}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {cert.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-neutral-800">
                  <span className="text-[11px] font-mono text-neutral-400 block uppercase">
                    Competencies Certified
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg bg-neutral-800 text-neutral-200 text-xs font-medium border border-neutral-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-neutral-400 flex items-center justify-between">
                  <span>Authorized by AICTE & Shell India</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Valid Credential</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
