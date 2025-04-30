import React from 'react'

function Home() {
  return (
  //   <section className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4 w-full fixed left-0 shadow-md max-h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('m15.jpg')", }} >
  //   <div className="text-center" >
  //     <h1 className="text-6xl font-bold text-black-800 mb-4">Welcome to My Portfolio </h1>
  //     <p className="text-2xl font-bold text-gray-800 mb-8">
  //     👋 Hi, I'm Tarun Karnwal
  //     I'm a passionate Software Engineer / Front-End Developer / Full-Stack Developer / UI/UX Designer, focused on building fast, responsive, and user-friendly web applications. I specialize in technologies like React, JavaScript, TailwindCSS, and modern development tools like Vite.
  //     </p>
  //     <a
  //       href="http://localhost:5173/projects"
  //       className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
  //     >
  //       View My Projects
  //     </a>
  //   </div>
  // </section>

  <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 p-6 w-full fixed left-0 shadow-md max-h-screen  ">
      
  {/* Left Side - Image */}
  <div className="w-full md:w-1/2 flex mb-10 pb-10 justify-center items-center">
    <img 
      src="m1.jpg" 
      // alt="Home Illustration" 
      className="max-w-full h-auto shadow-lg rounded-full border-4 border-gray-800"
    />
  </div>

  {/* Right Side - Summary Text */}
  <div className="w-full md:w-1/2 text-center md:text-left px-4 mb-10 pb-10">
    <h1 className="text-4xl font-bold mb-4 text-gray-800">
    👋 Hi, I'm Tarun Karnwal
    </h1>
    <p className="text-lg text-gray-600 mb-6">
    
    I'm a passionate Software Engineer/Front-End Developer/Web Developer/UI/UX Designer, focused on building fast, responsive, and user-friendly web applications. I specialize in technologies like React, JavaScript, TailwindCSS, and modern development tools like Vite.
    </p>
    <a 
      href="http://localhost:5173/projects"
      className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
    >
      View Projects
    </a>
  </div>
</div>
  )
}

export default Home
