import Navbar from './components/Navbar'
import Main from './components/Main'
import { ParallaxProvider } from 'react-scroll-parallax'

function App() {
  return (
    <ParallaxProvider>
      <Navbar />
      <Main />
    </ParallaxProvider>
  )
}

export default App
