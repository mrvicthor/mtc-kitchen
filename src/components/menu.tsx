import { AnimatePresence, motion } from "motion/react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { containerVariants, itemVariants } from "../utils";

type MenuProps = {
  showMenu: boolean;
  handleMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu = ({ showMenu, handleMenu }: MenuProps) => {
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
          className={`md:hidden fixed h-[28rem] w-full bg-[#eeeeee] left-0 right-0 top-[4.9375rem] flex flex-col items-center z-[10000]`}
        >
          <motion.ul
            variants={containerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="mt-12 flex flex-col gap-6 items-center md:hidden uppercase"
          >
            <motion.li
              onClick={() => handleMenu(!showMenu)}
              variants={itemVariants}
              className="text-[#d4b254] hover:text-black"
            >
              <a href="#">shop</a>
            </motion.li>
            <motion.li
              onClick={() => handleMenu(!showMenu)}
              variants={itemVariants}
              className="text-[#d4b254] hover:text-black"
            >
              <a href="#">plan my kitchen</a>
            </motion.li>
            <motion.li
              onClick={() => handleMenu(!showMenu)}
              variants={itemVariants}
              className="text-[#d4b254] hover:text-black"
            >
              <a href="#">about us</a>
            </motion.li>
            <motion.li
              onClick={() => handleMenu(!showMenu)}
              variants={itemVariants}
              className="text-[#d4b254] hover:text-black"
            >
              <a href="#">gallery</a>
            </motion.li>
            <motion.li
              variants={itemVariants}
              className="flex gap-3 items-center "
            >
              <a
                href="#"
                onClick={() => handleMenu(!showMenu)}
                className="group"
              >
                <FaFacebookF
                  size={16}
                  className="text-white group-hover:text-[#d4b254] transition-colors"
                />
              </a>
              <a
                href="#"
                onClick={() => handleMenu(!showMenu)}
                className="group"
              >
                <FaTwitter
                  size={16}
                  className="text-white group-hover:text-[#d4b254] transition-colors"
                />
              </a>
              <a
                href="#"
                onClick={() => handleMenu(!showMenu)}
                className="group"
              >
                <FaInstagram
                  size={16}
                  className="text-white group-hover:text-[#d4b254] transition-colors"
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
