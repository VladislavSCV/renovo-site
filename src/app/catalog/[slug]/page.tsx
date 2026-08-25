import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { products, site } from "@/lib/data";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Не найдено" };
  return {
    title: `${product.name} — ${site.name}`,
    description: `${product.name}. Материал: ${product.material}. Изготовление под заказ.`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Link
            href="/catalog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            ← Каталог
          </Link>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="img-reveal product-image relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="flex flex-col justify-center">
              <SectionLabel>{product.material}</SectionLabel>
              <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight lg:text-5xl">
                {product.name}
              </h1>
              <p className="mt-6 text-base leading-relaxed text-muted">
                Изготовление под заказ с нанесением вашего логотипа, тиснением
                или другим брендированием. Расскажите о задаче — мы предложим
                материалы и технологию.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/contact" variant="primary">
                  Обсудить заказ
                </Button>
                <Button
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  variant="outline"
                >
                  {site.phone}
                </Button>
              </div>

              <div className="mt-12 border-t border-border pt-8">
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
                  Доступно
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  <li>Индивидуальный дизайн по вашему ТЗ</li>
                  <li>Тиснение, печать, гравировка</li>
                  <li>Сроки от 1 дня</li>
                  <li>Доставка по России и миру</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-border py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h2 className="font-serif text-2xl tracking-tight">
              Похожие изделия
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/catalog/${item.slug}`}
                  className="group block"
                >
                  <div className="img-reveal product-image relative aspect-[3/4] overflow-hidden rounded-sm">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="300px"
                    />
                  </div>
                  <p className="mt-3 text-sm font-medium transition-colors group-hover:text-accent">
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
