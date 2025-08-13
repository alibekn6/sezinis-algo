import { useState } from 'react'
import { Input } from '../components/ui/input'
import { useLeetCode } from '../hooks/use-leetcode'
import { CountUp } from '../components/common/count-up'

export function HomePage() {
  const [leetcodeUsername, setLeetcodeUsername] = useState('')
  const { loading, error, solvedStats, fetchFullUserData } = useLeetCode()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (leetcodeUsername.trim()) {
      await fetchFullUserData(leetcodeUsername.trim())
    }
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[90vh] space-y-8">

      <img
        src="/leetcode-logo.png"
        alt="LeetCode Logo"
        aria-hidden
        className="pointer-events-none select-none absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] max-w-none opacity-70 blur-3xl drop-shadow-xl"
      />


      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
          LeetCode tracker
        </h1>
      </div>


      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Enter your LeetCode username..."
            value={leetcodeUsername}
            onChange={(e) => setLeetcodeUsername(e.target.value)}
            className="text-l py-4"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 text-neutral-900 dark:text-neutral-100 font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:bg-white/20 dark:hover:bg-white/10 hover:border-white/30 dark:hover:border-white/20 hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Loading...' : 'track'}
          </button>
          
          {error && (
            <div className="w-full p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 dark:text-red-400 text-sm">
              {error}
            </div>
          )}
        </form>
      </div>

      <div className="grid grid-cols-3 gap-6 w-full max-w-md">
        <div className="text-center p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            <CountUp value={solvedStats?.easySolved ?? 0} />
          </div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">Easy</div>
        </div>
        <div className="text-center p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
          <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
            <CountUp value={solvedStats?.mediumSolved ?? 0} />
          </div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">Medium</div>
        </div>
        <div className="text-center p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
          <div className="text-2xl font-bold text-red-600 dark:text-red-400">
            <CountUp value={solvedStats?.hardSolved ?? 0} />
          </div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">Hard</div>
        </div>
      </div>
    </div>
  )
}
