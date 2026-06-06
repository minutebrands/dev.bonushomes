import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { ImageSlider } from '@/components/ImageSlider'

export const metadata: Metadata = {
  title: "Bonus Home — The World's Fastest Rapidly Deployable Home",
}

const features = [
  {
    title: 'Rapid Deployment Capability',
    body: 'ReadyPod units are designed for speed. Having no need for a permanent foundation, our Duplex and Bungalow models can be delivered and operational within hours, allowing emergency response teams to provide immediate shelter to displaced families and critical personnel.',
  },
  {
    title: 'Industrial-Grade Durability & Strength',
    body: 'Built to withstand harsh environments, ReadyPod structures feature reinforced steel frames to ensure long-term resilience. Whether deployed in hurricane zones, wildfire aftermaths, or flood-prone regions, these units are engineered to perform under pressure and remain intact when traditional housing fails.',
  },
  {
    title: 'Complete Living Quarters',
    body: 'Each ReadyPod includes a private bathroom, full kitchen, sleeping areas, and climate control—providing comfort, safety, and privacy in even the most chaotic conditions. These turn-key living spaces eliminate the need for separate infrastructure, making them ideal for remote or compromised areas.',
  },
  {
    title: 'Scalable and Adaptable Footprint',
    body: "ReadyPod's two core models, the Duplex and the Bungalow, offer flexibility to suit a range of deployment needs. From single-family relief to temporary workforce lodging or mobile command centers, the units can be deployed individually or in clusters, depending on the scale and scope of the emergency.",
  },
]

const bungalowSpecs = [
  ['Dimensions', "19' × 20'"],
  ['Living Space', '380 sq ft'],
  ['Roof', 'Aluminum / Steel'],
  ['Insulation', 'Composite EPS / PET / XPS'],
  ['Wall Material', 'Fiberglass / XPS'],
  ['Power Supply', '60A'],
  ['Flooring', 'LVP – Natural Rustik, White, Gregio Notte'],
  ['Lighting', 'LED'],
  ['Electrical', 'Pre-wired'],
  ['Plumbing', 'PVC / PEX'],
]

const duplexSpecs = [
  ['Dimensions', "19' × 20'"],
  ['Living Space', '190 sq ft per side'],
  ['Private Entrances', '2'],
  ['Each Side', 'Kitchen, bedroom & bathroom'],
  ['Roof', 'Aluminum / Steel'],
  ['Insulation', 'Composite EPS / PET / XPS'],
  ['Wall Material', 'Fiberglass / XPS'],
  ['Power Supply', '60A'],
  ['Flooring', 'LVP – Natural Rustik, White, Gregio Notte'],
  ['Lighting', 'LED'],
  ['Electrical', 'Pre-wired'],
  ['Plumbing', 'PVC / PEX'],
]

const bungalowSlides = [
  '/bungalow-kitchen-3.jpg',
  '/bungalow-1920.jpg',
  '/bungalow-bed-2.jpg',
  '/bungalow-bed-3.jpg',
  '/bungalow-couch-1.jpg',
  '/bungalow-couch-2.jpg',
  '/bungalow-den.jpg',
]

const duplexSlides = [
  '/d1.jpg',
  '/d4.jpg',
  '/d5.jpg',
  '/d3.jpg',
  '/d2.jpg',
]

const applications = [
  {
    title: 'Natural Disasters',
    body: 'ReadyPod units are engineered for rapid deployment in the aftermath of hurricanes, floods, wildfires, and other natural disasters.',
    image: '/app-natural-disasters.jpg',
  },
  {
    title: 'Homeless Support',
    body: 'ReadyPod offers scalable, self-contained housing solutions ideal for transitional shelters and permanent supportive housing.',
    image: '/app-homeless.jpg',
  },
  {
    title: 'Military Use',
    body: 'ReadyPod units are a versatile solution for military housing, base expansions, and forward operating environments.',
    image: '/app-military.jpg',
  },
  {
    title: 'Veteran Housing',
    body: 'ReadyPod creates comfortable, private living spaces tailored to the unique needs of veterans.',
    image: '/app-veteran.jpg',
  },
]

