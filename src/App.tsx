import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechTicker } from './components/TechTicker';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { FuturisticBackground } from './components/FuturisticBackground';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] text-[#111827] bg-dot-pattern flex flex-col selection:bg-neutral-900 selection:text-white relative">
      {/* Ambient Interactive Futuristic Radar & Scroll Indicator */}
      <FuturisticBackground />

      {/* Navigation */}
      <Navbar 
        onOpenContact={handleOpenContact}
        onOpenResume={handleOpenResume}
      />

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        {/* Hero Section styled after the reference theme */}
        <Hero 
          onOpenContact={handleOpenContact}
          onOpenResume={handleOpenResume}
        />

        {/* Framework & Toolchain Bar */}
        <TechTicker />

        {/* About & Education */}
        <AboutSection 
          onOpenResume={handleOpenResume}
        />

        {/* Selected Featured Projects */}
        <ProjectsSection />

        {/* Skills Arsenal */}
        <SkillsSection />

        {/* Achievements & Certifications */}
        <AchievementsSection />

        {/* Contact & Inquiry */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume View Modal with AnimatePresence */}
      <ResumeModal 
        isOpen={isResumeOpen}
        onClose={handleCloseResume}
      />
    </div>
  );
}
