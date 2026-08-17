"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 grain">
        <Image
          src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920&q=80"
          alt="Текстура кожи"
          fill
          priority
          className="object-cover opacity-[0.07]"
          sizes="100vw"
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-32 pb-20 lg:px-10 lg:pt-40">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 text-[11px] uppercase tracking-[0.25em] text-muted"
            >
              {site.name} · {site.city} · Est. {site.since}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05] tracking-tight text-foreground"
            >
              Корпоративная
              <br />
              атрибутика,
              <br />
              <span className="text-accent">созданная</span>
              <br />
              вручную
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 max-w-md text-base leading-relaxed text-muted lg:text-lg"
            >
              Мастерская полного цикла. Кожа, фетр, индивидуальный дизайн —
              для брендов, которым важна каждая деталь.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button href="/contact" variant="primary">
                Обсудить проект
              </Button>
              <Button href="/catalog" variant="outline">
                Изучить коллекцию
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="img-reveal relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1586281380349-632531db7e4f?w=800&q=80"
                alt="Изделия RENOVO"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
            </div>
            <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-muted">
              Адресная папка · Эко-кожа · Тиснение
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="h-8 w-px bg-muted/40"
          />
        </div>
      </motion.div>
    </section>
  );
}
