import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-var",
});

export const metadata = {
  metadataBase: new URL("https://cyber-dragon-18.github.io"),
  title: "Rodrigo · Computer science & bioinformatics",
  description:
    "Computer science graduate studying bioinformatics at the University of Porto. Projects, tech stack, education and contact.",
  openGraph: {
    title: "Rodrigo · Computer science & bioinformatics",
    description: "Projects, tech stack and contact. Based in Porto, Portugal.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mono.variable}>
      <body className="font-body text-[0.95rem] leading-relaxed antialiased">{children}</body>
    </html>
  );
}