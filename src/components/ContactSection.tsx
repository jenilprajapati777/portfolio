import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, Linkedin, Github, Copy, Check, ArrowUpRight, Send, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'AI/ML Role Inquiry',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Container Card */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl lg:rounded-[2.5rem] bg-gradient-to-br from-neutral-900 via-[#18191c] to-neutral-950 text-white p-8 sm:p-12 lg:p-16 shadow-2xl border border-neutral-800 relative overflow-hidden"
        >
          
          {/* Ambient lighting animation */}
          <motion.div 
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.3, 0.15]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" 
          />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct channels */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Get in Touch</span>
                </div>
                
                <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-tight">
                  Let's Build Something Intelligent.
                </h2>
                
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-md">
                  Seeking an AI & Machine Learning role to apply computer vision, predictive modeling, and full-stack engineering to real-world impact.
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-4">
                
                {/* Email Item */}
                <motion.div 
                  whileHover={{ x: 3 }}
                  className="flex items-center justify-between p-4 rounded-2xl bg-neutral-800/80 border border-neutral-700/70 group hover:border-emerald-500/50 transition-all shadow-xs"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-neutral-700/80 flex items-center justify-center text-white group-hover:bg-emerald-950 group-hover:text-emerald-400 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-neutral-400 uppercase">Email Address</div>
                      <a 
                        href={`mailto:${PERSONAL_INFO.email}`} 
                        className="text-sm sm:text-base font-semibold text-white hover:text-emerald-400 transition"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                    className="p-2 rounded-lg bg-neutral-700/60 hover:bg-neutral-600 text-neutral-300 hover:text-white transition cursor-pointer"
                    title="Copy email address"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </motion.button>
                </motion.div>

                {/* Phone Item */}
                <motion.div 
                  whileHover={{ x: 3 }}
                  className="flex items-center justify-between p-4 rounded-2xl bg-neutral-800/80 border border-neutral-700/70 group hover:border-emerald-500/50 transition-all shadow-xs"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-neutral-700/80 flex items-center justify-center text-white group-hover:bg-emerald-950 group-hover:text-emerald-400 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-neutral-400 uppercase">Direct Phone / WhatsApp</div>
                      <a 
                        href={`tel:${PERSONAL_INFO.phone}`} 
                        className="text-sm sm:text-base font-semibold text-white hover:text-emerald-400 transition"
                      >
                        +91 {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                    className="p-2 rounded-lg bg-neutral-700/60 hover:bg-neutral-600 text-neutral-300 hover:text-white transition cursor-pointer"
                    title="Copy phone number"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </motion.button>
                </motion.div>

                {/* Social Profiles Grid */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <motion.a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-neutral-800/60 border border-neutral-700 hover:bg-neutral-700/80 transition group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Linkedin className="w-4 h-4 text-neutral-300 group-hover:text-white" />
                      <span className="text-xs font-semibold text-neutral-200 group-hover:text-white">LinkedIn</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </motion.a>

                  <motion.a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-neutral-800/60 border border-neutral-700 hover:bg-neutral-700/80 transition group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Github className="w-4 h-4 text-neutral-300 group-hover:text-white" />
                      <span className="text-xs font-semibold text-neutral-200 group-hover:text-white">GitHub</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </motion.a>
                </div>

              </div>
            </div>

            {/* Right Column: Interactive Quick Message Form */}
            <div className="lg:col-span-6 bg-neutral-800/50 p-6 sm:p-8 rounded-3xl border border-neutral-700/80 backdrop-blur-xs flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div 
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="my-auto py-10 text-center space-y-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-700 text-emerald-400 flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif-display text-2xl font-medium text-white">
                      Message Prepared!
                    </h3>
                    <p className="text-neutral-300 text-xs sm:text-sm max-w-sm mx-auto">
                      Thank you, {formState.name || 'there'}! You can also email Jenil directly at <span className="text-white font-mono">{PERSONAL_INFO.email}</span>.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFormSubmitted(false)}
                      className="px-4 py-2 rounded-full bg-neutral-700 text-xs font-medium text-white hover:bg-neutral-600 transition cursor-pointer"
                    >
                      Send another inquiry
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit} 
                    className="space-y-4"
                  >
                    <div className="space-y-1">
                      <div className="text-xs font-mono uppercase text-neutral-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>Direct Message Inquiry</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white">Send a note to Jenil</h3>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Hiring Manager / Founder"
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-sm text-white placeholder-neutral-500 focus:outline-hidden focus:border-emerald-500 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="hiring@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-sm text-white placeholder-neutral-500 focus:outline-hidden focus:border-emerald-500 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">Subject / Opportunity</label>
                      <input
                        type="text"
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        placeholder="AI/ML Developer Role"
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-sm text-white placeholder-neutral-500 focus:outline-hidden focus:border-emerald-500 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">Message</label>
                      <textarea
                        rows={3}
                        required
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Tell Jenil about the team, problem space, or project..."
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-sm text-white placeholder-neutral-500 focus:outline-hidden focus:border-emerald-500 transition resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 rounded-xl bg-white text-neutral-950 font-semibold text-xs sm:text-sm hover:bg-neutral-100 active:scale-98 transition flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
