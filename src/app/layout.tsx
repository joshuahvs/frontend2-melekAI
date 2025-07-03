import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

// Configure the Raleway font
const raleway = Raleway({
  subsets: ["latin"],
  // You can specify the weights you want to use
  weight: ["400", "700"], 
});

export const metadata: Metadata = {
  title: "MelekAI",
  description: "Your end-to-end data engine solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply the font's className to the body */}
      <body className={`${raleway.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}