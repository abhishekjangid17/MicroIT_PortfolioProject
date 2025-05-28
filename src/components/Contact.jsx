import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const newErrors = {};
    if (!data.user_name.trim()) newErrors.user_name = 'Name is required';
    if (!data.user_email.trim()) newErrors.user_email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(data.user_email)) newErrors.user_email = 'Invalid email';
    if (!data.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      user_name: formRef.current.user_name.value,
      user_email: formRef.current.user_email.value,
      message: formRef.current.message.value,
    };

    const formErrors = validate(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setStatus('');
      return;
    }

    setErrors({});
    setStatus('Sending...');

    emailjs
      .sendForm(
        'service_pumf9sp',    // Replace with your EmailJS service ID
        'template_chdlfqu',   // Replace with your EmailJS template ID
        formRef.current,
        'TvZyCzRF9PGj5dYzx'     // Replace with your EmailJS public key
      )
      .then(() => {
        setStatus('Message sent successfully!');
        formRef.current.reset();
      })
      .catch(() => {
        setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 px-6 pt-24 pb-12 transition-colors">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">Contact Me</h2>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all"
      >
        <div>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className={`w-full px-4 py-3 border rounded-full dark:bg-gray-700 dark:text-white transition ${
              errors.user_name ? 'border-red-500 animate-shake' : ''
            }`}
          />
          {errors.user_name && <p className="text-sm text-red-500 mt-1">{errors.user_name}</p>}
        </div>

        <div>
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className={`w-full px-4 py-3 border rounded-full dark:bg-gray-700 dark:text-white transition ${
              errors.user_email ? 'border-red-500 animate-shake' : ''
            }`}
          />
          {errors.user_email && <p className="text-sm text-red-500 mt-1">{errors.user_email}</p>}
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            className={`w-full px-4 py-3 border rounded-2xl dark:bg-gray-700 dark:text-white h-32 transition ${
              errors.message ? 'border-red-500 animate-shake' : ''
            }`}
          ></textarea>
          {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-full shadow hover:opacity-90 transition"
        >
          Send Message
        </button>

        {status && (
          <p
            className={`text-center mt-4 text-sm ${
              status.includes('success') ? 'text-green-600' : 'text-red-600'
            } animate-fade-in`}
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
