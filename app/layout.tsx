import "./css/style.css";

import { Inter, Architects_Daughter } from "next/font/google";

import Header from "@/components/ui/header";
import Banner from "@/components/banner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const architects_daughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  weight: "400",
  display: "swap",
});

export const metadata = {
  title:
    "Crystal Motion Racing Simulators - Experience Realistic Racing Thrills",
  description:
    "Get behind the wheel of the most immersive racing simulators with Crystal Motion. Our advanced technology delivers hyper-realistic racing experiences that put you in the driver's seat. Feel the adrenaline as you race on iconic tracks worldwide. Start your engines and experience the ultimate thrill of speed!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
          {/* Promo Banner */}
          {/* <Banner /> */}
        </div>
      </body>
    </html>
  );
}
