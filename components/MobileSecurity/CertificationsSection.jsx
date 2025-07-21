
import { motion } from 'framer-motion';

const CertificationsSection = () => {
  const certifications = [
    { name: 'ICO', logo: '/services/ICO-logo.png' },
    { name: 'SIA', logo: '/services/SIA-Logo.png' },
    { name: 'ISOQAR', logo: '/services/ISOQAR-Logo.png' },
    { name: 'NASDU', logo: '/services/NASDU-logo.png' },
    { name: 'SafeContractor', logo: '/services/Safe-Contractor.png' },
    { name: 'LS', logo: '/services/LS-Logo.png' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-32"
    >
      <h2 className="text-4xl font-semibold text-[#374B5B] mb-8 text-center relative">
        Our Certifications
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#FF0600] rounded"></span>
      </h2>
      <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto text-lg leading-relaxed">
        MAK Integrated Services holds SIA approved contractor status for the provision of Security Guarding and Key Holding Services. ISO Cert No.7971.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-center max-w-5xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#E5E7EB] h-24 w-32 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
          >
            <img
              src={cert.logo}
              alt={`${cert.name} certification logo`}
              className="w-full h-full object-contain p-2 bg-white"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CertificationsSection;