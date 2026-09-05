import React from 'react';
import { motion } from 'framer-motion';

// Fades and slides content up into view the first time it enters the viewport.
const Reveal = ({
  children,
  as = 'div',
  className,
  delay = 0,
  y = 24,
  duration = 0.6,
  once = true,
  amount = 0.2,
  ...rest
}) => {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
