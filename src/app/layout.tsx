import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Krizia Passariello Wellness | Functional Medicine & Longevity",
  description: "Unlock your optimal health through personalized nutrition, biohacking, and cutting-edge wellness protocols. DNA testing, peptide therapy, and nutrition consultations.",
  keywords: "functional medicine, longevity, biohacking, nutrition, DNA testing, peptide therapy, wellness",
  openGraph: {
    title: "Krizia Passariello Wellness",
    description: "Functional Medicine & Longevity Expert",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
