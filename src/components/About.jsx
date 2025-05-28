import React from 'react';
import { FaDownload } from 'react-icons/fa';

const About = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-12 bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <div className="max-w-3xl text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          I'm a full-stack developer who enjoys building scalable web apps with clean UI and responsive design.
          I specialize in the MERN stack and am passionate about learning and solving real-world problems with code.
        </p>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition shadow"
        >
          <FaDownload /> Download Resume
        </a>
      </div>
    </section>
  );
};

export default About;
