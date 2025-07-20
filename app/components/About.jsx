import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

const About = ({isDarkMode}) => {
  return (
    <motion.div 
      id='about' 
      className='w-full px-[5%] lg:px-[12%] py-16 md:py-24 scroll-mt-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800'
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
    >
      <motion.div 
        className='text-center mb-16'
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
      >
         <h1 className='text-4xl md:text-5xl lg:text-6xl font-Ovo mb-4 text-gray-800 dark:text-white'>
          <span className='text-blue-600 dark:text-blue-400'>About Us</span></h1>
        <h5 className='text-4xl md:text-5xl lg:text-6xl font-Ovo mb-4 text-gray-800 dark:text-white'>
         New Standards in Bale Robe Healthcare
        </h5>
        <p className='text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto'>
          Bringing fresh, modern healthcare to our community
        </p>
        <div className='w-24 h-1 bg-blue-500 mx-auto rounded-full mt-6' />
      </motion.div>

      <motion.div 
        className='flex w-full flex-col lg:flex-row items-center gap-10 lg:gap-16 xl:gap-24'
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}
      >
        <motion.div 
          initial={{opacity: 0, scale: 0.9}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 0.6}}
          className='w-full sm:w-80 lg:w-96 relative'
        >
          <div className='absolute -inset-4 bg-blue-200 dark:bg-blue-900 rounded-3xl -z-10 rotate-3'></div>
          <Image 
            src={assets.user_image} 
            alt='Our modern medical facility' 
            className='w-full rounded-3xl shadow-xl border-4 border-white dark:border-gray-800'
            width={400}
            height={500}
          />
        </motion.div>

        <motion.div 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.66, delay: 0.3}}
          className='flex-1'
        >
          <h3 className='text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-white'>
            A Fresh Approach to Healthcare
          </h3>
          
          <p className='mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300'>
            Established in 2024, our hospital in Bale Robe represents the next generation of medical care. We've built our facility with the latest technology and staffed it with passionate specialists to deliver modern, compassionate healthcare across 12+ specialized departments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: "🆕",
                title: "Brand New",
                subtitle: "State-of-the-art facilities",
                color: "text-blue-600 dark:text-blue-400"
              },
              {
                icon: "🌟",
                title: "Modern",
                subtitle: "Cutting-edge equipment",
                color: "text-purple-600 dark:text-purple-400"
              },
              {
                icon: "❤️",
                title: "Dedicated",
                subtitle: "Compassionate care team",
                color: "text-red-600 dark:text-red-400"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: index * 0.1 + 0.5}}
                className={`p-4 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all ${item.color} border-l-4 ${item.color.replace('text', 'border')}`}
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <h4 className="text-2xl font-bold mb-1">{item.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>

          
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About