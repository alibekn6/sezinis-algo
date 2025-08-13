export default function Footer() {
  const year = new Date().getFullYear()
  
  return (
    <div className="mt-20 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">sezinis</span>
          </div>
          
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            © {year} sezinis. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200">
              Privacy
            </a>
            <a href="#" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200">
              Terms
            </a>
            <a href="#" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}