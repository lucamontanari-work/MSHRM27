import { Claim } from "@/components/sections/Claim";
import { Contact } from "@/components/sections/Contact";
import { Context } from "@/components/sections/Context";
import { Descriptor } from "@/components/sections/Descriptor";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Pillars } from "@/components/sections/Pillars";
import { Work } from "@/components/sections/Work";

// Home, Level 1: opens on "There it is", closes on "More to reveal".
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Descriptor />
        <Pillars />
        <Claim />
        <Context />
        <Work />
        <Contact />
      </main>
    </>
  );
}
