"use client";

import { useEffect, useRef } from "react";

import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const ZoomReplace = ({
  zoomComponent,
  revealComponent,
}: {
  zoomComponent: React.ReactNode;
  revealComponent: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const zoomRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1,
          pin: true,
        },
      });

      tl.to(zoomRef.current, {
        scale: 60,
        opacity: 0,
        transformOrigin: "47% 36%",
        ease: "power2.inOut",
      }).fromTo(
        revealRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
        "<"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full text-white overflow-hidden"
    >
      {/* ZOOM SECTION */}
      <div
        ref={zoomRef}
        className="h-screen flex items-center justify-center text-6xl font-bold"
      >
        {zoomComponent}
      </div>

      {/* REVEAL SECTION */}
      <div
        ref={revealRef}
        className="w-full py-32 px-6 flex flex-col items-center justify-center opacity-0"
      >
        {revealComponent}
      </div>
    </div>
  );
};
