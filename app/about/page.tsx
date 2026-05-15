import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      
      <div className="container mx-auto px-6 pb-24 pt-48">
        <div className="grid gap-24 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <span className="mb-4 block text-xs font-bold tracking-[0.4em] text-primary uppercase">
              Our Heritage
            </span>
            <h1 className="font-playfair text-6xl font-normal tracking-tight md:text-8xl">
              A LEGACY OF <span className="italic text-primary">STYLE</span>
            </h1>
            <p className="mt-12 text-lg font-light leading-relaxed tracking-wide opacity-70">
              Founded in 2026, LUMINA was born from a desire to redefine the luxury hair experience. We believe that hair design is an intimate form of self-expression, requiring both technical precision and artistic intuition.
            </p>
            <p className="mt-8 text-lg font-light leading-relaxed tracking-wide opacity-70">
              Our atelier is a sanctuary for those who seek the extraordinary. Every guest is treated as a masterpiece in progress, receiving the undivided attention of our master artisans.
            </p>
          </div>
          
          <div className="relative aspect-[3/4] overflow-hidden grayscale transition-all duration-1000 hover:grayscale-0">
            <img 
              src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1000&auto=format&fit=crop" 
              alt="Luxury Studio" 
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 border-[24px] border-black/50" />
          </div>
        </div>

        <div className="mt-48 text-center">
          <h2 className="font-playfair text-5xl font-normal tracking-tight md:text-7xl">
            THE MASTER <span className="italic text-primary">ARTISANS</span>
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-primary/30" />
          
          <div className="mt-24 grid gap-12 md:grid-cols-3">
            {[
              { name: "Julian Vance", role: "Creative Director", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop" },
              { name: "Elena Rossi", role: "Master Colorist", img: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=1000&auto=format&fit=crop" },
              { name: "Marcus Thorne", role: "Senior Stylist", img: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop" }
            ].map((artisan) => (
              <div key={artisan.name} className="group flex flex-col items-center">
                <div className="mb-8 aspect-[4/5] w-full overflow-hidden grayscale transition-all duration-700 group-hover:grayscale-0">
                  <img src={artisan.img} alt={artisan.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <h3 className="font-playfair text-2xl font-normal tracking-wider">{artisan.name}</h3>
                <p className="mt-2 text-[10px] font-bold tracking-[0.3em] text-primary uppercase">{artisan.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
