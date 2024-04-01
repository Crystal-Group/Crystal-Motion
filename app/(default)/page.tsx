export const metadata = {
  title:
    "Crystal Motion Racing Simulators - Experience Realistic Racing Thrills",
  description:
    "Get behind the wheel of the most immersive racing simulators with Crystal Motion. Our advanced technology delivers hyper-realistic racing experiences that put you in the driver's seat. Feel the adrenaline as you race on iconic tracks worldwide. Start your engines and experience the ultimate thrill of speed!",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import Zigzag from "@/components/zigzag";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  );
}
