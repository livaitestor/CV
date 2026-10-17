/**
 * Prefixes a public-asset path (e.g. "/images/x.svg") with the Vite base URL
 * so it resolves correctly when the site is served from a sub-path
 * (e.g. https://user.github.io/CV/).
 */
export function asset(path: string): string {
  if (!path) return path;
  const base = import.meta.env.BASE_URL || "/";
  return path.startsWith("/") ? base + path.slice(1) : base + path;
}
