import Link from "next/link";
import { XCircle } from "lucide-react";

export default function PaymentCancelPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-cream px-6">
      <div className="text-center max-w-md">
        <XCircle className="w-16 h-16 text-taupe mx-auto mb-6" strokeWidth={1} />
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light mb-4">
          Payment Cancelled
        </h1>
        <p className="text-taupe mb-8">
          Your payment was not processed. If you have any questions, please contact us.
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
