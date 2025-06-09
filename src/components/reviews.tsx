import { motion, AnimatePresence } from "framer-motion";
import arrowLeft from "../assets/Homepage/icon-arrow-left.svg";
import arrowRight from "../assets/Homepage/icon-arrow-right.svg";
import { useState } from "react";
import Button from "./shared/button";

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

  const handleNext = () =>
    activeIndex === reviews.length
      ? setActiveIndex(1)
      : setActiveIndex((prevIndex) => prevIndex + 1);

  const handlePrevious = () =>
    activeIndex === 1
      ? setActiveIndex(reviews.length)
      : setActiveIndex((prevIndex) => prevIndex - 1);

  return (
    <section className="h-[37.5rem] flex flex-col items-center justify-center bg-[#eeeeee]">
      <div className="flex items-center gap-12 px-4">
        <button className=" cursor-pointer " onClick={handlePrevious}>
          <img src={arrowLeft} alt="left arrow icon" />
        </button>

        <div className="flex flex-col max-w-[37.5rem]">
          <p className="uppercase text-[0.8125rem] text-[#d4b254] text-center">
            what our customers say
          </p>
          <p className="text-2xl md:text-[2rem] text-[#222222] text-center">
            Over 35 years experience designing handmade kitchens
          </p>
          <div className="mt-6 flex flex-col items-center">
            <AnimatePresence mode="wait">
              {reviews.map((review) =>
                activeIndex === review.id ? (
                  <motion.article
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="text-[#777777] text-lg text-center">
                      {review.review}
                    </p>
                    <p className="text-center text-[#777777] text-[0.9375rem] mt-[0.6875rem]">
                      {review.reviewer}
                    </p>
                  </motion.article>
                ) : null
              )}
            </AnimatePresence>
            <Button
              content="frequently asked questions"
              styles=" max-w[26.1875rem] lg:w-[26.1875rem] mt-[2.25rem] px-4"
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
