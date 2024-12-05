import React from 'react'

export default function About() {
  return (
    <div>
        <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            Discover the story behind Crockery Delight, where elegance meets functionality.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Who We Are</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
            Crockery Delight was founded with a mission to bring elegance to every dining experience. 
            From timeless designs to innovative craftsmanship, we provide crockery that balances beauty and functionality. 
            Our team is committed to delivering the best products to your home, making every meal a celebration.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center md:space-x-10">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img
                src="https://source.unsplash.com/600x400/?crockery,tableware"
                alt="Mission"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                At Crockery Delight, our mission is to inspire delightful dining experiences with premium crockery that embodies style and quality. 
                We strive to be a trusted partner in your culinary journey, offering products that complement your passion for cooking and hosting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Behind every piece of our crockery is a team of passionate individuals dedicated to quality and design.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {["Alice Johnson", "Michael Lee", "Sophia Martinez"].map((name, idx) => (
              <div
                key={idx}
                className="bg-gray-100 rounded-lg shadow-lg p-6 text-center"
              >
                <img
                  src={`https://source.unsplash.com/150x150/?person&${idx}`}
                  alt={name}
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
                <p className="text-gray-600">Designer & Creator</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Gallery</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Explore the beauty of our crockery collection and the moments it enhances.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array(6)
              .fill()
              .map((_, idx) => (
                <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={`https://source.unsplash.com/600x400/?crockery,design&${idx}`}
                    alt="Crockery"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Footer Call to Action */}
      <section className="py-12 bg-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Want to Know More?</h3>
          <p className="text-gray-300 mb-6">
            Get in touch with us or browse our products to learn how Crockery Delight can elevate your dining experience.
          </p>
          <a
            href="#contact"
            className="bg-yellow-500 text-white px-6 py-3 rounded-full shadow hover:bg-yellow-600 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
    </div>
  )
}
