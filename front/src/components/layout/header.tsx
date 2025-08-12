import { type ReactNode } from 'react'

interface HeaderProps {
  leftSlot?: ReactNode
  rightSlot?: ReactNode
}

export default function Header({ leftSlot, rightSlot }: HeaderProps) {
  return (
    <div className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="#" className="inline-flex items-center gap-2">
            <span className="sr-only">Home</span>
            <div className="size-6 rounded bg-indigo-500" />
            <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">Sezinis</span>
          </a>
          {leftSlot}
        </div>
        <div className="flex items-center gap-4">
          {rightSlot}
        </div>
      </nav>
    </div>
  )
}


