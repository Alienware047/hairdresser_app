import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const serviceCategories = [
  {
    name: "Design & Sculpting",
    services: [
      { name: "Master Artist Cut", price: "From $150", desc: "A bespoke architectural cut tailored to your facial structure." },
      { name: "Creative Transformation", price: "From $200", desc: "A complete overhaul of your current style." },
      { name: "Signature Blowout", price: "From $85", desc: "Luxe styling with volume and movement." }
    ]
  },
  {
    name: "Color Artistry",
    services: [
      { name: "Lumina Balayage", price: "From $350", desc: "Hand-painted highlights for a natural, multidimensional look." },
      { name: "High-Gloss Glaze", price: "From $120", desc: "Premium shine and tone enhancement." },
      { name: "Corrective Color", price: "By Quote", desc: "Expert intervention for complex color transitions." }
    ]
  },
  {
    name: "Restorative Alchemy",
    services: [
      { name: "Silk Fusion Treatment", price: "From $110", desc: "Deep hydration and protein reconstruction." },
      { name: "Scalp Detox Ritual", price: "From $95", desc: "Purifying and invigorating treatment for optimal hair health." },
      { name: "Keratin infusion", price: "From $400", desc: "Smoothness and frizz control that lasts months." }
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      
      <div className="container mx-auto px-6 pb-24 pt-48">
        <div className="mb-24 text-center">
          <span className="mb-2 block text-xs font-bold tracking-[0.4em] text-primary uppercase">
            Curation of Services
          </span>
          <h1 className="font-playfair text-6xl font-normal tracking-tight text-foreground md:text-8xl">
            THE <span className="italic text-primary">OFFERING</span>
          </h1>
          <div className="mx-auto mt-8 h-px w-24 bg-primary/30" />
        </div>

        <div className="space-y-32">
          {serviceCategories.map((category) => (
            <div key={category.name}>
              <h2 className="font-playfair mb-16 text-3xl font-normal tracking-[0.2em] text-foreground uppercase">
                {category.name}
              </h2>
              
              <div className="grid gap-x-24 gap-y-16 lg:grid-cols-2">
                {category.services.map((service) => (
                  <div key={service.name} className="group border-b border-primary/10 pb-10">
                    <div className="flex items-end justify-between">
                      <h3 className="font-playfair text-2xl font-normal tracking-wide text-foreground">
                        {service.name}
                      </h3>
                      <span className="text-xs font-bold tracking-[0.2em] text-primary">
                        {service.price}
                      </span>
                    </div>
                    <p className="mt-4 text-xs font-light tracking-[0.1em] opacity-60 uppercase leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
