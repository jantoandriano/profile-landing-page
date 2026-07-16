import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Janto Motulo — Senior Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f1f0ea",
          color: "#0f0f0f",
          padding: "72px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            opacity: 0.6,
          }}
        >
          janto-motulo.dev
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 800, lineHeight: 1.05 }}>
            Janto Motulo
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 40,
              fontWeight: 500,
              marginTop: 24,
              opacity: 0.75,
            }}
          >
            Senior Frontend Developer
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            opacity: 0.6,
          }}
        >
          React · Next.js · 6+ years building production-grade UIs
        </div>
      </div>
    ),
    { ...size }
  );
}
