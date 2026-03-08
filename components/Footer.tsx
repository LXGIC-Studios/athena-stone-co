import Link from "next/link";

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345c-.091.379-.293 1.194-.333 1.361-.052.22-.174.266-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

function HouzzIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.5 3L5 7.5V21h5.5v-6h3v6H19V7.5L12.5 3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl tracking-[0.2em] text-white mb-4">
              ATHENA STONE CO.
            </h3>
            <p className="text-sm leading-relaxed mb-2">
              1200 Stone Ridge Blvd, Suite 100
            </p>
            <p className="text-sm">Austin, TX 78701</p>
            <p className="text-sm mt-4">(512) 555-0142</p>
            <p className="text-sm">hello@athenastoneco.com</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white mb-6">
              Navigate
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/gallery", label: "Gallery" },
                { href: "/pricing", label: "Pricing" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm hover:text-gold transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white mb-6">
              Follow Us
            </h4>
            <div className="flex gap-5">
              <a href="#" aria-label="Instagram" className="hover:text-gold transition-colors">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="Pinterest" className="hover:text-gold transition-colors">
                <PinterestIcon />
              </a>
              <a href="#" aria-label="Houzz" className="hover:text-gold transition-colors">
                <HouzzIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; 2026 Athena Stone Co. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Built by{" "}
            <a
              href="https://lxgicstudios.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              LXGIC Studios
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
