import React from 'react'
import { Link } from 'react-router-dom'

export default function MainFile() {
  return (
   <>
    {/* Hero Section */}
    <section className="bg-cover bg-center h-96 flex items-center justify-center text-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556910638-6cdac31d44dc?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="bg-black bg-opacity-50 p-8 rounded">
          <h2 className="text-4xl font-bold mb-4">Elegant Crockery for Every Occasion</h2>
          <p className="text-lg mb-6">Discover our premium collection to elevate your dining experience.</p>
          <a href="#products" className="bg-amber-800 text-white px-6 py-3 rounded-full shadow hover:bg-yellow-600">Shop Now</a>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow rounded-lg p-6 text-center">
              <img src="https://mudkart.com/cdn/shop/files/262.png?v=1716971514 " alt="Plates" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700">Plates</h3>
              <p className="text-gray-600 mt-2">Elegant designs to match your table setup.</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6 text-center">
              <img src="https://5.imimg.com/data5/SELLER/Default/2021/1/MG/ZA/FG/7752468/smwn103-1-500x500.JPG " alt="Cups" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700">Cups</h3>
              <p className="text-gray-600 mt-2">Perfectly crafted for your favorite beverages.</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6 text-center">
              <img src="https://m.media-amazon.com/images/I/41AryE773KL.jpg" alt="Bowls" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700">Bowls</h3>
              <p className="text-gray-600 mt-2">Stylish and versatile for every meal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-gray-600 leading-relaxed">
            At Crockery Delight, we take pride in providing high-quality and elegant crockery to enhance your dining experience. 
            With a commitment to style and durability, we offer collections that suit every occasion and taste.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-6">We’d love to hear from you! Reach out to us for inquiries or collaborations.</p>
          <Link to="mailto:info@crockerydelight.com" className="bg-amber-800 text-white px-6 py-3 rounded-full shadow hover:bg-yellow-600">Contact Us</Link>
        </div>
      </section>
   </>
  )
}
