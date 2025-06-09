import facebookIcon from "../assets/Homepage/icon-facebook.svg";
import twitterIcon from "../assets/Homepage/icon-twitter.svg";
import instagramIcon from "../assets/Homepage/icon-instagram.svg";
import mhkLogo from "../assets/Homepage/mhk-logo.svg";
import shoppingCartLogo from "../assets/Homepage/shopping-cart.png";
import Menu from "./menu";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowmenu] = useState(false);
  console.log(showMenu);
  return (
    <header className="fixed top-0 w-full px-4">
      <div className="max-w-[81.25rem] h-[5.0625rem] mt-[1.875rem] mx-auto md:border-white md:border-b">
        <div className="md:hidden flex justify-between items-center">
          <button
            onClick={() => setShowmenu(!showMenu)}
            className="hamburger block relative cursor-pointer md:hidden"
          >
            <span className="sr-only" aria-expanded="false">
              Menu
            </span>
            <span className="bars"></span>
            <span className="bars"></span>
            <span className="bars"></span>
          </button>
          <a href="#">
            <img src={mhkLogo} alt="mhk logo" className="h-8" />
          </a>
          <a href="#" className=" flex items-center justify-center text-white">
            <img src={shoppingCartLogo} alt="shopping cart" />
          </a>
        </div>
        {showMenu && (
          <div className="fixed top-[90px] bottom-0 md:hidden left-0 right-0 bg-[#979797] z-10 opacity-40" />
        )}
        <Menu showMenu={showMenu} />
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
            <a href="#">shop</a>
            <a href="#">plan my kitchen</a>
          </div>
          <a href="#">
            <img src={mhkLogo} alt="mhk logo" className="h-8" />
          </a>
          <div className="flex items-center gap-4 text-white uppercase">
            <a href="#">about us</a>
            <a href="#">gallery</a>
          </div>
          <a
            href="#"
            className="w-[12rem] uppercase h-[3.125rem] border border-white rounded-3xl flex items-center justify-center text-white gap-4"
          >
            my order <img src={shoppingCartLogo} alt="shopping cart" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
