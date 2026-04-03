import { motion } from 'framer-motion';

function SectionHeading({ label, title, subtitle, center = true, light = false }) {
  return (
    <motion.div
      className={`mb-12 ${center ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      {label && (
        <span className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
          {label}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold ${light ? 'text-white' : 'text-primary-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeading;
