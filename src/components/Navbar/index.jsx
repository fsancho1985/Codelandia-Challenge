import './index.css'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  return (
    <div className="main-container">
      <div className="container-title">
        <h1>Codelândia</h1>
        <h2>blog</h2>
      </div>
      <div className="container-search-bar">
          <span>
            <MagnifyingGlassIcon width={30} />
          </span>
          <input className='input' type="text" placeholder="Type your search" />
      </div>
    </div>
  )
}

export default Navbar
