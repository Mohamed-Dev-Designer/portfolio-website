import { motion } from "motion/react";

export function Portfolio1() {
  return (
    <section className="w-full relative overflow-hidden bg-white">
      <motion.img
        src="/assets/portfolio-1.png"
        alt="Portfolio — CodeGenius"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-auto block"
      />
    </section>
  );
}
