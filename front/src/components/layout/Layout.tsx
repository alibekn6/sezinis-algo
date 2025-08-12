import { type ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Main container wrapper */}
      <div className="relative">
        {/* Header/Navigation will go here */}
        <header className="relative z-50">
          {/* Navigation component will be added here */}
        </header>

        {/* Main content area */}
        <main className="relative">
          {children}
        </main>

        {/* Footer will go here */}
        <footer className="relative z-10">
          {/* Footer component will be added here */}
        </footer>
      </div>

      {/* Global overlays, modals, etc. */}
      <div id="modal-root"></div>
      <div id="tooltip-root"></div>
    </div>
  )
}
