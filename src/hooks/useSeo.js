import { useEffect } from "react";

// Client-only fallback: keep title/description updates.
// Canonical must come from App Router metadata (server-side) for SSR SEO.
export function useSeo({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let meta = document.querySelector("meta[name='description']");
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }

  }, [title, description]);
}
