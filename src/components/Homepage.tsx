import { HiCheckCircle } from "react-icons/hi2";
import { motion } from "motion/react";
import {
  fadeInRight,
  scaleIn,
  staggerContainer,
  staggerItem,
} from "./animations/motion";

const Homepage = () => {
  const supportedCurrencies = [
    "/images/currency-bitcoin.svg",
    "/images/currency-dollar.svg",
    "/images/currency-eth.svg",
    "/images/currency-euro.svg",
  ];

  return (
    <div className="w-full">
      <section className="w-full mt-[50px] lg:mt-[90px] max-w-[1596px] mx-auto px-4 lg:px-[80px] 2xl:mt-[153px] 2xl:px-[162px] lg:grid lg:grid-cols-2 lg:gap-[100px]">
        <motion.div
          className="flex flex-col items-center justify-center w-full lg:items-start lg:justify-start max-w-[825px]"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={staggerItem}
            className="pl-2 pr-4 py-2 bg-[#262626] font-light text-[12px] lg:text-sm flex items-center gap-0.5 rounded-[61px]"
          >
            <HiCheckCircle className="text-[#CAFF33]" size={30} />
            <span>No LLC Required, No Credit Check.</span>
          </motion.p>
          <motion.h2
            variants={staggerItem}
            className="mt-[12px] font-medium text-[28px] lg:text-[38px] text-center lg:text-left"
          >
            Welcome to YourBank Empowering Your{" "}
            <span className="text-[#CAFF33]">Financial Journey</span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="mt-2 font-light text-sm lg:text-base text-white/90 text-center lg:text-left leading-[150%]"
          >
            At YourBank, our mission is to provide comprehensive banking
            solutions that empower individuals and businesses to achieve their
            financial goals. We are committed to delivering personalized and
            innovative services that prioritize our customers&apos; needs.
          </motion.p>
          <motion.button
            variants={staggerItem}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.98 }}
            className="mt-[30px] font-normal text-sm px-6 py-3.5 bg-[#CAFF33] text-black rounded-[82px]"
          >
            Open Account
          </motion.button>
        </motion.div>
        <div className="w-full max-w-[512px] mx-auto">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="w-full mt-[54.43px] lg:mt-0"
          >
            <img src="/images/cta-img.svg" alt="CTA Image" className="w-full" />
          </motion.div>
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="w-full flex justify-end mt-3.5"
          >
            <div className="bg-[#22251B] pl-[12.31px] pr-[5.13px] py-[5.13px] flex items-center rounded-[41.02px] gap-1.5">
              <p className="font-normal text-[12.4px]">Supported Currency</p>
              <div className="bg-[#1A1A1A] flex items-center rounded-[28.2px] gap-1 px-[5.13px] py-[5.13px]">
                {supportedCurrencies.map((currency, index) => (
                  <div
                    key={index}
                    className="w-[28px] h-[28px] bg-[#262626] rounded-full flex items-center justify-center"
                  >
                    <img src={currency} alt="Currency-img" className="w-3" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
