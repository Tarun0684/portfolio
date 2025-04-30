import React from 'react';
import Projects from './Projects/Projects';

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className=" shadow-md rounded-lg overflow-hidden bg-gray-200 ">
      
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">{description}</p>
            <a
               href={link}
               target="_blank"
               rel="noopener noreferrer"
               className="text-blue-500 hover:underline"
            >
                View Project
            </a>
      </div>
    </div>
  );
};

export default ProjectCard;