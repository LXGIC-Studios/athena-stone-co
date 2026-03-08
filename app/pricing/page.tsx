"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const materials = [
  {
    name: "Granite",
    price: "$40 - $80",
    unit: "per sq ft installed",
    image: "/images/granite-slab.jpg",
    description: "Timeless natural stone with incredible durability. Each slab is unique with its own pattern and character.",
    features: [
      "Heat resistant up to 1,200F",
      "Scratch resistant surface",
      "Unique natural patterns",
      "25+ year lifespan",
      "Wide color selection",
    ],
    popular: false,
  },
  {
    name: "Marble",
    price: "$60 - $150",
    unit: "per sq ft installed",
    image: "/images/marble-slab.jpg",
    description: "The gold standard of luxury surfaces. Iconic veining and a luminous quality that nothing else can replicate.",
    features: [
      "Iconic veining patterns",
      "Cool to the touch",
      "Increases home value",
      "Available in rare varieties",
      "Can be polished or honed",
    ],
    popular: true,
  },
  {
    name: "Quartzite",
    price: "$70 - $120",
    unit: "per sq ft installed",
    image: "/images/quartzite-slab.jpg",
    description: "Nature's hardest countertop material. The beauty of marble with the durability of granite.",
    features: [
      "Harder than granite",
      "UV resistant (won't fade)",
      "Natural stone beauty",
      "Low maintenance",
      "Excellent for kitchens",
    ],
    popular: false,
  },
  {
    name: "Quartz (Engineered)",
    price: "$50 - $100",
    unit: "per sq ft installed",
    image: "/images/quartz-kitchen-1.jpg",
    description: "Engineered for perfection. Consistent color, non-porous, and virtually maintenance-free.",
    features: [
      "Non-porous (no sealing needed)",
      "Consistent color and pattern",
      "Stain resistant",
      "Wide design options",
      "15+ year warranty typical",
    ],
    popular: false,
  },
];

const addOns = [
  { name: "Edge Profiles", price: "From $8/linear ft", desc: "Ogee, bullnose, beveled, waterfall, mitered" },
  { name: "Sink Cutouts", price: "$150 - $350", desc: "Undermount, drop-in, farmhouse" },
  { name: "Cooktop Cutouts", price: "$200 - $300", desc: "Standard or custom sizing" },
  { name: "Backsplash", price: "$25 - $60/sq ft", desc: "Full slab or tile-height options" },
  { name: "Seam Work", price: "$150 - $250/seam", desc: "Invisible seaming for larger layouts" },
  { name: "Removal of Old Countertops", price: "$200 - $500", desc: "Careful removal and disposal" },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/images/granite-counter-1.jpg"
          alt="Beautiful granite countertop"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl text-white font-light"
          >
            Transparent Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-white/70 text-lg max-w-xl"
          >
            No hidden fees, no surprises. Every quote includes material, fabrication, and professional installation.
          </motion.p>
        </div>
      </section>

      {/* Material Pricing Cards */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {materials.map((m) => (
            <motion.div
              key={m.name}
              variants={fadeUp}
              className={`relative overflow-hidden ${m.popular ? "ring-2 ring-gold" : "border border-taupe/20"}`}
            >
              {m.popular && (
                <div className="absolute top-0 right-0 bg-gold text-white text-xs tracking-widest uppercase px-4 py-2 z-10">
                  Most Popular
                </div>
              )}
              <div className="relative h-48 overflow-hidden">
                <Image src={m.image} alt={m.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-3xl text-white font-light">
                    {m.name}
                  </h3>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <span className="font-[family-name:var(--font-cormorant)] text-4xl text-charcoal">
                    {m.price}
                  </span>
                  <span className="text-taupe text-sm ml-2">{m.unit}</span>
                </div>
                <p className="text-taupe leading-relaxed mb-6">{m.description}</p>
                <ul className="space-y-3 mb-8">
                  {m.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-charcoal text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full border border-gold text-gold px-6 py-3 text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-white transition-all duration-300"
                >
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Add-Ons */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-center mb-4"
          >
            Additional Services
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-taupe text-center mb-16 max-w-xl mx-auto"
          >
            Every project is different. Here are common add-ons to customize your installation.
          </motion.p>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {addOns.map((a) => (
              <motion.div
                key={a.name}
                variants={fadeUp}
                className="bg-white p-6"
              >
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl mb-1">{a.name}</h3>
                <p className="text-gold text-sm font-medium mb-2">{a.price}</p>
                <p className="text-taupe text-sm">{a.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-center mb-16"
        >
          Every Quote Includes
        </motion.h2>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          {[
            { title: "In-Home Measurement", desc: "Digital templating for a perfect fit" },
            { title: "Material & Fabrication", desc: "Cut, polished, and finished in our shop" },
            { title: "Professional Installation", desc: "Expert installers, same-day completion" },
            { title: "1-Year Warranty", desc: "Covers fabrication and installation" },
          ].map((item) => (
            <motion.div key={item.title} variants={fadeUp} className="p-6">
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl mb-2">{item.title}</h3>
              <p className="text-taupe text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Consultation Pricing */}
      <section className="py-24 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-center mb-4"
          >
            Consultations
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-white/50 text-center mb-16 max-w-2xl mx-auto"
          >
            We want to make sure every project starts on the right foot. Your first consultation is completely free. Need more time with us? We offer follow-up sessions at a flat rate.
          </motion.p>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {/* Free consultation */}
            <motion.div variants={fadeUp} className="border border-gold p-10 text-center">
              <span className="text-xs text-gold tracking-[0.3em] uppercase font-medium">Your First Visit</span>
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl mt-4 mb-2">Free Consultation</h3>
              <p className="font-[family-name:var(--font-cormorant)] text-5xl text-gold my-6">$0</p>
              <ul className="text-white/60 text-sm space-y-3 text-left mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span>In-home or virtual walkthrough</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span>Material recommendations for your space</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span>Rough project estimate and timeline</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span>Up to 45 minutes, no obligation</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-block w-full border border-gold text-gold px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-white transition-all duration-300"
              >
                Book Your Free Consult
              </Link>
            </motion.div>

            {/* Follow-up consultation */}
            <motion.div variants={fadeUp} className="border border-white/15 p-10 text-center">
              <span className="text-xs text-white/40 tracking-[0.3em] uppercase font-medium">Follow-Up Sessions</span>
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl mt-4 mb-2">Design Consultation</h3>
              <p className="font-[family-name:var(--font-cormorant)] text-5xl text-white my-6">$75<span className="text-lg text-white/40"> /session</span></p>
              <ul className="text-white/60 text-sm space-y-3 text-left mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span>Detailed design planning with slab selection</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span>Edge profile and layout recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span>Color matching with cabinets and flooring</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span>Fee credited toward your project if you proceed</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-block w-full border border-white/30 text-white px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition-all duration-300"
              >
                Schedule a Session
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <Image src="/images/marble-kitchen-1.jpg" alt="Marble kitchen" fill className="object-cover" />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative z-10 text-center px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-white font-light mb-4"
          >
            Ready for Your Free Estimate?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-white/60 mb-8 max-w-lg mx-auto"
          >
            Tell us about your project and we will provide a detailed quote within 24 hours.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Link
              href="/contact"
              className="inline-block border border-gold text-gold px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-white transition-all duration-300"
            >
              Get Your Free Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
