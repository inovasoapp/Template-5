"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Award, Users, Star } from "lucide-react";

const features = [
  "Especialista em Nutrição Esportiva",
  "Metodologia Comprovada",
  "Acompanhamento 24h",
  "Planos 100% Personalizados",
];

const stats = [
  { icon: Users, label: "Vidas Transformadas", value: "120+" },
  { icon: Star, label: "Avaliação Média", value: "4.9/5" },
];

export function About1() {
  return (
    <section className="w-full py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-600 font-medium uppercase tracking-wider text-sm mb-4"
          >
            Quem estará com você nessa jornada?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold text-zinc-900 max-w-3xl"
          >
            Conheça a profissional que estará com você nessa jornada
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-zinc-200 aspect-4/5 lg:aspect-square">
              <Image
                src="/images/about-portrait.png"
                alt="Retrato profissional do treinador"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute bottom-6 left-6 right-6 bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-zinc-100/20"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-amber-100/30 rounded-xl text-amber-600">
                    <Award size={28} strokeWidth={1} />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-zinc-500 font-light uppercase tracking-wide">
                      Experiência
                    </p>
                    <p className="text-lg md:text-xl font-semibold text-zinc-600">
                      10+ Anos de Carreira
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-zinc-200/30 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Content Column */}
          <div className="flex flex-col">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl lg:text-3xl font-bold text-zinc-800 mb-6 leading-tight"
            >
              Ana Clara Dias
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-600 text-lg mb-8"
            >
              Minha missão é guiar você em uma jornada de autoconhecimento e
              superação. Com uma abordagem que une ciência e prática, desenvolvo
              estratégias personalizadas para que você alcance sua melhor
              versão, sem atalhos mágicos, mas com resultados sólidos e
              duradouros.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2
                    className="text-amber-500 shrink-0"
                    size={20}
                    strokeWidth={1}
                  />
                  <span className="text-zinc-500 text-sm font-light">
                    {feature}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-8 mb-10 border-t border-zinc-200 pt-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-2 bg-zinc-100 rounded-lg text-zinc-600">
                    <stat.icon size={20} strokeWidth={1} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-zinc-700 leading-none mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-zinc-500 uppercase tracking-wide font-light">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-linear-to-br from-amber-400 to-amber-600 hover:brightness-105 text-white px-8 py-4 rounded-xl font-normal flex items-center justify-center gap-2 hover:bg-zinc-800  self-start w-full sm:w-auto shadow-lg shadow-zinc-900/20 cursor-pointer transition-all duration-300 ease-in-out"
            >
              Agendar Avaliação
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform duration-300 ease-in-out"
                size={20}
              />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
