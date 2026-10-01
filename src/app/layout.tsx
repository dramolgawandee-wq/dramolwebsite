import type { Metadata, Viewport } from "next";
import { Caveat, Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { personNode, websiteNode } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-sans", display: "swap" });
/** Handwritten accent (signature, short mottos). */
const script = Caveat({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-script", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Academic Leader, Researcher & Management Educator`, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: `${site.url}/about` }],
  creator: site.name,
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#061410",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${script.variable}`}>
      <head>
        <JsonLd graph={[websiteNode(), personNode()]} />
      </head>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
