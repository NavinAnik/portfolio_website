interface CornerMarksProps {
  /** Bracket arm length, e.g. "0.75rem". */
  size?: string;
  /** Distance from the frame edge (negative pulls the marks outside). */
  inset?: string;
  /** Stroke thickness. */
  weight?: string;
}

/**
 * Viewfinder crop-marks: four L-shaped corner brackets. The signature motif —
 * frames a subject "under analysis". Draws in `currentColor`, so set the color
 * on the wrapping element (e.g. `text-signal`). Decorative, hence aria-hidden.
 */
export default function CornerMarks({
  size = "0.7rem",
  inset = "-1px",
  weight = "1.5px",
}: CornerMarksProps) {
  const corners = [
    { top: inset, left: inset, borderTopWidth: weight, borderLeftWidth: weight },
    { top: inset, right: inset, borderTopWidth: weight, borderRightWidth: weight },
    { bottom: inset, left: inset, borderBottomWidth: weight, borderLeftWidth: weight },
    { bottom: inset, right: inset, borderBottomWidth: weight, borderRightWidth: weight },
  ];

  return (
    <span aria-hidden className="pointer-events-none absolute inset-0">
      {corners.map((style, i) => (
        <span
          key={i}
          className="absolute pointer-events-none"
          style={{
            width: size,
            height: size,
            borderStyle: "solid",
            borderColor: "currentColor",
            ...style,
          }}
        />
      ))}
    </span>
  );
}
