import Navbar from "@/components/Navbar";
import "./css/globals.css";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import Footer from "@/components/Footer";
import SessionProviders from "@/providers/SessionProvider";
import Header from "@/components/Header";
import EcommerceProviders from "@/providers/EcommerceProviders";

const inter = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ken-ecommerce.vercel.app/"),
  title: {
    default: "Home | Ecommerce Shop",
    template: "%s | Ecommerce Shop",
  },
  description: "Buy & shop conveniently at comfort of your Home",
  openGraph: {
    title: "Ecommerce Shop",
    description: "Buy & shop conveniently at comfort of your Home",
    url: "https://ken-ecommerce.vercel.app/",
    siteName: "Ecommerce Shop",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "ken_cipher",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased tracking-tight`}>
        <EcommerceProviders>
          <SessionProviders>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              {/* <Header /> */}
              <main className="grow">{children}</main>
              <Footer />
            </div>
          </SessionProviders>
        </EcommerceProviders>
      </body>
    </html>
  );
}
