"use client";

import React, { useState } from "react";

export const FlipTopText = ({ children }: { children: React.ReactNode }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="inline-block overflow-hidden relative h-[1.2em]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="block transition-transform duration-500 ease-out"
        style={{
          transform: hovered ? "translateY(-50%)" : "translateY(0)",
        }}
      >
        <span className="block h-[1.2em] flex items-center">{children}</span>
        <span className="block h-[1.2em] flex items-center">{children}</span>
      </span>
    </span>
  );
};
