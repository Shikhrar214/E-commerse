import React from "react";

const ContactPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          We'd love to hear from you! Whether you have a question about products,
          pricing, or anything else, our team is ready to help.
        </p>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form className="space-y-6 bg-white p-6 rounded-xl shadow-md">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows={5}
              placeholder="Write your message here..."
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Email</h2>
            <p className="text-gray-600">support@achichiz.in</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Phone</h2>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Location</h2>
            <p className="text-gray-600">Jaipur, Rajasthan, India</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Business Hours</h2>
            <p className="text-gray-600">Mon - Sat: 9:00 AM – 6:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
