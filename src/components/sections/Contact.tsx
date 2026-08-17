"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/lib/data";

export function Contact() {
  return (
    <section className="py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <SectionLabel>Контакты</SectionLabel>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight lg:text-5xl">
              Начнём
              <br />
              с разговора
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              Если вы не нашли нужное в каталоге — мы изготовим под заказ с
              нанесением вашего логотипа. Расскажите о задаче, и мы предложим
              решение.
            </p>

            <div className="mt-12 space-y-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
                  Телефон
                </p>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="mt-2 block text-2xl font-light tracking-tight transition-colors hover:text-accent"
                >
                  {site.phone}
                </a>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 block text-lg transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
                  Город
                </p>
                <p className="mt-2 text-lg">{site.city}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} direction="right">
            <form className="space-y-6" action="/contact" method="get">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-muted"
                >
                  Имя
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-foreground/30"
                  placeholder="Как к вам обращаться"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-muted"
                >
                  Телефон
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-foreground/30"
                  placeholder="+7"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-muted"
                >
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full resize-none border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-foreground/30"
                  placeholder="Расскажите о вашем проекте"
                />
              </div>
              <button
                type="submit"
                className="mt-4 w-full rounded-full bg-foreground py-4 text-sm tracking-wide text-background transition-opacity hover:opacity-85 md:w-auto md:px-10"
              >
                Отправить
              </button>
              <p className="text-xs leading-relaxed text-muted/70">
                Отправляя форму, вы соглашаетесь на обработку персональных
                данных в соответствии с 152-ФЗ.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
