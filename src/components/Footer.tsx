import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="container-site py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image src="/logo.webp" alt="BHTaxPod" width={140} height={40} className="h-9 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-slate-400">
              A government-compliant, attorney-verified investment strategy that generates
              substantial bonus depreciation for high-net-worth clients — in the year of investment.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="tel:+13852045517"
                className="text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors"
              >
                (385) 204-5517
              </a>
              <span className="text-slate-700">·</span>
              <a
                href="sms:+13852045517"
                className="text-sm font-semibold text-slate-400 hover:text-slate-200 transition-colors"
              >
                Send a Message
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Strategy</p>
            <ul className="space-y-2.5">
              {[
                ['The Opportunity', '/opportunity'],
                ['How It Works', '/opportunity#how-it-works'],
                ['For Advisors', '/advisors'],
                ['Resources', '/resources'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Company</p>
            <ul className="space-y-2.5">
              {[
                ['About', '/about'],
                ['Contact', '/contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
              <li className="pt-3 border-t border-slate-800">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-2.5">Design Variants</p>
                <ul className="space-y-2.5">
                  {[
                    ['Bonus Homes v2', '/v2'],
                    ['Bonus Homes v3', '/v3'],
                  ].map(([label, href]) => (
                    <li key={href}>
                      <Link href={href} className="text-sm hover:text-white transition-colors">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} BHTaxPod. All rights reserved.</p>
          <p className="max-w-xl text-center md:text-right leading-relaxed">
            This material is for informational purposes only and does not constitute tax, legal, or investment advice.
            Consult qualified professionals before making investment decisions. Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  )
}
