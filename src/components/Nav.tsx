// 'use client'
// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'

// const links = [
//   { label: 'Watch Webinar', href: '#webinar' },
//   { label: 'Download Overview Deck', href: '#case-study' },
// ]

// export function Nav() {
//   const [scrolled, setScrolled] = useState(false)
//   const [open, setOpen] = useState(false)

//   useEffect(() => {
//     const handler = () => setScrolled(window.scrollY > 20)
//     window.addEventListener('scroll', handler)
//     return () => window.removeEventListener('scroll', handler)
//   }, [])

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
//       }`}
//     >
//       <div className="container-site">
//         <div className="flex items-center justify-between h-18 py-4">
//           <Link href="/" className="flex items-center gap-2">
//             <Image src="/bhlogo.webp" alt="BonusHome" width={200} height={25} quality={100} className={`h-6 w-auto transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`} />
//           </Link>

//           <nav className="hidden md:flex items-center gap-8">
//             {links.map((l) => (
//               <Link
//                 key={l.href}
//                 href={l.href}
//                 className={`text-sm font-medium transition-colors hover:text-accent ${
//                   scrolled ? 'text-slate-600' : 'text-white/85 hover:text-white'
//                 }`}
//               >
//                 {l.label}
//               </Link>
//             ))}
//           </nav>

//           <div className="hidden md:flex items-center gap-3">
//             <a
//               href="sms:+13852045517"
//               className={`text-sm font-semibold transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}
//             >
//               (385) 204-5517
//             </a>
//             <Link href="#book" className="btn-accent text-xs py-2.5 px-5">
//               Book A Call
//             </Link>
//           </div>

//           <button
//             onClick={() => setOpen(!open)}
//             className={`md:hidden p-2 ${scrolled ? 'text-slate-700' : 'text-white'}`}
//             aria-label="Toggle menu"
//           >
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {open ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>

//         {open && (
//           <div className="md:hidden bg-white border-t border-slate-100 py-4 space-y-1">
//             {links.map((l) => (
//               <Link
//                 key={l.href}
//                 href={l.href}
//                 onClick={() => setOpen(false)}
//                 className="block px-2 py-2.5 text-sm font-medium text-slate-700 hover:text-accent"
//               >
//                 {l.label}
//               </Link>
//             ))}
//             <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
//               <a href="sms:+13852045517" className="px-2 text-sm font-semibold text-primary">
//                 (385) 204-5517
//               </a>
//               <Link href="#book" className="btn-accent text-xs mx-2 justify-center">
//                 Book A Call
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   )
// }

'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const links = [
  { label: 'Watch Webinar', href: '#webinar' },
  { label: 'Download Overview Deck', href: '/BonusHomes-Deck.pdf' }, // ✅ FIX
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
      }`}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-18 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/bhlogo.webp" alt="BonusHome" width={200} height={25} quality={100} className={`h-6 w-auto transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`} />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) =>
              l.href.endsWith('.pdf') ? (
                <a
                  key={l.href}
                  href={l.href}
                  download
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    scrolled ? 'text-slate-600' : 'text-white/85 hover:text-white'
                  }`}
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    scrolled ? 'text-slate-600' : 'text-white/85 hover:text-white'
                  }`}
                >
                  {l.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="sms:+13852045517"
              className={`text-sm font-semibold transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}
            >
              (385) 204-5517
            </a>
            <Link href="/book" className="btn-accent text-xs py-2.5 px-5">
              Book A Call
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 ${scrolled ? 'text-slate-700' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-white border-t border-slate-100 py-4 space-y-1">
            {links.map((l) =>
              l.href.endsWith('.pdf') ? (
                <a
                  key={l.href}
                  href={l.href}
                  download
                  onClick={() => setOpen(false)}
                  className="block px-2 py-2.5 text-sm font-medium text-slate-700 hover:text-accent"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-2 py-2.5 text-sm font-medium text-slate-700 hover:text-accent"
                >
                  {l.label}
                </Link>
              )
            )}

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a href="sms:+13852045517" className="px-2 text-sm font-semibold text-primary">
                (385) 204-5517
              </a>
              <Link href="/book" className="btn-accent text-xs mx-2 justify-center">
                Book A Call
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}