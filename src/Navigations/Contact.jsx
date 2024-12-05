import React from 'react'

export default function Contact() {
  return (
   <>
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Header Section */}
      <header className="bg-white w-full shadow">
        <div className="container mx-auto px-6 py-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-gray-600 mt-2">We’d love to hear from you! Reach out with your questions or feedback.</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-600 font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-600 font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-600 font-semibold mb-1">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Contact Details</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <i className="fas fa-phone-alt text-yellow-500 text-xl mr-4"></i>
              <p className="text-gray-600">+123 456 7890</p>
            </div>
            <div className="flex items-center">
              <i className="fas fa-envelope text-yellow-500 text-xl mr-4"></i>
              <p className="text-gray-600">info@Ecomend.com</p>
            </div>
            <div className="flex items-center">
              <i className="fas fa-map-marker-alt text-yellow-500 text-xl mr-4"></i>
              <p className="text-gray-600">Kolkata</p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Find Us</h3>
            <div className="bg-gray-200 w-full h-48 flex items-center justify-center text-gray-600">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58956.25712469408!2d88.34067278188074!3d22.55043415367462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02742d127a76bf%3A0xfd000fe5c9f11744!2sNational%20Institute%20of%20Fashion%20Technology%20(NIFT)!5e0!3m2!1sen!2sin!4v1733377055956!5m2!1sen!2sin" height="190" width="715" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </main>
    </div>
   </>
  )
}
