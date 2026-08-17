import { Contact } from "@/components/sections/Contact";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata = {
  title: "Контакты — RENOVO",
  description: "Свяжитесь с мастерской RENOVO для обсуждения вашего проекта.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-8 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionLabel>Контакты</SectionLabel>
            <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight lg:text-5xl">
              Давайте создадим
              <br />
              что-то особенное
            </h1>
          </Reveal>
        </div>
      </section>
      <Contact />
    </>
  );
}
