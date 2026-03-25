export const SITE_URL = "https://zynextechnologies.com.au";

export function buildPageMetadata({ title, description, path }) {
  const normalizedPath = path === "/" ? "/" : path.startsWith("/") ? path : `/${path}`;
  const canonical = `${SITE_URL}${normalizedPath}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
  };
}
