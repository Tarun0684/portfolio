import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 w-full fixed top-0 left-0 z-10 shadow-md " >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Tarun Karnwal</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-blue-400">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400">About</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-blue-400">Projects</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400">Contact</Link>
            </li>
            
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
