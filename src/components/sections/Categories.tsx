"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { categories } from "@/lib/data";

export function Categories() {
  return (
    <section className="border-t border-border py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel>Коллекции</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-serif text-5xl leading-[0.95] tracking-tight lg:text-7xl">
            Материалы, из которых
            <br />
            складывается бренд
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-3 md:grid-cols-12 md:grid-rows-[260px_340px] lg:gap-5">
          {categories.map((cat, i) => {
            const colSpan = i === 0 || i === 3 ? "md:col-span-7" : "md:col-span-5";
            const rowSpan = i === 0 ? "md:row-span-2" : "";

            return (
              <Reveal key={cat.slug} delay={i * 0.1} className={`${colSpan} ${rowSpan}`}>
                <Link
                  href={`/catalog?category=${cat.slug}`}
                  className="group relative block h-full min-h-[340px] overflow-hidden lg:min-h-0"
                >
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      cat.accent
                        ? "bg-refetro/70 group-hover:bg-refetro/60"
                        : "bg-dark/50 group-hover:bg-dark/40"
                    }`}
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">
                      {cat.subtitle}
                    </p>
                    <h3 className="mt-2 font-serif text-3xl text-white lg:text-4xl">
                      {cat.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
                      {cat.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm text-white/70 transition-all duration-300 group-hover:gap-3">
                      Подробнее <span>→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
