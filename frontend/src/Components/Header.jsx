import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="bg-white text-black py-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl flex">
          <Link to="/">
            <h1 className='mx-5'>Human Benchmark</h1>
          </Link>
          <a href="#" className="hover:text-gray-700">Dashboard</a>
        </div>
        <nav className="flex space-x-4">
          <a href="#" className="hover:bg-gray-200 hover:text-gray-700 px-2 py-2 rounded-md">
            Login
          </a>
          <a href="#" className="hover:bg-gray-200 hover:text-gray-700 px-2 py-2 rounded-md">
            Signup
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;