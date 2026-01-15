"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Home, MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-4 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-green-500/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-blue-500/30 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-2xl w-full text-center space-y-8"
      >
        <div className="space-y-4">
          <motion.h1
            className="text-[12rem] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-linear-to-br from-foreground to-foreground/20 select-none"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
          >
            404
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Página não encontrada
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Desculpe, não conseguimos encontrar a página que você está
              procurando. Ela pode ter sido removida ou o link pode estar
              incorreto.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 h-12 text-base font-medium transition-all duration-300 hover:scale-105"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Voltar ao Início
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            size="lg"
            className="rounded-full px-8 h-12 text-base font-medium hover:bg-muted"
          >
            <button onClick={() => window.history.back()}>
              <MoveLeft className="mr-2 h-4 w-4" />
              Voltar
            </button>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
