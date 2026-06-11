import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Bonus Home — The World's Fastest Rapidly Deployable Home",
}

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-[500px] px-8">
        <Image
          src="/bhlogo.webp"
          alt="Bonus Homes"
          width={500}
          height={200}
          className="w-full h-auto"
          priority
        />
      </div>
    </main>
  )
}
