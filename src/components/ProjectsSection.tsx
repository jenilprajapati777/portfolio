import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { Github, ArrowUpRight, Award, Layers, Sparkles, Radio, Scan } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6"
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200/80 text-xs font-semibold uppercase tracking-wider text-neutral-600 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-neutral-800" />
              <span>Selected Works</span>
            </div>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 leading-tight">
              Featured AI Implementations
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base max-w-xl">
              End-to-end machine learning architectures engineered with satellite radar pipelines and predictive modeling.
            </p>
          </div>
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100/90 text-xs text-neutral-600 font-mono border border-neutral-200/60">
            <Radio className="w-3 h-3 text-emerald-600 animate-pulse" />
            <span>02 FEATURED HACKATHON FINALIST PROJECTS</span>
          </div>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              id={`project-card-${project.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="group relative rounded-3xl bg-white border border-neutral-200/80 shadow-sm hover:shadow-2xl transition-all duration-400 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Project Image Banner with Interactive High-Tech Radar Scanning Effect */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* Subtle High-Tech HUD scanline overlay on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <motion.div
                      animate={{
                        top: ['0%', '100%']
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: 'linear'
                      }}
                      className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent shadow-[0_0_12px_rgba(52,211,153,0.8)]"
                    />
                    {/* Top right HUD marker */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-emerald-500/40 text-[10px] font-mono text-emerald-400">
                      <Scan className="w-3 h-3 animate-spin" style={{ animationDuration: '8s' }} />
                      <span>TELEMETRY ACTIVE</span>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                  
                  {/* Top Badge: Achievement */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-semibold text-white border border-white/20 shadow-xs">
                      <Award className="w-3.5 h-3.5 text-amber-300" />
                      <span>{project.achievement}</span>
                    </span>
                    <span className="text-[11px] font-mono text-neutral-300 bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10">
                      {project.period}
                    </span>
                  </div>

                  {/* Bottom Image Overlay: Title & Codename */}
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <span className="text-xs font-mono text-emerald-300 uppercase tracking-wider block mb-1">
                      {project.codename}
                    </span>
                    <h3 className="font-serif-display text-2xl sm:text-3xl font-medium tracking-tight text-white group-hover:text-emerald-100 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 space-y-6">
                  
                  {/* Project Summary */}
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Stats Bar with hover feedback */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3.5 rounded-2xl bg-neutral-50/80 border border-neutral-100">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="text-center group/stat">
                        <div className="font-serif-display text-lg sm:text-xl font-bold text-neutral-900 group-hover/stat:text-emerald-700 transition-colors">
                          {stat.value}
                        </div>
                        <div className="text-[10px] sm:text-[11px] text-neutral-500 font-medium truncate">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Key Engineering Bullets */}
                  <div className="space-y-2.5">
                    {project.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2 shrink-0 group-hover:bg-emerald-600 transition-colors" />
                        <span className="leading-snug">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills with micro-lift */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.stack.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05, y: -1 }}
                        className="px-2.5 py-1 rounded-md bg-neutral-100/80 text-neutral-700 text-[11px] font-mono font-medium border border-neutral-200/60 transition-colors hover:bg-neutral-200 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 sm:px-8 sm:py-5 border-t border-neutral-100 bg-neutral-50/70 flex items-center justify-between gap-3">
                <motion.button
                  onClick={() => setActiveProject(project)}
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-xs font-semibold text-neutral-900 hover:text-black flex items-center gap-1.5 hover:underline cursor-pointer"
                >
                  <Layers className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Technical details</span>
                </motion.button>

                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-900 text-white text-xs font-medium hover:bg-neutral-800 transition shadow-2xs group/btn"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Repository</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Project Modal with Animated Entrance */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
