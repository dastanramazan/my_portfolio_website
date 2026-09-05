import React, { useEffect, useRef, useState } from 'react';
import './heroTerminal.css';

// Tokens for the typed snippet, each with an optional syntax-highlight class.
const CODE = [
  { text: 'const ', cls: 'kw' },
  { text: 'dastan', cls: 'var' },
  { text: ' = {\n  role: ' },
  { text: '"Software Engineer"', cls: 'str' },
  { text: ',\n  stack: [' },
  { text: '"React"', cls: 'str' },
  { text: ', ' },
  { text: '"Laravel"', cls: 'str' },
  { text: ', ' },
  { text: '"WordPress"', cls: 'str' },
  { text: '],\n  base: ' },
  { text: '"The Woodlands, TX"', cls: 'str' },
  { text: ',\n};\n\n' },
  { text: 'export default ', cls: 'kw' },
  { text: 'Hero', cls: 'fn' },
  { text: '(dastan);' },
];

// Flatten into one character-per-entry array so we can slice by character
// count without ever cutting a raw HTML tag in half.
const CHARS = CODE.flatMap(({ text, cls }) => [...text].map((ch) => ({ ch, cls })));

// Collapse consecutive same-style characters back into spans for rendering.
const groupChars = (slice) => {
  const groups = [];
  slice.forEach(({ ch, cls }) => {
    const last = groups[groups.length - 1];
    if (last && last.cls === cls) last.text += ch;
    else groups.push({ cls, text: ch });
  });
  return groups;
};

const HeroTerminal = () => {
  const [count, setCount] = useState(0);
  const dirRef = useRef(1);

  useEffect(() => {
    let pause = 0;
    const id = setInterval(() => {
      if (pause > 0) {
        pause -= 1;
        return;
      }
      setCount((prev) => {
        let next = prev + dirRef.current * 2;
        if (next >= CHARS.length) {
          next = CHARS.length;
          dirRef.current = -1;
          pause = 45;
        } else if (next <= 0) {
          next = 0;
          dirRef.current = 1;
          pause = 16;
        }
        return next;
      });
    }, 32);
    return () => clearInterval(id);
  }, []);

  const groups = groupChars(CHARS.slice(0, count));

  return (
    <div className="hero-terminal">
      <div className="hero-terminal__bar">
        <span className="hero-terminal__dot hero-terminal__dot--red" />
        <span className="hero-terminal__dot hero-terminal__dot--yellow" />
        <span className="hero-terminal__dot hero-terminal__dot--green" />
        <span className="hero-terminal__title">hero.js</span>
      </div>
      <pre className="hero-terminal__body">
        {groups.map((g, i) => (
          <span key={i} className={g.cls ? `hero-terminal__${g.cls}` : undefined}>{g.text}</span>
        ))}
        <span className="hero-terminal__caret" />
      </pre>
    </div>
  );
};

export default HeroTerminal;
