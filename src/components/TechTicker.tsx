import React from 'react';
import { motion } from 'motion/react';
import { TECH_BRANDS } from '../data/portfolioData';
import { Cpu, Terminal, Layers, Cloud, Database, Activity, ShieldCheck, Compass, Radio } from 'lucide-react';

const iconsMap: Record<string, React.ReactNode> = {
  'TensorFlow': <Cpu className="w-4 h-4" />,
  'Python': <Terminal className="w-4 h-4" />,
  'OpenCV': <Activity className="w-4 h-4" />,
  'Sentinel-1 SAR': <Compass className="w-4 h-4" />,
  'Flutter': <Layers className="w-4 h-4" />,
  'React.js': <Layers className="w-4 h-4" />,
  'GCP & Cloud': <Cloud className="w-4 h-4" />,
  'Supabase': <Database className="w-4 h-4" />,
  'Firebase': <Database className="w-4 h-4" />,
  'Scikit-learn': <Cpu className="w-4 h-4" />,
  'Docker': <ShieldCheck className="w-4 h-4" />,
};

export const TechTicker: React.FC = () => {
  // Duplicate list to achieve continuous seamless loop
  const tickerItems = [...TECH_BRANDS, ...TECH_BRANDS, ...TECH_BRANDS];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 overflow-hidden">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-neutral-200/70 pb-6">
        
        {/* Futuristic Status Label */}
        <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-neutral-500 shrink-0">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-900"></span>
          </span>
          <span>Core Toolchains & Pipelines</span>
        </div>
        
        {/* Animated Marquee Strip */}
        <div className="relative w-full sm:w-[70%] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <motion.div
            animate={{
              x: ['0%', '-50%']
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear'
            }}
            whileHover={{ transition: { duration: 60 } }} // slows down smoothly on hover
            className="flex items-center gap-8 flex-nowrap w-max py-1 cursor-grab"
          >
            {tickerItems.map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                whileHover={{ scale: 1.08, y: -1 }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 border border-neutral-200/60 shadow-2xs text-neutral-600 hover:text-neutral-950 hover:border-neutral-400 transition-all group"
              >
                <span className="text-neutral-400 group-hover:text-emerald-600 transition-colors">
                  {iconsMap[tech.name] || <Terminal className="w-4 h-4" />}
                </span>
                <span className="font-semibold text-xs tracking-tight text-neutral-700 group-hover:text-neutral-950 select-none">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
};
