"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Gem, Heart, Leaf, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const values = [
  { icon: Gem, title: "Quality Craftsmanship", desc: "Every cut, every edge, every seam reflects our obsession with perfection." },
  { icon: Heart, title: "Personalized Service", desc: "We treat every home like our own, guiding you through each decision." },
  { icon: Leaf, title: "Sustainable Sourcing", desc: "Responsibly sourced stone from ethical quarries around the world." },
  { icon: Sparkles, title: "Design Excellence", desc: "An artistic eye that transforms functional surfaces into focal points." },
];

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 50, suffix: "+", label: "Stone Varieties" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 md:pb-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-12 md:gap-20 items-center"
          >
            <motion.div variants={fadeUp} className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/portrait-owner.jpg"
                alt="Owner of Athena Stone Co."
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl font-light mb-8">
                The Woman Behind the Stone
              </h1>
              <p className="text-taupe leading-relaxed text-lg mb-4">
                With over 15 years of experience in natural stone fabrication and
                design, Athena Stone Co. was born from a deep passion for the
                raw beauty found in the earth itself.
              </p>
              <p className="text-taupe leading-relaxed text-lg mb-4">
                What began as a love for geology and architecture evolved into a
                mission: to bring museum-quality stone into everyday spaces. Each
                project is a collaboration, a conversation between client and
                craftsman.
              </p>
              <p className="text-taupe leading-relaxed text-lg">
                As a woman-owned business in a traditionally male-dominated
                industry, we bring fresh perspective, meticulous attention to
                detail, and an unwavering commitment to excellence.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-center mb-16"
          >
            What We Stand For
          </motion.h2>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp} className="text-center p-8 bg-cream">
                <div className="w-14 h-14 mx-auto rounded-full bg-warm-white flex items-center justify-center mb-6">
                  <v.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl mb-3">
                  {v.title}
                </h3>
                <p className="text-taupe text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp}>
                <div className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-gold">
                  <Counter end={s.value} suffix={s.suffix} />
                </div>
                <p className="text-white/60 text-sm mt-3 tracking-wide uppercase">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
