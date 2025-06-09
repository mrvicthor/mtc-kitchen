import galleryImage4 from "../assets/Homepage/image-gallery-4.png";
import galleryImage1 from "../assets/Homepage/image-gallery1.png";
import galleryImage2 from "../assets/Homepage/image-gallery2.png";
import galleryImage3 from "../assets/Homepage/image-gallery3.png";
import Button from "./shared/button";
import { motion } from "motion/react";

const Galleries = () => {
  const galleries = [
    galleryImage1,
    galleryImage2,
    galleryImage3,
    galleryImage4,
  ];
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
    <section className="py-[5.8125rem] flex justify-center px-4">
      <div className="flex flex-col items-center gap-10 w-[81.25rem]">
        <h3 className="text-[2rem] capitalize text-[#222222] tracking-[0px] font-bold">
          customer gallery
        </h3>
        <motion.div
          variants={container}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 overflow-hidden"
        >
          {galleries.map((gallery) => (
            <motion.img
              variants={item}
              key={gallery}
              src={gallery}
              alt="kitchen image"
              loading="lazy"
            />
          ))}
        </motion.div>
        <Button content="view more" />
      </div>
    </section>
  );
};

export default Galleries;
