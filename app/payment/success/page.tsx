import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function PaymentSuccessPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-cream px-6">
      <div className="text-center max-w-md">
        <CheckCircle className="w-16 h-16 text-gold mx-auto mb-6" strokeWidth={1} />
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light mb-4">
          Payment Successful
        </h1>
        <p className="text-taupe mb-8">
          Thank you for your payment. A confirmation has been sent to your email.
        </p>
        <Link
          href="/"
          className="inline-block border border-charcoal text-charcoal px-8 py-3 text-xs tracking-widest uppercase hover:bg-charcoal hover:text-white transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
