import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { ArrowUpRight, ChevronRight, Sparkles, Activity, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO, METRICS } from '../data/portfolioData';
import developerPortrait from '../assets/images/developer_portrait_1789401252911.jpg';

interface HeroProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 3D Tilt calculations on portrait hover
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="home" className="relative pt-24 pb-8 sm:pt-28 sm:pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Card mirroring the design theme with entrance animations */}
        <motion.div 
          id="hero-main-card"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl lg:rounded-[2.5rem] bg-gradient-to-br from-white via-[#f7f8fa] to-[#eceff3] border border-neutral-200/90 shadow-xl lg:shadow-2xl overflow-hidden p-6 sm:p-10 lg:p-14"
        >
          {/* Subtle animated decorative aura */}
          <motion.div 
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.35, 0.5, 0.35]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 right-1/4 w-96 h-96 bg-neutral-200/50 rounded-full blur-3xl pointer-events-none -z-0" 
          />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Typography, Actions, and Metrics */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
              
              {/* Subtle status tag with pulsing radar beacon */}
              <motion.div 
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-white/90 border border-neutral-200/80 shadow-2xs backdrop-blur-xs"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-semibold tracking-wide uppercase text-neutral-700">
                  {PERSONAL_INFO.role}
                </span>
              </motion.div>

              {/* High-Contrast Editorial Display Headline */}
              <div className="space-y-1">
                <motion.h1 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="font-serif-display text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-neutral-900 leading-[1.08]"
                >
                  Architecting AI
                </motion.h1>
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-neutral-400 italic leading-[1.08]"
                >
                  Predictive. Scalable. Real-World.
                </motion.div>
              </div>

              {/* Bio Subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-xl"
              >
                Computer Science undergraduate training machine learning models, Sentinel-1 SAR computer vision pipelines, and full-stack intelligent systems for agriculture and disaster response.
              </motion.p>

              {/* Action Buttons Matching Reference Style */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap items-center gap-3.5 pt-1"
              >
                <motion.button
                  id="hero-view-projects-btn"
                  onClick={handleScrollToProjects}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-neutral-950 text-white text-sm font-medium hover:bg-neutral-800 transition-all shadow-md cursor-pointer group"
                >
                  <span>View projects</span>
                  <ChevronRight className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 transition-transform" />
                </motion.button>

                <motion.button
                  id="hero-contact-btn"
                  onClick={onOpenContact}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-neutral-800 border border-neutral-300/80 hover:bg-neutral-100/80 text-sm font-medium transition-all shadow-2xs cursor-pointer group"
                >
                  <span>Get in touch</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.button>
              </motion.div>

              {/* Metrics Grid with subtle hover lift */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-neutral-200/80"
              >
                {METRICS.map((metric, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -3 }}
                    className="flex flex-col space-y-1 group cursor-default transition-transform"
                  >
                    <span className="font-serif-display text-2xl sm:text-3xl font-medium text-neutral-950 tracking-tight group-hover:text-emerald-700 transition-colors">
                      {metric.value}
                    </span>
                    <span className="text-xs text-neutral-500 font-medium leading-tight">
                      {metric.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Column: Editorial Portrait & Floating Glass Widget with 3D Interactive Parallax */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <motion.div 
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative w-full max-w-sm sm:max-w-md lg:max-w-none cursor-pointer"
              >
                
                {/* Developer Portrait Image Container */}
                <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl border border-neutral-200/60 shadow-lg bg-neutral-900 aspect-3/4 max-h-[500px] w-full group">
                  <img
                    src={developerPortrait}
                    alt={PERSONAL_INFO.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-[center_12%] contrast-[1.03] group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle high-tech scan line that traverses the portrait occasionally */}
                  <motion.div
                    animate={{
                      top: ['-10%', '110%']
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      repeatDelay: 2
                    }}
                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent pointer-events-none"
                  />

                  {/* Gradient overlay at base for smooth glass card integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
                </div>

                {/* Overlaid Frosted Glass Card with Gentle Floating Motion */}
                <motion.div 
                  id="hero-glass-availability-card"
                  animate={{
                    y: [0, -6, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.02 }}
                  className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-glass-dark p-4 sm:p-5 rounded-2xl shadow-2xl border border-white/25 text-white flex items-center justify-between gap-4 backdrop-blur-lg"
                >
                  <div className="space-y-1 pr-2">
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-neutral-300">
                      <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" />
                      <span>Opportunities</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight leading-snug">
                      Available for AI/ML roles
                    </h3>
                    <p className="text-[12px] text-neutral-300 leading-tight line-clamp-2">
                      Seeking computer vision & full-stack ML engineer opportunities.
                    </p>
                  </div>

                  <motion.button
                    onClick={onOpenContact}
                    id="hero-glass-cta-arrow"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="shrink-0 w-10 h-10 rounded-xl bg-white text-neutral-900 flex items-center justify-center hover:bg-neutral-100 transition-all shadow-md cursor-pointer"
                    aria-label="Contact Jenil Prajapati"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.button>
                </motion.div>

              </motion.div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
