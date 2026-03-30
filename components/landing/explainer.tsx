"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useRef, useState } from "react";
import { IntelligentGridBackground } from "../animated/bg_grid";

export default function Explainer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (!videoRef.current) return;

    videoRef.current.play();
    setPlaying(true);
  };

  return (
    <section className="relative w-full py-40 overflow-hidden">
      <IntelligentGridBackground />
      

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mb-16"
        >
          <h2 className="text-5xl font-semibold leading-[1.1] bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 bg-clip-text text-transparent">
            See Quanton OS in Action
          </h2>

          <p className="text-slate-600 mt-6 text-lg">
            Watch how businesses automate growth, operations, and strategy
            using a coordinated system of intelligent agents.
          </p>
        </motion.div>

        {/* Video Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Glow Ring */}
          <div className="absolute -inset-10 bg-gradient-to-r from-blue-200/40 via-slate-200/40 to-blue-200/40 blur-3xl opacity-70"></div>

          <div className="relative glass rounded-2xl backdrop-blur-xl bg-white/40 border border-white/40 shadow-2xl p-3">

            <div className="relative w-[360px] md:w-[900px] max-w-full aspect-video overflow-hidden rounded-xl bg-slate-900">

              {/* Video */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls
                poster="/images/video-thumbnail.jpg"
                onPlay={() => setPlaying(true)}
              >
                <source src="/video/The_Quanton_Thesis.mp4" type="video/mp4" />
              </video>

              {/* Play Overlay */}
              {!playing && (
                <div
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                >
                  <div className="p-6 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:scale-110 transition">
                    <Play className="text-white" size={40} />
                  </div>
                </div>
              )}

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}