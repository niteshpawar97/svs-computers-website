import { motion } from 'framer-motion';

function Card({ children, className = '', hover = true, glass = false, padding = 'md' }) {
  const paddings = { sm: 'p-4', md: 'p-6', lg: 'p-8' };
  const baseClass = glass
    ? 'bg-white/60 backdrop-blur-xl border border-white/20 shadow-glass'
    : 'bg-white shadow-card';

  return (
    <motion.div
      className={`rounded-2xl ${baseClass} ${paddings[padding]} ${hover ? 'transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1' : ''} ${className}`}
      whileHover={hover ? { y: -4 } : undefined}
    >
      {children}
    </motion.div>
  );
}

export default Card;
