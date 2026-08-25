"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

export function Refetro() {
  return (
    <section id="refetro" className="relative overflow-hidden py-32 lg:py-40">
      <div className="absolute inset-0 bg-refetro" />
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/renovo/felt.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionLabel light>Торговая марка</SectionLabel>
            <h2 className="mt-4 font-serif text-5xl leading-tight tracking-tight text-white lg:text-6xl">
              REFETRO
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/55">
              Изделия для идентификации бизнеса из фетра — прочного,
              эстетичного, экологичного материала. В сочетании с кожей и
              металлом — изысканность и запоминаемость при доступной стоимости.
            </p>
            <div className="mt-10">
              <Button href="/catalog?category=refetro" variant="light">
                Коллекция REFETRO
              </Button>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              <div className="img-reveal relative aspect-square overflow-hidden rounded-sm">
                <Image
                  src="/images/renovo/felt-basket.jpg"
                  alt="Корзина из фетра"
                  fill
                  className="object-cover"
                  sizes="300px"
                />
              </div>
              <div className="img-reveal relative aspect-square overflow-hidden rounded-sm mt-8">
                <Image
                  src="/images/renovo/felt-bag.jpg"
                  alt="Сумка из фетра"
                  fill
                  className="object-cover"
                  sizes="300px"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
