// Becomes /sitemap.xml. Add more entries here if you ever add more pages.
export const dynamic = "force-static";

export default function sitemap() {
  return [
    {
      url: "https://cyber-dragon-18.github.io",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
