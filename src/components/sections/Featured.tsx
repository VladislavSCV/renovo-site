"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowLink } from "@/components/ui/Button";
import { products } from "@/lib/data";

export function Featured() {
  return (
    <section className="border-t border-border bg-surface/30 py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel>Из каталога</SectionLabel>
              <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight lg:text-5xl">
                Избранные работы
              </h2>
            </div>
            <ArrowLink href="/catalog">Вся коллекция</ArrowLink>
          </div>
        </Reveal>

        <div className="mt-16 -mx-6 overflow-x-auto px-6 pb-8 lg:mx-0 lg:px-0">
          <div className="flex w-max gap-6">
            {products.map((product, i) => (
              <Reveal key={product.slug} delay={i * 0.06} className="w-[280px] shrink-0 lg:w-[320px]">
                <Link
                  href={`/catalog/${product.slug}`}
                  className="group block"
                >
                  <div className="img-reveal product-image relative aspect-[3/4] overflow-hidden rounded-sm">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 280px, 25vw"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-[11px] uppercase tracking-[0.15em] text-muted">
                      {product.material}
                    </p>
                    <h3 className="mt-1.5 text-sm font-medium leading-snug transition-colors group-hover:text-accent">
                      {product.name}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
