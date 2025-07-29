import Image from 'next/image';
import { motion } from "framer-motion";

const Teams = ({ isDarkMode }) => {
  const doctors = [
    {
      name: "Internists Team",
      image: "/images/teams/internists.png",
      doctors: "Dr. Werkineh Alemu, Dr. Alebachew Mekonnen, Dr. Girma Degefe"
    },
    {
      name: "General Surgeons Team",
      image: "/images/teams/surgeons.png",
      doctors: "Dr. Eliyas Ibrahim, Dr. Mudassir Aman, Dr. Gosaye Dabale, Dr. Ashennafi Nigussie, Dr. Mohammed Hussein, Dr. Hamza Sultan"
    },
    {
      name: "OB-GYN Team",
      image: "/images/teams/obgyn.png",
      doctors: "Dr. Tegenu Negese, Dr. Tufa Bobbe, Dr. Habtamu Beyene, Dr. Wayesa Dirribsa"
    },
    {
      name: "Orthopedics Team",
      image: "/images/teams/orthopedic.png",
      doctors: "Dr. Tezera Tadesse, Dr. Bekele Chimdessa"
    },
    {
      name: "Maxillofacial Team",
      image: "/images/teams/maxillofacial.png",
      doctors: "Dr. Habtamu Shewakena"
    },
    {
      name: "Pediatrics Team",
      image: "/images/teams/pediatric.png",
      doctors: "Dr. Tsegaye Dabi, Dr. Abashu Chemeda, Dr. Tesfaye Ilala"
    }
  ];

  return (
    <div className="w-screen min-w-full overflow-x-hidden">
      <section 
        id="teams" 
        className={`py-12 px-4 sm:px-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Our <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Medical Teams</span>
            </h2>
            <div className={`w-20 h-1 mx-auto mb-4 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
            <p className={`max-w-2xl mx-auto text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Meet our team of dedicated healthcare professionals
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((team, index) => (
              <motion.div
                key={team.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ 
                  y: -4,
                  scale: 1.02,
                  boxShadow: isDarkMode 
                    ? '0 10px 25px -5px rgba(0, 0, 0, 0.25)' 
                    : '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                }}
                className={`rounded-md overflow-hidden shadow-md p-4 transition-all duration-300 ${
                  isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                }`}
              >
                <div className="relative h-56 w-full mb-3 rounded-sm overflow-hidden">
                  <Image
                    src={team.image}
                    alt={team.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-sm"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-3">{team.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">{team.doctors}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teams;