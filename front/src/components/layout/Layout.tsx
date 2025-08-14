import { type ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-800 transition-colors duration-300 flex flex-col relative">
      {/* Blurry LeetCode background for entire app */}
      <img
        src="/leetcode-logo.png"
        alt="LeetCode Logo"
        aria-hidden
        className="pointer-events-none select-none fixed inset-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] max-w-none opacity-70 blur-3xl drop-shadow-xl z-0"
      />

      <header className="relative z-50">
        <Header />
      </header>

      <main className="flex-1 relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
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
