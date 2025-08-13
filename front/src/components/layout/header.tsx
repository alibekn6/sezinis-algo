import { type ReactNode } from 'react'

interface HeaderProps {
  leftSlot?: ReactNode
  rightSlot?: ReactNode
}

export default function Header({ leftSlot, rightSlot }: HeaderProps) {
  return (
    <div className="sticky top-0 z-50 w-full bg-transparent">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="#" className="inline-flex items-center gap-3">
            <img 
              src="/meganfox.png" 
              alt="Megan Fox" 
              className="h-12 w-12 rounded-full object-cover object-top"
            />
            <span className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">sezinis algo</span>
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