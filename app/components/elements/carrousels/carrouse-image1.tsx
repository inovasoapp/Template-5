// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useState } from "react";

// import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// const photosUrl = [
//   "https://images.unsplash.com/photo-1496664444929-8c75efb9546f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1553267570-9becda98edf8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1708792635872-37db9841487b?q=80&w=1441&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1717500252010-d708ec89a0a2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1553267570-9becda98edf8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// ];

// const CARD_WIDTH = 240;
// const GAP = 16; // gap-4 = 16px
// const STEP = CARD_WIDTH + GAP;

// export default function CarrouselImage1() {
//   const [index, setIndex] = useState(0);

//   function next() {
//     setIndex((prev) => Math.min(prev + 1, photosUrl.length - 1));
//   }

//   function prev() {
//     setIndex((prev) => Math.max(prev - 1, 0));
//   }

//   return (
//     <section className="w-full py-16 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 lg:px-8">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* TEXTO */}
//           <div className="flex flex-col shrink-0">
//             <span className="text-zinc-500 font-light text-sm">
//               Nosso consultório
//             </span>
//             <h3 className="text-2xl lg:text-3xl font-bold text-zinc-700">
//               Ambiente saudável
//             </h3>
//           </div>

//           {/* GALERIA */}
//           <div className="flex-1 space-y-4 overflow-hidden">
//             <motion.div
//               className="flex gap-4"
//               animate={{ x: -index * STEP }}
//               transition={{ type: "spring", stiffness: 200, damping: 30 }}
//             >
//               {photosUrl.map((photo, i) => (
//                 <DialogPhoto photo={photo} key={i} />
//               ))}
//             </motion.div>

//             {/* CONTROLES */}
//             <div className="flex gap-4 justify-center">
//               <button
//                 onClick={prev}
//                 disabled={index === 0}
//                 className="p-2 rounded-full bg-zinc-500/10 hover:bg-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
//               >
//                 <ChevronLeft size={24} strokeWidth={1} />
//               </button>

//               <button
//                 onClick={next}
//                 disabled={index === photosUrl.length - 1}
//                 className="p-2 rounded-full bg-zinc-500/10 hover:bg-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
//               >
//                 <ChevronRight size={24} strokeWidth={1} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export function DialogPhoto({ photo }: { photo: string }) {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <button className="relative group w-[240px] aspect-video rounded-2xl overflow-hidden shrink-0 cursor-zoom-in">
//           <Image
//             src={photo}
//             alt=""
//             fill
//             className="object-cover group-hover:scale-105 transition-transform duration-700"
//           />

//           <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//             <ZoomIn size={32} strokeWidth={1} className="text-white" />
//           </div>
//         </button>
//       </DialogTrigger>

//       <DialogContent className="max-w-6xl w-full p-0 overflow-hidden">
//         <div className="relative w-full aspect-video">
//           <Image src={photo} alt="" fill className="object-cover" priority />
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }

// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useState } from "react";

// import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogOverlay,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// const photosUrl = [
//   "https://images.unsplash.com/photo-1496664444929-8c75efb9546f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
//   "https://images.unsplash.com/photo-1553267570-9becda98edf8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
//   "https://images.unsplash.com/photo-1708792635872-37db9841487b?q=80&w=1441&auto=format&fit=crop&ixlib=rb-4.1.0",
//   "https://images.unsplash.com/photo-1717500252010-d708ec89a0a2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
//   "https://images.unsplash.com/photo-1553267570-9becda98edf8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
// ];

// const CARD_WIDTH = 240;
// const GAP = 16; // gap-4
// const STEP = CARD_WIDTH + GAP;

// export default function CarrouselImage1() {
//   const [index, setIndex] = useState(0);

//   function next() {
//     setIndex((prev) => Math.min(prev + 1, photosUrl.length - 1));
//   }

//   function prev() {
//     setIndex((prev) => Math.max(prev - 1, 0));
//   }

//   return (
//     <section className="w-full py-16 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 lg:px-8">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* TEXTO */}
//           <div className="flex flex-col shrink-0">
//             <span className="text-zinc-500 font-light text-sm">
//               Nosso consultório
//             </span>
//             <h3 className="text-2xl lg:text-3xl font-bold text-zinc-700">
//               Ambiente saudável
//             </h3>
//           </div>

