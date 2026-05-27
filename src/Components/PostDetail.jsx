import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { fetchPostById, deletePost } from '../data/posts.js'

export default function PostDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)

  useEffect(() => {
    fetchPostById(id).then(setPost)
  }, [id])

  const handleDelete = async () => {
    const removed = await deletePost(id)
    if (removed) {
      navigate('/posts')
    }
  }

  if (!post) {
    return (
      <main className='page-shell'>
        <p>Post not found.</p>
        <Link to='/posts' className='button button-secondary'>Back to posts</Link>
      </main>
    )
  }

  return (
    <main className='page-shell'>
      <article className='post-detail'>
        <h1>{post.title}</h1>
        <p className='post-excerpt'>{post.excerpt}</p>
        <section>{post.content}</section>
        <div className='post-actions'>
          <Link to={`/posts/${post.id}/edit`} className='button'>Edit</Link>
          <button type='button' className='button button-secondary' onClick={handleDelete}>
            Delete
          </button>
          <button type='button' className='button button-secondary' onClick={() => navigate('/posts')}>
            Posts
          </button>
        </div>
      </article>
    </main>
  )
}
