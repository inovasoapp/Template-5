"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Play } from "lucide-react";

interface VideoPlayerProps {
  title: string;
  videoUrl: string;
}

export default function VideoPlayerDialog({
  title,
  videoUrl,
}: VideoPlayerProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="group flex items-center justify-center gap-2 cursor-pointer px-1">
          <div className="w-10 h-10 rounded-full bg-amber-600 group-hover:brightness-110 transition-all duration-300 text-zinc-900 flex items-center justify-center">
            <Play size={20} />
          </div>

          <span className="relative text-zinc-900 font-light group-hover:text-zinc-800   ">
            <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px rounded-full bg-amber-700 transition-all duration-300" />
            {title}
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-0 border-none bg-transparent shadow-none">
        <DialogTitle className="sr-only">Apresentação</DialogTitle>
        <video
          src={videoUrl}
          controls
          autoPlay
          playsInline
          className="w-auto h-[calc(100vh-8rem)] rounded-lg shadow-2xl mx-auto"
        />
      </DialogContent>
    </Dialog>
  );
}
