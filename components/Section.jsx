import { motion } from 'framer-motion';
export default function Section({ children }) {
  return (
    <section className='py-16 text-center'>
      <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:1}}>
        {children}
      </motion.div>
    </section>
  );
}