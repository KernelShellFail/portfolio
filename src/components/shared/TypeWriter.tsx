import { useEffect, useRef, useState } from "react";

interface TypeWriterProps {
  words: readonly string[];
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export function TypeWriter({
  words,
  speed = 80,
  deleteSpeed = 50,
  pauseDuration = 2000,
}: TypeWriterProps) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const currentWord = words[wordIndex];

    timeoutRef.current = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.slice(0, text.length + 1));
          if (text.length + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          setText(currentWord.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, isDeleting, wordIndex, words, speed, deleteSpeed, pauseDuration]);

  return (
    <span className="text-accent">
      {text}
      <span className="animate-pulse ml-0.5 text-accent">|</span>
    </span>
  );
}
