"use client";

import { useEffect, useState } from "react";

interface CommitCardProps {
  commits: number;
  title: string;
  description: string;
  variant?: "black" | "white";
  className?: string;
}

export default function CommitCard({
  commits,
  title,
  description,
  variant = "white",
  className = "",
}: CommitCardProps) {
  const [animatedCount, setAnimatedCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(`commit-card-${commits}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [commits]);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const increment = commits / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current = Math.min(commits, Math.floor(increment * step));
        setAnimatedCount(current);

        if (current >= commits) {
          clearInterval(timer);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, commits]);

  const getTextColors = () => {
    return variant === "white"
      ? {
          numberColor: "text-white",
          titleColor: "text-white",
          descriptionColor: "text-white/80",
        }
      : {
          numberColor: "text-black",
          titleColor: "text-black",
          descriptionColor: "text-black/80",
        };
  };

  const colors = getTextColors();

  return (
    <div className={`relative w-full max-w-72 ${className}`}>
      <div id={`commit-card-${commits}`} className="text-center p-6">
        {/* Amount */}
        <div
          className={`text-5xl font-black ${colors.numberColor} mb-3 leading-none`}
        >
          {animatedCount.toLocaleString()}
        </div>

        {/* Title */}
        <h3
          className={`text-lg font-bold ${colors.titleColor} mb-2 uppercase tracking-wider`}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={`${colors.descriptionColor} text-sm leading-relaxed px-2 font-normal`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
