"use client";

import { AnimatedLink } from "./AnimatedLink";
import { FlipTopText } from "./animations/FlipTopText";
import { ReactNode } from "react";

type ButtonSize = "fit" | "full";
type ButtonColor = "white" | "black";
type ButtonType = "link" | "submit" | "button";

interface BaseButtonProps {
  title: string;
  size?: ButtonSize;
  color?: ButtonColor;
  className?: string;
  children?: ReactNode;
}

interface LinkButtonProps extends BaseButtonProps {
  type?: "link";
  href?: string;
  onClick?: never;
}

interface ActionButtonProps extends BaseButtonProps {
  type: "submit" | "button";
  href?: never;
  onClick?: () => void;
}

type ButtonProps = LinkButtonProps | ActionButtonProps;

const getColorStyles = (color: ButtonColor) => {
  const styles = {
    white: {
      bg: "bg-white",
      border: "border-black",
      text: "text-black",
    },
    black: {
      bg: "bg-black",
      border: "border-white",
      text: "text-white",
    },
  };

  return styles[color];
};

const getSizeStyles = (size: ButtonSize) => {
  return size === "full" ? "w-full" : "w-fit";
};

export default function Button({
  title,
  size = "fit",
  color = "black",
  className = "",
  type = "link",
  href,
  onClick,
  children,
}: ButtonProps) {
  const colorStyles = getColorStyles(color);
  const sizeStyles = getSizeStyles(size);

  const contentClasses = `
    ${colorStyles.text} 
    text-sm font-medium text-center whitespace-nowrap uppercase
    gap-2 inline-flex items-center justify-between
  `.trim();

  const buttonClasses = `
    ${colorStyles.bg} ${colorStyles.border}
    border-2 rounded-full px-4 py-2 h-10
    inline-flex items-center gap-2.5
    hover:opacity-80 transition-opacity
    cursor-pointer ${className}
  `.trim();

  return (
    <div className={`relative ${sizeStyles}`}>
      <div className={buttonClasses}>
        {type === "link" ? (
          <AnimatedLink href={href ?? "/contact"} className={contentClasses}>
            {title}
            {children}
          </AnimatedLink>
        ) : (
          <button type={type} onClick={onClick} className={contentClasses}>
            <FlipTopText>
              <span className="inline-flex items-center justify-between">
                {title}
                {children}
              </span>
            </FlipTopText>
          </button>
        )}
      </div>
    </div>
  );
}
