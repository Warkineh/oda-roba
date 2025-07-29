import Image from 'next/image';
import { motion } from "framer-motion";

const Doctors = ({ isDarkMode }) => {
  const doctors = [
    {
      name: "Dr. Tsegaye Dabi",
      specialty: "Paediatrics and Child health specialist",
      image: "/images/doctors/dr_tsagaye.png",
      bio: "Dedicated to children's health with focus on developmental pediatrics and preventive care."
    },
    {
      name: "Dr. Werkineh Alemu",
      specialty: "Internal medicine specialist",
      image: "/images/doctors/dr_werkineh.png", 
      bio: "Dedicated to comprehensive adult health management, from routine prevention to complex medical conditions, with focus on long-term wellbeing."
    },
    {
  "name": "Dr. Alebachew Girum",
  "specialty": "Cardiologist & Internal Medicine specialist",
  "image": "/images/doctors/dr_alebachew.png",
  "bio": "Heart specialist focused on preventive care and complex cardiovascular conditions."
},
    {
  "name": "Dr. Habtamu Beyene",
  "specialty": "Obstetrics and Women's Health Specialist",
  "image": "/images/doctors/dr_habtamu.png",
  "bio": "Expert in pregnancy care, high-risk deliveries, and minimally invasive gynecologic surgeries."
},
    {
  "name": "Dr. Mudasir Aman",
  "specialty": "General Surgery Specialist",
  "image": "/images/doctors/dr_mudasir.png",
  "bio": "Skilled general surgeon with expertise in minimally invasive and emergency procedures."
},
    {
      name: "Dr. Tegenu Negese",
      specialty: "Obstetrics and Women's Health Specialist",
      image: "/images/doctors/dr_taganu.png",
      bio: "Expert in pregnancy care, high-risk deliveries, and minimally invasive gynecologic surgeries."
    },
    {
  "name": "Dr. Tezera Tadesse",
  "specialty": "Orthopedic Trauma & Emergency Medicine Specialist",
  "image": "/images/doctors/dr_tezera.png",
  "bio": "Expert in emergency fracture care, trauma management, and acute musculoskeletal injuries."
},
    {
      name: "Dr. Tufa Bobbe",
      specialty: "Obstetrics and Women's Health Specialist",
      image: "/images/doctors/dr_tufa.png",
      bio: "Expert in pregnancy care, high-risk deliveries, and minimally invasive gynecologic surgeries."
    },
    {
  "name": "Dr. Mohammed Hamid",
  "specialty": "Radiologist",
  "image": "/images/doctors/dr_mohammed_hamid.png",
  "bio": "Specializes in diagnostic imaging, including MRI, CT, and ultrasound, with expertise in interventional radiology procedures."
},
    {
      name: "Dr. Tesfaye Ilala",
      specialty: "Paediatrics and Child health specialist",
      image: "/images/doctors/dr_tesfaye.png",
      bio: "Dedicated to children's health with focus on developmental pediatrics and preventive care."
    },
    {
  "name": "Dr. Gosaye Dabale",
  "specialty": "General Surgeon",
  "image": "/images/doctors/dr_gosaye.png",
  "bio": "Specializes in minimally invasive and laparoscopic surgeries for abdominal and digestive conditions, including hernia repair, gallbladder surgery, and advanced endoscopy."
},
     {
  "name": "Dr. Habtamu Shewakena",
  "specialty": "Oral and Maxillofacial Surgeon",
  "image": "/images/doctors/dr_habtamu_shewakena.png",
  "bio": "Specializes in complex tooth extractions, jaw surgeries, and facial reconstruction with advanced surgical techniques."
},
    {
  "name": "Dr. Eliyas Ibrahim",
  "specialty": "General Surgery Resident",
  "image": "/images/doctors/dr_eliyas.png",
  "bio": "General surgery resident training in laparoscopic and emergency procedures."
},
    {
      name: "Dr. Sisay Bekele",
      specialty: "Radiologist",
      image: "/images/doctors/dr_sisay.png",
      bio: "Specializes in diagnostic imaging, including MRI, CT, and ultrasound, with expertise in interventional radiology procedures."
    },
    {
      name: "Dr. Wayesa Dirribsa",
      specialty: "Obstetrics and Women's Health Specialist",
      image: "/images/doctors/dr_wayesa.png",
      bio: "Expert in pregnancy care, high-risk deliveries, and minimally invasive gynecologic surgeries."
    } 
  ];

  return (
    <div className="w-screen min-w-full overflow-x-hidden">
    <div className="w-screen min-w-full overflow-x-hidden">
    <section id="doctors" className={`py-16 px-4 sm:px-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Our <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Medical Specialists</span>
          </h2>
          <div className={`w-20 h-1 mx-auto mb-4 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          <p className={`max-w-2xl mx-auto text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Meet our dedicated healthcare professionals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300
                        ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="relative h-64 w-full bg-gray-200">
                <Image
                  src={doctor.image}
                  alt={`Portrait of ${doctor.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className={`text-xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    {doctor.name}
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {doctor.specialty}
                  </p>
                </div>

                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {doctor.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </div>
    </div>
  );
};

export default Doctors;