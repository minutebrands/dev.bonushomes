import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { ImageSlider } from '@/components/ImageSlider'
import {
  Home,
  Flame,
  Users,
  Camera,
  Heart,
  AlertTriangle,
  CheckCircle,
  Zap,
  Shield,
  DollarSign,
  Smile,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bonus Home — Invest $250K. Write Off $1M. Get Paid Every Month.',
}

const tried = [
  {
    icon: Home,
    title: 'Cost Seg & STRs',
    body: 'Requires "material participation." You essentially buy yourself a second full-time job managing guests and maintenance to qualify for the write-off.',
  },
  {
    icon: Flame,
    title: 'Oil & Gas',
    body: 'High risk and depleting assets. While the write-off is decent, the long-term cash flow is unpredictable and eventually disappears.',
  },
  {
    icon: Users,
    title: 'Syndications',
    body: 'Most real estate syndications only offset passive income. If you have a W2 or active business income, these do nothing to lower your primary tax bill.',
  },
  {
    icon: Camera,
    title: 'Equipment Leasing',
    body: 'Aggressive structures often face heavy IRS scrutiny. Finding a program with institutional-grade legal backing is extremely rare.',
  },
  {
    icon: Heart,
    title: 'Charitable Giving',
    body: 'A noble choice, but it\'s a 1:1 deduction. You lose the dollar to save $0.37. It lacks the 4:1 leverage needed to build wealth while saving taxes.',
  },
  {
    icon: AlertTriangle,
    title: 'Land Easements',
    body: 'Significant IRS "Listing Transaction" risks. Many promoters have been shut down, leaving investors with massive audits and penalties.',
  },
]

const pillars = [
  { icon: DollarSign, title: '4:1 Leveraged Write-off', body: 'Year-one deduction at 400% of what you deploy.' },
  { icon: Shield,     title: 'Defensible Structure',    body: 'Tax attorneys. Opinion letters. CPA-confirmed.' },
  { icon: CheckCircle, title: 'Contractual Cash Flow',  body: 'Monthly. After debt service. In your agreement.' },
  { icon: Smile,      title: 'Zero Headaches',          body: 'No maintenance. No second job. No headaches.' },
]

const features = [
  {
    title: 'Rapid Deployment Capability',
    body: 'Units operational within hours, no permanent foundation needed.',
  },
  {
    title: 'Industrial-Grade Durability & Strength',
    body: 'Reinforced steel frames engineered for the harshest environments.',
  },
  {
    title: 'Complete Living Quarters',
    body: 'Includes bathroom, kitchen, sleeping areas, and climate control.',
  },
  {
    title: 'Scalable and Adaptable Footprint',
    body: 'Two models — Duplex and Bungalow — deployable individually or in clusters.',
  },
]

const bungalowSpecs = [
  ['Dimensions', "19' × 20'"],
  ['Living Space', '380 sq ft'],
  ['Roof', 'Aluminum / Steel'],
  ['Insulation', 'Composite EPS / PET / XPS'],
  ['Wall Material', 'Fiberglass / XPS'],
  ['Power Supply', '60A'],
  ['Flooring', 'LVP options'],
  ['Features', 'LED lighting, pre-wired, PVC/PEX, W/D, full-size kitchen'],
]

const duplexSpecs = [
  ['Dimensions', "19' × 20'"],
  ['Living Space', '190 sq ft per side'],
  ['Each Side Includes', 'Kitchen + bathroom'],
  ['Roof', 'Aluminum / Steel'],
  ['Insulation', 'Composite EPS / PET / XPS'],
  ['Wall Material', 'Fiberglass / XPS'],
  ['Power Supply', '60A'],
  ['Features', 'LED lighting, pre-wired electrical, PVC/PEX plumbing'],
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
    body: 'ReadyPod creates comfortable, private living spaces tailored to the unique needs of military veterans nationwide.',
    image: '/app-veteran.jpg',
  },
]

