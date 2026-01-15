"use client";

import { motion } from "motion/react";
import {
  UtensilsCrossed,
  SearchX,
  TrendingDown,
  Scale,
  Pizza,
  CalendarOff,
} from "lucide-react";

const problems = [
  {
    icon: UtensilsCrossed,
    title: "Dietas Super Restritivas",
    description:
      "Cortar tudo o que você gosta de comer gera ansiedade e inevitavelmente leva à desistência e efeito sanfona.",
  },
  {
    icon: SearchX,
    title: "Foco Apenas no Peso",
    description:
      "A balança não conta a história toda. Perder massa magra achando que é gordura é um erro clássico.",
  },
  {
    icon: CalendarOff,
    title: "Falta de Planejamento",
    description:
      "Deixar para decidir o que comer na hora da fome é a receita perfeita para escolhas impulsivas e fora do plano.",
  },
  {
    icon: Pizza,
    title: "Exceções Todo Fim de Semana",
    description:
      "Seguir o plano perfeitamente de segunda a sexta e exagerar no fim de semana anula todo o seu déficit calórico.",
  },
  {
    icon: TrendingDown,
    title: "Metas Irrealistas",
    description:
      "Esperar resultados de anos em poucos dias gera frustração. A constância vence a intensidade.",
  },
  {
    icon: Scale,
    title: "Não Ajustar a Dieta",
    description:
      "Comer a mesma quantidade de calorias para sempre. Seu corpo muda e sua dieta precisa acompanhar essa evolução.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Problems1() {
  return (
    <section className="w-full py-20 lg:py-32 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-600 font-medium uppercase tracking-wider text-sm mb-4"
          >
            Por que é tão difícil?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold text-zinc-900 max-w-3xl"
          >
            Erros comuns que impedem sua{" "}
            <span className="text-amber-500">evolução</span>
          </motion.h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 border border-zinc-100 hover:border-amber-200"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <problem.icon size={120} className="text-amber-500 rotate-12" />
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-amber-600 group-hover:scale-110 transition-transform duration-300">
                  <problem.icon size={28} strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold text-zinc-900 mb-3">
                  {problem.title}
                </h3>

                <p className="text-zinc-600 leading-relaxed group-hover:text-zinc-700">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
