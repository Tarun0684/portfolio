import React from 'react'


function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8 w-full   fixed bottom-0 left-0 z-10 shadow-md">
      <div className="container mx-auto text-center">
        <p className="mb-2">© {new Date().getFullYear()} Tarun Karnwal. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
        <img className='w-5 h-5' src='25231.png'/><a href="https://github.com/Tarun0684" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          GitHub 
          </a>
          <img className='w-5 h-5' src='logo2.png'/><a href="https://www.linkedin.com/in/tarun-karnwal-3122a2221/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            LinkedIn
          </a>
          <img className='w-5 h-5' src='logo3.png'/><a href="https://www.naukri.com/mnjuser/homepage" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            Naukri
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
