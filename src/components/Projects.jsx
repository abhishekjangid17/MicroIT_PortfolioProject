import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern personal portfolio built with React and Tailwind CSS.',
    link: '#',
  },
  {
    title: 'MERN Blog App',
    description: 'A full-stack blog application with authentication and CRUD features.',
    link: 'https://blogify-1-2yhi.onrender.com/',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 px-6 pt-24 pb-12 transition-colors">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto" data-aos="fade-up">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm text-blue-500 hover:underline"
              >
                🔗 View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
