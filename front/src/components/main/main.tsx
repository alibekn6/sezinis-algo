import { type ReactNode } from 'react'

interface MainProps {
  children: ReactNode
}

export default function Main({ children }: MainProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      {children}
    </section>
  )
}


