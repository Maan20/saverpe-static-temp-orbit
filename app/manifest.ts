import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Orbit by SaverPe — Corporate Gifting",
    short_name: "Orbit",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fbf9ff",
    theme_color: "#6a2aa6",
    icons: [
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
