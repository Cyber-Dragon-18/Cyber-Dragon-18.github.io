// Becomes /robots.txt. "force-static" makes it work with the static export.
export const dynamic = "force-static";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://cyber-dragon-18.github.io/sitemap.xml",
  };
}
