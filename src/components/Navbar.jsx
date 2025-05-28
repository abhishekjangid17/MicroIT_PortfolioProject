import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">MyPortfolio</div>

        <div className="hidden md:flex space-x-6">
          {['About', 'Projects', 'Contact'].map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              {section}
            </a>
          ))}
          <button
            onClick={toggleDarkMode}
            className="text-xl text-blue-600 dark:text-yellow-400"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-blue-600"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-4 pb-4 space-y-2">
          {['About', 'Projects', 'Contact'].map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 dark:text-gray-200 hover:text-blue-500"
            >
              {section}
            </a>
          ))}
          <button
            onClick={() => {
              toggleDarkMode();
              setMenuOpen(false);
            }}
            className="block text-left text-blue-600 dark:text-yellow-400"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
