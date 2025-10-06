import {motion} from "motion/react"
import { staggerContainer, fadeInUp } from "./animations/motion";


const BottomCTA = () => {
  return (
    <motion.section
      className="w-full px-4 lg:px-[80px] 2xl:px-[162px] max-w-[1596px] mx-auto mt-[80px] lg:mt-[120px] 2xl:mt-[150px]"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      aria-labelledby="bottom-cta-heading"
    >
      <motion.div
        variants={fadeInUp}
        className="w-full bg-center bg-cover bg-no-repeat min-h-[360px] rounded-[20px] flex flex-col items-center text-center justify-center p-[30px] lg:p-[60px] lg:flex-row lg:justify-between lg:text-left lg:gap-[150px] lg:max-h-[223px]"
        style={{ backgroundImage: "url('/images/bottom-cta-bg.svg')" }}
      >
        <motion.div
          className="w-full max-w/[874px]"
          variants={staggerContainer}
        >
          <motion.h2
            id="bottom-cta-heading"
            className="font-normal text-2xl lg:text-[30px] mb-3.5"
            variants={fadeInUp}
          >
            <span>Start your financial journey with </span>
            <span className="text-[var(--green-60)]">YourBank today!</span>
          </motion.h2>
          <motion.p
            className="font-light text-sm text-[var(--grey-70)] mb-6 lg:text-base"
            variants={fadeInUp}
          >
            Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus
            pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus.
            Nascetur viverra arcu sed amet cursus purus.
          </motion.p>
        </motion.div>
        <motion.button
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="text-nowrap px-6 py-3.5 rounded-[82px] bg-[var(--green-60)] text-[var(--grey-11)] font-normal text-sm cursor-pointer"
        >
          Open Account
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default BottomCTA;
