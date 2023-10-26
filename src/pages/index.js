import React, { useRef } from "react";
import Header from "@/components/Header";
import Hero1 from "@/components/Hero1";
import Text from "@/components/Text";
import Slider, { SliderBg } from "@/components/Slider";
import Hero2 from "@/components/Hero2";
import Scroll from "@/components/Scroll";
import Hero3 from "@/components/Hero3";
import Hero4 from "@/components/Hero4";
import Hero5 from "@/components/Hero5";
import Positions from "@/components/Positions";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col`}>
      <Header />
      <Hero1 />
      <Text i={0} />
      <Slider />
      <Hero2 />
      <Scroll />
      <Text i={1} />
      <Hero3 />
      <Hero4 />
      <Hero5 />
      <Positions />
      <Footer />
    </main>
  );
}
