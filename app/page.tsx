import React from "react";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Sachram Technologies
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            We build modern websites, mobile apps, and UI/UX solutions to grow your business.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">Website Development</h3>
              <p>Fast, responsive, and modern websites for businesses of all sizes.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">Mobile App Development</h3>
              <p>Native & cross-platform apps to grow your business on iOS & Android.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p>User-friendly interfaces that delight customers and drive engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
<section className="bg-gray-100 py-20">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
    <p className="mb-8">Get in touch to discuss your project or request a quote.</p>
    <div className="flex flex-col md:flex-row justify-center gap-6">
      <a href="mailto:hello@sachramtech.com" className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition">
        Email Us
      </a>
      <a href="tel:+919999999999" className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition">
        Call Us
      </a>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="bg-blue-900 text-white py-6 mt-10">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <p>© 2026 Sachram Technologies. All rights reserved.</p>
    <p>Follow us on: 
      <a href="#" className="underline ml-2">LinkedIn</a> | 
      <a href="#" className="underline ml-2">Instagram</a>
    </p>
  </div>
</footer>
    </main>
  );
}