'use client';

import { motion } from 'framer-motion';


import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (

  <motion.footer
  id='plugin'
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Enter the  world of Kovon Metaverse
        </h4>
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            Enter the world of Kovon Metaverse
          </span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">

          <h4 className="font-extrabold text-[24px] text-white">
            Kovon
          </h4>


          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2025 - 2026 Kovon. All rights reserved.
          </p>

          <a id="plugin" href="https://www.w3schools.com/howto/howto_css_button_on_image.asp"><img src="instagram.svg" /></a>
          <a id="facebook" href='https://www.facebook.com/login'><img src="facebook.svg" /></a>
          <a id='twitter' href="https://x.com/i/flow/login?redirect_after_login=%2Fexplore"><img src="twitter.svg" /></a>

          <a id='float' href="https://api.whatsapp.com/send?phone=+919829395897&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." class="float" target="_blank"><img src="whatsapp.svg" />
            <i class="fa fa-whatsapp my-float"></i></a>
            
          </div>
        </div>
      </div> 
  </motion.footer>
);

export default Footer;
