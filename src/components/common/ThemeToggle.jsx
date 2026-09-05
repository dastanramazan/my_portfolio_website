import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './themeToggle.css';

// Site always boots in light mode (no persistence) — this only flips a
// data-theme attribute for the current visit; a refresh resets to light.
const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setIsDark((prev) => !prev)}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.span
        className="theme-toggle__icon"
        key={isDark ? 'moon' : 'sun'}
        initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
      >
        {isDark ? '🌙' : '☀️'}
      </motion.span>
    </button>
  );
};

export default ThemeToggle;
