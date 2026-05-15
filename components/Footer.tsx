"use client";

import { Scissors, Camera, Users, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background py-24 text-foreground transition-colors border-t border-primary/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="flex items-center gap-3">
            <Scissors className="h-5 w-5 text-primary" />
            <span className="font-playfair text-2xl font-normal tracking-[0.2em]">LUMINA</span>
          </div>

          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">
            <a href="/services" className="hover:text-primary transition-colors hover:opacity-100">Services</a>
            <a href="/gallery" className="hover:text-primary transition-colors hover:opacity-100">Gallery</a>
            <a href="/about" className="hover:text-primary transition-colors hover:opacity-100">About</a>
          </div>

          <div className="flex gap-6">
            <a href="#" className="border border-primary/20 p-3 hover:border-primary transition-colors">
              <Camera className="h-4 w-4 text-primary" />
            </a>
            <a href="#" className="border border-primary/20 p-3 hover:border-primary transition-colors">
              <Users className="h-4 w-4 text-primary" />
            </a>
            <a href="#" className="border border-primary/20 p-3 hover:border-primary transition-colors">
              <Send className="h-4 w-4 text-primary" />
            </a>
          </div>
        </div>

        <div className="mt-20 border-t border-primary/5 pt-10 text-center">
          <p className="text-[10px] font-bold tracking-[0.4em] opacity-30 uppercase">
            © 2026 LUMINA HAIR STUDIO. THE PINNACLE OF LUXURY ARTISTRY.
          </p>
        </div>
      </div>
    </footer>
  );
}
