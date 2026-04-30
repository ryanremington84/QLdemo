import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Quanton Labs - AI Operating System for Growth-Stage Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          backgroundColor: "#041227",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://quantonlabs.com/images/assets/Quanton Labs logo white version with tagline.png"
          style={{ width: "600px" }}
        />
      </div>
    ),
    { ...size }
  );
}