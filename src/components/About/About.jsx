import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-20" >
      <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
      <p className="text-lg text-gray-600 mb-4">
      Hello My Name is Tarun Karnwal 


      </p>
      <p className="text-lg text-gray-600 mb-4">
      With a strong focus on performance and user experience, I strive to write clean, maintainable code and continuously learn new techniques to stay up-to-date in the ever-evolving world of web development. Whether working on solo projects or collaborating with teams, I bring problem-solving, creativity, and attention to detail to everything I build.
      </p>
      
      <Link
        to="/contact"
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        Get in Touch
      </Link>
    </div>
  )
}

export default About
