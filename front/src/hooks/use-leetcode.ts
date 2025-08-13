import { useState } from 'react'
import { LeetCodeAPI } from '../services/leetcode/leetcode-api'
import type { UserProfile, SolvedStats, ContestInfo } from '../services/leetcode/types'

interface UseLeetCodeReturn {
  // State
  loading: boolean
  error: string | null
  userProfile: UserProfile | null
  solvedStats: SolvedStats | null
  contestInfo: ContestInfo | null
  
  // Actions
  fetchUserProfile: (username: string) => Promise<void>
  fetchSolvedStats: (username: string) => Promise<void>
  fetchContestInfo: (username: string) => Promise<void>
  fetchFullUserData: (username: string) => Promise<void>
  clearData: () => void
}

export function useLeetCode(): UseLeetCodeReturn {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [solvedStats, setSolvedStats] = useState<SolvedStats | null>(null)
  const [contestInfo, setContestInfo] = useState<ContestInfo | null>(null)

  const handleError = (err: any) => {
    console.error('LeetCode API Error:', err)
    setError(err.message || 'An error occurred while fetching data')
  }

  const fetchUserProfile = async (username: string) => {
    try {
      setLoading(true)
      setError(null)
      const profile = await LeetCodeAPI.getUserProfile(username)
      setUserProfile(profile)
    } catch (err) {
      handleError(err)
    } finally {
      setLoading(false)
    }
  }

  const fetchSolvedStats = async (username: string) => {
    try {
      setLoading(true)
      setError(null)
      const stats = await LeetCodeAPI.getSolvedStats(username)
      setSolvedStats(stats)
    } catch (err) {
      handleError(err)
    } finally {
      setLoading(false)
    }
  }

  const fetchContestInfo = async (username: string) => {
    try {
      setLoading(true)
      setError(null)
      const contest = await LeetCodeAPI.getContestInfo(username)
      setContestInfo(contest)
    } catch (err) {
      handleError(err)
    } finally {
      setLoading(false)
    }
  }

  const fetchFullUserData = async (username: string) => {
    try {
      setLoading(true)
      setError(null)
      
      // Fetch all user data in parallel
      const [profile, stats, contest] = await Promise.allSettled([
        LeetCodeAPI.getUserProfile(username),
        LeetCodeAPI.getSolvedStats(username),
        LeetCodeAPI.getContestInfo(username)
      ])

      if (profile.status === 'fulfilled') {
        setUserProfile(profile.value)
      }
      if (stats.status === 'fulfilled') {
        setSolvedStats(stats.value)
      }
      if (contest.status === 'fulfilled') {
        setContestInfo(contest.value)
      }

      // Check if any request failed
      const failures = [profile, stats, contest].filter(
        result => result.status === 'rejected'
      )
      
      if (failures.length === 3) {
        throw new Error('Failed to fetch user data')
      } else if (failures.length > 0) {
        console.warn('Some requests failed:', failures)
      }
      
    } catch (err) {
      handleError(err)
    } finally {
      setLoading(false)
    }
  }

  const clearData = () => {
    setUserProfile(null)
    setSolvedStats(null)
    setContestInfo(null)
    setError(null)
  }

  return {
    // State
    loading,
    error,
    userProfile,
    solvedStats,
    contestInfo,
    
    // Actions
    fetchUserProfile,
    fetchSolvedStats,
    fetchContestInfo,
    fetchFullUserData,
    clearData
  }
}
