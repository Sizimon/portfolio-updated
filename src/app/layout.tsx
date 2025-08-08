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
  weight: ["100","200","300", "400", "500", "600", "700"],
  variable: "--font-work-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Szymon Samus - Portfolio",
  description: "Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
