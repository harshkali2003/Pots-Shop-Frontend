import React , {useState} from 'react'
import { Link } from 'react-router-dom';


export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    const faqs = [
      {
        question: "What is Crockery Delight?",
        answer:
          "Crockery Delight is your go-to store for premium-quality crockery that combines style and functionality for every dining occasion.",
      },
      {
        question: "What materials are your products made from?",
        answer:
          "We offer a wide range of products made from high-quality materials such as porcelain, ceramic, glass, and stainless steel.",
      },
      {
        question: "How can I place an order?",
        answer:
          "Simply browse through our collections, add items to your cart, and proceed to checkout. We offer secure payment options for a seamless shopping experience.",
      },
      {
        question: "Do you offer international shipping?",
        answer:
          "Yes, we ship worldwide! Shipping charges and delivery times vary based on your location.",
      },
      {
        question: "What is your return policy?",
        answer:
          "We accept returns within 30 days of delivery. Items must be unused and in their original packaging. Contact our support team for assistance.",
      },
    ];
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Find answers to the most common questions about our products and services.
        </p>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-6 transition duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h2>
                <span
                  className={`text-gray-500 transform transition-transform ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <p className="text-gray-600 mt-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
