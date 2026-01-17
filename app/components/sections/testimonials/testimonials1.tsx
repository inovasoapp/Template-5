"use client";

import * as React from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Depoimentos
const TESTIMONIALS = [
  {
    id: 1,
    name: "Mariana Silva",
    role: "Atleta Amadora",
    image: "https://i.pravatar.cc/150?u=1",
    content:
      "A Ana transformou completamente minha relação com a comida. Aprendi que não preciso passar fome para ter resultados. Perdi 12kg e ganhei muita energia!",
  },
  {
    id: 2,
    name: "Carlos Eduardo",
    role: "Empresário",
    image: "https://i.pravatar.cc/150?u=2",
    content:
      "Finalmente encontrei um método que se adapta à minha rotina corrida. O acompanhamento 24h faz toda diferença. Recomendo de olhos fechados!",
  },
  {
    id: 3,
    name: "Juliana Costa",
    role: "Professora",
    image: "https://i.pravatar.cc/150?u=3",
    content:
      "O plano personalizado respeitou minhas preferências alimentares e ainda assim consegui resultados incríveis. Estou mais disposta e confiante!",
  },
  {
    id: 4,
    name: "Roberta Alves",
    role: "Corredor",
    image: "https://i.pravatar.cc/150?u=4",
    content:
      "A metodologia da Ana é baseada em ciência, não em modismos. Melhorei meu desempenho nas corridas e ainda emagreci de forma saudável.",
  },
  {
    id: 5,
    name: "Fernando Oliveira",
    role: "Designer",
    image: "https://i.pravatar.cc/150?u=5",
    content:
      "Aprendi a ter equilíbrio sem restrições extremas. Posso comer o que gosto e ainda assim manter meus resultados. Mudou minha vida!",
  },
  {
    id: 6,
    name: "Luciana Mendes",
    role: "Estudante",
    image: "https://i.pravatar.cc/150?u=6",
    content:
      "O suporte contínuo e a atenção aos detalhes fazem toda diferença. A Ana realmente se importa com cada aluno e seus objetivos individuais.",
  },
  {
    id: 7,
    name: "Patrícia Santos",
    role: "Nutricionista",
    image: "https://i.pravatar.cc/150?u=7",
    content:
      "Como colega de profissão, admiro muito o trabalho da Ana. Sua abordagem humanizada e científica é inspiradora. Resultados comprovados!",
  },
];

export default function Testimonials1() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Auto-rotate
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
    );
  };

  // Helper to handle circular index logic for 5 visible items
  const getCardStyle = (index: number) => {
    const total = TESTIMONIALS.length;

    // Calculate shortest distance in a circle
    let dist = (index - currentIndex + total) % total;
    if (dist > total / 2) dist -= total;

    // We only care about dists -2, -1, 0, 1, 2 for the 5 visible cards
    // 0 = Center
    // +/- 1 = Near neighbors
    // +/- 2 = Far neighbors

    // Shared transition config
    const transition = {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
      mass: 1,
    };

    // Center Card (Scale 1.5)
    if (dist === 0) {
      return {
        x: "0%",
        scale: 1.5,
        zIndex: 50,
        opacity: 1,
        filter: "blur(0px)",
        // display: "block", // Motion handles display better via variants if needed, but simple conditional props work in animate
        transition,
      };
    }

    // Neighbors (Scale 1.25) - Spread out
    if (Math.abs(dist) === 1) {
      return {
        x: dist > 0 ? "85%" : "-85%",
        scale: 1.25,
        zIndex: 40,
        opacity: 0.85,
        filter: "blur(0.5px)",
        transition,
      };
    }

    // Edge Cards (Scale 1.1) - Far edges
    if (Math.abs(dist) === 2) {
      return {
        x: dist > 0 ? "160%" : "-160%",
        scale: 1.1,
        zIndex: 30,
        opacity: 0.6,
        filter: "blur(1px)",
        transition,
      };
    }

    // Hidden
    return {
      x: dist > 0 ? "220%" : "-220%",
      scale: 0.8,
      zIndex: 10,
      opacity: 0,
      filter: "blur(2px)",
      transition,
    };
  };

  // Mobile simplified view logic
  // On mobile we might just stack them or show 1.
  // But the CSS 'x' percentages above might look crowded on mobile.
  // We can use media queries in the variants or simpler JS checks?
  // Motion handles values well, but responsive values in 'animate' props can be tricky without a hook.
  // I will use a simple spacing multiplier that reduces on mobile (via responsive check or just percentage that works generally).
  // Actually, % is relative to container. 50% shift might be too much or too little.
  // Let's stick effectively to the desktop request first.

  return (
    <section className="w-full py-24 bg-zinc-50 dark:bg-zinc-950 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
          >
            Vidas transformadas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            Veja o que nossos pacientes têm a dizer sobre sua jornada de
            transformação.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full h-[400px] flex items-center justify-center max-w-7xl mx-auto">
          {TESTIMONIALS.map((testimonial, index) => {
            // We can check responsive "center" logic, but framer motion 'animate' works best with explicit values.
            // We'll rely on the getCardStyle returning percentages.
            const isCenter = index === currentIndex;
            return (
              <motion.div
                key={testimonial.id}
                className="absolute w-[240px] origin-center"
                initial={false}
                animate={getCardStyle(index)}
              >
                <Card
                  className={cn(
                    "items-center justify-center h-full backdrop-blur-sm border-zinc-200/50 dark:border-zinc-800/50 shadow-xl rounded-2xl overflow-hidden transition-colors",
                    isCenter
                      ? "bg-white dark:bg-zinc-900"
                      : "bg-white dark:bg-zinc-900/80 hover:bg-white dark:hover:bg-zinc-900 backdrop-blur-2xl",
                  )}
                >
                  <CardContent className="p-5 flex flex-col items-center text-center gap-3 h-full justify-center">
                    <div className="relative">
                      <Quote className="w-6 h-6 text-primary/10 absolute -top-3 -left-3" />
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary/10 bg-zinc-100"
                      />
                    </div>

                    <p className="text-xs font-normal text-zinc-700">
                      &quot;{testimonial.content}&quot;
                    </p>

                    <div className="mt-1">
                      <h4 className="text-sm font-semibold text-zinc-700">
                        {testimonial.name}
                      </h4>
                      <span className="text-[10px] text-zinc-500 uppercase font-light">
                        {testimonial.role}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex gap-4 mt-16">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:scale-105 active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
          </button>

          <div className="flex gap-2 items-center">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  idx === currentIndex
                    ? "w-8 bg-amber-500"
                    : "bg-zinc-300 dark:bg-zinc-700 hover:bg-primary/50",
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:scale-105 active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
          </button>
        </div>
      </div>
    </section>
  );
}
