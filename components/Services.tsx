"use client";

import { motion } from "framer-motion";
import { Scissors, Palette, Sparkles, Wind } from "lucide-react";
import { fadeInUp } from "./motion";

const services = [
  {
    title: "Precision Cut",
    description: "Expertly crafted styles tailored to your unique facial features.",
    icon: <Scissors className="h-6 w-6 text-primary" />,
    img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Vibrant Color",
    description: "From subtle balayage to bold avant-garde transformations.",
    icon: <Palette className="h-6 w-6 text-primary" />,
    img: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Luxe Styling",
    description: "Runway-ready styling for your most important moments.",
    icon: <Wind className="h-6 w-6 text-primary" />,
    img: "https://images.unsplash.com/photo-1600948836101-f9ff59394081?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Deep Treatment",
    description: "Revitalizing therapies that restore health and shine to your hair.",
    icon: <Sparkles className="h-6 w-6 text-primary" />,
    img: "https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-background py-32 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-24 text-center"
        >
          <span className="mb-4 block text-xs font-bold tracking-[0.4em] text-primary uppercase">
            Artistry & Excellence
          </span>
          <h2 className="font-serif text-5xl font-light tracking-tight text-foreground md:text-8xl transition-colors duration-500">
            OUR CURATION
          </h2>
          <div className="mx-auto mt-8 h-px w-32 bg-primary/50" />
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative flex flex-col items-center bg-background/50 p-8 border border-foreground/10 shadow-2xl transition-all duration-700 hover:border-primary/30"
            >
              <div className="mb-8 h-64 w-full overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-full w-full object-cover opacity-80 grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
              
              <div className="mb-6 text-primary">
                {service.icon}
              </div>
              
              <h3 className="mb-4 text-3xl font-light text-foreground tracking-wide transition-colors duration-500">
                {service.title}
              </h3>
              
              <p className="text-center text-sm font-light leading-relaxed tracking-wider text-foreground/70 transition-colors duration-500">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
