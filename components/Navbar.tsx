"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = [
    { href: "/gallery", label: "Gallery" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-warm-white shadow-sm"
            : "bg-warm-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12 flex items-center justify-between h-20">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl tracking-[0.25em] font-semibold text-charcoal"
          >
            ATHENA STONE CO.
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm tracking-widest uppercase transition-colors duration-300 hover:text-gold text-charcoal"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="border border-gold text-gold px-6 py-2.5 text-xs tracking-widest uppercase hover:bg-gold hover:text-white transition-all duration-300"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative z-[110] w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block h-[2px] w-6 origin-center bg-charcoal"
              animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-[2px] w-6 bg-charcoal"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-[2px] w-6 origin-center bg-charcoal"
              animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] bg-warm-white pt-28 px-8"
          >
            <div className="flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-5 border-b border-taupe/15 font-[family-name:var(--font-cormorant)] text-3xl tracking-wider text-charcoal hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-10"
            >
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="inline-block border border-gold text-gold px-8 py-3.5 text-sm tracking-widest uppercase hover:bg-gold hover:text-white transition-all duration-300"
              >
                Request a Quote
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-12 text-sm text-taupe"
            >
              <p>(555) 234-8900</p>
              <p className="mt-1">hello@athenastoneco.com</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
