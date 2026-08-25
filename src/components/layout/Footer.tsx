import Link from "next/link";
import { site } from "@/lib/data";

const footerLinks = [
  { label: "Обсудить проект", href: "/contact" },
  { label: "Узнать об услугах", href: "/#craft" },
  { label: "Изучить каталог", href: "/catalog" },
  { label: "Доставка и оплата", href: "/delivery" },
];

export function Footer() {
  return (
    <footer className="overflow-hidden bg-black text-white">
      <div className="relative mx-auto min-h-[780px] max-w-[1920px] px-8 pt-14 lg:px-20 lg:pt-16">
        <div className="relative z-20">
          <div>
            <p className="mb-10 text-[10px] uppercase tracking-[0.25em] text-white/45">RENOVO SERVICES</p>
            <nav className="flex flex-col items-start gap-7">
              {footerLinks.map((item) => (
                <Link key={item.href} href={item.href} className="border-b border-white/70 pb-1 text-base leading-none transition-opacity hover:opacity-55 lg:text-lg">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="absolute left-0 top-[350px] flex flex-col gap-6 text-sm text-white/75 lg:left-0 lg:flex-row lg:items-end lg:gap-16">
            <div>
              <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-white/40">Контакты</p>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="block hover:text-white">{site.phone}</a>
              <a href={`mailto:${site.email}`} className="mt-1 block hover:text-white">{site.email}</a>
            </div>
            <p className="max-w-2xl text-xs leading-relaxed text-white/45">© {site.since}–{new Date().getFullYear()} {site.name} · Москва · Корпоративная атрибутика ручной работы</p>
          </div>
        </div>

        <div aria-hidden="true" className="pointer-events-none absolute bottom-[1vw] left-0 w-full overflow-hidden text-center font-serif text-[24vw] leading-[0.72] tracking-[-0.14em] text-white sm:text-[23vw] lg:text-[22vw]">
          {site.name}
        </div>

        <div className="absolute bottom-5 right-8 z-10 hidden border border-black bg-white px-5 py-4 text-black lg:right-20 lg:block">
          <span className="block h-5 w-5 rounded-sm border-2 border-black" />
        </div>
      </div>
      <div className="relative z-20 border-t border-white/10 bg-black px-8 py-5 text-xs text-white/35 lg:px-20">
        <Link href="/privacy" className="hover:text-white">Политика конфиденциальности</Link>
      </div>
    </footer>
  );
}
