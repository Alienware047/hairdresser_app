"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useBooking } from "./Providers";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const { openBooking } = useBooking();
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 200]);

  return (
    <section ref={containerRef} className="relative h-[200vh] w-full">
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background transition-colors duration-500">
        
        {/* Full-Screen Cinematic Parallax Image */}
        <motion.div 
          style={{ scale, y }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=2000&auto=format&fit=crop"
            alt="Nano Banana Cinematic Luxury Aesthetic"
            className="h-full w-full object-cover opacity-70 dark:opacity-60 transition-opacity duration-500"
          />
          {/* Theme-aware gradient overlay to ensure text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background dark:from-background/60 dark:via-background/20 dark:to-background transition-colors duration-500" />
        </motion.div>

        {/* Cinematic Content */}
        <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
          <motion.div style={{ opacity }}>
            <h1 className="mb-8 font-serif text-7xl font-light tracking-tight text-foreground lg:text-9xl transition-colors duration-500">
              SCULPTING <br />
              <span className="italic text-primary dark:text-primary">IDENTITY.</span>
            </h1>
            <p className="mb-10 max-w-lg text-lg font-light text-foreground/80 transition-colors duration-500">
              Where technical mastery meets the soul of style. Experience the pinnacle of luxury hair design.
            </p>
            <button 
              onClick={openBooking}
              className="border border-foreground bg-transparent px-10 py-4 text-sm font-bold tracking-widest text-foreground transition-all hover:bg-foreground hover:text-background dark:hover:bg-foreground dark:hover:text-background"
            >
              BOOK AN EXCLUSIVE SESSION
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
