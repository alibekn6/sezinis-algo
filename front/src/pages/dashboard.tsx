import { useLeetCode } from '../hooks/use-leetcode'
import { CountUp } from '../components/common/count-up'
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react'


export function DashboardPage() {
  const { username } = useParams<{ username: string }>()
  const { loading, error, solvedStats, userProfile, fetchFullUserData } = useLeetCode()


  useEffect(() => {
    if (username) {
      fetchFullUserData(username)
    }
  }, [username, fetchFullUserData])
  
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[90vh] space-y-4">
        <div className="text-xl">Loading {username}'s data...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[90vh] space-y-4">
        <div className="text-xl text-red-600">Error: {error}</div>
        <Link to="/" className="text-blue-600 hover:underline">
          Go back to search
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
          {username}'s LeetCode Stats
        </h1>
        {userProfile && (
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Real Name: {userProfile.name || 'Not provided'}
          </p>
        )}
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


      <Link
        to="/"
        className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 text-neutral-900 dark:text-neutral-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:bg-white/20 dark:hover:bg-white/10 hover:border-white/30 dark:hover:border-white/20 hover:scale-[1.02] shadow-lg hover:shadow-xl"
      >
        Search Another User
      </Link>
    </div>
  )

}


            //   {error && (
            // <div className="w-full p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 dark:text-red-400 text-sm">
            //   {error}
            // </div>


    //   <div className="grid grid-cols-3 gap-6 w-full max-w-md">
    //   <div className="text-center p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
    //     <div className="text-2xl font-bold text-green-600 dark:text-green-400">
    //       <CountUp value={solvedStats?.easySolved ?? 0} />
    //     </div>
    //     <div className="text-sm text-neutral-600 dark:text-neutral-400">Easy</div>
    //   </div>
    //   <div className="text-center p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
    //     <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
    //       <CountUp value={solvedStats?.mediumSolved ?? 0} />
    //     </div>
    //     <div className="text-sm text-neutral-600 dark:text-neutral-400">Medium</div>
    //   </div>
    //   <div className="text-center p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
    //     <div className="text-2xl font-bold text-red-600 dark:text-red-400">
    //       <CountUp value={solvedStats?.hardSolved ?? 0} />
    //     </div>
    //     <div className="text-sm text-neutral-600 dark:text-neutral-400">Hard</div>
    //   </div>
    // </div>