import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { BrandDefs } from "@/components/brand/Mark";
import { Organism } from "@/components/motion/Organism";
import { RevealObserver } from "@/components/motion/RevealObserver";
import { meta } from "@/lib/copy";
import "./globals.css";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export const viewport: Viewport = {
  themeColor: "#E8E1DE",
};

// Marks the page as JS-enabled before first paint. If the reveal observer has
// not taken over within 3s (script error, slow device), drop back to the
// static, fully readable page.
const bootScript = `(function(d){d.classList.add('js');setTimeout(function(){if(!d.classList.contains('reveal-ready'))d.classList.remove('js')},3000)})(document.documentElement)`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <link rel="preload" href="/fonts/ExposureTrialVAR.ttf" as="font" type="font/ttf" crossOrigin="" />
      </head>
      <body>
        <BrandDefs />
        <Organism />
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
