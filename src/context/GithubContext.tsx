import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/api'

export interface IPost {
  body: string
  comments: number
  created_at: Date
  html_url: string
  number: number
  title: string
  user: {
    login: string
  }
}

interface IProfile {
  avatar_url: string
  bio: string
  company: string
  html_url: string
  id: number
  login: string
  name: string
  followers: number
}

interface GithubContextType {
  profile: IProfile
  posts: IPost[]
  isLoading: boolean
}

interface GithubProviderProps {
  children: ReactNode
}

const username = import.meta.env.VITE_GITHUB_USERNAME
const repo = import.meta.env.VITE_GITHUB_REPOSITORY

export const GithubContext = createContext({} as GithubContextType)

export const GithubProvider = ({ children }: GithubProviderProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState<IPost[]>([])
  const [profile, setProfile] = useState({} as IProfile)

  const getPosts = useCallback(async (query = '') => {
    try {
      setIsLoading(true)
      const encodedQuery = encodeURIComponent(
        `${query} label:published repo:${username}/${repo}`,
      )
      const response = await api.get(`/search/issues?q=${encodedQuery}`)
      setPosts(response.data.items)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const getProfileData = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get<IProfile>(`/users/${username}`)

      setProfile(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getProfileData()
    getPosts()
  }, [getPosts, getProfileData])

  return (
    <GithubContext.Provider value={{ isLoading, posts, profile }}>
      {children}
    </GithubContext.Provider>
  )
}
