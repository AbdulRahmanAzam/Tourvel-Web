import React, { useState } from 'react'
import Hero from '../components/Hero'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import Footer from '../components/Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <>
      <Hero
        imageSrc="../assets/3.jpg"
        Heading="Get in Touch"
        subHeading="We would love to hear from you!"
        description="Contact us for any inquiries or to book your next adventure."
      />
      
      {/* Contact Form Section */}
      <div className='w-full bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4'>
        <div className='max-w-7xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-md'>
              📧 Contact Us
            </div>
            <h2 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6'>
              Let's Start Planning
            </h2>
            <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              Ready to embark on your next adventure? Fill out the form below and our travel experts will help you create the perfect travel experience.
            </p>
          </div>

          <div className='max-w-4xl mx-auto gap-12'>
            

            {/* Contact Form */}
            <div className='bg-white rounded-3xl p-8 shadow-lg border border-gray-100'>
              <h3 className='text-2xl md:text-3xl font-bold text-gray-800 mb-6'>Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor="name" className='block text-sm font-semibold text-gray-700 mb-2'>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300'
                      placeholder='Enter your full name'
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className='block text-sm font-semibold text-gray-700 mb-2'>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300'
                      placeholder='Enter your email'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor="phone" className='block text-sm font-semibold text-gray-700 mb-2'>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300'
                      placeholder='Enter your phone number'
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className='block text-sm font-semibold text-gray-700 mb-2'>
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300'
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="booking">Trip Booking</option>
                      <option value="support">Customer Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className='block text-sm font-semibold text-gray-700 mb-2'>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none'
                    placeholder='Tell us about your travel plans or ask any questions...'
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className='flex items-center justify-center gap-2'>
                      <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                      Sending Message...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Contact