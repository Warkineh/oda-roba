import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear()

  // Fallback icons if not provided in assets
  const fallbackPhoneIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )

  const fallbackMailIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )

  const fallbackEmergencyIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )

  const footerLinks = [
    { title: 'Quick Links', links: [
      { name: 'Home', href: '#top' },
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Contact', href: '#contact' }
    ]},
    { title: 'Services', links: [
      { name: 'Emergency Care', href: '#' },
      { name: 'OPD Services', href: '#' },
      { name: 'Diagnostics', href: '#' },
      { name: 'Specialized Care', href: '#' }
    ]},
    { title: 'Contact', links: [
      { name: 'Bale Robe, Oromia, Ethiopia', href: '#contact' },
      { name: 'odarobahospital@gmail.com', href: 'mailto:odarobahospital@gmail.com' },
      { name: '+251 222 44 3000', href: 'tel:+251222443000' },
      { name: 'Emergency: 251 908 55 6677', href: 'tel:+251908556677' }
    ]}
  ]

  const socialLinks = [
    { name: 'Facebook', icon: assets.facebook_icon, href: '#' },
    { name: 'Telegram', icon: assets.telegram_icon, href: '#' },
    { name: 'Twitter', icon: assets.twitter_icon, href: '#' },
    { name: 'YouTube', icon: assets.youtube_icon, href: '#' }
  ]

  return (
    <footer className={`text-center sm:flex items-center justify-between border-t border-gray-400 mt-12  ${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-blue-50 text-gray-700'}`}>
      <div className="max-w-7xl mx-auto px-6 py-12 sm:px-8 lg:px-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Hospital Logo and Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Image 
              src={isDarkMode ? (assets.logo_dark || assets.logo) : assets.logo} 
              alt="Oda Roba Hospital" 
              width={160}
              height={80}
              className="w-40 mb-4"
            />
            <p className="mb-4">
              Providing compassionate and comprehensive healthcare services to our community since 2024.
            </p>
            <div className="flex items-center gap-3 mb-4">
              {assets.mail_icon ? (
                <Image 
                  src={isDarkMode ? (assets.mail_icon_dark || assets.mail_icon) : assets.mail_icon} 
                  alt="Email" 
                  width={24}
                  height={24}
                  className="w-6"
                />
              ) : (
                fallbackMailIcon
              )}
              <a href="mailto:odarobahospital@gmail.com" className="hover:text-blue-500 transition-colors">
                odarobahospital@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              {assets.phone_icon ? (
                <Image 
                  src={isDarkMode ? (assets.phone_icon_dark || assets.phone_icon) : assets.phone_icon} 
                  alt="Phone" 
                  width={24}
                  height={24}
                  className="w-6"
                />
              ) : (
                fallbackPhoneIcon
              )}
              <a href="tel:+251908556677" className="hover:text-blue-500 transition-colors">
                +251 908 55 6677
              </a>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="lg:col-span-1"
            >
              <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className={`hover:text-blue-500 transition-colors ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          
        </div>

        {/* Social Links and Copyright */}
        <div className={`mt-16 pt-8 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              © {currentYear} Oda Roba Hospital. All rights reserved.
            </motion.p>

         <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
         <li><a target='_blank' href="https://www.instagram.com/oda_roba_hospital?igsh=amFvdjN5cWY0bGFk">Instagram</a></li>   
         <li><a target='_blank' href="https://www.facebook.com/profile.php?id=61565832213198">Facebook</a></li>   
         <li><a target='_blank' href="https://t.me/Oda_Roba_Hospital">Telegram</a></li>
        </ul>
      </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer