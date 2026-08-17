import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/lib/data";

export const metadata = {
  title: "Политика конфиденциальности — RENOVO",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-32 lg:pt-40">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel>Правовая информация</SectionLabel>
          <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight">
            Политика конфиденциальности
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="prose-custom mt-12 space-y-6 text-base leading-relaxed text-muted">
            <p>
              Настоящая политика определяет порядок обработки и защиты
              персональных данных пользователей сайта {site.name} в
              соответствии с Федеральным законом № 152-ФЗ «О персональных
              данных».
            </p>
            <p>
              Отправляя форму обратной связи, вы соглашаетесь на использование
              указанных данных компанией {site.name} для изучения вашего
              запроса, ответа и управления возможными договорными отношениями.
            </p>
            <p>
              Мы не передаём ваши данные третьим лицам, за исключением случаев,
              предусмотренных законодательством РФ.
            </p>
            <p>
              По вопросам обработки персональных данных:{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-foreground underline underline-offset-4"
              >
                {site.email}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
