import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="h-auto md:h-screen w-full relative overflow-hidden bg-black">
      <video 
        src={`${import.meta.env.BASE_URL}assets/hero-section.mp4`} 
        autoPlay 
        loop 
        muted 
        playsInline
        className="w-full h-auto md:h-full md:object-cover block" 
      />
    </section>
  );
}
