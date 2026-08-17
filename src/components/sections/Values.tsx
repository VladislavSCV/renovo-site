"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { values } from "@/lib/data";

export function Values() {
  return (
    <section className="py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel>Принципы</SectionLabel>
          <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight tracking-tight lg:text-5xl">
            То, что отличает
            <br />
            мастерскую от каталога
          </h2>
        </Reveal>

        <div className="mt-20 divide-y divide-border">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.08}>
              <div className="group grid gap-4 py-10 transition-colors duration-500 hover:bg-surface/50 md:grid-cols-12 md:gap-8 md:px-6 md:py-12">
                <div className="md:col-span-1">
                  <span className="font-serif text-xl text-accent/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-xl font-medium tracking-tight">
                    {value.title}
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-base leading-relaxed text-muted">
                    {value.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