//           {/* GALERIA */}
//           <div className="flex-1 space-y-4 overflow-x-auto lg:overflow-hidden">
//             <motion.div
//               className="flex gap-4 snap-x snap-mandatory"
//               animate={{ x: -index * STEP }}
//               transition={{ type: "spring", stiffness: 200, damping: 30 }}
//             >
//               {photosUrl.map((photo, i) => (
//                 <DialogPhoto photo={photo} key={i} />
//               ))}
//             </motion.div>

//             {/* CONTROLES (DESKTOP) */}
//             <div className="hidden lg:flex gap-4 justify-center">
//               <button
//                 onClick={prev}
//                 disabled={index === 0}
//                 className="p-2 rounded-full bg-zinc-500/10 hover:bg-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed"
//               >
//                 <ChevronLeft size={24} strokeWidth={1} />
//               </button>

//               <button
//                 onClick={next}
//                 disabled={index === photosUrl.length - 1}
//                 className="p-2 rounded-full bg-zinc-500/10 hover:bg-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed"
//               >
//                 <ChevronRight size={24} strokeWidth={1} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export function DialogPhoto({ photo }: { photo: string }) {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <button className="relative group w-[240px] aspect-video rounded-2xl overflow-hidden shrink-0 snap-start cursor-zoom-in">
//           <Image
//             src={photo}
//             alt=""
//             fill
//             className="object-cover group-hover:scale-105 transition-transform duration-700"
//           />

//           <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//             <ZoomIn size={32} strokeWidth={1} className="text-white" />
//           </div>
//         </button>
//       </DialogTrigger>

//       <DialogOverlay className="bg-black/20 backdrop-blur-md" />

//       <DialogContent className="max-w-6xl w-full px-4 border-none bg-transparent lg:p-0 overflow-hidden">
//         <div className="relative w-full aspect-video">
//           <Image src={photo} alt="" fill className="object-cover" priority />
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";

const photosUrl = [
  "https://images.unsplash.com/photo-1496664444929-8c75efb9546f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1553267570-9becda98edf8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1708792635872-37db9841487b?q=80&w=1441&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1717500252010-d708ec89a0a2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1553267570-9becda98edf8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
];

const CARD_WIDTH = 240;
const GAP = 16;
const STEP = CARD_WIDTH + GAP;

export default function CarrouselImage1() {
  const [index, setIndex] = useState(0);
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  function next() {
    setIndex((prev) => Math.min(prev + 1, photosUrl.length - 1));
  }

  function prev() {
    setIndex((prev) => Math.max(prev - 1, 0));
  }

  return (
    <>
      <section className="w-full py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* TEXTO */}
            <div className="flex flex-col shrink-0">
              <span className="text-zinc-500 font-light text-sm">
                Nosso consultório
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold text-zinc-700">
                Ambiente saudável
              </h3>
            </div>

            {/* GALERIA */}
            <div className="flex-1 space-y-4 overflow-x-auto lg:overflow-hidden">
              <motion.div
                className="flex gap-4 snap-x snap-mandatory"
                animate={{ x: -index * STEP }}
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
              >
                {photosUrl.map((photo, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePhoto(photo)}
                    className="relative group w-[240px] aspect-video rounded-2xl overflow-hidden shrink-0 snap-start cursor-zoom-in"
                  >
                    <Image
                      src={photo}
                      alt=""
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn
                        size={32}
                        strokeWidth={1}
                        className="text-white"
                      />
                    </div>
                  </button>
                ))}
              </motion.div>

              {/* CONTROLES DESKTOP */}
              <div className="hidden lg:flex gap-4 justify-center">
                <button
                  onClick={prev}
                  disabled={index === 0}
                  className="p-2 rounded-full bg-zinc-500/10 hover:bg-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ChevronLeft size={24} strokeWidth={1} />
                </button>

                <button
                  onClick={next}
                  disabled={index === photosUrl.length - 1}
                  className="p-2 rounded-full bg-zinc-500/10 hover:bg-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ChevronRight size={24} strokeWidth={1} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIALOG FORA DO MOTION */}
      <Dialog open={!!activePhoto} onOpenChange={() => setActivePhoto(null)}>
        <DialogOverlay className="bg-black/30 backdrop-blur-md" />

        <DialogContent className="max-w-6xl w-full border-none bg-transparent p-4 lg:p-0 overflow-hidden shadow-none">
          <VisuallyHidden>
            <DialogTitle>Visualização da imagem do consultório</DialogTitle>
          </VisuallyHidden>

          {activePhoto && (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
              <Image
                src={activePhoto}
                alt=""
                fill
                priority
                className="object-cover"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
