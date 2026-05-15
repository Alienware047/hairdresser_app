"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "./motion";

const images = [
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521590832167-552ff99a88fa?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600948836101-f9ff59394081?q=80&w=2000&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-background py-32 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 flex flex-col items-center justify-between gap-12 md:flex-row md:items-end"
        >
          <div className="text-center md:text-left">
            <span className="mb-4 block text-xs font-bold tracking-[0.4em] text-primary uppercase">
              Visual Portfolio
            </span>
            <h2 className="font-serif text-5xl font-light tracking-tight text-foreground md:text-8xl transition-colors duration-500">
              THE COLLECTION
            </h2>
          </div>
          <p className="max-w-xs text-center text-sm font-light leading-relaxed tracking-widest text-foreground/70 uppercase md:text-right transition-colors duration-500">
            A curated selection of transformations. Each look is a testament to our commitment to precision and aesthetic mastery.
          </p>
        </motion.div>

        <div className="columns-1 gap-8 space-y-8 md:columns-2 lg:columns-3">
          {images.map((src, index) => (
            <motion.div
              key={src}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative overflow-hidden bg-foreground/5 border border-foreground/10 transition-colors duration-500"
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full grayscale opacity-70 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/40 opacity-0 transition-opacity duration-700 group-hover:opacity-100 flex items-center justify-center">
                <div className="border border-foreground/20 px-8 py-4 backdrop-blur-md">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-foreground uppercase">VIEW LOOK</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
