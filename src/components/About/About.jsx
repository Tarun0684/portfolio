import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-20" >
      <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
      <p className="text-lg text-gray-600 mb-4">
     “MBA (Business Analytics & Marketing) Candidate | B.Tech CSE | Aspiring Data Analyst”


      </p>
      <p className="text-lg text-gray-600 mb-4">
      I am currently pursuing an MBA specializing in Business Analytics and Marketing and aiming to build my career in Data Analytics and Data Science. With a strong technical background from my B.Tech in Computer Science Engineering, I am passionate about analyzing data, discovering insights, and supporting data-driven business decisions.
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
