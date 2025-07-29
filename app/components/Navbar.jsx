import { assets } from '@/assets/assets'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef()

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#top' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Machines', href: '#machines' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Teams', href: '#teams' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <>
      {/* Background Decoration */}
      <motion.div 
        className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image src={assets.header_bg_color} alt='' className='w-full' />
      </motion.div>

      {/* Main Navbar */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`w-full fixed px-4 sm:px-6 lg:px-8 xl:px-10 py-3 flex items-center justify-between z-50 transition-all duration-300
          ${isScroll 
            ? "bg-white/95 backdrop-blur-md shadow-sm dark:bg-gray-900/95 dark:shadow-gray-800/30" 
            : "bg-transparent"}`}
      >
        {/* Logo with Enhanced Gradient Text - Left Aligned */}
        <motion.a 
          href="#top"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-shrink-0 flex items-center gap-3"
        >
          <Image 
            src={isDarkMode ? assets.logo_dark : assets.logo} 
            alt="Oda Roba Hospital Logo" 
            width={140}
            height={60}
            className='w-32 lg:w-36 cursor-pointer transition-transform duration-300'
          />
          
          {/* Enhanced Gradient Text */}
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className={`hidden lg:block text-2xl font-bold bg-gradient-to-r 
                        ${isDarkMode 
                          ? 'from-blue-300 via-blue-400 to-blue-500' 
                          : 'from-blue-500 via-blue-600 to-blue-700'} 
                        bg-clip-text text-transparent tracking-tight`}
          >
            Oda Roba Hospital
          </motion.span>
        </motion.a>

        {/* Desktop Navigation - Adjusted Spacing */}
        <motion.ul 
          className={`hidden md:flex items-center gap-1 px-4 py-2 transition-all duration-300 ml-8
            ${isScroll 
              ? "bg-white/90 dark:bg-gray-800/90 shadow-lg rounded-full" 
              : "bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {navItems.map((item, index) => (
            <motion.li 
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <a 
                href={item.href}
                className={`font-medium px-4 py-2 rounded-full transition-colors duration-300
                  ${isDarkMode 
                    ? 'text-gray-200 hover:text-white' 
                    : 'text-gray-700 hover:text-gray-900'}`}
              >
                {item.name}
                <motion.span 
                  className={`absolute bottom-1 left-1/2 h-0.5 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'}`}
                  initial={{ width: 0 }}
                  whileHover={{ width: '60%' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  style={{ transform: 'translateX(-50%)' }}
                />
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Right Side Controls - With Spacing */}
        <div className='flex items-center gap-6'>
          {/* Theme Toggle */}
          <motion.button 
            onClick={() => setIsDarkMode(prev => !prev)}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300`}
            aria-label="Toggle dark mode"
          >
            <Image 
              src={isDarkMode ? assets.sun_icon : assets.moon_icon} 
              alt={isDarkMode ? 'Light mode' : 'Dark mode'} 
              width={24}
              height={24}
              className="w-5 transition-transform duration-300 hover:rotate-12"
            />
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button 
            className='block md:hidden p-2'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <Image 
              src={isDarkMode ? assets.menu_white : assets.menu_black} 
              alt="Menu" 
              width={24}
              height={24}
              className="w-6 transition-transform duration-300 hover:rotate-90"
            />
          </motion.button>
        </div>

        {/* Mobile Menu with AnimatePresence */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 z-40 bg-black"
                transition={{ duration: 0.3 }}
              />
              
              <motion.div
                ref={menuRef}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className={`fixed inset-y-0 right-0 w-72 z-50 h-screen ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}
              >
                <div className="flex flex-col h-full p-6">
                  {/* Close Button */}
                  <div className="flex justify-end mb-8">
                    <motion.button
                      onClick={() => setIsMenuOpen(false)}
                      whileHover={{ rotate: 90, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2"
                      aria-label="Close menu"
                    >
                      <Image 
                        src={isDarkMode ? assets.close_white : assets.close_black} 
                        alt="Close" 
                        width={20}
                        height={20}
                        className="w-5"
                      />
                    </motion.button>
                  </div>

                  {/* Mobile Navigation Items */}
                  <ul className="flex flex-col gap-4">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1, type: 'spring' }}
                      >
                        <a
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block text-lg font-medium px-4 py-3 rounded-lg transition-all duration-300
                            ${isDarkMode 
                              ? 'text-gray-200 hover:bg-gray-700 hover:pl-6' 
                              : 'text-gray-800 hover:bg-gray-100 hover:pl-6'}`}
                        >
                          {item.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Mobile Contact Button */}
                  <motion.div 
                    className="mt-auto"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, type: 'spring' }}
                  >
                    <a
                      href="#contact"
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center justify-center gap-2 w-full py-3 px-6 rounded-full font-medium transition-all duration-300 hover:gap-3
                        ${isDarkMode 
                          ? 'bg-blue-600 text-white hover:bg-blue-700' 
                          : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                    >
                      Contact Us
                      <Image 
                        src={assets.right_arrow_white} 
                        alt="" 
                        width={16}
                        height={16}
                        className="w-4"
                      />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

export default Navbar