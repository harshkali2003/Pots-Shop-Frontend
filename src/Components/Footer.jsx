import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
       <footer className="bg-amber-800 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Ecomend</h2>
          <p className="text-gray-400">
            Discover premium crockery to elevate your dining experience. Style and quality in every piece.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/products" className="text-gray-400 hover:text-white transition">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-400 hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-400 hover:text-white transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-gray-400 hover:text-white transition">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates on new arrivals and exclusive offers.</p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8"></div>

      {/* Social and Copyright */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between mt-8">
        <div className="flex space-x-4">
          <Link
            href="#"
            className="text-gray-400 hover:text-white transition"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-white transition"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </Link>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <Link
            href="#"
            className="text-gray-400 hover:text-white transition"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </div>
        <p className="text-gray-400 mt-4 md:mt-0">
          © 2024 Crockery Delight. All rights reserved.
        </p>
      </div>
    </footer>
    </>
  )
}
