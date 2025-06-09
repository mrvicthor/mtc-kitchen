import { motion, AnimatePresence } from "framer-motion";
import arrowLeft from "../assets/Homepage/icon-arrow-left.svg";
import arrowRight from "../assets/Homepage/icon-arrow-right.svg";
import { useState } from "react";
import Button from "./shared/button";
import { variants } from "../utils";

const reviews = [
  {
    id: 1,
    reviewer: "jane Dundee",
    review:
      "Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.",
  },
  {
    id: 2,
    reviewer: "john doe",
    review:
      "Had an awesome experience. Will definitely recommend you to my friends",
  },
  {
    id: 3,
    reviewer: "john wick",
    review:
      "Great customer experience. Will definitely recommend this to friends and family",
  },
];

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section className="h-[37.5rem] flex flex-col items-center justify-center bg-[#eeeeee]">
      <div className="flex items-center gap-12 px-4">
        <button className=" cursor-pointer " onClick={handlePrevious}>
          <img src={arrowLeft} alt="left arrow icon" />
        </button>

        <div className="flex flex-col max-w-[37.5rem]">
          <p className="uppercase text-[0.8125rem] text-[#d4b254] md:text-center">
            what our customers say
          </p>
          <p className="text-lg md:text-[2rem] text-[#222222] md:text-center">
            Over 35 years experience designing handmade kitchens
          </p>
          <div className="mt-6 flex flex-col items-center relative overflow-hidden h-[18rem] lg:h-[12.6875rem]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.article
                key={reviews[activeIndex].id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full"
                transition={{ duration: 0.5 }}
              >
                <p className="text-[#777777] text-lg text-center">
                  {reviews[activeIndex].review}
                </p>
                <p className="text-center text-[#777777] text-[0.9375rem] mt-[0.6875rem]">
                  {reviews[activeIndex].reviewer}
                </p>
              </motion.article>
            </AnimatePresence>
            <Button
              content="frequently asked questions"
              styles=" max-w[26.1875rem] lg:w-[26.1875rem] mt-[2.25rem] px-4 absolute bottom-0"
            />
          </div>
        </div>
        <button onClick={handleNext} className="cursor-pointer ">
          <img src={arrowRight} alt="right arrow icon" />
        </button>
      </div>
    </section>
  );
};

export default Reviews;
