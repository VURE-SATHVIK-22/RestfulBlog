import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createPost, fetchPostById, updatePost } from '../data/posts.js'

export default function PostForm() {
  const { id } = useParams()
  const isEdit = Boolean(id)
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    if (!isEdit) return
    fetchPostById(id).then((post) => {
      if (post) {
        setTitle(post.title)
        setExcerpt(post.excerpt)
        setContent(post.content)
      }
    })
  }, [id, isEdit])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (isEdit) {
      await updatePost(id, { title, excerpt, content })
      navigate(`/posts/${id}`)
    } else {
      const newPost = await createPost({ title, excerpt, content })
      navigate(`/posts/${newPost.id}`)
    }
  }

  return (
    <main className='page-shell'>
      <header className='page-header'>
        <h1>{isEdit ? 'Edit Post' : 'Create Post'}</h1>
      </header>
      <form className='post-form' onSubmit={handleSubmit}>
        <label>
          Post title
          <input value={title} onChange={(event) => setTitle(event.target.value)} required />
        </label>
        <label>
          Short summary
          <input value={excerpt} onChange={(event) => setExcerpt(event.target.value)} required />
        </label>
        <label>
          Post content
          <textarea value={content} onChange={(event) => setContent(event.target.value)} rows={8} required />
        </label>
        <div className='form-actions'>
          <button type='submit' className='button'>Save</button>
          <button type='button' className='button button-secondary' onClick={() => navigate(isEdit ? `/posts/${id}` : '/posts')}>
            Cancel
          </button>
        </div>
      </form>
    </main>
  )
}
