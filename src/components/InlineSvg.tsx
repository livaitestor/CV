import { useEffect, useState } from "react";
import { asset } from "../utils/asset";

/**
 * Renders an inline <svg> fetched from a file path.
 * This preserves the original CSS selectors (#services svg { fill: ... })
 * which rely on real inline SVG elements to inherit theme colors.
 */
export default function InlineSvg({
  src,
  className,
  width,
  height,
}: {
  src: string;
  className?: string;
  width?: number;
  height?: number;
}) {
  const [svgContent, setSvgContent] = useState<string>("");

  useEffect(() => {
    fetch(asset(src))
      .then((r) => r.text())
      .then((text) => {
        // Inject className into the svg tag if provided
        if (className) {
          text = text.replace("<svg ", `<svg class="${className}" `);
        }
        setSvgContent(text);
      })
      .catch(() => setSvgContent(""));
  }, [src, className]);

  if (!svgContent) {
    // Placeholder keeps layout stable while the svg is loading
    return (
      <span
        className={className}
        style={{ display: "inline-block", width, height }}
      />
    );
  }

  return (
    <span
      className={className}
      style={width || height ? { display: "inline-block", width, height } : undefined}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}
