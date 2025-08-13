import { type ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-800 transition-colors duration-300 flex flex-col">
      <header className="relative z-50">
        <Header />
      </header>

      <main className="flex-1 relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="relative z-10 mt-auto">
        <Footer />
      </footer>

      <div id="modal-root"></div>
      <div id="tooltip-root"></div>
    </div>
  );
}
