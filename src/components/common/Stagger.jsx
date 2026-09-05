import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// Wrap a grid/list; each direct StaggerItem fades+slides in one after another
// the first time the group scrolls into view.
export const StaggerGroup = ({ children, className, amount = 0.15 }) => (
  <motion.div
    className={className}
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className, ...rest }) => (
  <motion.div className={className} variants={itemVariants} {...rest}>
    {children}
  </motion.div>
);
