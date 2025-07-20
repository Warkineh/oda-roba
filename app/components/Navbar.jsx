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
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <>
      {/* Background Decoration */}
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
      </div>

      {/* Main Navbar */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`w-full fixed px-4 sm:px-6 lg:px-8 xl:px-[8%] py-3 flex items-center justify-between z-50 transition-all duration-300
          ${isScroll 
            ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-gray-900/90 dark:shadow-gray-800/50" 
            : "bg-transparent"}`}
      >
        {/* Logo */}
<motion.a 
  href="#top"
  whileHover={{ scale: 1.05 }}
  className="flex items-center gap-2"
>
  <Image 
    src={isDarkMode ? assets.logo_dark : assets.logo} 
    alt="Oda Roba Hospital Logo" 
    width={140}
    height={60}
    className='w-32 lg:w-36 cursor-pointer'
  />
  <span className={`hidden lg:block text-lg font-bold bg-clip-text text-transparent 
    ${isDarkMode 
      ? 'bg-gradient-to-r from-blue-300 to-purple-400' 
      : 'bg-gradient-to-r from-blue-600 to-purple-600'
    }`}>
    Oda Roba Hospital
  </span>
</motion.a>

        {/* Desktop Navigation */}
        <ul className={`hidden md:flex items-center gap-1 rounded-full px-6 py-2 transition-all duration-300
          ${isScroll 
            ? "bg-white/80 dark:bg-gray-800/80 shadow-md" 
            : "bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"}`}
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
                <span className={`absolute bottom-1 left-1/2 h-0.5 w-0 group-hover:w-3/5 transition-all duration-300 
                  ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'}`}
                  style={{ transform: 'translateX(-50%)' }}
                />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Right Side Controls */}
        <div className='flex items-center gap-4'>
          {/* Theme Toggle */}
          <motion.button 
            onClick={() => setIsDarkMode(prev => !prev)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
            aria-label="Toggle dark mode"
          >
            <Image 
              src={isDarkMode ? assets.sun_icon : assets.moon_icon} 
              alt={isDarkMode ? 'Light mode' : 'Dark mode'} 
              width={24}
              height={24}
              className="w-5"
            />
          </motion.button>

          {/* Contact Button (Desktop) */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-colors duration-300
              ${isDarkMode 
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg' 
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'}`}
          >
            Contact Us
            <Image 
              src={assets.right_arrow_white} 
              alt="" 
              width={16}
              height={16}
              className="w-4"
            />
          </motion.a>

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
              className="w-6"
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
              />
              
              <motion.div
                ref={menuRef}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', ease: 'easeInOut' }}
                className={`fixed inset-y-0 right-0 w-64 z-50 h-screen ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}
              >
                <div className="flex flex-col h-full p-6">
                  {/* Close Button */}
                  <div className="flex justify-end mb-8">
                    <motion.button
                      onClick={() => setIsMenuOpen(false)}
                      whileHover={{ rotate: 90 }}
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
                  <ul className="flex flex-col gap-6">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <a
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block text-lg font-medium px-4 py-3 rounded-lg transition-colors
                            ${isDarkMode 
                              ? 'text-gray-200 hover:bg-gray-700' 
                              : 'text-gray-800 hover:bg-gray-100'}`}
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
                    transition={{ delay: 0.4 }}
                  >
                    <a
                      href="#contact"
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center justify-center gap-2 w-full py-3 px-6 rounded-full font-medium
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