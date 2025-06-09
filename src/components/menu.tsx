import { AnimatePresence, motion } from "motion/react";
import facebookIcon from "../assets/Homepage/icon-facebook.svg";
import twitterIcon from "../assets/Homepage/icon-twitter.svg";
import instagramIcon from "../assets/Homepage/icon-instagram.svg";

type MenuProps = {
  showMenu: boolean;
};
const Menu = ({ showMenu }: MenuProps) => {
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  };
  return (
    <AnimatePresence>
      {showMenu && (
        <motion.section
          initial={{ width: 0 }}
          animate={{ width: "100vw" }}
          exit={{
            width: 0,
            transition: { delay: 0.7, duration: 0.3 },
          }}
          className={`md:hidden fixed h-screen w-full bg-[#eeeeee] left-0 right-0 top-[4.9375rem] flex flex-col items-center z-[10000]`}
        >
          <motion.ul
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            className="mt-12 flex flex-col gap-6 items-center md:hidden uppercase"
          >
            <motion.li
              variants={itemVariants}
              className="text-[#d4b254] hover:text-black"
            >
              <a href="#">shop</a>
            </motion.li>
            <motion.li
              variants={itemVariants}
              className="text-[#d4b254] hover:text-black"
            >
              <a href="#">plan my kitchen</a>
            </motion.li>
            <motion.li
              variants={itemVariants}
              className="text-[#d4b254] hover:text-black"
            >
              <a href="#">about us</a>
            </motion.li>
            <motion.li
              variants={itemVariants}
              className="text-[#d4b254] hover:text-black"
            >
              <a href="#">gallery</a>
            </motion.li>
            <motion.li
              variants={itemVariants}
              className="flex gap-3 items-center "
            >
              <a href="#">
                <img
                  src={facebookIcon}
                  alt="facebook logo"
                  className="h-4 hover:text-[#d4b254]"
                />
              </a>
              <a href="#">
                <img
                  src={twitterIcon}
                  alt="twitter logo"
                  className="h-4 hover:text-[#d4b254]"
                />
              </a>
              <a href="#">
                <img
                  src={instagramIcon}
                  alt="instagram icon"
                  className="h-4 hover:text-[#d4b254]"
                />
              </a>
            </motion.li>
          </motion.ul>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Menu;
