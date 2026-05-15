"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, User, Phone } from "lucide-react";
import { useBooking } from "./Providers";

export default function BookingModal() {
  const { isOpen, closeBooking } = useBooking();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBooking}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 z-[70] w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 px-6"
          >
            <div className="relative border border-primary/20 bg-background p-8 shadow-2xl md:p-12">
              <button
                onClick={closeBooking}
                className="absolute right-6 top-6 opacity-40 transition-colors hover:text-primary hover:opacity-100"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="mb-10 text-center">
                <span className="mb-2 block text-[10px] font-bold tracking-[0.4em] text-primary uppercase">
                  Reservation
                </span>
                <h2 className="font-playfair text-4xl font-normal tracking-tight text-foreground md:text-5xl">
                  BOOK YOUR <span className="italic text-primary">SESSION</span>
                </h2>
              </div>

              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
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
                        className="w-full border-b border-primary/20 bg-transparent py-3 pl-8 pr-4 text-foreground focus:border-primary focus:outline-none transition-colors dark:invert-0"
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
                  className="gold-shimmer w-full py-5 text-xs font-bold tracking-[0.3em] text-zinc-900 uppercase transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  REQUEST RESERVATION
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
