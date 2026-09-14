import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const FuturisticBackground: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Top Scroll Progress Line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-neutral-900 via-emerald-500 to-neutral-900 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Interactive Cursor Ambient Glow (Follows mouse on desktop) */}
      {isClient && (
        <div
          className="fixed pointer-events-none z-30 transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:block"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            width: '450px',
            height: '450px',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.04) 0%, rgba(0, 0, 0, 0.02) 40%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
      )}

      {/* Subtle Ambient Radar Sweep / Grid Scan (evoking Sentinel-1 GeoAI Radar) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <motion.div
          animate={{
            y: ['-100%', '200%']
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="w-full h-40 bg-gradient-to-b from-transparent via-emerald-500/[0.04] to-transparent border-b border-emerald-500/[0.08]"
        />
      </div>
    </>
  );
};
