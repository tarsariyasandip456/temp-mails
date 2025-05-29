// app/contact/page.tsx
import React from 'react';
import Head from 'next/head';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Temp Mail</title>
        <meta name="description" content="Contact the Temp Mail team for support, inquiries, or feedback. We&quot;re here to help you maintain your privacy online." />
        <meta property="og:title" content="Contact Us - Temp Mail" />
        <meta property="og:description" content="Reach out to Temp Mail for assistance or more information about our disposable email services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/contact" />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

        <p className="text-center mb-10 text-gray-600">
          Have questions or feedback? We&quot;d love to hear from you. Fill out the form below and we&quot;ll get back to you as soon as possible.
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#6b5b95] text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </main>
    </>
  );
};

export default ContactPage;
