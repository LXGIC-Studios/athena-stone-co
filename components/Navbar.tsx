"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-warm-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12 flex items-center justify-between h-20">
        <Link
          href="/"
          className={`font-[family-name:var(--font-cormorant)] text-xl md:text-2xl tracking-[0.25em] font-semibold transition-colors duration-300 ${
            scrolled ? "text-charcoal" : "text-white"
          }`}
        >
          ATHENA STONE CO.
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 hover:text-gold ${
                scrolled ? "text-charcoal" : "text-white"
              }`}
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
          className="md:hidden relative z-[110]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-charcoal" />
          ) : (
            <Menu
              className={`w-6 h-6 transition-colors ${
                scrolled ? "text-charcoal" : "text-white"
              }`}
            />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-warm-white flex flex-col items-center justify-center gap-10"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-[family-name:var(--font-cormorant)] text-3xl tracking-widest text-charcoal hover:text-gold transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="border border-gold text-gold px-8 py-3 text-sm tracking-widest uppercase hover:bg-gold hover:text-white transition-all duration-300"
            >
              Request a Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
