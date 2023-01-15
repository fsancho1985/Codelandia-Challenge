import { Parallax } from 'react-scroll-parallax'
import './index.css'

const Post = ({ data }) => {
  return (
    <div className="container-post">
      <Parallax opacity={[-1,2]}>
        <div className="wrapper-post">
          <h1>{data.title}</h1>
          <p>{data.body}</p>
        </div>
      </Parallax>
    </div>
  )
}

export default Post
