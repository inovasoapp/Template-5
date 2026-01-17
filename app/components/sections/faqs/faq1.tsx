"use client";

import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Como funciona o acompanhamento nutricional?",
    answer:
      "O acompanhamento é totalmente personalizado e contínuo. Após a avaliação inicial, você recebe seu plano alimentar customizado e tem acesso direto comigo 24h por dia através do WhatsApp. Fazemos ajustes semanais conforme sua evolução e necessidades.",
  },
  {
    question: "Preciso eliminar grupos alimentares da minha dieta?",
    answer:
      "Não! Nossa metodologia é baseada em equilíbrio, não em restrição. Você pode comer o que gosta, desde que nas proporções corretas. Acreditamos em mudanças sustentáveis que você consiga manter para sempre.",
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer:
      "Os primeiros resultados costumam aparecer nas primeiras 2-3 semanas, mas cada pessoa tem seu próprio ritmo. O mais importante é que os resultados sejam sólidos e duradouros, não apenas números temporários na balança.",
  },
  {
    question: "O plano alimentar se adapta à minha rotina?",
    answer:
      "Sim! O plano é 100% personalizado considerando sua rotina, preferências alimentares, objetivos e estilo de vida. Seja você atleta, profissional com agenda corrida ou estudante, criamos estratégias que funcionam para você.",
  },
  {
    question: "Posso fazer o acompanhamento mesmo morando em outra cidade?",
    answer:
      "Com certeza! Todo o acompanhamento é feito online através de consultas por videochamada e suporte contínuo pelo WhatsApp. Você pode estar em qualquer lugar do Brasil e receber o mesmo atendimento de qualidade.",
  },
  {
    question: "Qual a diferença entre nutrição esportiva e nutrição comum?",
    answer:
      "A nutrição esportiva é focada em otimizar o desempenho físico, recuperação muscular e composição corporal. Mesmo que você não seja atleta profissional, essa abordagem ajuda a ter mais energia, disposição e resultados mais eficientes.",
  },
  {
    question: "Vou passar fome durante o processo?",
    answer:
      "Definitivamente não! Passar fome é contraproducente e insustentável. Nossa metodologia garante que você se alimente adequadamente, com saciedade e prazer, enquanto alcança seus objetivos de forma saudável.",
  },
  {
    question: "Como funciona a avaliação inicial?",
    answer:
      "A avaliação inicial é uma consulta completa onde conversamos sobre seu histórico, objetivos, rotina, preferências e fazemos uma análise detalhada. Com base nisso, crio seu plano personalizado e estabelecemos as estratégias para sua jornada.",
  },
];

export default function Faq1() {
  return (
    <section className="w-full py-24 lg:py-32 bg-white dark:bg-zinc-900 overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-600 font-medium uppercase tracking-wider text-sm"
          >
            Perguntas Frequentes
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
          >
            Tire suas dúvidas
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            Encontre respostas para as perguntas mais comuns sobre nosso método
            de acompanhamento nutricional.
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-zinc-200 dark:border-zinc-800"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-zinc-700 dark:text-zinc-100 hover:text-amber-600 dark:hover:text-amber-500 transition-all duration-300 ease-in-out cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex flex-col items-center justify-center"
        >
          <p className="text-zinc-600 text-sm font-light mb-2">
            Ainda tem dúvidas? Entre em contato!
          </p>
          <button className="group w-full lg:w-auto bg-linear-to-br from-amber-400 to-amber-600 hover:brightness-105 text-white px-8 py-4 rounded-xl font-medium flex justify-center items-center gap-2 shadow-lg shadow-amber-900/20 cursor-pointer transition-all duration-300 ease-in-out">
            Falar com a Nutricionista
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform duration-300 ease-in-out"
              size={20}
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
