import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0d3b66",
          borderRadius: "36px",
          color: "#ffffff",
          fontSize: "90px",
          fontWeight: 700,
          fontFamily: "sans-serif",
          letterSpacing: "-2px",
        }}
      >
        NA
      </div>
    ),
    { ...size }
  );
}
