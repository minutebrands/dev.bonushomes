import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-primary text-slate-400">
      <div className="container-site py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="font-display font-black text-2xl tracking-tight text-white">
                Bonus<span className="text-accent">Home</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm text-slate-400">
              The world's fastest rapidly deployable home — a tax-advantaged investment
              that delivers a $1M write-off, monthly cash flow, and a real asset you own.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="tel:+14358627767" className="text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors">
                (435) 862-7767
              </a>
              <span className="text-slate-700">·</span>
              <a href="mailto:kason@highlandsteel.homes" className="text-sm font-semibold text-slate-400 hover:text-slate-200 transition-colors">
                kason@highlandsteel.homes
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Company</p>
            <ul className="space-y-2.5">
              {[
                ['Watch Webinar', '#webinar'],
                ['Download Case Study', '#case-study'],
                ['Book A Call', '#book'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Bonus Home. All rights reserved.</p>
          <p className="max-w-xl text-center md:text-right leading-relaxed">
            This material is for informational purposes only and does not constitute tax, legal, or investment advice.
            Accredited investors only. Consult qualified professionals before making investment decisions.
          </p>
        </div>
      </div>
    </footer>
  )
}
