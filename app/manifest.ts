import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jose Carlos Arce Camet Portfolio",
    short_name: "JC Portfolio",
    description:
      "Full-stack products, AI systems, audio tools, and distinctive interfaces.",
    start_url: "/",
    display: "standalone",
    background_color: "#090b0f",
    theme_color: "#090b0f",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
