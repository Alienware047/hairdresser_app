"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, User, Phone } from "lucide-react";

export default function Booking() {
  return (
    <section id="book-now" className="bg-background py-32 text-foreground transition-colors">
      <div className="container mx-auto px-6">
        <div className="grid gap-24 lg:grid-cols-2">
          <div>
            <span className="mb-2 block text-xs font-bold tracking-[0.4em] text-primary uppercase">
              Reservations
            </span>
            <h2 className="font-playfair text-5xl font-normal tracking-tight md:text-7xl">
              BEGIN YOUR <br />
              <span className="italic text-primary">TRANSFORMATION</span>
            </h2>
            <p className="mt-8 max-w-md text-xs font-light leading-relaxed tracking-widest text-foreground/70 uppercase">
              Secure your exclusive session with our master artisans. We recommend booking at least two weeks in advance for weekend sessions.
            </p>
            
            <div className="mt-16 space-y-8">
              <div className="flex items-center gap-6">
                <div className="border border-primary/20 p-4">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Concierge</p>
                  <p className="font-playfair text-2xl tracking-wider text-foreground">+1 (555) 000-STYLE</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="border border-primary/20 p-4">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Atelier Location</p>
                  <p className="font-playfair text-2xl tracking-wider text-foreground">123 Visionary Way, Stylist City</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="border border-primary/10 bg-foreground/5 p-10 backdrop-blur-sm"
          >
            <form className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Name</label>
                  <div className="relative">
                    <User className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/50" />
                    <input
                      type="text"
                      className="w-full border-b border-primary/20 bg-transparent py-3 pl-8 pr-4 text-foreground focus:border-primary focus:outline-none transition-colors"
                      placeholder="GUEST NAME"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/50" />
                    <input
                      type="tel"
                      className="w-full border-b border-primary/20 bg-transparent py-3 pl-8 pr-4 text-foreground focus:border-primary focus:outline-none transition-colors"
                      placeholder="CONTACT NUMBER"
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Desired Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/50" />
                    <input
                      type="date"
                      className="w-full border-b border-primary/20 bg-transparent py-3 pl-8 pr-4 text-foreground focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Preferred Time</label>
                  <div className="relative">
                    <Clock className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/50" />
                    <select className="w-full border-b border-primary/20 bg-transparent py-3 pl-8 pr-4 text-foreground focus:border-primary focus:outline-none transition-colors appearance-none">
                      <option className="bg-background">09:00 AM</option>
                      <option className="bg-background">11:00 AM</option>
                      <option className="bg-background">02:00 PM</option>
                      <option className="bg-background">04:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="gold-shimmer w-full py-5 text-xs font-bold tracking-[0.3em] text-background uppercase transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                REQUEST RESERVATION
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
