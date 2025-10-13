import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react";
import { useEffect } from "react";

import {
  staggerContainer,
  staggerItem,
  fadeInDown,
  menuStaggerContainer,
  menuStaggerItem,
} from "../animations/motion";
import { iconToggle } from "../animations/motion";
import { useState } from "react";

const links = [
  {
    id: "home",
    label: "Home",
    linkto: "/",
  },
  {
    id: "careers",
    label: "Careers",
    linkto: "/careers",
  },
  {
    id: "about",
    label: "About",
    linkto: "/about",
  },
  {
    id: "security",
    label: "Security",
    linkto: "/security",
  },
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const pathToId: Record<string, string> = {
    "/": "home",
    "/careers": "careers",
    "/about": "about",
    "/security": "security",
    "/signup": "signup",
  };
  const currentId = pathToId[location.pathname] || "home";
  const [activeLink, setActiveLink] = useState(currentId);

  useEffect(() => {
    setActiveLink(currentId);
  }, [currentId]);

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-50 px-4 pt-10 lg:pt-[30px] lg:px-[80px] 2xl:px-[162px] max-w-[1596px] mx-auto bg-transparent">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative py-3.5 pl-6 pr-3.5 bg-[#1C1C1C] rounded-full flex items-center justify-between border border-[#262626] shadow-lg lg:hidden"
      >
        <motion.div variants={staggerItem} className="flex items-center gap-2">
          <img
            src="/images/logo.svg"
            alt="Logo Image"
            className="w-[26px] h-[26px]"
          />
          <h3>YourBank</h3>
        </motion.div>
        <motion.button
          variants={staggerItem}
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="px-3.5 py-1.5 rounded-[82px] bg-[#CAFF33] inline-flex items-center justify-center"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.span className="flex items-center" variants={iconToggle}>
            {isOpen ? (
              <IoClose color="black" size={28} />
            ) : (
              <HiMenuAlt3 color="black" size={28} />
            )}
          </motion.span>
        </motion.button>
      </motion.div>

      {isOpen && (
        <motion.div
          className="w-full px-4 absolute z-30 left-0 top-32"
          variants={fadeInDown}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.ul
            className="w-full flex flex-col items-center gap-4 bg-[#1C1C1C] border border-[#262626] rounded-2xl py-6 shadow-xl px-8"
            variants={menuStaggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[
              { id: "home", label: "Home", link: "/" },
              { id: "careers", label: "Careers", link: "/careers" },
              { id: "about", label: "About", link: "/about" },
              { id: "security", label: "Security", link: "/security" },
              { id: "signup", label: "Signup", link: "/signup" },
            ].map((item) => (
              <motion.li
                key={item.id}
                variants={menuStaggerItem}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full text-center relative px-4 py-2 cursor-pointer"
                onClick={() => {
                  setActiveLink(item.id);
                  setIsOpen(false);
                }}
              >
                {activeLink === item.id && (
                  <motion.div
                    layoutId="mobileActiveBackground"
                    className="absolute inset-0 rounded-xl bg-[#262626]"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}

                <motion.span
                  animate={{
                    color: activeLink === item.id ? "#FFFFFF" : "#A1A1AA",
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative font-medium text-lg z-10"
                >
                  <Link to={item.link}>{item.label}</Link>
                </motion.span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}

      <motion.div
        className="hidden lg:flex py-3.5 px-6 bg-[#1C1C1C] rounded-full  items-center justify-between border border-[#262626] shadow-lg"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex items-center gap-2" variants={staggerItem}>
          <img
            src="/images/logo.svg"
            alt="Logo Image"
            className="w-[26px] h-[26px]"
          />
          <h3>YourBank</h3>
        </motion.div>
        <div className="flex items-center gap-[26px] relative">
          {links.map((link) => (
            <motion.button
              variants={staggerItem}
              key={link.id}
              className="relative px-[18px] py-2.5 rounded-[82px] cursor-pointer text-sm font-normal"
              onClick={() => setActiveLink(link.id)}
            >
              {activeLink === link.id && (
                <motion.div
                  layoutId="activeBackground"
                  className="absolute inset-0 rounded-[82px] bg-[#262626]"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <motion.span
                animate={{
                  color: activeLink === link.id ? "#FFFFFF" : "#A1A1AA", // white if active, gray if inactive
                }}
                transition={{ duration: 0.3 }}
                className="relative font-normal text-sm z-10"
              >
                <Link to={link.linkto}>{link.label}</Link>
              </motion.span>
            </motion.button>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <Link to="/signup">
            <motion.button
              variants={staggerItem}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-[82px] bg-[#CAFF33] font-normal text-black text-sm cursor-pointer"
            >
              Sign Up
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
