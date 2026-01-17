"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MorphinButtonScreenProps {
  title: string;
  children: React.ReactNode;
}

export default function MorphinButtonScreen({
  title,
  children,
}: MorphinButtonScreenProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="relative inline-block">
        {/* Ghost button for layout sizing */}
        <Button
          size="lg"
          className="py-6 px-8 bg-transparent text-transparent border-0 pointer-events-none opacity-0 select-none text-base font-light"
          aria-hidden="true"
        >
          {title}
        </Button>

        {/* Animated Trigger Button */}
        {!isOpen && (
          <motion.button
            layoutId={`morph-bg-${title}`}
            onClick={handleOpen}
            className="absolute inset-0 w-full h-full bg-linear-to-br from-green-600 to-green-800 hover:brightness-105 transition-colors duration-300 text-base font-light cursor-pointer rounded-md text-primary-foreground flex items-center justify-center gap-2"
            style={{ borderRadius: "0.5rem" }} // match shadcn radius-md
          >
            <Calendar size={24} strokeWidth={1} />

            <motion.span
              layoutId={`morph-title-${title}`}
              className="text-white"
            >
              {title}
            </motion.span>
          </motion.button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            layoutId={`morph-bg-${title}`}
            className="fixed inset-0 z-100 bg-green-800 flex flex-col items-center justify-center p-4"
            style={{ borderRadius: 0 }}
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer text-white"
            >
              <X size={24} />
            </motion.button>

            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