export default function HomePage() {
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
            <p className="text-base text-white mb-6 tracking-wide">Paying over 30% in taxes?</p>
            <h1 className="font-display font-black text-white text-5xl md:text-6xl leading-[1.0] tracking-tight mb-8">
              Invest $250k.
              <br />
              Write off up to $1M.
              <br />
              Get paid every month.
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-lg mb-10">
              Invest $250K and turn your tax bill into an asset that gives you up to a
              $1M write-off on active income, monthly cash flow, full professional
              management, and a structure supported by tax attorneys to be defensible.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="#book" className="btn-accent text-base py-4 px-9">
                Book An Intro Call
              </Link>
              <span className="text-slate-500 text-sm">Accredited investors only · $250K minimum</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────────────── */}
      <section className="bg-secondary py-12 border-y border-white/10">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '$1M',     label: 'Year-one offset' },
              { value: '23.96%', label: 'Target IRR' },
              { value: '7%',     label: 'Cash-on-cash' },
              { value: '4:1',    label: 'Tax leverage' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display font-black text-4xl text-white mb-1">{s.value}</p>
                <p className="text-slate-300 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM ─────────────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container-site">
          <h2 className="font-display font-black text-4xl md:text-5xl text-slate-900 leading-tight text-center mb-8">
            Your Tax Bill Is Your Biggest Expense.
            <br />
            Nothing You've Tried Checks All The Boxes.
          </h2>
          <p className="text-accent text-lg italic text-center mb-10 leading-relaxed">
            You earn $1M or more. You keep about half. The rest goes to the IRS — 37 to 50 cents of every dollar, gone.
          </p>
          <p className="text-slate-500 text-lg text-center mb-12">
            Maybe you haven't tried to fix it yet. Maybe you've tried a few things. Either way, it isn't giving you the results you want.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-14">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <p className="font-display font-bold text-slate-900 mb-2">If you haven't had a tax strategy:</p>
              <p className="text-slate-500 text-sm leading-relaxed">The basic playbook was built for a much smaller problem. Those tools have a ceiling. Your income passed it a long time ago.</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <p className="font-display font-bold text-slate-900 mb-2">If you've tried strategies:</p>
              <p className="text-slate-500 text-sm leading-relaxed">Most solve one thing but break on another. No strategy gives you all four at once.</p>
            </div>
          </div>

          <p className="text-center text-accent font-semibold text-sm uppercase tracking-widest mb-10">What you've likely tried</p>

          <div className="grid md:grid-cols-3 gap-6">
            {tried.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-accent/30 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-5 shadow-sm">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <p className="font-display font-bold text-slate-900 mb-2">{title}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PATTERN / 4 PILLARS ─────────────────────────────────────── */}
      <section className="py-28 bg-primary">
        <div className="container-site">
          <div className="text-center mb-16">
            <p className="text-slate-400 text-lg mb-2">The pattern is simple.</p>
            <h2 className="font-display font-black text-white text-4xl md:text-5xl leading-tight max-w-3xl mx-auto">
              No strategy you've had access to does all four of these at once.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {pillars.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-brand-400/40 transition-colors">
                <Icon className="w-7 h-7 text-brand-400 mb-5" />
                <p className="font-display font-bold text-white text-lg mb-2">{title}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="text-center" id="book">
            <Link href="#book" className="btn-accent text-base py-4 px-10 mb-4 inline-flex">
              See What Checks The Boxes — Book Your Call
            </Link>
            <p className="text-slate-500 text-sm mt-4">Accredited investors only · $250K minimum</p>
          </div>
        </div>
      </section>

      {/* ── HIGHLAND STEEL INTRO ────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="section-label text-brand-400 mb-4">The Asset</p>
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
                  'Natural disasters are increasing in frequency and impact',
                  'Few ready-to-deploy housing solutions exist for governments during natural disasters',
                  'Existing solutions (trailers, hotel vouchers, tents) are slow, unsafe, and inefficient',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-slate-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                In the wake of natural disasters, communities need housing solutions that are fast, durable, and
                dignified — and that's exactly what ReadyPod delivers.
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
            $250K in. $1M write-off. Monthly cash flow. A real asset you own.
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            We work with accredited investors who are serious about turning their tax burden into a performing asset.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#book" className="btn-accent text-base py-4 px-10">
              Book An Intro Call
            </Link>
            <a href="sms:+13852045517" className="btn-ghost border-white/20 text-white hover:border-brand-400 hover:text-brand-400 text-base py-4 px-10">
              Text Us: (385) 204-5517
            </a>
          </div>
          <p className="text-slate-600 text-sm mt-6">Accredited investors only · $250K minimum</p>
        </div>
      </section>

      <Footer />
    </>
  )
}
