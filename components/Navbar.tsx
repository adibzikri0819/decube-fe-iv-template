import React from 'react';
import searchIcon from '../assets/search-icon.png';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 rounded-lg mt-4 ml-4 mr-4">
      <div className="flex justify-between items-center">
        <div>Movie App</div>
        <div className="flex flex-grow justify-center space-x-11">
          <a href="#" className="hover:text-gray-300">Popular movies</a>
          <a href="#" className="hover:text-gray-300">Movie details</a>
        </div>
        <div className="flex space-x-4">
          <div className="relative">
            <input
              type="text"
              className="pl-8 pr-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:border-gray-400"
              placeholder="Search..."
            />
           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
