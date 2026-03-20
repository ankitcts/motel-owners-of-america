import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/common/Providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DevPanel from "@/components/common/DevPanel";
import "@/styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Motel Owners of America — US Hotel & Motel Ownership Database",
    template: "%s | Motel Owners of America",
  },
  description:
    "Explore hotel and motel ownership across all 50 US states. Search by owner, LLC, state, or county. Public ownership data visualized on interactive maps.",
  keywords: [
    "hotel owners",
    "motel owners",
    "hotel ownership",
    "LLC hotels",
    "US motels",
    "hospitality industry",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <Header />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
          </div>
          <DevPanel />
        </Providers>
      </body>
    </html>
  );
}
