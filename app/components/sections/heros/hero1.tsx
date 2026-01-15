import Image from "next/image";
import mulherInvertida from "@/public/images/mulher.webp";

import { Calendar, Home, Monitor } from "lucide-react";
import VideoPlayerDialog from "../../elements/video-player-dialog";
import MorphinButtonScreen from "../../elements/morphin-button-screen";
import FormCarrousel from "../../elements/forms/form-carrousel";

export default function Hero1() {
  return (
    <section className="relative w-full min-h-[calc(100vh-6rem)] h-full lg:h-[900px] overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-linear-to-br from-amber-400 to-amber-600 z-10" />

      {/* Dashed Top Fade Grid */}
      <div className="absolute inset-0 min-h-screen w-full z-20 opacity-40">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      `,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 0",
            maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
            WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
        {/* Your Content/Components */}
      </div>

      <div className="relative max-w-7xl mx-auto h-full flex flex-1 flex-col-reverse lg:flex-row items-center justify-between gap-4 lg:gap-8 z-30">
        <div className="flex flex-col flex-none justify-center w-full h-1/2 lg:h-full lg:w-1/2 p-4 lg:p-8">
          <Image
            src="/logos/logo-text.svg"
            alt=""
            width={220}
            height={200}
            className="w-32 h-auto lg:w-[220px] lg:mt-32"
          />

          <h1 className="text-4xl lg:text-6xl font-bold ">
            Tenha o corpo que sempre quis
          </h1>
          <p className="text-lg lg:text-xl mt-4">
            Transforme sua vida com o meu programa de transformação corporal.
          </p>

          <div className="flex flex-col lg:flex-row gap-4 mt-8">
            <MorphinButtonScreen title="Agente uma consultoria">
              <FormCarrousel title="Agente uma consultoria" />
            </MorphinButtonScreen>

            <VideoPlayerDialog
              title="Saiba mais sobre mim"
              videoUrl="/videos/apresentacao.mp4"
            />
          </div>

          <div className="flex items-center justify-center mt-auto gap-2 lg:gap-8 pt-8">
            <div className="flex items-center gap-2 text-zinc-900/50">
              <Monitor size={16} strokeWidth={1} />
              <span className="font-light text-sm">Atendimento Online</span>
            </div>

            <div className="w-1.5 h-1.5 rounded-full bg-zinc-900/10" />

            <div className="flex items-center gap-2 text-zinc-900/50 ">
              <Home size={16} strokeWidth={1} />
              <span className="font-light text-sm">Atendimento Presencial</span>
            </div>
          </div>
        </div>
        <div className="relative flex flex-none w-full h-1/2 lg:h-full lg:w-1/2">
          <Image
            src={mulherInvertida}
            alt=""
            width={1087}
            height={687}
            className="object-cover object-top lg:object-center"
          />

          <div className="absolute top-2/3 lg:top-1/2 right-4 w-3xs px-6 py-3 flex items-center gap-2 bg-white/10 rounded-xl z-30 backdrop-blur-sm">
            <div className="p-3 rounded-xl bg-amber-500/60">
              <Calendar size={20} strokeWidth={2} className="text-white/60" />
            </div>
            <span className="text-zinc-900 font-light">Agenda</span>
          </div>
        </div>
      </div>
    </section>
  );
}
