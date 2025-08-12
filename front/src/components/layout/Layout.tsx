import { type ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-800 transition-colors duration-300">
      {/* Main container wrapper */}
      <div className="relative">
        {/* Header/Navigation */}
        <header className="relative z-50">
          <Header />
        </header>

        <main className="relative">
          {children}
        </main>

        <footer className="relative z-10">
            <Footer />
        </footer>
      </div>

      {/* Global overlays, modals, etc. */}
      <div id="modal-root"></div>
      <div id="tooltip-root"></div>
    </div>
  )
}
