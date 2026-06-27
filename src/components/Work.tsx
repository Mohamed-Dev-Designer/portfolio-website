import { motion } from "motion/react";

export function Work() {
  return (
    <section className="relative w-full overflow-hidden bg-white flex flex-col md:block">

      {/* Text Overlay */}
      <div className="relative md:absolute top-0 left-0 w-full md:h-full z-10 px-6 md:px-16 pt-12 md:pt-32 pointer-events-none pb-8 md:pb-0">
        <div className="flex flex-col items-start lg:pr-8 w-full max-w-2xl lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-[10vw] lg:text-[6vw] font-bold tracking-tighter leading-none uppercase"
          >
            EVERY PROJECT STARTS WITH A BLANK CANVAS.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display italic text-3xl md:text-5xl font-bold lg:ml-24 mt-4"
          >
            Mine usually ends with code, coffee, and a few sleepless         nights.
          </motion.p>
        </div>
      </div>

      <motion.img
        src={`${import.meta.env.BASE_URL}assets/work.png`}
        alt="Work"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-auto block"
      />
    </section>
  );
}
