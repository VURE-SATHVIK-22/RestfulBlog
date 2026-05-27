
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './Components/Home.jsx'
import PostList from './Components/PostList.jsx'
import PostDetail from './Components/PostDetail.jsx'
import PostForm from './Components/PostForm.jsx'
import NotFound from './Components/NotFound.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className='app-layout'>
        <header className='app-header'>
          <div className='brand'>Simple Blog</div>
          <nav className='main-nav'>
            <Link to='/'>Home</Link>
            <Link to='/posts'>Posts</Link>
            <Link to='/posts/new'>New Post</Link>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<PostList />} />
          <Route path='/posts/new' element={<PostForm />} />
          <Route path='/posts/:id' element={<PostDetail />} />
          <Route path='/posts/:id/edit' element={<PostForm />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
