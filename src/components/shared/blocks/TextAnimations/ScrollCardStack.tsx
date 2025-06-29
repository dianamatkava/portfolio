"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollCardStackProps {
  cards: React.ReactNode[];
}

const ScrollCardStack: React.FC<ScrollCardStackProps> = ({ cards }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [scrollLocked, setScrollLocked] = useState(false);
  const [hasBeenActivated, setHasBeenActivated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const isExiting = useRef(false);
  const exitCooldown = useRef(false);
  const lastScrollDirection = useRef<"up" | "down">("down");

  // Track scroll direction
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        lastScrollDirection.current = "down";
      } else if (currentScrollY < lastScrollY) {
        lastScrollDirection.current = "up";
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection observer with consistent centering
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Don't activate if we're in exit cooldown
        if (exitCooldown.current) return;

        const rect = entry.boundingClientRect;
        const isIntersecting =
          entry.isIntersecting && entry.intersectionRatio > 0.5;

        if (isIntersecting && !scrollLocked && !isExiting.current) {
          if (!hasBeenActivated) {
            // Set initial card based on scroll direction
            if (lastScrollDirection.current === "up") {
              setCurrentCard(cards.length - 1);
            } else {
              setCurrentCard(0);
            }
            setHasBeenActivated(true);
          }

          // Always center the container in viewport
          const containerTop =
            container.getBoundingClientRect().top + window.scrollY;
          const viewportCenter = window.innerHeight / 2;
          const containerHeight = container.offsetHeight;
          const targetScrollY =
            containerTop - viewportCenter + containerHeight / 2;

          window.scrollTo({
            top: targetScrollY,
            behavior: "smooth",
          });

          setTimeout(() => {
            setScrollLocked(true);
            document.body.style.overflow = "hidden";
          }, 400);
        } else if (!entry.isIntersecting && scrollLocked) {
          setScrollLocked(false);
          document.body.style.overflow = "";
          isExiting.current = false;
          // Reset activation state when completely out of view
          if (Math.abs(rect.top) > window.innerHeight) {
            setHasBeenActivated(false);
          }
        }
      },
      {
        threshold: [0.5, 0.7, 1],
        rootMargin: "0px",
      }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [scrollLocked, hasBeenActivated, cards.length]);

  // Wheel handler with proper exit
  useEffect(() => {
    if (!scrollLocked) return;

    const handleWheel = (e: WheelEvent) => {
      if (isAnimating.current || isExiting.current) {
        e.preventDefault();
        return;
      }

      const direction = e.deltaY > 0 ? 1 : -1;
      const newIndex = currentCard + direction;

      if (newIndex >= 0 && newIndex < cards.length) {
        // Normal card navigation
        e.preventDefault();
        isAnimating.current = true;
        setCurrentCard(newIndex);
        setTimeout(() => {
          isAnimating.current = false;
        }, 800);
      } else {
        // AT BOUNDARIES - PROPER EXIT
        isExiting.current = true;
        exitCooldown.current = true;
        setScrollLocked(false);
        setHasBeenActivated(false);
        document.body.style.overflow = "";

        // Long cooldown to prevent re-triggering
        setTimeout(() => {
          isExiting.current = false;
        }, 500);

        setTimeout(() => {
          exitCooldown.current = false;
        }, 1500); // 1.5 second cooldown

        // DON'T prevent default - let natural scroll happen
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [scrollLocked, currentCard, cards.length]);

  // Cleanup
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
      isExiting.current = false;
      exitCooldown.current = false;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center"
    >
      {/* Cards */}
      <div className="relative w-full max-w-6xl h-[600px]">
        {cards.map((card, index) => {
          const offset = index - currentCard;
          const isActive = offset === 0;
          const isPast = offset < 0;

          let transform, opacity, zIndex;

          if (isActive) {
            transform = "translateY(0) scale(1)";
            opacity = 1;
            zIndex = 10;
          } else if (isPast) {
            transform = `translateY(${Math.abs(offset) * 60}px) scale(${
              1 - Math.abs(offset) * 0.1
            })`;
            opacity = Math.max(0, 1 - Math.abs(offset) * 0.4);
            zIndex = 10 - Math.abs(offset);
          } else {
            transform = `translateY(-${offset * 20}px) scale(${
              1 - offset * 0.05
            })`;
            opacity = 1 - offset * 0.2;
            zIndex = 10 - offset;
          }

          return (
            <div
              key={index}
              className="absolute inset-0 transition-all duration-800 ease-out"
              style={{ transform, opacity, zIndex }}
            >
              {card}
            </div>
          );
        })}
      </div>

      {/* Dots - Right side */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating.current) {
                isAnimating.current = true;
                setCurrentCard(index);
                setTimeout(() => {
                  isAnimating.current = false;
                }, 800);
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentCard
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollCardStack;
