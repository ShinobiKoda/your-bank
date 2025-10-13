import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  staggerContainer,
  staggerItem,
  footerContainer,
  footerItem,
  footerSocialIcon,
  footerDivider,
  footerLegalBar,
  footerLegalItem,
  footerSocialRow,
} from "../animations/motion";
import { IoMdMail, IoLogoWhatsapp } from "react-icons/io";
import { FaPhoneAlt, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full mt-[80px] lg:mt-[120px] 2xl:mt-[150px] bg-[var(--grey-11)] relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_70%)]"
      >
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[680px] h-[680px] bg-[var(--green-60)]/5 blur-[120px] rounded-full" />
      </motion.div>
      <div className="w-full max-w-[1596px] mx-auto lg:px-[80px] 2xl:px-[162px] px-4 pb-[30px] pt-[50px] relative">
        <motion.div
          variants={footerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-6 lg:space-y-[40px]"
        >
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
            <motion.h3
              variants={staggerItem}
              className="font-semibold text-lg lg:text-2xl"
            >
              YourBank
            </motion.h3>
          </motion.div>
          <motion.div
            variants={footerItem}
            className="w-full flex items-center justify-center font-normal text-sm lg:text-base gap-3.5 text-white"
          >
            {[
              { to: "/", label: "Home" },
              { to: "/careers", label: "Careers" },
              { to: "/about", label: "About" },
              { to: "/security", label: "Security" },
            ].map((nav) => (
              <motion.button
                key={nav.to}
                variants={footerItem}
                whileHover={{ color: "var(--green-60)" }}
                whileTap={{ opacity: 0.85 }}
              >
                <Link
                  to={nav.to}
                  className="cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-[var(--green-60)] after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {nav.label}
                </Link>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <motion.hr
          variants={footerDivider}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="origin-left w-full my-[30px] lg:my-10 border-none h-px bg-[var(--grey-15)]"
        />

        <motion.div
          variants={footerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-wrap items-center gap-5 justify-center"
        >
          <motion.p
            variants={footerItem}
            className="flex items-center gap-px font-normal text-sm lg:text-base"
          >
            <IoMdMail size={20} className="text-[var(--green-60)]" />
            <span>sirp2804@gmail.com</span>
          </motion.p>
          <motion.p
            variants={footerItem}
            className="flex items-center gap-px font-normal text-sm lg:text-base"
          >
            <FaPhoneAlt size={20} className="text-[var(--green-60)]" />
            <span>+234 8146 799 964</span>
          </motion.p>
          <motion.p
            variants={footerItem}
            className="flex items-center gap-px font-normal text-sm lg:text-base"
          >
            <FaLocationDot size={20} className="text-[var(--green-60)]" />
            <span>Akure, Ondo State</span>
          </motion.p>
        </motion.div>

        <motion.hr
          variants={footerDivider}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="origin-left w-full my-[30px] lg:my-10 border-none h-px bg-[var(--grey-15)]"
        />

        {/* Mobile stacked social + legal */}
        <motion.div
          variants={footerLegalBar}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="w-full relative min-h-[162px] pt-5 lg:hidden"
        >
          <motion.div
            variants={footerItem}
            className="bg-[var(--grey-10)] pl-3 pr-6 pt-[50px] pb-[30px] border border-[var(--grey-15)] rounded-xl w-full flex flex-col items-center justify-center gap-5"
          >
            <motion.div
              variants={footerSocialRow}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="flex items-center gap-2 absolute -top-1"
            >
              {/* WhatsApp */}
              <motion.div
                variants={footerSocialIcon}
                whileHover="hover"
                whileTap="tap"
              >
                <a
                  href="https://wa.me/08146799964"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--green-60)] w-[44px] h-[44px] rounded-full flex items-center justify-center shadow-inner shadow-black/20"
                >
                  <IoLogoWhatsapp size={25} className="text-[var(--grey-15)]" />
                </a>
              </motion.div>
              <motion.div
                variants={footerSocialIcon}
                whileHover="hover"
                whileTap="tap"
              >
                <a
                  href="https://www.facebook.com/share/1A9dRt1Xsa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--green-60)] w-[44px] h-[44px] rounded-full flex items-center justify-center shadow-inner shadow-black/20"
                >
                  <FaFacebook size={25} className="text-[var(--grey-15)]" />
                </a>
              </motion.div>
              <motion.div
                variants={footerSocialIcon}
                whileHover="hover"
                whileTap="tap"
              >
                <a
                  href="https://x.com/sirp_xo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--green-60)] w-[44px] h-[44px] rounded-full flex items-center justify-center shadow-inner shadow-black/20"
                >
                  <FaTwitter size={25} className="text-[var(--grey-15)]" />
                </a>
              </motion.div>
            </motion.div>
            <motion.p
              variants={footerLegalItem}
              className="font-light text-sm text-[var(--grey-70)]"
            >
              YourBank All Rights Reserved
            </motion.p>
            <motion.p
              variants={footerLegalItem}
              className="font-light text-sm text-[var(--grey-70)]"
            >
              Privacy Policy | Terms of Service
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Desktop horizontal bar */}
        <motion.div
          variants={footerLegalBar}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="hidden lg:flex w-full items-center justify-between bg-[var(--grey-10)] border border-[var(--grey-15)] pl-3 pr-6 py-3 rounded-[100px]"
        >
          <motion.div
            variants={footerSocialRow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="flex items-center gap-2"
          >
            <motion.div
              variants={footerSocialIcon}
              whileHover="hover"
              whileTap="tap"
            >
              <a
                href="https://wa.me/08146799964"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--green-60)] w-[44px] h-[44px] rounded-full flex items-center justify-center shadow-inner shadow-black/20"
              >
                <IoLogoWhatsapp size={25} className="text-[var(--grey-15)]" />
              </a>
            </motion.div>
            <motion.div
              variants={footerSocialIcon}
              whileHover="hover"
              whileTap="tap"
            >
              <a
                href="https://www.facebook.com/share/1A9dRt1Xsa/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--green-60)] w-[44px] h-[44px] rounded-full flex items-center justify-center shadow-inner shadow-black/20"
              >
                <FaFacebook size={25} className="text-[var(--grey-15)]" />
              </a>
            </motion.div>
            <motion.div
              variants={footerSocialIcon}
              whileHover="hover"
              whileTap="tap"
            >
              <a
                href="https://x.com/sirp_xo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--green-60)] w-[44px] h-[44px] rounded-full flex items-center justify-center shadow-inner shadow-black/20"
              >
                <FaTwitter size={25} className="text-[var(--grey-15)]" />
              </a>
            </motion.div>
          </motion.div>
          <motion.p
            variants={footerLegalItem}
            className="font-light text-sm text-[var(--grey-70)]"
          >
            YourBank All Rights Reserved
          </motion.p>
          <motion.p
            variants={footerLegalItem}
            className="font-light text-sm text-[var(--grey-70)]"
          >
            Privacy Policy | Terms of Service
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
