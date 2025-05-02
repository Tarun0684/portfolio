import React from 'react'
import ProjectCard from '../ProjectCard';

const projects = [

    {
      title: 'Portfolio',
      description: 'A modern and responsive portfolio website. This site showcases my projects, skills, and background as a web developer. It features a clean design, smooth navigation, and sections including About Me, Projects, Skills, and Contact. The goal is to present my work and experience in a clear and engaging way while highlighting my frontend development abilities with a focus on performance and user experience.',
      link: 'https://github.com/Tarun0684/portfolio',
    },
    {
      title: 'Password Generator',
      description: 'This web application allows users to quickly and securely generate strong, random passwords tailored to their preferences. Users can customize the password length and choose to include uppercase letters, lowercase letters, numbers, and special characters. The app is designed to enhance online security by creating passwords that are difficult to guess or crack. With a simple and user-friendly interface, it’s a handy tool for anyone looking to improve their digital security.',
      link: 'https://github.com/Tarun0684/password_generator',
    },
    {
      title: 'To-Do List',
      description: 'A minimal and efficient To-Do List web app built with React, Context API, JavaScript, and TailwindCSS. It allows users to add, delete, and manage tasks with real-time state management using Context API. Tasks are saved in local storage, ensuring persistence across sessions in a fast, responsive, and clean UI.',
      link: 'https://github.com/Tarun0684/todo_context_localstorage',
    },
    {
      title: 'Todo redux toolkit',
      description: 'A modern To-Do App built with Vite + React, Redux Toolkit, JavaScript, and TailwindCSS. This app uses Redux Toolkit for efficient and scalable state management, enabling users to add and delete tasks. With a sleek and responsive design powered by TailwindCSS, it offers a smooth and user-friendly task management experience.',
      link: 'https://github.com/Tarun0684/todo_redux_toolkit',
    },
    
    {
        title: 'Project Five',
        description: 'A brief description of Project Three.',
        link: 'https://github.com/yourusername/project-three',
    },
    {
        title: 'Project Six',
        description: 'A brief description of Project Three.',
        link: 'https://github.com/yourusername/project-three',
    },
  ];

function Projects() {
  return (
    // <section className="max-h-screen bg-gray-100 p-4 m-auto shadow-md mt-8 " >
    //   <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">My Projects</h2>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //     {projects.map((project, index) => (
    //       <div key={index} className="bg-white shadow-md rounded-lg p-4">
    //         <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
    //         <p className="text-gray-600 mb-4">{project.description}</p>
    //         <a
    //           href={project.link}
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="text-blue-500 hover:underline"
    //         >
    //           View Project
    //         </a>
    //       </div>
    //     ))}
    //   </div>
    // </section>
    <div className="flex flex-wrap justify-center mt-20 mb-20">
      {projects.map((project, index) => (
        <div key={index} className="m-4 w-80">
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
  
}

export default Projects
