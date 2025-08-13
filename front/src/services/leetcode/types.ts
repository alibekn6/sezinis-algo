// LeetCode API response types based on alfa-leetcode-api.onrender.com

export interface UserProfile {
  username: string
  name: string
  avatar: string
  ranking: number
  reputation: number
  gitHub: string
  twitter: string
  linkedIN: string
  website: string[]
  country: string
  company: string
  school: string
  skillTags: string[]
  about: string
}

export interface UserBadges {
  badges: Array<{
    id: string
    displayName: string
    icon: string
    creationDate: string
  }>
}

export interface SolvedStats {
  solvedProblem: number
  easySolved: number
  mediumSolved: number
  hardSolved: number
  totalSubmissionNum: Array<{
    difficulty: string
    count: number
    submissions: number
  }>
  acSubmissionNum: Array<{
    difficulty: string
    count: number
    submissions: number
  }>
}

export interface ContestInfo {
  contestAttend: number
  contestRating: number
  contestGlobalRanking: number
  totalParticipants: number
  contestTopPercentage: number
  contestBadges: any[]
  contestParticipation: Array<{
    attended: boolean
    rating: number
    ranking: number
    trendDirection: string
    problemsSolved: number
    totalProblems: number
    finishTimeInSeconds: number
    contest: {
      title: string
      startTime: number
    }
  }>
}

export interface Submission {
  id: string
  title: string
  titleSlug: string
  timestamp: string
  statusDisplay: string
  lang: string
  runtime: string
  url: string
  isPending: string
  memory: string
}

export interface SubmissionCalendar {
  streak: number
  totalActiveDays: number
  dccBadges: any[]
  activeDays: {
    [date: string]: number
  }
  submissionCalendar: string
}

export interface DailyProblem {
  questionId: string
  questionFrontendId: string
  title: string
  titleSlug: string
  content: string
  translatedTitle: string
  translatedContent: string
  isPaidOnly: boolean
  difficulty: string
  likes: number
  dislikes: number
  isLiked: boolean
  similarQuestions: string
  topicTags: Array<{
    name: string
    slug: string
    translatedName: string
  }>
  companyTagStats: string
  codeSnippets: Array<{
    lang: string
    langSlug: string
    code: string
  }>
  stats: string
  hints: string[]
  solution: {
    id: string
    canSeeDetail: boolean
    paidOnly: boolean
    hasVideoSolution: boolean
    paidOnlyVideo: boolean
  }
  status: string
  sampleTestCase: string
  metaData: string
  judgerAvailable: boolean
  judgeType: string
  mysqlSchemas: any[]
  enableRunCode: boolean
  enableTestMode: boolean
  enableDebugger: boolean
  envInfo: string
  libraryUrl: string
  adminUrl: string
  challengeQuestion: {
    id: string
    date: string
    incompleteChallengeCount: number
    streakCount: number
    type: string
  }
}

export interface Problem {
  acRate: number
  difficulty: string
  freqBar: number
  frontendQuestionId: string
  isFavor: boolean
  paidOnly: boolean
  status: string
  title: string
  titleSlug: string
  topicTags: Array<{
    name: string
    id: string
    slug: string
  }>
  hasSolution: boolean
  hasVideoSolution: boolean
}

export interface LanguageStats {
  matchedUser: {
    languageProblemCount: Array<{
      languageName: string
      problemsSolved: number
    }>
  }
}

export interface SkillStats {
  data: {
    matchedUser: {
      tagProblemCounts: {
        advanced: Array<{
          tagName: string
          tagSlug: string
          problemsSolved: number
        }>
        intermediate: Array<{
          tagName: string
          tagSlug: string
          problemsSolved: number
        }>
        fundamental: Array<{
          tagName: string
          tagSlug: string
          problemsSolved: number
        }>
      }
    }
  }
}
