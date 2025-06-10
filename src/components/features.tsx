import kitchenLogo from "../assets/Homepage/features-image.png";
import { container, item } from "../utils";
import Button from "./shared/button";
import { motion } from "motion/react";

const Features = () => {
  return (
    <section className="grid md:grid-cols-2 lg:h-[41.6875rem] gap-[4.375rem] features overflow-hidden">
      <img
        src={kitchenLogo}
        alt="kitchen image"
        className="h-full object-cover"
        loading="lazy"
      />
      <motion.div
        variants={container}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        className="flex flex-col justify-center px-4 pb-24 pt-6 lg:px-0 lg:pt-0 lg:pb-0 bg-white"
      >
        <motion.p
          variants={item}
          className="text-[0.8125rem] text-[#d4b254] tracking-[3px] uppercase"
        >
          Quality Craftmanship from build to delivery
        </motion.p>
        <motion.h2
          variants={item}
          className="mt-[0.9375rem] text-2xl md:text-[2.625rem] font-bold features-header tracking-[0px] text-[#222222]"
        >
          Discover the beauty of a handmade kitchen
        </motion.h2>
        <motion.p
          variants={item}
          className="mt-8 text-[0.9375rem] features-description text-[#777777]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
          est sit amet sapien venenatis maximus vel in urna. Nam mauris arcu,
          feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna
          eu pharetra tincidunt, mauris purus ultrices.
        </motion.p>
        <motion.div variants={item} className="mt-[1.6875rem]">
          <Button content="about us" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Features;
