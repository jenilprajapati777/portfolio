import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Cpu, Code, Layout, Server, Wrench, Sparkles, Check, Terminal } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-5 h-5 text-neutral-800" />,
  Code: <Code className="w-5 h-5 text-neutral-800" />,
  Layout: <Layout className="w-5 h-5 text-neutral-800" />,
  Server: <Server className="w-5 h-5 text-neutral-800" />,
  Wrench: <Wrench className="w-5 h-5 text-neutral-800" />
};

export const SkillsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'AI, ML & Data Engineering', label: 'AI & Data' },
    { id: 'Core Programming Languages', label: 'Languages' },
    { id: 'Frontend & Mobile Engineering', label: 'Frontend & Mobile' },
    { id: 'Backend, Cloud & Databases', label: 'Backend & Cloud' },
    { id: 'Developer Tools & Environments', label: 'Tools' },
  ];

  const displayedCategories = selectedFilter === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.title === selectedFilter);

  return (
    <section id="skills" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6"
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200/80 text-xs font-semibold uppercase tracking-wider text-neutral-600 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-neutral-800" />
              <span>Technical Arsenal</span>
            </div>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 leading-tight">
              Skills & Frameworks
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base max-w-xl">
              Engineered across deep learning, statistical modeling, distributed backends, and responsive client applications.
            </p>
          </div>

          {/* Interactive filter tabs with animated pill */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map(tab => {
              const isSelected = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'text-white'
                      : 'bg-white text-neutral-600 border border-neutral-200/80 hover:bg-neutral-100 hover:text-neutral-900'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="activeFilterPill"
                      className="absolute inset-0 rounded-full bg-neutral-950 shadow-xs"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Categories Grid with Layout Animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((category) => (
              <motion.div
                layout
                key={category.title}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-3xl bg-white border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-neutral-100 flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                      {iconMap[category.iconName] || <Cpu className="w-5 h-5 text-neutral-800" />}
                    </div>
                    <span className="text-[11px] font-mono text-neutral-400">
                      {category.skills.length} skills
                    </span>
                  </div>

                  <h3 className="font-serif-display text-xl font-medium text-neutral-900 mb-1 group-hover:text-emerald-950 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed mb-5">
                    {category.description}
                  </p>

                  {/* Skills chips with micro-animations */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.06, y: -1 }}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition cursor-default ${
                          skill.highlight
                            ? 'bg-neutral-950 text-white shadow-xs'
                            : 'bg-neutral-100/90 text-neutral-700 hover:bg-neutral-200/80 hover:text-neutral-900'
                        }`}
                      >
                        {skill.highlight && <Check className="w-3 h-3 text-emerald-400" />}
                        <span>{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Verified in production projects</span>
                  </div>
                  <span className="font-mono text-neutral-600 font-semibold">Active</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
