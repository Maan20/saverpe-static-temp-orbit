import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/** Shared Open Graph card: purple Orbit canvas with eyebrow, title and footer. */
export function ogCard({ eyebrow, title, footer }: { eyebrow: string; title: string; footer: string }) {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "linear-gradient(135deg, #3A1D6E 0%, #6A2AA6 55%, #E0078D 100%)", fontFamily: "sans-serif", color: "#FFFFFF" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 64, height: 64, borderRadius: 18, background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", color: "#6A2AA6", fontSize: 38, fontWeight: 800 }}>O</div>
          <div style={{ fontSize: 40, fontWeight: 800 }}>Orbit by SaverPe</div>
          <div style={{ marginLeft: "auto", display: "flex", padding: "10px 22px", borderRadius: 999, background: "rgba(255,255,255,0.18)", color: "#fff", fontSize: 24, fontWeight: 700 }}>{eyebrow}</div>
        </div>
        <div style={{ display: "flex", fontSize: title.length > 60 ? 60 : 72, fontWeight: 800, lineHeight: 1.08, letterSpacing: -2, maxWidth: 1000 }}>{title}</div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, fontWeight: 600 }}>
          <span>{footer}</span>
          <span>orbit.saverpe.com</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
