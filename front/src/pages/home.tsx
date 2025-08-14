import { useState } from 'react'
import { Input } from '../components/ui/input'
import { useNavigate } from 'react-router-dom'

export function HomePage() {
  const [leetcodeUsername, setLeetcodeUsername] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (leetcodeUsername.trim()) {
      navigate(`/dashboard/${leetcodeUsername.trim()}`)
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
            className="w-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 text-neutral-900 dark:text-neutral-100 font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:bg-white/20 dark:hover:bg-white/10 hover:border-white/30 dark:hover:border-white/20 hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            track
          </button>
        
        </form>
      </div>
    </div>
  )
}
