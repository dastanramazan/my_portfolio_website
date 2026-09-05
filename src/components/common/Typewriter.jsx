import React, { useEffect, useState } from 'react';

// Cycles through `words`, typing each one out then deleting it before moving to the next.
const Typewriter = ({
  words,
  className,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseTime = 1400,
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    if (!deleting && text === currentWord) {
      const pause = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(pause);
    }

    if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText((prev) =>
        deleting ? currentWord.slice(0, prev.length - 1) : currentWord.slice(0, prev.length + 1)
      );
    }, deleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className}>
      {text}
      <span aria-hidden="true" className="typewriter__cursor">|</span>
    </span>
  );
};

export default Typewriter;
