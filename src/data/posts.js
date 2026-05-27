const posts = [
  {
    id: '1',
    title: 'Welcome to the Blog',
    excerpt: 'A simple blog with RESTful routes built in React.',
    content:
      'This blog demonstrates RESTful-style client routing using react-router-dom with list, detail, create, and edit pages.',
  },
  {
    id: '2',
    title: 'Client-Side Routing',
    excerpt: 'Navigate between pages with URL routes.',
    content:
      'React Router lets you define routes such as /posts, /posts/:id, /posts/new, and /posts/:id/edit, matching RESTful route patterns.',
  },
]

export const fetchPosts = async () => {
  return posts.slice()
}

export const fetchPostById = async (id) => {
  return posts.find((post) => post.id === id)
}

export const createPost = async ({ title, excerpt, content }) => {
  const newPost = {
    id: String(Date.now()),
    title,
    excerpt,
    content,
  }

  posts.unshift(newPost)
  return newPost
}

export const updatePost = async (id, { title, excerpt, content }) => {
  const index = posts.findIndex((post) => post.id === id)
  if (index === -1) return null

  posts[index] = {
    ...posts[index],
    title,
    excerpt,
    content,
  }

  return posts[index]
}

export const deletePost = async (id) => {
  const index = posts.findIndex((post) => post.id === id)
  if (index === -1) return false

  posts.splice(index, 1)
  return true
}
