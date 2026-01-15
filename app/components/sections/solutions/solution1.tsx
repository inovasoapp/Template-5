"use client";

import { motion } from "motion/react";
import { Scale, Brain, Zap, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Scale,
    title: "Equilíbrio, não Restrição",
    description:
      "Acreditamos que você pode comer o que ama. Nosso método foca na proporção correta, permitindo flexibilidade sem culpa.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Brain,
    title: "Mudança de Mentalidade",
    description:
      "Transforme sua relação com a comida. Ensinamos você a entender os sinais do seu corpo e a fazer escolhas conscientes.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Zap,
    title: "Energia Constante",
    description:
      "Chega de dietas que te deixam cansado. Nutrição pensada para otimizar sua disposição durante todo o dia.",
    color: "bg-emerald-50 text-emerald-600",
  },
];

export function Solution1() {
  return (
    <section className="w-full py-24 lg:py-32 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          {/* <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            Nossa Metodologia
          </motion.span> */}

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-600 font-medium uppercase tracking-wider text-sm mb-4"
          >
            Nossa Metodologia
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-zinc-900 max-w-4xl tracking-tight mb-6"
          >
            Uma solução que realmente{" "}
            <span className="relative inline-block text-amber-600">
              funciona pra você
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-amber-200 -z-10"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                />
              </svg>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-600 max-w-2xl leading-relaxed"
          >
            Esqueça o extremismo. Nossa abordagem científica se adapta à sua
            rotina, respeitando suas preferências e garantindo resultados que
            duram para a vida toda.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -5 }}
              className="relative group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-amber-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA / Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 lg:gap-12 pt-8 border-t border-zinc-200/60"
        >
          {[
            "Sem passar fome",
            "Sem excluir grupos alimentos",
            "100% Personalizado",
            "Suporte Contínuo",
          ].map((text, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-zinc-500 font-medium"
            >
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              {text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
