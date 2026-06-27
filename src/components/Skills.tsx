import { motion } from "motion/react";

export function Skills() {
  const skills = [
    { name: "FRONTEND DEV", align: "self-start", delay: 0.1 },
    { name: "SYSTEM ARCHITECTURE", align: "self-end", delay: 0.2 },
    { name: "REACT", align: "self-center", delay: 0.15 },
    { name: "NODE.JS", align: "self-start lg:ml-20", delay: 0.3 },
    { name: "TYPESCRIPT", align: "self-end lg:mr-12", delay: 0.25 },
    { name: "UI/UX DESIGN", align: "self-center", delay: 0.4 },
    { name: "FULL STACK DEV", align: "self-start", delay: 0.35 },
    { name: "DATABASE DESIGN", align: "self-end", delay: 0.5 },
  ];

  return (
    <section className="pt-24 flex flex-col relative w-full border-t-2 border-gray-100 bg-white">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 px-6 md:px-16">
        
        {/* Left Side: Title & Paragraph */}
        <div className="lg:col-span-5 flex flex-col items-start lg:pr-8">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-[15vw] lg:text-[8vw] font-bold tracking-tighter leading-none uppercase"
          >
            WHAT I DO?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display italic text-3xl md:text-5xl font-bold lg:ml-24 mt-2"
          >
            (and love doing)
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-16 text-lg md:text-xl leading-relaxed text-gray-800 max-w-md font-medium"
          >
            I focus on building robust software architectures through
            strategy, clean code, scalable systems, and intuitive design—everything a product needs to stand out,
            perform, and grow.
          </motion.p>
        </div>

        {/* Right Side: Scattered Skills */}
        <div className="lg:col-span-7 relative min-h-[60vh] flex flex-col justify-center space-y-8 md:space-y-12">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: skill.delay, duration: 0.7, type: "spring", bounce: 0.4 }}
              className={`font-display font-bold uppercase text-3xl md:text-5xl lg:text-[4vw] leading-none ${skill.align}`}
            >
              {skill.name}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
