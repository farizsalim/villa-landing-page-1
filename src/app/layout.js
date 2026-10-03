import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Villa Aura | Private Tropical Retreat",
  description: "Villa privat dengan ketenangan tropis di jantung Ubud, Bali.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${dmSans.variable} ${cormorant.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
