import { motion } from "framer-motion";
import { useState } from "react";

const Services = ({ isDarkMode }) => {
  const [expandedCards, setExpandedCards] = useState([]);

  const toggleCardExpand = (index) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  const services = [
    { 
      name: 'Internal Medicine', 
      icon: '🩺',
      shortDesc: 'Comprehensive adult healthcare',
      fullDesc: 'Our internists provide personalized care for adults, managing both common and complex illnesses with evidence-based approaches.'
    },
    { 
      name: 'General Surgery', 
      icon: '🔪',
      shortDesc: 'Advanced surgical procedures',
      fullDesc: 'From appendectomies to hernia repairs, our surgeons perform minimally invasive procedures with precision and care.'
    },
    { 
      name: 'Orthopedics', 
      icon: '🦴',
      shortDesc: 'Bone and joint specialists',
      fullDesc: 'We treat musculoskeletal conditions including sports injuries, arthritis, and fractures with both surgical and non-surgical methods.'
    },
    { 
      name: 'Pediatrics', 
      icon: '👶',
      shortDesc: 'Child healthcare experts',
      fullDesc: 'Our pediatricians provide compassionate care from infancy through adolescence, including vaccinations and developmental screenings.'
    },
    { 
      name: 'Gynecology', 
      icon: '🌸',
      shortDesc: "Women's health services",
      fullDesc: 'Comprehensive care including annual exams, contraceptive counseling, and treatment for gynecological conditions.'
    },
    { 
      name: 'Dermatology', 
      icon: '🧴',
      shortDesc: 'Skin condition treatment',
      fullDesc: 'Diagnosis and treatment of skin disorders, cosmetic procedures, and skin cancer screenings with advanced technologies.'
    },
    { 
      name: 'Maxillofacial', 
      icon: '🦷',
      shortDesc: 'Oral and facial surgery',
      fullDesc: 'Specialized surgical treatment for dental implants, facial trauma, corrective jaw surgery, and oral pathology.'
    },
    { 
      name: 'Radiology', 
      icon: '📷',
      shortDesc: 'Diagnostic imaging',
      fullDesc: 'High-quality imaging services including X-rays, ultrasounds, CT scans, and MRIs with expert interpretation.'
    },
    { 
      name: 'Pathology', 
      icon: '🔬',
      shortDesc: 'Lab testing and analysis',
      fullDesc: 'Accurate diagnostic testing including blood work, biopsies, and microbiology services for precise diagnoses.'
    },
    { 
      name: 'Cardiology', 
      icon: '❤️',
      shortDesc: 'Heart health specialists',
      fullDesc: 'Comprehensive cardiac care including EKGs, stress tests, echocardiograms, and management of heart conditions.'
    },
    { 
      name: 'ENT', 
      icon: '👂',
      shortDesc: 'Ear, nose and throat care',
      fullDesc: 'Treatment for hearing disorders, sinus conditions, tonsillitis, and other ENT-related health issues.'
    },
    { 
      name: 'Ophthalmology', 
      icon: '👁️',
      shortDesc: 'Eye care and vision services',
      fullDesc: 'Complete eye care including vision correction, cataract surgery, glaucoma treatment, and retinal exams.'
    }
  ];

  return (
    <section id='services' className={`py-16 px-4 sm:px-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Our <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Healthcare Services</span>
          </h2>
          <div className={`w-20 h-1 mx-auto mb-4 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          <p className={`max-w-2xl mx-auto text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Comprehensive healthcare across 12+ specialized departments
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`rounded-xl p-5 flex flex-col transition-all duration-300
                        ${isDarkMode 
                          ? 'bg-gray-800 border-gray-700 hover:shadow-blue-900/20' 
                          : 'bg-white border-gray-200 hover:shadow-lg'}
                        border hover:shadow-xl ${expandedCards.includes(index) ? 'h-auto' : 'h-48'}`}
            >
              <div className="flex items-start mb-4">
                <motion.div 
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className={`w-12 h-12 rounded-lg flex items-center justify-center text-3xl mr-4
                              ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}
                >
                  {service.icon}
                </motion.div>
                <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  {service.name}
                </h3>
              </div>
              
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {service.shortDesc}
              </p>
              
              {expandedCards.includes(index) && (
                <motion.p 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                >
                  {service.fullDesc}
                </motion.p>
              )}
              
              <motion.button 
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleCardExpand(index)}
                className={`mt-auto text-sm font-medium self-start flex items-center
                           ${isDarkMode 
                             ? 'text-blue-400 hover:text-blue-300' 
                             : 'text-blue-600 hover:text-blue-800'}`}
              >
                {expandedCards.includes(index) ? 'Show Less' : 'Learn More'}
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform duration-300
                            ${expandedCards.includes(index) ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;