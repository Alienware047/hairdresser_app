"use client";

import { motion } from "framer-motion";
import { Scissors, Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { useBooking } from "./Providers";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { openBooking } = useBooking();

  const navItems = [
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full px-6 py-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between border-b border-primary/10 bg-background/20 px-8 py-4 backdrop-blur-lg">
        <Link href="/" className="flex items-center gap-3">
          <Scissors className="h-5 w-5 text-primary" />
          <span className="font-playfair text-2xl font-normal tracking-[0.2em] text-foreground">
            LUMINA
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative text-[10px] font-bold tracking-[0.3em] opacity-60 uppercase transition-colors hover:text-primary hover:opacity-100"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
          <button
            onClick={openBooking}
            className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase transition-colors hover:opacity-70 cursor-pointer"
          >
            Book Now
          </button>
          <ThemeToggle />
        </div>

        {/* Mobile Toggle Group */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            className="text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 flex flex-col gap-6 border border-primary/10 bg-background/95 p-8 backdrop-blur-xl md:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-playfair text-xl tracking-widest text-foreground"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              openBooking();
            }}
            className="text-left font-playfair text-xl tracking-widest text-primary cursor-pointer"
          >
            BOOK NOW
          </button>
        </motion.div>
      )}
    </nav>
  );
}
