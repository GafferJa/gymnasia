import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle form submission (e.g., API call)
    alert('Message sent!');
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20 px-4">
      <h1 className="text-4xl font-semibold mb-10">Contact Us</h1>

      <div className="flex flex-col lg:flex-row items-center justify-evenly gap-10 w-full max-w-6xl">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="border-2 border-orange-800 rounded-lg p-3"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="border-2 border-orange-800 rounded-lg p-3"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              className="border-2 border-orange-800 rounded-lg p-3"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-orange-700 text-white rounded-lg p-3 hover:bg-orange-800 transition"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Contact Image */}
        <img
          src="https://plus.unsplash.com/premium_photo-1679811672048-9d4b810a7588?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%3D%3D"
          alt="Contact Illustration"
          className='h-100 rounded-lg max-w-sm'
        />
      </div>
    </div>
  );
};

export default Contact;
