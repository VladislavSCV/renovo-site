"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { categories, products } from "@/lib/data";

function CatalogContent() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");

  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  const activeCat = categories.find((c) => c.slug === activeCategory);

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionLabel>Каталог</SectionLabel>
            <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight lg:text-5xl">
              {activeCat ? activeCat.title : "Вся коллекция"}
            </h1>
            {activeCat && (
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                {activeCat.description}
              </p>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/catalog"
                className={`rounded-full px-5 py-2 text-sm transition-all duration-300 ${
                  !activeCategory
                    ? "bg-foreground text-background"
                    : "border border-border text-muted hover:border-foreground/20 hover:text-foreground"
                }`}
              >
                Все
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/catalog?category=${cat.slug}`}
                  className={`rounded-full px-5 py-2 text-sm transition-all duration-300 ${
                    activeCategory === cat.slug
                      ? "bg-foreground text-background"
                      : "border border-border text-muted hover:border-foreground/20 hover:text-foreground"
                  }`}
                >
                  {cat.title}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product, i) => (
              <Reveal key={product.slug} delay={i * 0.05}>
                <Link href={`/catalog/${product.slug}`} className="group block">
                  <div className="img-reveal product-image relative aspect-[3/4] overflow-hidden rounded-sm">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-[11px] uppercase tracking-[0.15em] text-muted">
                      {product.material}
                    </p>
                    <h2 className="mt-1.5 text-sm font-medium leading-snug transition-colors group-hover:text-accent">
                      {product.name}
                    </h2>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-20 text-center text-muted">
              В этой категории пока нет товаров.
            </p>
          )}
        </div>
      </section>
    </>
  );
}

export default function CatalogPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center pt-32">
          <p className="text-muted">Загрузка...</p>
        </div>
      }
    >
      <CatalogContent />
    </Suspense>
  );
}
