"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CreditCard } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry. We will be in touch shortly.");
  };

  const inputClass =
    "w-full bg-transparent border-b border-taupe/30 py-3 text-charcoal placeholder:text-taupe/50 focus:border-gold focus:outline-none transition-colors text-sm";

  return (
    <>
      <section className="pt-32 pb-8 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl font-light"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-taupe text-lg max-w-xl mx-auto"
          >
            Your first consultation is completely free. Tell us about your project and we will set up a time to visit your space.
          </motion.p>
        </div>
      </section>

      <section className="pb-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid md:grid-cols-3 gap-0 mt-12"
          >
            {/* Form */}
            <motion.div variants={fadeUp} className="md:col-span-2 p-8 md:p-12 bg-white">
              <h2 className="font-[family-name:var(--font-cormorant)] text-2xl mb-8">
                Request a Quote
              </h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none cursor-pointer`}
                  >
                    <option value="">Project Type</option>
                    <option value="kitchen">Kitchen Countertops</option>
                    <option value="bathroom">Bathroom Vanities</option>
                    <option value="commercial">Commercial Project</option>
                    <option value="fireplace">Fireplace Surround</option>
                    <option value="outdoor">Outdoor Kitchen</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
                <button
                  type="submit"
                  className="bg-charcoal text-white px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-gold transition-colors duration-300"
                >
                  Send Inquiry
                </button>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div variants={fadeUp} className="bg-charcoal text-white p-8 md:p-12">
              <h2 className="font-[family-name:var(--font-cormorant)] text-2xl mb-8">
                Visit Our Studio
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div className="text-sm text-white/70">
                    <p>1200 Stone Ridge Blvd, Suite 100</p>
                    <p>Austin, TX 78701</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-sm text-white/70">(512) 555-0142</p>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-sm text-white/70">hello@athenastoneco.com</p>
                </div>
                <div className="flex gap-4">
                  <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div className="text-sm text-white/70">
                    <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p>Sat: 10:00 AM - 3:00 PM</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-white/10">
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl mb-4">
                  Consultations
                </h3>
                <div className="space-y-3 text-sm text-white/70">
                  <div className="flex justify-between">
                    <span>First visit</span>
                    <span className="text-gold font-medium">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Follow-up sessions</span>
                    <span className="text-white/90">$75 each</span>
                  </div>
                  <p className="text-white/40 text-xs pt-2">
                    Follow-up fees are credited toward your project if you move forward with us.
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10">
                <a
                  href="#"
                  className="flex items-center gap-3 border border-gold text-gold px-6 py-3 text-xs tracking-widest uppercase hover:bg-gold hover:text-white transition-all duration-300 justify-center"
                >
                  <CreditCard className="w-4 h-4" strokeWidth={1.5} />
                  Pay Your Invoice
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
