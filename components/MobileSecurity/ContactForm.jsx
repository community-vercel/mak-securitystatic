import { motion } from 'framer-motion';

const inputVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const SimpleContactForm = ({ formData = {}, handleInputChange = () => {}, handleSubmit = () => {}, formRef }) => {
  return (
    <motion.div
      ref={formRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-lg bg-gradient-to-b from-white to-gray-50 shadow-2xl rounded-xl p-8 mx-auto"
      role="form"
      aria-labelledby="contact-form-title"
    >
      <h2 id="contact-form-title" className="text-3xl font-bold text-[#374B5B] mb-6 text-center relative">
        Get in Touch
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FF0600] rounded"></span>
      </h2>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
        {/* Name and Phone - Horizontal Pair */}
        <motion.div variants={inputVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[#374B5B] mb-2" htmlFor="name">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name || ''}
              onChange={handleInputChange}
              className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF0600] focus:border-[#FF0600] transition-all duration-300 ease-in-out hover:border-[#FF0600] focus:outline-none bg-gray-50"
              placeholder="Enter your name"
              required
              aria-required="true"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#374B5B] mb-2" htmlFor="phone">
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone || ''}
              onChange={handleInputChange}
              className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF0600] focus:border-[#FF0600] transition-all duration-300 ease-in-out hover:border-[#FF0600] focus:outline-none bg-gray-50"
              placeholder="Enter your phone"
              required
              aria-required="true"
            />
          </div>
        </motion.div>

        {/* Email and Subject - Horizontal Pair */}
        <motion.div variants={inputVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[#374B5B] mb-2" htmlFor="email">
              Your Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email || ''}
              onChange={handleInputChange}
              className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF0600] focus:border-[#FF0600] transition-all duration-300 ease-in-out hover:border-[#FF0600] focus:outline-none bg-gray-50"
              placeholder="Enter your email"
              required
              aria-required="true"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#374B5B] mb-2" htmlFor="subject">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject || ''}
              onChange={handleInputChange}
              className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF0600] focus:border-[#FF0600] transition-all duration-300 ease-in-out hover:border-[#FF0600] focus:outline-none bg-gray-50"
              placeholder="Subject"
              required
              aria-required="true"
            />
          </div>
        </motion.div>

        {/* Message field (separate) */}
        <motion.div variants={inputVariants}>
          <label className="block text-sm font-medium text-[#374B5B] mb-2" htmlFor="message">
            How Can We Help?
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message || ''}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF0600] focus:border-[#FF0600] transition-all duration-300 ease-in-out hover:border-[#FF0600] focus:outline-none bg-gray-50"
            placeholder="Describe your security needs"
            rows="4"
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            type="submit"
            className="w-full bg-[#FF0600] text-white py-4 rounded-xl hover:bg-[#CC0500] transition-colors duration-300 font-semibold shadow-md hover:shadow-glow"
          >
            Submit
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default SimpleContactForm;