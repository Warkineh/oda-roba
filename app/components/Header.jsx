import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"

const Home = ({ isDarkMode }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Stable random function that won't cause hydration mismatches
  const stableRandom = (seed, multiplier) => {
    const x = Math.sin(seed * multiplier) * 10000
    return x - Math.floor(x)
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 py-12
                  ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-blue-50 to-white'}`}
    >
      {/* Animated Background Elements - Client-side only */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden -z-10">
          {[...Array(6)].map((_, i) => {
            const size = stableRandom(i, 123) * 200 + 100
            const left = stableRandom(i, 456) * 100
            const top = stableRandom(i, 789) * 100
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 0.1, y: 0 }}
                transition={{ 
                  duration: 1, 
                  delay: i * 0.2,
                  type: "spring",
                  damping: 20
                }}
                className={`absolute rounded-full ${isDarkMode ? 'bg-blue-500' : 'bg-blue-400'}`}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${left}%`,
                  top: `${top}%`,
                  filter: 'blur(60px)',
                  willChange: 'transform, opacity'
                }}
              />
            )
          })}
        </div>
      )}

      {/* Rest of your existing content remains exactly the same */}
      <div className=" relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center ">
        {/* Logo with Floating Animation */}
        <motion.div
          initial={{ y: -50, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            type: 'spring',
            stiffness: 120,
            damping: 10
          }}
          whileHover={{ 
            y: -10,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.6 }
          }}
          className="relative group mb-8"
        >
          <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10"/>
          <Image 
            src={assets.profile_img} 
            alt="Hospital Logo" 
            width={140}
            height={140}
            className="rounded-full w-32 h-32 sm:w-36 sm:h-36 object-cover border-[5px] border-white shadow-2xl"
          />
          <div className={`absolute -inset-2 rounded-full border-2 ${isDarkMode ? 'border-blue-400/30' : 'border-blue-600/30'} animate-pulse`} />
        </motion.div>

        {/* Welcome Text */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center mb-6"
        >
          <h3 className={`flex items-center gap-3 text-xl md:text-2xl font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
           <b> Welcome to Oda Roba Hospital Official Website</b>
            <motion.span 
              animate={{ 
                rotate: [0, 15, -5, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 0.8,
                repeat: Infinity,
                repeatDelay: 4
              }}
            >
              <Image src={assets.hand_icon} alt="waving hand" width={28} height={28} className="w-7" />
            </motion.span>
          </h3>
          
          {/* Animated decorative line */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '80%' }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={`h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent my-4`}
            style={{ maxWidth: '300px' }}
          />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-center max-w-4xl leading-snug mb-6
                     ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
        >
          <span className="relative inline-block">
            <span className="relative z-10">Many Hands, </span>
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className={`absolute bottom-2 left-0 h-3 ${isDarkMode ? 'bg-blue-500/30' : 'bg-blue-400/40'} z-0 rounded-full`}
            />
          </span>
          <br />
          <span className={`relative bg-gradient-to-r ${isDarkMode ? 'from-blue-400 to-blue-600' : 'from-blue-600 to-blue-800'} bg-clip-text text-transparent`}>
            One Goal: Your Health
          </span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className={`text-xl max-w-3xl mx-auto text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-10`}
        >
          Providing exceptional healthcare through our <span className="font-semibold text-blue-500">12+ specialized departments</span> with compassionate professionals
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 8px 20px -5px rgba(59, 130, 246, 0.4)'
            }}
            whileTap={{ scale: 0.98 }}
            className={`px-8 py-4 rounded-full flex items-center gap-3 text-lg font-semibold transition-all
                       ${isDarkMode 
                         ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
                         : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'}`}
          >
            Contact Us
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity
              }}
            >
              <Image src={assets.right_arrow_white} alt="arrow" width={20} height={20} className="w-5" />
            </motion.span>
          </motion.a>

          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`px-8 py-4 rounded-full flex items-center gap-3 text-lg font-semibold transition-all border-2
                       ${isDarkMode 
                         ? 'border-blue-400 text-blue-400 hover:bg-blue-900/30' 
                         : 'border-blue-600 text-blue-600 hover:bg-blue-100'}`}
          >
            Our Services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className={`mt-16 w-full max-w-4xl grid grid-cols-3 gap-6 p-6 rounded-2xl backdrop-blur-sm ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/70'} shadow-lg`}
        >
          {[
            { value: '12+', label: 'Specialized Departments' },
            { value: '30+', label: 'Specialists and Sub-specialists' },
            { value: '24/7', label: 'Emergency Care' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className={`text-3xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mb-2`}>{stat.value}</p>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Home