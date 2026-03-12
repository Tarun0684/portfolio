import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="w-full bg-gray-100">
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-6 max-w-screen-xl mx-auto">
        
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
          <img 
            src="m1.jpg" 
            alt="Home Illustration" 
            className="w-3/4 md:w-full max-w-xs md:max-w-md h-auto object-cover shadow-lg rounded-full border-4 border-gray-800"
          />
        </div>

        {/* Right Side - Summary Text */}
        <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-xl md:text-4xl font-bold mb-4 text-gray-800">
          Hi, I'm Tarun Karnwal
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
            Currently pursuing an MBA with a background in Engineering, complemented by strong skills in frontend
development, problem-solving, and Agile team collaboration. Focused on delivering innovative, user-centric
web solutions by integrating technical expertise with strategic insight Education.

          </p>
          <Link 
            to="/projects"
            className="inline-block bg-blue-600 text-white px-4 md:px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
