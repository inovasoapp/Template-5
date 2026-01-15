"use client";

import { motion } from "motion/react";
import { ClipboardList, Map, Dumbbell, Trophy, RefreshCw } from "lucide-react";

const steps = [
  {
    title: "Anamnese Detalhada",
    description:
      "Vamos entender sua rotina, preferências alimentares e histórico de saúde para traçar o melhor caminho.",
    icon: ClipboardList,
  },
  {
    title: "Estratégia Personalizada",
    description:
      "Criação de um plano alimentar e de treinos 100% adaptado à sua realidade e objetivos.",
    icon: Map,
  },
  {
    title: "Execução e Ajustes",
    description:
      "Acompanhamento próximo para monitorar sua evolução e fazer as adaptações necessárias no percurso.",
    icon: Dumbbell,
  },
  {
    title: "Conquista do Objetivo",
    description:
      "Alcance dos resultados desejados e aprendizado para manter o estilo de vida saudável para sempre.",
    icon: Trophy,
  },
  {
    title: "Definir um novo objetivo",
    description:
      "Com o objetivo alcançado, vamos definir um novo objetivo para continuar a sua jornada.",
    icon: RefreshCw,
  },
];

export default function TimeLine1() {
  return (
    <section className="w-full py-10 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl lg:text-3xl font-normal text-zinc-900 max-w-3xl mb-8 lg:mb-0"
          >
            Como será a sua jornada
          </motion.h3>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
          {/* Mobile Vertical Line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-zinc-200 md:hidden" />

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <TimelineRow
                key={index}
                step={step}
                index={index}
                isEven={isEven}
                isLast={index === steps.length - 1}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface Step {
  title: string;
  description: string;
  icon: React.ElementType;
}

function TimelineRow({
  step,
  index,
  isEven,
  isLast,
}: {
  step: Step;
  index: number;
  isEven: boolean;
  isLast: boolean;
}) {
  return (
    <>
      {isEven ? (
        <>
          <TimelineCard step={step} index={index} />
          <ConnectorRight isLast={isLast} />
        </>
      ) : (
        <>
          <ConnectorLeft isLast={isLast} />
          <TimelineCard step={step} index={index} />
        </>
      )}
    </>
  );
}

function TimelineCard({ step, index }: { step: Step; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="relative flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg shadow-zinc-200/50 border border-zinc-100 z-10 md:my-12"
    >
      <div className="flex-none p-3 bg-amber-100/50 text-amber-600 rounded-xl relative z-20">
        <step.icon size={24} strokeWidth={1} />
      </div>
      <div>
        <span className="block text-xs font-bold text-amber-500 uppercase tracking-wider mb-1">
          Passo {index + 1}
        </span>
        <h3 className="text-lg font-bold text-zinc-900 mb-2">{step.title}</h3>
        <p className="text-zinc-600 text-sm leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

function ConnectorRight({ isLast }: { isLast: boolean }) {
  if (isLast) return <div className="hidden md:block" />;
  return (
    <div className="hidden md:block relative w-full h-full">
      <div className="absolute top-1/2 -left-8 w-[calc(50%+2rem)] h-full border-t-2 border-r-2 border-zinc-200 rounded-tr-[2rem] -translate-y-[2px]" />
    </div>
  );
}

function ConnectorLeft({ isLast }: { isLast: boolean }) {
  if (isLast) return <div className="hidden md:block" />;
  return (
    <div className="hidden md:block relative w-full h-full">
      <div className="absolute top-1/2 -right-8 w-[calc(50%+2rem)] h-full border-t-2 border-l-2 border-zinc-200 rounded-tl-[2rem] -translate-y-[2px]" />
    </div>
  );
}
