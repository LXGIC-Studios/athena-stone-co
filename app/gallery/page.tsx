"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/images/marble-kitchen-1.jpg", category: "Kitchen", alt: "White marble kitchen countertop with waterfall edge" },
  { src: "/images/granite-counter-1.jpg", category: "Kitchen", alt: "Granite countertop with undermount sink" },
  { src: "/images/marble-bath-1.jpg", category: "Bathroom", alt: "Marble bathroom vanity countertop" },
  { src: "/images/new-kitchen-1.jpg", category: "Kitchen", alt: "Modern white kitchen with quartz countertops" },
  { src: "/images/new-kitchen-3.jpg", category: "Kitchen", alt: "Farmhouse kitchen with marble countertops and subway tile" },
  { src: "/images/marble-bath-1.jpg", category: "Bathroom", alt: "Modern bathroom with marble vanity" },
  { src: "/images/granite-counter-2.jpg", category: "Kitchen", alt: "Granite kitchen counter with prep area" },
  { src: "/images/island-counter.jpg", category: "Kitchen", alt: "Large kitchen island with stone countertop" },
  { src: "/images/marble-kitchen-2.jpg", category: "Kitchen", alt: "Marble countertop with gold fixtures" },
  { src: "/images/new-kitchen-2.jpg", category: "Kitchen", alt: "White quartz island with built-in cooktop" },
  { src: "/images/new-marble-slab.jpg", category: "Materials", alt: "White marble countertop with waterfall edge" },
  { src: "/images/new-kitchen-4.jpg", category: "Kitchen", alt: "Dark kitchen with marble island countertop" },
  { src: "/images/countertop-detail.jpg", category: "Kitchen", alt: "Countertop edge detail and finish" },
];

const filters = ["All", "Kitchen", "Bathroom", "Materials"];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? images : images.filter((img) => img.category === active);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const navigate = (dir: number) => {
    if (lightbox === null) return;
    const next = lightbox + dir;
    if (next >= 0 && next < filtered.length) setLightbox(next);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl font-light"
          >
            Our Work
          </motion.h1>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-cream pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-center gap-4 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-6 py-2.5 text-xs tracking-widest uppercase transition-all duration-300 ${
                active === f
                  ? "bg-charcoal text-white"
                  : "bg-transparent text-taupe border border-taupe/30 hover:border-charcoal hover:text-charcoal"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.05 }}
                  className="relative mb-4 break-inside-avoid group cursor-pointer overflow-hidden"
                  onClick={() => openLightbox(i)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-500" />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-charcoal text-[10px] tracking-widest uppercase px-3 py-1">
                    {img.category}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-charcoal/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white z-10"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>
            <button
              className="absolute left-4 md:left-8 text-white/70 hover:text-white z-10"
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              className="absolute right-4 md:right-8 text-white/70 hover:text-white z-10"
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-5xl max-h-[85vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                width={1400}
                height={1000}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
