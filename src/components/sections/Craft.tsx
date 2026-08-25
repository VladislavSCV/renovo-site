"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { process, technologies } from "@/lib/data";

export function Craft() {
  return (
    <section id="craft" className="bg-dark py-32 text-white lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <Reveal>
              <SectionLabel light>Мастерская</SectionLabel>
              <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight lg:text-5xl">
                Не посредник.
                <br />
                Производство.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/50">
                С 2001 года мы изготавливаем продукцию для идентификации
                бизнеса. Закупаем лучшие материалы, работаем по вашему
                техническому заданию — с вашим тиснением, логотипом, эмблемой.
              </p>
            </Reveal>

            <div className="mt-16 space-y-10">
              {process.map((step, i) => (
                <Reveal key={step.step} delay={i * 0.12}>
                  <div className="flex gap-6 border-t border-white/10 pt-8">
                    <span className="font-serif text-2xl text-accent-light/60">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="text-lg font-medium">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/45">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal direction="right" delay={0.2}>
            <div className="relative">
              <div className="img-reveal relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/renovo/folder-design.jpg?v=3"
                  alt="Производственный процесс"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden h-48 w-36 overflow-hidden rounded-sm lg:block">
                <Image
                  src="/images/renovo/checkbook-leather.jpg"
                  alt="Детали изделия"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-24 border-t border-white/10 pt-16">
            <p className="mb-8 text-[11px] uppercase tracking-[0.2em] text-white/30">
              Технологии
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-sm text-white/40 transition-colors duration-300 hover:text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
