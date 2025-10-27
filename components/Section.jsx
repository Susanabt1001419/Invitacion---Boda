// components/Section.jsx
import { motion } from 'framer-motion';

export default function Section({ children, className = "", id }) {
  return (
    <section id={id} className={`py-10 text-center ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
