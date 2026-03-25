import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Roboto } from "next/font/google";



export const metadata: Metadata = {
  title: 'Le Diamant Bistro 59 | Cozy European Dining',
  description: 'Experience cozy elegance and unforgettable flavors at Le Diamant Bistro 59. Book your table for an intimate dining experience in Copenhagen.',
  keywords: ["Le Diamant Bistro, Copenhagen restaurant, European cuisine, fine dining, intimate dinner, date night, French-Danish bistro, reservations"],
  openGraph: {
    "title": "Le Diamant Bistro 59 | Cozy European Dining",
    "description": "Experience cozy elegance and unforgettable flavors at Le Diamant Bistro 59. Book your table for an intimate dining experience in Copenhagen.",
    "url": "https://www.lediamantbistro59.com",
    "siteName": "Le Diamant Bistro 59",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/top-view-dining-tables-without-food_23-2150157833.jpg",
        "alt": "Elegant interior of Le Diamant Bistro 59"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Le Diamant Bistro 59 | Cozy European Dining",
    "description": "Experience cozy elegance and unforgettable flavors at Le Diamant Bistro 59. Book your table for an intimate dining experience in Copenhagen.",
    "images": [
      "http://img.b2bpic.net/free-photo/top-view-dining-tables-without-food_23-2150157833.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${roboto.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
