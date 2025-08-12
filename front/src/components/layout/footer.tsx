export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className="mt-20 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-neutral-600 dark:text-neutral-400 flex items-center justify-between">
        <p>© {year} Sezinis. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-neutral-900 dark:hover:text-neutral-200">Privacy</a>
          <a href="#" className="hover:text-neutral-900 dark:hover:text-neutral-200">Terms</a>
          <a href="#" className="hover:text-neutral-900 dark:hover:text-neutral-200">Contact</a>
        </div>
      </div>
    </div>
  )
}


