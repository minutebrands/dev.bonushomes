import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export default function BookPage() {
  return (
    <>
      <Nav />

      {/* OLD SECTION (COMMENTED) */}
{/*
<section className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
  <div className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-lg">

    <h1 className="text-3xl font-bold mb-4 text-center">
      Book a Call
    </h1>

    <p className="text-center text-gray-600 mb-6">
      Accredited investors only — $250K minimum
    </p>

    <ContactForm />

  </div>
</section>
*/}


{/* NEW HERO STYLE SECTION */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary py-20">

  {/* Background */}
  <img
    src="/hero-bg.jpg"
    className="absolute inset-0 w-full h-full object-cover opacity-40"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-primary/60"></div>

  {/* Blur */}
  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-secondary/40 blur-[140px]" />

  {/* Content */}
  <div className="relative z-10 max-w-xl w-full bg-white p-8 rounded-2xl shadow-lg">

    {/* ❌ CLOSE BUTTON */}
<Link
  href="/"
  className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
>
  ✕
</Link>

{/* BACK LINK */}
<Link
  href="/"
  className="text-sm text-gray-500 hover:text-black mb-4 inline-block"
>
  ← Back to Home
</Link>
    

    <h1 className="text-3xl font-bold mb-4 text-center">
      Book a Call
    </h1>

    <p className="text-center text-gray-600 mb-6">
      Accredited investors only — $250K minimum
    </p>

    <ContactForm />

 

  </div>
</section>

      <Footer />
    </>
  );
}