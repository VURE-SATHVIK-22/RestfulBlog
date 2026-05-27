import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchPosts } from '../data/posts.js'

export default function PostList() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts().then(setPosts)
  }, [])

  return (
    <main className='page-shell'>
      <header className='page-header'>
        <h1>All Posts</h1>
        <Link to='/posts/new' className='button'>New Post</Link>
      </header>
      {posts.length === 0 ? (
        <p>No posts yet. Click new post to start.</p>
      ) : (
        <ul className='post-list'>
          {posts.map((post) => (
            <li key={post.id} className='post-card'>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <div className='post-actions'>
                <Link to={`/posts/${post.id}`} className='button button-secondary'>View</Link>
                <Link to={`/posts/${post.id}/edit`} className='button button-secondary'>Edit</Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
