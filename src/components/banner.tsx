import Button from "./shared/button";
import { motion } from "motion/react";

const Banner = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <section className="h-dvh w-full bg-[url('/src/assets/Homepage/hero-image.png')] bg-cover bg-no-repeat relative">
      <motion.div
        variants={container}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        className="max-w-[42.875rem] absolute left-[50%] -translate-x-[50%] top-[15.25rem]"
      >
        <motion.p
          variants={item}
          className="text-center tracking-[3px] banner-text uppercase text-white text-[0.8125rem]"
        >
          design and order your new kitchen online today
        </motion.p>
        <motion.div
          variants={item}
          className="mt-3 flex flex-col items-center gap-[1.875rem]"
        >
          <h1
            className="font-bold text-2xl md:text-4xl lg:text-[3.25rem] text-center text-white tracking-tight
          "
          >
            Bespoke & made to measure handmade kitchen design
          </h1>
          <Button content="order now" />
        </motion.div>
      </motion.div>
      <div className="flex items-center justify-center gap-2 absolute bottom-[1.875rem] left-[50%] -translate-x-[50%]">
        <button className="h-[0.3125rem] w-[3.125rem] rounded-[3px] bg-[#d4b254] cursor-pointer"></button>
        <button className="h-[0.3125rem] w-[3.125rem] rounded-[3px] bg-white cursor-pointer"></button>
        <button className="h-[0.3125rem] w-[3.125rem] rounded-[3px] bg-white cursor-pointer"></button>
      </div>
    </section>
  );
};

export default Banner;
