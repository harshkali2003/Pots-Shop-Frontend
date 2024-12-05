import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/Logo.jpg'


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-amber-700 text-white shadow-md sticky top-0">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="text-2xl font-bold">
            <Link to="#"><img src="https://img.freepik.com/premium-photo/cup-with-leaves-white-background_900101-51826.jpg?w=740" alt="" className="h-20 w-20 mix-blend-multiply"/><span className="font-thin">Ecomend</span></Link>
          </div>
          {/* Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
          {/* Links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full lg:flex lg:w-auto lg:items-center`}
          >
            <ul className="lg:flex lg:space-x-6 text-lg">
              <li>
                <Link to='/'
                  className="block px-4 py-2 hover:bg-blue-700 rounded-md"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="block px-4 py-2 hover:bg-blue-700 rounded-md"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about"
                  className="block px-4 py-2 hover:bg-blue-700 rounded-md"
                >
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact"
                  className="block px-4 py-2 hover:bg-blue-700 rounded-md"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link to="/profile"
                  className="block px-4 py-2 hover:bg-blue-700 rounded-md"
                >
                  Profile
                </Link>
              </li>

              <li>
                <Link to="/login"
                  className="block px-4 py-2 hover:bg-blue-700 rounded-md"
                >
                  Log In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
