import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { staggerContainer, staggerItem } from "../animations/motion";
import { IoMdMail, IoLogoWhatsapp } from "react-icons/io";
import { FaPhoneAlt, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full mt-[80px] lg:mt-[120px] 2xl:mt-[150px] bg-[var(--grey-11)]">
      <div className="w-full max-w-[1596px] mx-auto lg:px-[80px] 2xl:px-[162px] px-4 pb-[30px] pt-[50px]">
        <div className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="flex items-center gap-2 justify-center w-full"
          >
            <motion.img
              variants={staggerItem}
              src="/images/logo.svg"
              alt="Logo Image"
              className="w-[34px] h-[34px]"
            />
            <motion.h3 variants={staggerItem} className="font-semibold text-lg">
              YourBank
            </motion.h3>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="w-full flex items-center justify-center font-normal text-sm gap-3.5 text-white"
          >
            <motion.button variants={staggerItem}>
              <Link to={"/"} className="cursor-pointer">
                Home
              </Link>
            </motion.button>
            <motion.button variants={staggerItem}>
              <Link to={"/careers"}>Careers</Link>
            </motion.button>
            <motion.button variants={staggerItem}>
              <Link to={"/about"}>About</Link>
            </motion.button>
            <motion.button variants={staggerItem}>
              <Link to={"/security"}>Security</Link>
            </motion.button>
          </motion.div>
        </div>

        <hr className="w-full my-[30px] text-[var(--grey-15)]" />

        <div className="flex flex-wrap items-center gap-5 justify-center">
          <p className="flex items-center gap-px font-normal text-sm">
            <IoMdMail size={20} className="text-[var(--green-60)]" />
            <span>sirp2804@gmail.com</span>
          </p>
          <p className="flex items-center gap-px font-normal text-sm">
            <FaPhoneAlt size={20} className="text-[var(--green-60)]" />
            <span>+234 8146 799 964</span>
          </p>
          <p className="flex items-center gap-px font-normal text-sm">
            <FaLocationDot size={20} className="text-[var(--green-60)]" />
            <span>Akure, Ondo State</span>
          </p>
        </div>

        <hr className="w-full my-[30px] text-[var(--grey-15)]" />

        <div className="w-full relative min-h-[162px] pt-5">
          <div className="bg-[var(--grey-10)] pl-3 pr-6 pt-[50px] pb-[30px] border border-[var(--grey-15)] rounded-xl w-full flex flex-col items-center justify-center gap-5">
            <div className="flex items-center gap-2 absolute -top-1">
              <Link
                to="/"
                className="bg-[var(--green-60)] w-[44px] h-[44px] rounded-full flex items-center justify-center"
              >
                <IoLogoWhatsapp size={25} className="text-[var(--grey-15)]" />
              </Link>
              <Link
                to="/"
                className="bg-[var(--green-60)] w-[44px] h-[44px] rounded-full flex items-center justify-center"
              >
                <FaTwitter size={25} className="text-[var(--grey-15)]" />
              </Link>
              <Link
                to="/"
                className="bg-[var(--green-60)] w-[44px] h-[44px] rounded-full flex items-center justify-center"
              >
                <FaLinkedin size={25} className="text-[var(--grey-15)]" />
              </Link>
            </div>
            <p className="font-light text-sm text-[var(--grey-70)]">
              YourBank All Rights Reserved
            </p>
            <p className="font-light text-sm text-[var(--grey-70)]">
              Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
