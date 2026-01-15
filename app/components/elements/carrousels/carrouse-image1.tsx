"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";

const photosUrl = [
  "https://images.unsplash.com/photo-1496664444929-8c75efb9546f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1553267570-9becda98edf8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1708792635872-37db9841487b?q=80&w=1441&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1717500252010-d708ec89a0a2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1553267570-9becda98edf8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
];

const CARD_WIDTH = 240;
const GAP = 16;
const STEP = CARD_WIDTH + GAP;

export default function CarrouselImage1() {
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  // 👇 AGORA O DIALOG É CONTROLADO POR ÍNDICE
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function calcMax() {
      const containerWidth =
        containerRef.current?.offsetWidth || window.innerWidth;

      const visibleCards = Math.floor(containerWidth / STEP);

      const max = Math.max(0, photosUrl.length - visibleCards);

      setMaxIndex(max);

      setIndex((prev) => Math.min(prev, max));
    }

    calcMax();
    window.addEventListener("resize", calcMax);

    return () => window.removeEventListener("resize", calcMax);
  }, []);

  function next() {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  }

  function prev() {
    setIndex((prev) => Math.max(prev - 1, 0));
  }

  // ─────────────── NAVEGAÇÃO DO DIALOG ───────────────

  function nextDialog() {
    if (activeIndex === null) return;

    setActiveIndex((prev) =>
      prev === null ? 0 : (prev + 1) % photosUrl.length
    );
  }

  function prevDialog() {
    if (activeIndex === null) return;

    setActiveIndex((prev) =>
      prev === null ? 0 : (prev - 1 + photosUrl.length) % photosUrl.length
    );
  }

  return (
    <>
      <section className="w-full py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* TEXTO */}
            <div className="flex flex-col shrink-0">
              <span className="text-zinc-500 font-light text-sm">
                Nosso consultório
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold text-zinc-700">
                Ambiente <br className="hidden lg:block" />
                saudável
              </h3>
            </div>

            {/* GALERIA */}
            <div
              ref={containerRef}
              className="flex-1 space-y-4 overflow-x-auto lg:overflow-hidden snap-x snap-mandatory px-[calc(50%-120px)] lg:px-0 scroll-smooth"
            >
              <motion.div
                className="flex gap-4 snap-x snap-mandatory"
                animate={{ x: -index * STEP }}
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
              >
                {photosUrl.map((photo, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`relative group w-[240px] aspect-video rounded-2xl overflow-hidden shrink-0 cursor-zoom-in ${
                      i === 0 ? "snap-start" : "snap-center"
                    }`}
                  >
                    <Image
                      src={photo}
                      alt=""
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn
                        size={32}
                        strokeWidth={1}
                        className="text-white"
                      />
                    </div>
                  </button>
                ))}
              </motion.div>

              {/* CONTROLES DESKTOP */}
              <div className="hidden lg:flex gap-4 justify-end">
                <button
                  onClick={prev}
                  disabled={index === 0}
                  className="p-2 rounded-full bg-zinc-500/10 hover:bg-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={24} strokeWidth={1} />
                </button>

                <button
                  onClick={next}
                  disabled={index >= maxIndex}
                  className="p-2 rounded-full bg-zinc-500/10 hover:bg-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={24} strokeWidth={1} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── DIALOG ─────────────── */}
      <Dialog
        open={activeIndex !== null}
        onOpenChange={() => setActiveIndex(null)}
      >
        <DialogOverlay className="bg-black/30 backdrop-blur-md" />

        <DialogContent className="max-w-6xl w-full border-none bg-transparent p-4 lg:p-0 overflow-hidden shadow-none">
          <VisuallyHidden>
            <DialogTitle>Visualização da imagem</DialogTitle>
          </VisuallyHidden>

          {activeIndex !== null && (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
              <Image
                src={photosUrl[activeIndex]}
                alt=""
                fill
                priority
                className="object-cover"
              />

              {/* CONTROLES DENTRO DO DIALOG */}
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <button
                  onClick={prevDialog}
                  className="p-2 rounded-full bg-black/40 text-white hover:bg-black/60"
                >
                  <ChevronLeft size={28} strokeWidth={1} />
                </button>

                <button
                  onClick={nextDialog}
                  className="p-2 rounded-full bg-black/40 text-white hover:bg-black/60"
                >
                  <ChevronRight size={28} strokeWidth={1} />
                </button>
              </div>

              {/* INDICADOR */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {activeIndex + 1} / {photosUrl.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
