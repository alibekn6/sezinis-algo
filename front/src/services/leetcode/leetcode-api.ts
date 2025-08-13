import { apiClient } from '../api/client'
import type {
  UserProfile,
  UserBadges,
  SolvedStats,
  ContestInfo,
  Submission,
  SubmissionCalendar,
  DailyProblem,
  Problem,
  LanguageStats,
  SkillStats
} from './types'

/**
 * LeetCode API service using alfa-leetcode-api.onrender.com
 * Documentation: https://github.com/alfaarghya/alfa-leetcode-api
 */
export class LeetCodeAPI {
  
  // === USER ENDPOINTS ===
  
  /**
   * Get user profile details
   */
  static async getUserProfile(username: string): Promise<UserProfile> {
    return apiClient.get<UserProfile>(`/${username}`)
  }

  /**
   * Get user badges
   */
  static async getUserBadges(username: string): Promise<UserBadges> {
    return apiClient.get<UserBadges>(`/${username}/badges`)
  }

  /**
   * Get total solved problems
   */
  static async getSolvedStats(username: string): Promise<SolvedStats> {
    return apiClient.get<SolvedStats>(`/${username}/solved`)
  }

  /**
   * Get contest details
   */
  static async getContestInfo(username: string): Promise<ContestInfo> {
    return apiClient.get<ContestInfo>(`/${username}/contest`)
  }

  /**
   * Get contest history
   */
  static async getContestHistory(username: string): Promise<ContestInfo> {
    return apiClient.get<ContestInfo>(`/${username}/contest/history`)
  }

  /**
   * Get last 20 submissions
   */
  static async getSubmissions(username: string): Promise<{ submission: Submission[] }> {
    return apiClient.get<{ submission: Submission[] }>(`/${username}/submission`)
  }

  /**
   * Get last 20 accepted submissions
   */
  static async getAcceptedSubmissions(username: string): Promise<{ submission: Submission[] }> {
    return apiClient.get<{ submission: Submission[] }>(`/${username}/acSubmission`)
  }

  /**
   * Get submission calendar
   */
  static async getSubmissionCalendar(username: string): Promise<SubmissionCalendar> {
    return apiClient.get<SubmissionCalendar>(`/${username}/calendar`)
  }

  /**
   * Get full profile details in one call
   */
  static async getFullProfile(username: string): Promise<any> {
    return apiClient.get<any>(`/userProfile/${username}`)
  }

  /**
   * Get calendar details with specific year
   */
  static async getCalendarByYear(username: string, year: number): Promise<any> {
    return apiClient.get<any>(`/userProfileCalendar?username=${username}&year=${year}`)
  }

  /**
   * Get language statistics
   */
  static async getLanguageStats(username: string): Promise<LanguageStats> {
    return apiClient.get<LanguageStats>(`/languageStats?username=${username}`)
  }

  /**
   * Get skill statistics
   */
  static async getSkillStats(username: string): Promise<SkillStats> {
    return apiClient.get<SkillStats>(`/skillStats/${username}`)
  }

  // === CONTEST ENDPOINTS ===

  /**
   * Get user contest ranking info
   */
  static async getContestRankingInfo(username: string): Promise<any> {
    return apiClient.get<any>(`/userContestRankingInfo/${username}`)
  }

  // === PROBLEM ENDPOINTS ===

  /**
   * Get daily problem
   */
  static async getDailyProblem(): Promise<DailyProblem> {
    return apiClient.get<DailyProblem>('/daily')
  }

  /**
   * Get raw daily question
   */
  static async getDailyQuestion(): Promise<any> {
    return apiClient.get<any>('/dailyQuestion')
  }

  /**
   * Get specific problem by title slug
   */
  static async getProblem(titleSlug: string): Promise<any> {
    return apiClient.get<any>(`/select?titleSlug=${titleSlug}`)
  }

  /**
   * Get list of problems
   */
  static async getProblems(limit?: number): Promise<{ problemsetQuestionList: Problem[] }> {
    const endpoint = limit ? `/problems?limit=${limit}` : '/problems'
    return apiClient.get<{ problemsetQuestionList: Problem[] }>(endpoint)
  }

  /**
   * Get problems by tags
   */
  static async getProblemsByTags(tags: string[], limit?: number): Promise<{ problemsetQuestionList: Problem[] }> {
    const tagString = tags.join('+')
    const endpoint = limit 
      ? `/problems?tags=${tagString}&limit=${limit}`
      : `/problems?tags=${tagString}`
    return apiClient.get<{ problemsetQuestionList: Problem[] }>(endpoint)
  }

  /**
   * Get official solution for a problem
   */
  static async getOfficialSolution(titleSlug: string): Promise<any> {
    return apiClient.get<any>(`/officialSolution?titleSlug=${titleSlug}`)
  }

  // === DISCUSSION ENDPOINTS ===

  /**
   * Get trending discussions
   */
  static async getTrendingDiscussions(first: number = 20): Promise<any> {
    return apiClient.get<any>(`/trendingDiscuss?first=${first}`)
  }

  /**
   * Get discussion topic
   */
  static async getDiscussionTopic(topicId: string): Promise<any> {
    return apiClient.get<any>(`/discussTopic/${topicId}`)
  }

  /**
   * Get discussion comments
   */
  static async getDiscussionComments(topicId: string): Promise<any> {
    return apiClient.get<any>(`/discussComments/${topicId}`)
  }
}
