import Link from "next/link";
import { site, nav, delivery } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-dark text-white/60">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-2xl tracking-[0.15em] text-white">
              {site.name}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/40">
              Производственная мастерская корпоративной атрибутики с{" "}
              {site.since} года. Кожа, фетр, индивидуальный дизайн.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-white/30">
              Навигация
            </p>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/delivery"
                  className="text-sm transition-colors hover:text-white"
                >
                  Доставка
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-white/30">
              Контакты
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              <li className="text-white/40">{site.city}</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-white/30">
              Доставка
            </p>
            <ul className="space-y-2 text-sm text-white/40">
              {delivery.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/25 md:flex-row md:items-center md:justify-between">
          <p>
            © {site.since}–{new Date().getFullYear()} {site.name}. Все права
            защищены.
          </p>
          <Link href="/privacy" className="transition-colors hover:text-white/50">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}
