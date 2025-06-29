import { FlipTopText } from "./animations/FlipTopText";
import Link from "next/link";

export const AnimatedLink = ({
  children,
  href,
  className,
  target,
  rel,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  target?: string;
  rel?: string;
}) => {
  return (
    <FlipTopText>
      <Link href={href} className={className} target={target} rel={rel}>
        {children}
      </Link>
    </FlipTopText>
  );
};
