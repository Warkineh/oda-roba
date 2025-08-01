import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "framer-motion"

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending your message...");
    const formData = new FormData(event.target);

    formData.append("access_key", "8c62b5c0-f2e7-44af-9637-563c323e60c1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thank you! Your message has been received. We'll contact you shortly.");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("There was an error submitting your form. Please try again.");
    }
  };

  return (
    <div className="w-screen min-w-full overflow-x-hidden">
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='contact' 
      className={`w-full py-20 px-4 sm:px-6 scroll-mt-20 ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-blue-50 to-white'}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={`text-lg font-medium mb-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
          >
            GET IN TOUCH
          </motion.h4>

          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Contact <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Oda Roba Hospital</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className={`h-1.5 mx-auto mb-6 rounded-full ${isDarkMode ? 'bg-gradient-to-r from-blue-500 to-blue-400' : 'bg-gradient-to-r from-blue-600 to-blue-400'}`}
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className={`max-w-2xl mx-auto text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Our team is available 24/7 to answer your questions and assist with appointments.
          </motion.p>
        </motion.div>

        {/* Contact Form and Info */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white border border-gray-200'} shadow-xl`}>
              <h3 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Send Us a Message
              </h3>
              
              <form onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                  >
                    <label className={`block mb-3 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      placeholder="Your name" 
                      required 
                      className={`w-full px-5 py-3.5 rounded-lg border transition-all duration-300 focus:ring-2
                                ${isDarkMode 
                                  ? 'bg-gray-800 border-gray-700 focus:border-blue-500 focus:ring-blue-900/50 text-white' 
                                  : 'bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-200'}`}
                      name='name'
                    />
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.0, duration: 0.6 }}
                  >
                    <label className={`block mb-3 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      placeholder="your.email@example.com" 
                      required 
                      className={`w-full px-5 py-3.5 rounded-lg border transition-all duration-300 focus:ring-2
                                ${isDarkMode 
                                  ? 'bg-gray-800 border-gray-700 focus:border-blue-500 focus:ring-blue-900/50 text-white' 
                                  : 'bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-200'}`}
                      name='email'
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  className="mb-8"
                >
                  <label className={`block mb-3 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    rows='6' 
                    placeholder="How can we help you?" 
                    required
                    className={`w-full px-5 py-3 rounded-lg border transition-all duration-300 focus:ring-2
                              ${isDarkMode 
                                ? 'bg-gray-800 border-gray-700 focus:border-blue-500 focus:ring-blue-900/50 text-white' 
                                : 'bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-200'}`}
                    name='message'
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="text-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    type='submit'
                    className={`px-10 py-4 rounded-xl text-lg font-semibold flex items-center gap-3 mx-auto transition-all shadow-lg
                              ${isDarkMode 
                                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-blue-700/30' 
                                : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-blue-500/30'}`}
                  >
                    Send Message
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity
                      }}
                    >
                      <Image src={assets.right_arrow_white} alt='' width={20} height={20} className="w-5" />
                    </motion.span>
                  </motion.button>

                  {result && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={`mt-6 text-sm ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
                    >
                      {result}
                    </motion.p>
                  )}
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className={`lg:w-1/2 p-8 rounded-2xl ${isDarkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white border border-gray-200'} shadow-xl`}
          >
            <h3 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Our Contact Details
            </h3>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="flex items-start gap-5"
              >
                <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-blue-900/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Emergency Hotline</h4>
                  <p className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>+251 908 55 6677</p>
                  <p className={`mt-1 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>24/7 Available</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="flex items-start gap-5"
              >
                <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-blue-900/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Email Address</h4>
                  <p className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>odaroba2015@gmail.com</p>
                  <p className={`mt-1 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Response within 24 hours</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="flex items-start gap-5"
              >
                <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-blue-900/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Hospital Location</h4>
                  <p className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Bale Robe (in front of Robe Secondary School)
                  </p>
                  <p className={`mt-1 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Oromia, Ethiopia</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="flex items-start gap-5"
              >
                <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-blue-900/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Working Hours</h4>
                  <p className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>24/7 Emergency Services</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
    </div>
  )
}

export default Contact