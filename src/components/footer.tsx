import mhkLogo from "../assets/Homepage/mhk-logo.svg";
import facebookIcon from "../assets/Homepage/icon-facebook.svg";
import twitterIcon from "../assets/Homepage/icon-twitter.svg";
import instagramIcon from "../assets/Homepage/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className=" w-full bg-black/90 flex justify-center px-4 overflow-hidden">
      <div className="mx-auto max-w-screen-xl w-full py-10 space-y-6">
        <div className="flex items-center gap-8 flex-wrap">
          <div className="h-[1px] bg-white flex-1 min-w-[3.125rem]" />
          <img src={mhkLogo} alt="mhk logo" className="h-8" />
          <div className="h-[1px] bg-white flex-1 min-w-[3.125rem]" />
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center md:justify-items-normal text-white max-w-screen-xl w-[60.5rem]">
            <div>
              <h3 className="text-2xl font-bold tracking-[0px] capitalize text-center md:text-left">
                about
              </h3>
              <div className="flex flex-col gap-4 uppercase mt-6 md:mt-[2.1875rem] items-center md:items-start">
                <a
                  href="#"
                  className="hover:text-[#d4b254] text-[0.8125rem] text-center md:text-left opacity-80"
                >
                  shop
                </a>
                <a
                  href="#"
                  className="hover:text-[#d4b254] text-[0.8125rem] text-center md:text-left opacity-80"
                >
                  plan my kitchen
                </a>
                <a
                  href="#"
                  className="hover:text-[#d4b254] text-[0.8125rem] text-center md:text-left opacity-80"
                >
                  about us
                </a>
                <a
                  href="#"
                  className="hover:text-[#d4b254] text-[0.8125rem] text-center md:text-left opacity-80"
                >
                  gallery
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-[0px] capitalize text-center md:text-left">
                service
              </h3>
              <div className="flex flex-col gap-4 uppercase mt-6 md:mt-[2.1875rem] items-center md:items-start">
                <a
                  href="#"
                  className="hover:text-[#d4b254] text-[0.8125rem] text-center md:text-left opacity-80"
                >
                  faq
                </a>
                <a
                  href="#"
                  className="hover:text-[#d4b254] text-[0.8125rem] text-center md:text-left opacity-80"
                >
                  contact
                </a>
                <a
                  href="#"
                  className="hover:text-[#d4b254] text-[0.8125rem] text-center md:text-left opacity-80"
                >
                  how to buy
                </a>
                <a
                  href="#"
                  className="hover:text-[#d4b254] text-[0.8125rem] text-center md:text-left opacity-80"
                >
                  downloads
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-[0px] capitalize text-center md:text-left">
                info
              </h3>
              <div className="flex flex-col gap-4 uppercase mt-6 md:mt-[2.1875rem] items-center md:items-start">
                <a
                  href="#"
                  className="hover:text-[#d4b254] text-[0.8125rem] text-center md:text-left opacity-80"
                >
                  delivery
                </a>
                <a
                  href="#"
                  className="hover:text-[#d4b254] text-[0.8125rem] text-center md:text-left opacity-80"
                >
                  terms
                </a>
                <a
                  href="#"
                  className="hover:text-[#d4b254] text-[0.8125rem] text-center md:text-left opacity-80"
                >
                  privacy
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-[0px] capitalize">
                follow
              </h3>
              <div className="flex gap-4 uppercase mt-[2.1875rem]">
                <a href="#" className="hover:text-[#d4b254] text-[0.8125rem]">
                  <img
                    src={facebookIcon}
                    alt="facebook logo"
                    className="h-10"
                  />
                </a>
                <a href="#" className="hover:text-[#d4b254] text-[0.8125rem]">
                  <img src={twitterIcon} alt="facebook logo" className="h-10" />
                </a>
                <a href="#" className="hover:text-[#d4b254] text-[0.8125rem]">
                  <img
                    src={instagramIcon}
                    alt="facebook logo"
                    className="h-10"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <small className="text-white opacity-80">
            Copyright Online MTC Home Kitchens 2018 - All rights reserved.
          </small>
          <small className="text-white opacity-80">
            Responsive website design, Development & Hosting by mtc.
          </small>
        </div>
        <div className="h-[1px] bg-white w-full" />
      </div>
    </footer>
  );
};

export default Footer;
