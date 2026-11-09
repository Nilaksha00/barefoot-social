import { Hero } from "@/components/sections/home/Hero";
import { Intro } from "@/components/sections/home/Intro";
import { Pillars } from "@/components/sections/home/Pillars";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Pillars />
      <ClosingCta />
    </>
  );
}
