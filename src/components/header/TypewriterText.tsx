"use client";

import { Typewriter } from "react-simple-typewriter";

export default function TypewriterText({
  title,
  words,
  titleClassName,
  wordsClassName,
}: {
  title: string;
  words: string[];
  titleClassName?: string;
  wordsClassName?: string;
}) {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-2">
      <h1 className={titleClassName}>
        {title}
        <div className={wordsClassName}>
          <Typewriter
            words={words}
            loop={20}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={80}
            delaySpeed={1800}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </div>
      </h1>
    </div>
  );
}
