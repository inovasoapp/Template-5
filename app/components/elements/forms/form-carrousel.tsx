"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FormCarrouselProps {
  title: string;
}

export default function FormCarrousel({ title }: FormCarrouselProps) {
  const [[step, direction], setStepState] = useState([0, 0]);

  const setStep = (newStep: number) => {
    const dir = newStep > step ? 1 : -1;
    setStepState([newStep, dir]);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <div>
      <motion.h2
        layoutId={`morph-title-${title}`}
        className="text-3xl md:text-5xl font-bold text-white mb-8 text-center"
      >
        {title}
      </motion.h2>

      <div className="w-full max-w-2xl overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          {step === 0 && (
            <motion.div
              key="step0"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-center text-green-50 text-lg leading-relaxed flex flex-col items-center"
            >
              <p>
                Transforme seu corpo e sua mente com um acompanhamento
                personalizado. Entre em contato para saber mais detalhes sobre a
                consultoria.
              </p>
              <Button
                onClick={() => setStep(1)}
                className="cursor-pointer bg-white/90 hover:bg-white/80 text-zinc-900 transition-all duration-300 mt-8"
              >
                Continuar <ArrowRight />
              </Button>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step1"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full"
            >
              <div className="relative flex flex-col z-0 w-full mb-5 group text-center mt-12">
                <input
                  type="text"
                  name="floating_name"
                  id="floating_name"
                  className="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-green-400/30 appearance-none focus:outline-none focus:ring-0 focus:border-white peer font-light text-center"
                  placeholder=" "
                  required
                  autoFocus
                />
                <label
                  htmlFor="floating_name"
                  className="absolute left-0 w-full text-lg text-green-200/60 font-light duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-center peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 cursor-text"
                >
                  Insira seu nome...
                </label>

                <div className="mt-8 flex items-center justify-between">
                  <Button
                    onClick={() => setStep(0)}
                    className="cursor-pointer bg-zinc-900/10 hover:bg-zinc-900/20 transition-all duration-300"
                  >
                    <ArrowLeft />
                    Voltar
                  </Button>

                  <Button
                    onClick={() => setStep(2)}
                    className="cursor-pointer bg-white/90 hover:bg-white/80 text-zinc-900 transition-all duration-300"
                  >
                    Continuar <ArrowRight />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full"
            >
              <div className="relative z-0 w-full mb-5 group text-center mt-12">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-green-400/30 appearance-none focus:outline-none focus:ring-0 focus:border-white peer font-light text-center"
                  placeholder=" "
                  required
                  autoFocus
                />
                <label
                  htmlFor="floating_email"
                  className="absolute left-0 w-full text-lg text-green-200/60 font-light duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-center peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 cursor-text"
                >
                  Insira seu melhor e-mail...
                </label>

                <div className="mt-8 flex items-center justify-between">
                  <Button
                    onClick={() => setStep(1)}
                    className="cursor-pointer bg-zinc-900/10 hover:bg-zinc-900/20 transition-all duration-300"
                  >
                    <ArrowLeft />
                    Voltar
                  </Button>

                  <Button className="cursor-pointer bg-white/90 hover:bg-white/80 text-zinc-900 transition-all duration-300">
                    Continuar <ArrowRight />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
