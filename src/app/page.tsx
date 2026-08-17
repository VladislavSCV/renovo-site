import { Hero } from "@/components/sections/Hero";
import { Categories } from "@/components/sections/Categories";
import { Craft } from "@/components/sections/Craft";
import { Values } from "@/components/sections/Values";
import { Featured } from "@/components/sections/Featured";
import { Refetro } from "@/components/sections/Refetro";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Craft />
      <Values />
      <Featured />
      <Refetro />
      <Contact />
    </>
  );
}
