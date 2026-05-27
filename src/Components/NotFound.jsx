import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className='page-shell'>
      <section className='not-found'>
        <h1>Not Found</h1>
        <p>Sorry, we could not find that page.</p>
        <Link to='/' className='button'>Back to Home</Link>
      </section>
    </main>
  )
}
