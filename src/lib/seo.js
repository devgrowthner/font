export const SITE_URL = "https://zynextechnologies.com.au";

export function buildPageMetadata({ title, description, path, canonicalPath }) {
  const normalizedPath = path === "/" ? "/" : path.startsWith("/") ? path : `/${path}`;
  const canonicalSuffix =
    canonicalPath != null
      ? canonicalPath === "/"
        ? "/"
        : canonicalPath.startsWith("/")
          ? canonicalPath
          : `/${canonicalPath}`
      : normalizedPath;
  const canonical = `${SITE_URL}${canonicalSuffix}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
  };
}