export default function RiaPage() {
  return (
    <>
      <Nav />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-primary">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-secondary/40 blur-[140px] pointer-events-none" />

        <div className="relative container-site pt-32 pb-20">
          <div className="max-w-3xl">
            <p className="text-base text-white mb-6 tracking-wide">Introducing ReadyPod</p>
            <h1 className="font-display font-black text-white text-5xl md:text-6xl leading-[1.0] tracking-tight mb-8">
              The World's Fastest
              <br />
              Rapidly Deployable
              <br />
              Home
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-lg mb-10">
              Designed specifically for disaster response and recovery. Operational within hours, no permanent foundation needed.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/book" className="btn-accent text-base py-4 px-9">
                Book An Intro Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── READYPOD INTRO ────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="section-label text-brand-400 mb-4">Introducing ReadyPod</p>
            <div className="w-12 h-0.5 bg-accent mx-auto mb-8" />
            <h2 className="font-display font-black text-primary text-4xl md:text-6xl leading-tight mb-6">
              The World's Fastest Rapidly Deployable Home
            </h2>
            <p className="text-slate-500 text-xl leading-relaxed">
              Solving the country's emergency housing shortage
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="font-display font-bold text-2xl text-primary mb-6">
                Governments, Military & Humanitarian Organizations<br />
                <span className="text-slate-500 font-normal text-xl">Need Rapidly Deployable Emergency Housing</span>
              </h3>
              <ul className="space-y-4 mb-8">
                {[
                  'Natural disasters are increasing in frequency and impact.',
                  'There are few, if any, ready-to-deploy housing solutions available to federal and local governments during natural disasters.',
                  'Existing solutions (trailers, hotel vouchers, tents) are slow, unsafe, and inefficient.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-slate-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                In the wake of natural disasters, communities need housing solutions that are fast, durable, and
                dignified — and that's exactly what ReadyPod delivers. Built on our proven Duplex and Bungalow models,
                these industrial-strength units are engineered for rapid deployment in crisis zones. Whether sheltering
                displaced families or supporting field operations, ReadyPod units offer safe, self-contained
                environments that can be operational within hours.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Emergency housing has never been more attainable or adaptable, <em>until now.</em>
              </p>
              <p className="text-slate-500 text-sm">We invite FEMA and related agencies to explore ReadyPod.</p>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src="/asset-section.jpg"
                alt="ReadyPod Duplex deployed in the field"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 FEATURES ──────────────────────────────────────────────── */}
      <section className="py-28 bg-slate-50 border-y border-slate-100">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="section-label text-brand-400 mb-4">Built Different</p>
            <div className="w-12 h-0.5 bg-accent mx-auto mb-8" />
            <h2 className="font-display font-bold text-4xl md:text-5xl text-primary leading-tight">
              Purpose-built for rapid, dignified deployment.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={f.title} className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-accent/30 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center mb-5">
                  <span className="font-display font-black text-brand-400 text-sm">0{i + 1}</span>
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg mb-3">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECS ───────────────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container-site">
          <div className="max-w-xl mb-16">
            <p className="section-label text-brand-400 mb-4">The Models</p>
            <div className="w-12 h-0.5 bg-accent mb-8" />
            <h2 className="font-display font-bold text-4xl md:text-5xl text-primary leading-tight">
              Two models. One mission.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Bungalow */}
            <div className="rounded-2xl border border-slate-100 overflow-hidden">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image src="/bungalow.webp" alt="The Bungalow" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="bg-primary px-8 py-6">
                <p className="font-display font-black text-white text-2xl">The Bungalow</p>
                <p className="text-brand-400 text-sm mt-1">380 sq ft · Single unit</p>
              </div>
              <div className="px-8 py-6 bg-slate-50 border-b border-slate-100">
                <p className="text-slate-600 text-sm leading-relaxed">A modern dwelling designed to make the most of its living space. With a washer/dryer and full-size kitchen, the Bungalow can be configured to accommodate families in a safe and comfortable environment.</p>
              </div>
              <div className="divide-y divide-slate-100">
                {bungalowSpecs.map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-4 px-8 py-4">
                    <span className="text-slate-500 text-sm font-medium flex-shrink-0">{label}</span>
                    <span className="text-slate-900 text-sm text-right">{value}</span>
                  </div>
                ))}
              </div>
              <ImageSlider images={bungalowSlides} alt="The Bungalow" />
            </div>

            {/* Duplex */}
            <div className="rounded-2xl border border-slate-100 overflow-hidden">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image src="/duplex.webp" alt="The Duplex" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="bg-secondary px-8 py-6">
                <p className="font-display font-black text-white text-2xl">The Duplex</p>
                <p className="text-brand-400 text-sm mt-1">190 sq ft per side · Dual unit</p>
              </div>
              <div className="px-8 py-6 bg-slate-50 border-b border-slate-100">
                <p className="text-slate-600 text-sm leading-relaxed">Specifically designed for efficiency, the Duplex is divided into two equal units, each with its private entrance, fully equipped kitchen, cozy bedroom, and modern bathroom.</p>
              </div>
              <div className="divide-y divide-slate-100">
                {duplexSpecs.map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-4 px-8 py-4">
                    <span className="text-slate-500 text-sm font-medium flex-shrink-0">{label}</span>
                    <span className="text-slate-900 text-sm text-right">{value}</span>
                  </div>
                ))}
              </div>
              <ImageSlider images={duplexSlides} alt="The Duplex" />
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS ────────────────────────────────────────────── */}
      <section className="py-28 bg-primary">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="section-label text-brand-400 mb-4">Applications</p>
            <div className="w-12 h-0.5 bg-accent mx-auto mb-8" />
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight">
              ReadyPod is Ideal for Multiple Applications that Need Durable, Rapidly Deployable Housing Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app) => (
              <div key={app.title} className="relative rounded-2xl overflow-hidden group cursor-default">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <p className="font-display font-black text-white text-xl mb-2">{app.title}</p>
                    <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">{app.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <section className="py-28 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-navy opacity-60" />
        <div className="relative container-site text-center">
          <p className="section-label text-brand-400 mb-6">Ready to Talk?</p>
          <h2 className="font-display font-black text-white text-4xl md:text-5xl leading-tight mb-6 max-w-3xl mx-auto">
            Resilient options built to meet the urgent demands of emergency housing.
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Learn how ReadyPod is solving the emergency housing crisis — for governments, military, and humanitarian organizations worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book" className="btn-accent text-base py-4 px-10">
              Book An Intro Call
            </Link>
            <a href="sms:+13852045517" className="btn-ghost border-white/20 text-white hover:border-brand-400 hover:text-brand-400 text-base py-4 px-10">
              Text Us: (385) 204-5517
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
