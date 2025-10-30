"use client";

import React, { useState } from "react";

interface Props {
  className?: string;
}

const B_WORDS = [
  "Build",
  "Brand",
  "Blog",
  "Browse",
  "Beta",
  "Byte",
  "Binary",
  "Bootstrap",
  "Backend",
  "Browser",
  "Benchmark",
  "Bundle",
  "Branch",
  "Boost",
  "Bold",
  "Brave",
];

export const InteractiveBBB: React.FC<Props> = ({ className = "" }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setCurrentWordIndex((prev) => (prev + 1) % B_WORDS.length);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const currentWord = B_WORDS[currentWordIndex];
  const restOfWord = currentWord.substring(1); // Get everything after the first 'B'

  return (
    <span
      className={`interactive-bbb ${isHovered ? 'interactive-bbb--hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      B<span className="highlight-text">B</span>B
      <span className="interactive-bbb__dynamic">
        {restOfWord}
      </span>
    </span>
  );
};
