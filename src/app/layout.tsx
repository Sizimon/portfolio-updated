import CustomThemeProvider from "themes/ThemeProvider";
import type { Metadata } from "next";
import { Geist, Anton, Work_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-work-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Szymon Samus | Portfolio",
  description: "Developer Portfolio",
  keywords: ["Software Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Szymon Samus" }],
  creator: "Szymon Samus",
  openGraph: {
    title: "Szymon Samus | Portfolio",
    description: "Junior Software Developer Portfolio",
    url: "https://szymonsamus.dev/",
    siteName: "Szymon Samus Portfolio",
    locale: "en_EU",
  },
  other: {
    'script:ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Szymon Samus",
      "url": "https://szymonsamus.dev/",
      "sameAs": [
        "https://github.com/Sizimon",
        "https://www.linkedin.com/in/szymon-samus-1447201a0/"
      ],
      "jobTitle": "Junior Software Developer",
      "description": "Junior Software Developer with a passion for bringing ideas to life, constantly learning and contributing to innovative projects.",
      "addressRegion": "Europe",
    })
  },
  alternates: {
    canonical: "https://szymonsamus.dev/",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${anton.variable} ${workSans.variable} antialiased`}
      >
        <CustomThemeProvider>
          {children}
        </CustomThemeProvider>
      </body>
    </html>
  );
}
