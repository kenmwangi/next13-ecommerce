import Navbar from "@/components/Navbar";
import "./css/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import SessionProviders from "@/providers/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Home | Ecommerce Shop",
    template: "%s | Ecommerce Shop",
  },
  description: "Buy & shop conviniently at comfort of your Home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased tracking-tight`}>
        <SessionProviders>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="grow">{children}</main>
            <Footer />
          </div>
        </SessionProviders>
      </body>
    </html>
  );
}
