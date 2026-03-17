import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-20" >
      <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
      <p className="text-lg text-gray-600 mb-4">
     MBA Candidate (Business Analytics & Marketing) | B.Tech CSE | Aspiring Data Analyst
        <br/>
Data Analysis | Excel | SPSS | SQL | Power BI | Problem Solving


      </p>
      <p className="text-lg text-gray-600 mb-4">
     I am an MBA candidate specializing in Business Analytics and Marketing, with a strong foundation in Computer Science Engineering. I am passionate about data analytics and enjoy transforming raw data into meaningful insights that support data-driven decision-making.

With skills in data analysis, problem-solving, and frontend development, I aim to bridge the gap between technology and business by delivering efficient and insight-driven solutions. I am continuously learning and exploring tools and techniques to enhance my analytical capabilities and contribute effectively in data-focused roles.      </p>
      
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
