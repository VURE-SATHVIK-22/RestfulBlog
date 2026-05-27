import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className='page-shell'>
      <section className='hero'>
        <h1>Simple Blog</h1>
        <p>Read posts, add new ones, and edit content</p>
        <div className='hero-actions'>
          <Link to='/posts' className='button'>View Posts</Link>
          <Link to='/posts/new' className='button button-secondary'>Add Post</Link>
        </div>
      </section>
    </main>
  )
}

