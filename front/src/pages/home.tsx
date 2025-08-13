import { useState } from 'react'
import { Input } from '../components/ui/input'

export function HomePage() {
  const [leetcodeUsername, setLeetcodeUsername] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('LeetCode username:', leetcodeUsername)
    // TODO: Fetch LeetCode profile data
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[60vh] space-y-8">
      {/* Background logo */}
      <img
        src="/leetcode-logo.png"
        alt="LeetCode Logo"
        aria-hidden
        className="pointer-events-none select-none absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] max-w-none opacity-30 blur-2xl drop-shadow-xl"
      />

      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
          LeetCode tracker
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
          Enter your LeetCode username to start tracking your progress and competing with friends.
        </p>
      </div>

      {/* LeetCode Username Input */}
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="LeetCode Username"
            placeholder="Enter your LeetCode username..."
            value={leetcodeUsername}
            onChange={(e) => setLeetcodeUsername(e.target.value)}
            className="text-lg py-4"
            required
          />
          <button
            type="submit"
            className="w-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 text-neutral-900 dark:text-neutral-100 font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:bg-white/20 dark:hover:bg-white/10 hover:border-white/30 dark:hover:border-white/20 hover:scale-[1.02] shadow-lg hover:shadow-xl"
          >
            track
          </button>
        </form>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-6 w-full max-w-md">
        <div className="text-center p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">0</div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">Easy</div>
        </div>
        <div className="text-center p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
          <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">0</div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">Medium</div>
        </div>
        <div className="text-center p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
          <div className="text-2xl font-bold text-red-600 dark:text-red-400">0</div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">Hard</div>
        </div>
      </div>
    </div>
  )
}
