import { type ReactNode } from 'react'
import Header from './Header'
import Main from '../main/Main'
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

        {/* Main content area */}
        <main className="relative">
          <Main>
            {children}
          </Main>
        </main>

        {/* Footer will go here */}
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
