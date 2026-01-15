"use client";

import { motion } from "motion/react";

const textItems = [
  "Consultoria Online",
  "Planos Personalizados",
  "Saúde e Bem-estar",
  "Foco em Resultados",
  "Atendimento Exclusivo",
  "Treinos Eficientes",
  "Nutrição Inteligente",
];

export default function CarrouselText() {
  return (
    <div className="relative w-full flex items-center px-4 py-8 bg-amber-500/10 overflow-hidden">
      {/* Sombra Esquerda - Gradient Fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-amber-500/30 to-transparent z-10 pointer-events-none" />

      {/* Sombra Direita - Gradient Fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-amber-500/30 to-transparent z-10 pointer-events-none" />

      <div className="w-full overflow-hidden">
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: "-50%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Duplicating items to create seamless loop */}
          {[...textItems, ...textItems].map((item, index) => (
            <div key={index} className="flex items-center gap-8">
              <span className="text-sm font-light text-amber-900/80 uppercase tracking-widest whitespace-nowrap">
                {item}
              </span>
              <span className="text-amber-500/40">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
