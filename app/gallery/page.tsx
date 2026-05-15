import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const galleryImages = [
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521590832167-552ff99a88fa?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600948836101-f9ff59394081?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop"
];

export default function GalleryPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      
      <div className="container mx-auto px-6 pb-24 pt-48">
        <div className="mb-24 text-center">
          <span className="mb-2 block text-xs font-bold tracking-[0.4em] text-primary uppercase">
            Aesthetic Portfolio
          </span>
          <h1 className="font-playfair text-6xl font-normal tracking-tight md:text-8xl">
            THE <span className="italic text-primary">COLLECTION</span>
          </h1>
          <div className="mx-auto mt-8 h-px w-24 bg-primary/30" />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((src, index) => (
            <div key={index} className="group relative aspect-[4/5] overflow-hidden">
              <img
                src={src}
                alt={`Collection Piece ${index + 1}`}
                className="h-full w-full grayscale object-cover transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 transition-opacity duration-700 group-hover:opacity-100 flex items-center justify-center">
                <div className="border border-white/40 px-8 py-4 backdrop-blur-md">
                   <p className="text-[10px] font-bold tracking-[0.4em] text-white uppercase">VIEW LOOK</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
