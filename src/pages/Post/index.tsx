import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Spinner } from '../../components'
import { IPost } from '../../context/GithubContext'
import { api } from '../../lib/api'
import { PostContent } from './components/PostContent'
import { PostHeader } from './components/PostHeader'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repo = import.meta.env.VITE_GITHUB_REPOSITORY

export const Post = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [post, setPost] = useState({} as IPost)

  const { id = '' } = useParams()

  const getPostData = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await api.get(`/repos/${username}/${repo}/issues/${id}`)

      setPost(response.data as IPost)
    } finally {
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    getPostData()
  }, [getPostData])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <PostHeader postData={post} />
      <PostContent content={post.body} />
    </>
  )
}
