"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Layers, Ruler, Hammer, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/hero-kitchen.jpg"
          alt="Luxury kitchen countertop"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      <div className="absolute inset-0 bg-charcoal/75" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl lg:text-8xl text-white font-light tracking-wide"
        >
          Where Stone Becomes Art
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 text-white/70 text-lg md:text-xl max-w-2xl font-light"
        >
          Bespoke countertops crafted with precision, passion, and an eye for
          timeless design.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Link
            href="/gallery"
            className="mt-10 inline-block border border-gold text-gold px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-white transition-all duration-300"
          >
            Explore Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 gap-12 md:gap-20 items-center"
      >
        <motion.div variants={fadeUp} className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/images/kitchen-1.jpg"
            alt="Stunning kitchen countertop"
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.div variants={fadeUp}>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-charcoal mb-8">
            Crafted for Those Who Appreciate the Extraordinary
          </h2>
          <p className="text-taupe leading-relaxed text-lg mb-4">
            At Athena Stone Co., every slab tells a story. We source the finest
            natural and engineered stone from quarries around the world, bringing
            unparalleled beauty into your home.
          </p>
          <p className="text-taupe leading-relaxed text-lg">
            As a woman-owned studio, we bring a refined perspective to every
            project, blending artistry with precision craftsmanship.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

const materials = [
  { name: "Marble", img: "/images/marble-texture.jpg", desc: "Timeless veining, unmatched elegance", className: "md:col-span-2 md:row-span-2" },
  { name: "Quartzite", img: "/images/stone-texture-1.jpg", desc: "Nature's hardest, most beautiful stone", className: "md:col-span-1 md:row-span-1" },
  { name: "Granite", img: "/images/granite-texture.jpg", desc: "Enduring strength, natural beauty", className: "md:col-span-1 md:row-span-1" },
  { name: "Quartz", img: "/images/kitchen-3.jpg", desc: "Engineered perfection for modern living", className: "md:col-span-1 md:row-span-1" },
  { name: "Porcelain", img: "/images/kitchen-4.jpg", desc: "Ultra-thin, ultra-durable surfaces", className: "md:col-span-1 md:row-span-1" },
  { name: "Soapstone", img: "/images/kitchen-5.jpg", desc: "Warm, tactile, perfectly imperfect", className: "md:col-span-2 md:row-span-1" },
];

function Materials() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-center mb-16"
        >
          Our Materials
        </motion.h2>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          {materials.map((m) => (
            <motion.div
              key={m.name}
              variants={fadeUp}
              className={`relative group overflow-hidden cursor-pointer ${m.className}`}
              style={{ minHeight: "280px" }}
            >
              <Image
                src={m.img}
                alt={m.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/60 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl text-white font-light">
                  {m.name}
                </h3>
                <p className="text-white/70 text-sm mt-1">{m.desc}</p>
                <span className="mt-3 text-gold text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Learn More
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const steps = [
  { icon: MessageSquare, title: "Consultation", desc: "We listen to your vision" },
  { icon: Layers, title: "Material Selection", desc: "Hand-select your perfect slab" },
  { icon: Ruler, title: "Fabrication", desc: "Precision-cut to your specifications" },
  { icon: Hammer, title: "Installation", desc: "Flawless execution, every time" },
];

function Process() {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-center mb-20"
      >
        Our Process
      </motion.h2>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-4 gap-12"
      >
        {steps.map((s, i) => (
          <motion.div key={s.title} variants={fadeUp} className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-cream flex items-center justify-center mb-6">
              <s.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
            </div>
            <span className="font-[family-name:var(--font-cormorant)] text-5xl font-light text-gold/30">
              0{i + 1}
            </span>
            <h3 className="font-[family-name:var(--font-cormorant)] text-xl mt-2 mb-2">
              {s.title}
            </h3>
            <p className="text-taupe text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "She completely transformed our kitchen. The Calacatta marble island is the centerpiece of our home now.",
    author: "Sarah M.",
    location: "Austin, TX",
  },
  {
    quote:
      "Professional, detail-oriented, and truly passionate about what she does. Our quartzite countertops are absolutely stunning.",
    author: "Rachel & James T.",
    location: "Denver, CO",
  },
  {
    quote:
      "From material selection to final installation, the experience was seamless. We couldn't be happier.",
    author: "Michael K.",
    location: "Scottsdale, AZ",
  },
];

function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-center mb-16"
        >
          What Our Clients Say
        </motion.h2>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white/60 backdrop-blur-md p-8 md:p-10"
              style={{ marginTop: i === 1 ? "2rem" : 0 }}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-gold fill-gold"
                  />
                ))}
              </div>
              <p className="text-charcoal leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="text-sm font-medium text-charcoal">{t.author}</p>
              <p className="text-xs text-taupe">{t.location}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <Image
        src="/images/stone-texture-1.jpg"
        alt="Stone texture"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/70" />
      <div className="relative z-10 text-center px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl text-white font-light mb-8"
        >
          Ready to Transform Your Space?
        </motion.h2>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="inline-block border border-gold text-gold px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-white transition-all duration-300"
          >
            Request a Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Materials />
      <Process />
      <Testimonials />
      <CTASection />
    </>
  );
}
