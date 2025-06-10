import facebookIcon from "../assets/Homepage/icon-facebook.svg";
import twitterIcon from "../assets/Homepage/icon-twitter.svg";
import instagramIcon from "../assets/Homepage/icon-instagram.svg";
import mhkLogo from "../assets/Homepage/mhk-logo.svg";
import shoppingCartLogo from "../assets/Homepage/shopping-cart.png";
import Menu from "./menu";
import { useEffect, useState } from "react";

const Header = () => {
  const [showMenu, setShowmenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        scrolled ? "bg-black" : "bg-transparent"
      } fixed top-0 w-full px-4 z-50`}
    >
      <div
        className={`max-w-[81.25rem] h-[3.4625rem]  md:h-[5.0625rem] mt-[1.875rem] mx-auto ${
          scrolled ? "" : "md:border-white md:border-b"
        } `}
      >
        <div className="md:hidden flex justify-between items-center">
          <button
            onClick={() => setShowmenu(!showMenu)}
            className="hamburger block relative cursor-pointer md:hidden"
          >
            {!showMenu ? (
              <>
                <span className="sr-only" aria-expanded="false">
                  Menu
                </span>
                <span className="bars"></span>
                <span className="bars"></span>
                <span className="bars"></span>
              </>
            ) : (
              <span className="font-bold text-2xl text-white">X</span>
            )}
          </button>
          <a href="#">
            <img src={mhkLogo} alt="mhk logo" className="h-8" />
          </a>
          <a href="#" className=" flex items-center justify-center text-white">
            <img src={shoppingCartLogo} alt="shopping cart" />
          </a>
        </div>
        {showMenu && (
          <div
            onClick={() => setShowmenu(!showMenu)}
            className="fixed top-[90px] bottom-0 md:hidden left-0 right-0 bg-[#979797] z-10 opacity-40"
          />
        )}
        <Menu showMenu={showMenu} handleMenu={setShowmenu} />
        <nav className="hidden md:flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <a href="#">
              <img src={facebookIcon} alt="facebook logo" className="h-4" />
            </a>
            <a href="#">
              <img src={twitterIcon} alt="twitter logo" className="h-4" />
            </a>
            <a href="#">
              <img src={instagramIcon} alt="instagram icon" className="h-4" />
            </a>
          </div>
          <div className="flex items-center gap-4 text-white uppercase">
            <a
              href="#"
              className="hover:text-[#d4b254] transition text-[0.8125rem]"
            >
              shop
            </a>
            <a
              href="#"
              className="hover:text-[#d4b254] transition text-[0.8125rem]"
            >
              plan my kitchen
            </a>
          </div>
          <a href="#">
            <img src={mhkLogo} alt="mhk logo" className="h-8" />
          </a>
          <div className="flex items-center gap-4 text-white uppercase">
            <a
              href="#"
              className="hover:text-[#d4b254] transition text-[0.8125rem]"
            >
              about us
            </a>
            <a
              href="#"
              className="hover:text-[#d4b254] transition text-[0.8125rem]"
            >
              gallery
            </a>
          </div>
          <a
            href="#"
            className="group w-[12rem] uppercase h-[3.125rem] border border-white hover:border-[#d4b254] transition rounded-3xl flex items-center justify-center text-white gap-4"
          >
            <span className="group-hover:text-[#d4b254]">my order </span>
            <img src={shoppingCartLogo} alt="shopping cart" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
