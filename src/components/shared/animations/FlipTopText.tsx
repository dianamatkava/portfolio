"use client";

import React, { useEffect, useRef, useState } from "react";

export const FlipTopText = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [textHeight, setTextHeight] = useState<number | null>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const span = containerRef.current.querySelector(".measure");
      if (span) {
        const height = span.getBoundingClientRect().height;
        setTextHeight(height);
      }
    }
  }, []);

  return (
    <span
      ref={containerRef}
      className="inline-block overflow-hidden relative group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        height: textHeight ? `${textHeight}px` : "auto",
      }}
    >
      <span
        className="block transition-transform duration-500"
        style={{
          transform:
            hovered && textHeight
              ? `translateY(-${textHeight}px)`
              : "translateY(0)",
        }}
      >
        <span className="block measure">{children}</span>
        <span className="block">{children}</span>
      </span>
    </span>
  );
};
