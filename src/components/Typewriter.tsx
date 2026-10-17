import { useEffect, useState } from "react";

interface TypewriterProps {
  texts: string[];
  dir?: "rtl" | "ltr";
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

/**
 * Typewriter with rotating texts.
 * In RTL (Persian) the text grows right-to-left so the cursor sits at the
 * left edge; in LTR it sits at the right edge.
 */
export default function Typewriter({
  texts,
  dir = "rtl",
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 2200,
}: TypewriterProps) {
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">(
    "typing"
  );

  // reset when texts change (language switch)
  useEffect(() => {
    setDisplay("");
    setIndex(0);
    setPhase("typing");
  }, [texts]);

  useEffect(() => {
    const current = texts[index];
    let timeout: number;

    if (phase === "typing") {
      if (display.length < current.length) {
        timeout = window.setTimeout(
          () => setDisplay(current.slice(0, display.length + 1)),
          typingSpeed + Math.random() * 40 // slight human-like variation
        );
      } else {
        setPhase("pausing");
      }
    } else if (phase === "pausing") {
      timeout = window.setTimeout(() => setPhase("deleting"), pauseTime);
    } else {
      if (display.length > 0) {
        timeout = window.setTimeout(
          () => setDisplay(display.slice(0, -1)),
          deletingSpeed
        );
      } else {
        setPhase("typing");
        setIndex((i) => (i + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [display, phase, index, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="typewriter" dir={dir}>
      <span className="typewriter-text">{display}</span>
      <span
        className={`typewriter-cursor ${
          phase === "pausing" ? "cursor-idle" : ""
        }`}
      />
    </span>
  );
}
