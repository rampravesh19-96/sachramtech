// app/policy/page.tsx
import React from "react";
import Header from "../components/Header";

export default function Policy() {
  return (
    <>
      <main className="bg-gray-50 min-h-screen text-gray-900 py-28">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">Privacy & Policy</h1>
          <p className="mb-4 text-gray-700">
            Welcome to Sachram Technologies. This page outlines our privacy and policy guidelines for our website and services.
          </p>

          <h2 className="text-2xl font-semibold mb-3 mt-6 text-gray-900">1. Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            We may collect personal information such as name, email address, and contact details when you contact us or use our services.
          </p>

          <h2 className="text-2xl font-semibold mb-3 mt-6 text-gray-900">2. How We Use Information</h2>
          <p className="text-gray-700 mb-4">
            The information collected is used to provide and improve our services, respond to inquiries, and communicate updates.
          </p>

          <h2 className="text-2xl font-semibold mb-3 mt-6 text-gray-900">3. Cookies</h2>
          <p className="text-gray-700 mb-4">
            Our website may use cookies to enhance user experience. You can manage your cookie preferences through your browser settings.
          </p>

          <h2 className="text-2xl font-semibold mb-3 mt-6 text-gray-900">4. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            For any questions about our privacy policy, please contact us at <a href="mailto:hello.sachramtech@outlook.com" className="underline text-blue-900">hello.sachramtech@outlook.com</a>.
          </p>
        </div>
      </main>
    </>
  );
}