import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Machines = ({ isDarkMode }) => {
  const [expandedCards, setExpandedCards] = useState([]);

  const toggleCardExpand = (index) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  const departments = [
    {
      name: 'Radiology Department Machines',
      machines: [
        { 
          name: 'Holter Monitor Machine', 
          shortDesc: '24-48 hour heart rhythm tracking',
          fullDesc: [
            'Records 24-48 hours of cardiac electrical activity',
            'Compact, wearable device with 3-5 lead system',
            'Detects arrhythmias missed by standard ECGs',
            'Wireless Bluetooth models available'
          ],
          image: '/images/machines/holter_moniter.png'
        },
        { 
          name: '3D Ultrasound Machine', 
          shortDesc: 'Advanced 3D ultrasound diagnostics',
          fullDesc: [
            'Real-time 3D rendering of organs & fetal anatomy',
            'Automated measurements for OB/GYN assessments',
            'Advanced Doppler for blood flow analysis',
            'Multiplanar reconstruction capabilities',
          ],
          image: '/images/machines/Ultrasound.png'
        },
        { 
          name: 'Defibrillator Machine', 
          shortDesc: 'Emergency heart rhythm restoration',
          fullDesc: [
            'Automated external (AED) & manual modes',
            'Delivers life-saving electric shocks',
            'ECG monitoring with voice guidance',
            'For cardiac arrest emergencies'
          ],
          image: '/images/machines/defibrillator.png'
        },
        {
          name: "Digital X-ray Machine",
          shortDesc: "High-precision digital imaging",
          fullDesc: [
            "High-resolution digital X-ray technology",
            "Faster results with lower radiation",
            "Enhanced detail for accurate diagnosis",
            "Supports various medical applications"
          ],
          image: "/images/machines/digital-x_ray.png"
        }
      ]
    },
    {
      name: 'Laboratory Department Machines',
      machines: [
        {
          name: 'Fully Automated Chemistry Machine',
          shortDesc: 'Rapid, automated lab testing',
          fullDesc: [
            'Runs metabolic panels and enzyme tests',
            'High-capacity sample processing',
            'Precise results with minimal handling',
            'Streamlines clinical lab workflow'
          ],
          image: '/images/machines/chemistry_machine.png'
        },
        {
          name: 'CBC Machine', 
          shortDesc: 'Comprehensive blood analysis',
          fullDesc: [
            '32-parameter complete blood testing',
            'Advanced 5-part differential',
            'Detects cell abnormalities instantly',
            'Lab-grade accuracy in minutes'
          ],
          image: '/images/machines/cbc_machine.png'
        },
        {
          name: 'Hormonal Analyzer Machine', 
          shortDesc: 'Precision hormone level testing',
          fullDesc: [
            'Measures 50+ hormones (thyroid, reproductive, cortisol)',
            'Ultra-sensitive immunoassay technology',
            'CLIA-certified lab accuracy in 15 minutes',
            'Ideal for fertility, endocrine, and metabolic testing'
          ],
          image: '/images/machines/hormonal_analyzer.png'
        },
        {
          name: 'Electrolyte Analyzer Machine', 
          shortDesc: 'Rapid electrolyte level testing',
          fullDesc: [
            'Measures sodium, potassium, chloride, and calcium',
            'Ion-selective electrode (ISE) technology',
            'Results in <2 minutes for critical care',
            'Compact design for lab or point-of-care use'
          ],
          image: '/images/machines/electrolyte_machine.png'
        }
      ]
    },
    {
      name: 'Gynecology and Obstetric Department Machines',
      machines: [
        {
          name: 'CTG Monitor Machine', 
          shortDesc: 'Continuous fetal heart & contraction monitoring',
          fullDesc: [
            'Tracks fetal heart rate & uterine contractions',
            'Computerized analysis of fetal wellbeing',
            'Print & digital recording for trend analysis',
            'Portable design for labor ward & clinics'
          ],
          image: '/images/machines/ctg.png'
        },
        {
          name: 'Digital Colposcope Machine', 
          shortDesc: 'Precision cervical visualization',
          fullDesc: [
            '4K ultra-HD imaging for detailed tissue analysis',
            'Adjustable LED illumination with green filter',
            'Magnification up to 30x for lesion assessment',
            'Integrated imaging software for documentation',
            'Early detection of precancerous abnormalities'
          ],
          image: '/images/machines/colposcope.png'
        }
      ]
    },
    {
      name: 'Operation Theatre Machines',
      machines: [
        {
          name: 'Anesthesia Machine', 
          shortDesc: 'Precision-controlled patient sedation',
          fullDesc: [
            'Integrated ventilator with multiple breathing modes',
            'Precise gas mixing (O₂, N₂O, volatile anesthetics)',
            'Real-time patient monitoring (ETCO₂, SpO₂, ECG)',
            'Compact design for ORs and outpatient settings',
            'Safety features: hypoxia prevention, pressure alarms'
          ],
          image: '/images/machines/anesthesia_machine.png'
        },
        {
          name: 'LED Surgical Light', 
          shortDesc: 'Shadow-free illumination for procedures',
          fullDesc: [
            '30,000+ lux adjustable brightness',
            'Color-corrected LED for true tissue visualization',
            'Sterilizable handles for aseptic control',
            'Dual-head design with 360° positioning',
            'Backup battery for uninterrupted surgery'
          ],
          image: '/images/machines/surgical_light.png'
        }
      ]
    }
  ];

  return (
    <div className="w-screen min-w-full overflow-x-hidden">
      {/* Gradient background container */}
      <div className={`min-h-screen w-full ${isDarkMode ? 
        'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' : 
        'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50'}`}>
        
        {/* Content overlay */}
        <div className={`${isDarkMode ? 'bg-gray-900/90' : 'bg-white/90'} min-h-screen w-full`}>
          <section id='machines' className="py-16 px-4 sm:px-6 relative">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Our <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Advanced Technology Machines</span>
                </h2>
                <div className={`w-20 h-1 mx-auto mb-4 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
                <p className={`max-w-2xl mx-auto text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Discover our state-of-the-art medical equipment that combines advanced technology with clinical excellence to deliver accurate diagnoses and effective treatments
                </p>
              </motion.div>

              <div className="space-y-16">
                {departments.map((department, deptIndex) => (
                  <div key={deptIndex} className="space-y-8">
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className={`text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                    >
                      <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {department.name}
                      </h3>
                    </motion.div>
                    
                    <div className={`grid grid-cols-1 ${department.machines.length >= 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2'} gap-6`}>
                      {department.machines.map((machine, index) => {
                        const cardId = `${deptIndex}-${index}`;
                        const isExpanded = expandedCards.includes(cardId);
                        
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                            className={`rounded-xl overflow-hidden flex flex-col transition-all duration-300 shadow-md
                                      ${isDarkMode 
                                        ? 'bg-gray-800 border-gray-700 hover:shadow-blue-900/30' 
                                        : 'bg-white border-gray-200 hover:shadow-lg'}
                                      border ${isExpanded ? 'h-auto' : 'h-[400px]'}`}
                          >
                            <div className="relative h-48 w-full">
                              <Image
                                src={machine.image}
                                alt={machine.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                            </div>
                            
                            <div className="p-5 flex flex-col flex-grow">
                              <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                                {machine.name}
                              </h3>
                              
                              <p className={`mb-3 text-sm font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                                {machine.shortDesc}
                              </p>
                              
                              {isExpanded && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <ul className={`space-y-2 mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {machine.fullDesc.map((point, i) => (
                                      <li key={i} className="flex items-start text-sm">
                                        <span className={`mr-2 mt-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>•</span>
                                        {point}
                                      </li>
                                    ))}
                                  </ul>
                                </motion.div>
                              )}

                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => toggleCardExpand(cardId)}
                                className={`mt-4 text-sm font-medium flex items-center justify-center w-full py-2 rounded-lg
                                          ${isDarkMode 
                                            ? 'bg-blue-900/30 text-blue-400 hover:bg-blue-900/50' 
                                            : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`}
                              >
                                {isExpanded ? 'Show Less' : 'See More'}
                                <svg
                                  className={`w-4 h-4 ml-2 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </motion.button>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Services Section - Moved to bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`mt-16 p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} flex flex-col md:flex-row items-center gap-8`}
              >
                <div className="w-full md:w-1/3">
                  <div className="relative aspect-square w-full">
                    <Image
                      src="/images/machines/ambulance.png"
                      alt="24/7 Ambulance Service"
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    24/7 Emergency Ambulance Service
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Our hospital is equipped with fully-staffed ambulances available round the clock for emergency response and patient transfers.
                  </p>
                  <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} flex items-start gap-4`}>
                    <div className={`p-3 rounded-full ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Automated 90KVA Generator</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Ensuring uninterrupted power supply for all critical medical equipment and facilities during outages.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Machines;