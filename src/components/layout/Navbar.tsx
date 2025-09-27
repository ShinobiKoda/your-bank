import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react";
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
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const [activeLink, setActiveLink] = useState("home");

  return (
    <nav className="w-full px-4 pt-10 lg:pt-[30px] lg:px-[80px] max-w-[1596px] mx-auto">
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
            className="w-full flex flex-col items-center gap-8 bg-[#1C1C1C] border border-[#262626] rounded-xl py-3.5"
            variants={menuStaggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.li
              variants={menuStaggerItem}
              className="w-full text-center"
            >
              <Link to="/">Home</Link>
            </motion.li>

            <motion.li
              variants={menuStaggerItem}
              className="w-full text-center"
            >
              <Link to="/careers">Careers</Link>
            </motion.li>

            <motion.li
              variants={menuStaggerItem}
              className="w-full text-center"
            >
              <Link to="/about">About</Link>
            </motion.li>

            <motion.li
              variants={menuStaggerItem}
              className="w-full text-center"
            >
              <Link to="/security">Security</Link>
            </motion.li>

            <motion.li
              variants={menuStaggerItem}
              className="w-full text-center"
            >
              <Link to="/login">Login</Link>
            </motion.li>

            <motion.li
              variants={menuStaggerItem}
              className="w-full text-center"
            >
              <Link to="/signup">Signup</Link>
            </motion.li>
          </motion.ul>
        </motion.div>
      )}

      <motion.div
        className="hidden lg:flex py-3.5 px-6 bg-[#1C1C1C] rounded-full  items-center justify-between border border-[#262626] shadow-lg"
        variants={staggerContainer}
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
            <Link
              to={link.linkto}
              key={link.id}
              className="relative px-[18px] py-2.5 rounded-[82px] cursor-pointer"
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
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <Link to="/signup">
            <motion.button
              variants={staggerItem}
              className="font-normal text-sm cursor-pointer"
            >
              Sign Up
            </motion.button>
          </Link>
          <Link to="/login">
            <motion.button
              variants={staggerItem}
              className="px-6 py-3 rounded-[82px] bg-[#CAFF33] font-normal text-black text-sm cursor-pointer"
            >
              Login
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
