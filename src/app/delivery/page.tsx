import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { delivery, site } from "@/lib/data";

export const metadata = {
  title: "Доставка — RENOVO",
  description: "Способы доставки продукции RENOVO по Москве, России и миру.",
};

export default function DeliveryPage() {
  return (
    <section className="pt-32 pb-32 lg:pt-40">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel>Логистика</SectionLabel>
          <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight lg:text-5xl">
            Доставка
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Мы доставляем готовую продукцию по {site.city}, по всей России и за
            рубеж. Выберите удобный способ при оформлении заказа.
          </p>
        </Reveal>

        <div className="mt-16 divide-y divide-border">
          {delivery.map((item, i) => (
            <Reveal key={item} delay={i * 0.08}>
              <div className="flex items-center gap-6 py-6">
                <span className="font-serif text-lg text-accent/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-16 text-sm leading-relaxed text-muted">
            Подробности по срокам и стоимости доставки уточняйте у менеджера при
            обсуждении заказа.{" "}
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="text-foreground underline underline-offset-4 transition-colors hover:text-accent"
            >
              {site.phone}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
