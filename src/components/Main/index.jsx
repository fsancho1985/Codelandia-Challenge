import axios from 'axios'

import { useEffect, useState } from 'react'

import Post from '../Posts'

import './index.css'

const Main = () => {
  const [post, setPost] = useState([])

  const getPosts = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      )
      const data = response.data
      setPost(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className="container-main">
      <div className="wrappper-main">
        {post.map(data => (
          <Post data={data} key={data.id} />
        ))}
      </div>
    </div>
  )
}

export default Main
