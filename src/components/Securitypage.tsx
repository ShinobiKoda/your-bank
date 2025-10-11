import { motion } from "motion/react";
import {
  fadeInUp,
  fadeInRight,
  fadeInLeft,
  staggerContainer,
  staggerItem,
} from "./animations/motion";
import FAQs from "./FAQs";
import {
  type SecuritypageData,
  fetchSecuritypageData,
} from "../api/getSecuritypageData";
import { useState, useEffect } from "react";

const Securitypage = () => {
  const [data, setData] = useState<SecuritypageData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchSecuritypageData();
      setData(res);
    };

    fetchData();
  }, []);

  return (
    <div className="w-full">
      <motion.section
        className="w-full mt-[30px] lg:mt-[50px] max-w-[1596px] mx-auto px-4 lg:px-[80px] 2xl:mt-[53px] 2xl:px-[162px]"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="w-full bg-cover bg-center rounded-[20px] p-3.5 lg:hidden relative h-[580px]"
          style={{ backgroundImage: "url('/images/career-hero-bg.svg')" }}
          variants={staggerItem}
        >
          <motion.div
            className="w-full h-[200px] max-w-[700px] mx-auto"
            variants={fadeInUp}
          >
            <img
              src="/images/security-hero-img.svg"
              alt="Career Hero Img"
              className="w-full"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <div className="bg-[var(--grey-10)] rounded-[20px] p-6 absolute z-20 top-[226px] left-3.5 right-3.5 bottom-3.5 flex flex-col items-center justify-center gap-3.5 text-center">
              <h1 className="font-medium text-[28px]">
                Your Security is Our{" "}
                <span className="text-[var(--green-60)]">Top Priority</span>
              </h1>
              <p className="text-[var(--grey-70)]">
                At YourBank, we understand the importance of keeping your
                financial information secure. We employ robust security measures
                and advanced technologies to protect your personal and financial
                data. Rest assured that when you bank with us, your security is
                our utmost priority.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full hidden lg:flex bg-cover bg-center min-h-[248px] rounded-[20px] p-10 relative"
          style={{ backgroundImage: "url('/images/career-hero-bg.svg')" }}
          variants={staggerItem}
        >
          <motion.div
            className="relative z-20 rounded-tl-[20px] rounded-bl-[20px] space-y-5 rounded-tr-0 rounded-br-[60px] bg-[var(--grey-10)] p-[60px] max-w-[658px] max-h-[538px]"
            variants={fadeInLeft}
          >
            <h1 className="font-medium text-[48px] xl:text-[58px]">
              Your Security is Our{" "}
              <span className="text-[var(--green-60)]">Top Priority</span>
            </h1>
            <p className="font-light text-base text-[var(--grey-70)] xl:text-lg">
              At YourBank, we understand the importance of keeping your
              financial information secure. We employ robust security measures
              and advanced technologies to protect your personal and financial
              data. Rest assured that when you bank with us, your security is
              our utmost priority.
            </p>
          </motion.div>
          <motion.div
            className="w-full h-full max-w-[715px] absolute right-[40px] z-10 top-0"
            variants={fadeInRight}
          >
            <img
              src="/images/security-hero-img.svg"
              alt="Career Hero Image"
              className="w-full h-full"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      <section className="w-full mt-[80px] lg:mt-[120px] 2xl:mt-[150px] max-w-[1596px] mx-auto px-4 lg:px-[80px] 2xl:px-[162px]">
        <motion.div
          className="text-center lg:text-left space-y-2.5 xl:space-y-3.5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={staggerItem}
            className="font-normal text-[28px] lg:text-[38px] xl:text-[48px]"
          >
            How We <span className="text-[var(--green-60)]">Protect You</span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-sm font-light text-[var(--grey-70)] lg:text-base xl:text-lg leading-[150%]"
          >
            At YourBank, we prioritize the security and confidentiality of your
            financial information. Our state-of-the-art encryption technology
            and stringent data protection measures ensure your assets and
            transactions are safeguarded at all times
          </motion.p>
        </motion.div>
        <motion.div
          className="mt-[40px] grid grid-cols lg:grid-cols-2 gap-5 lg:gap-[30px] bg-cover bg-center rounded-t-[50px] rounded-b-[20px]"
          style={{ backgroundImage: "url('/images/protections-bg.svg')" }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {data &&
            data.protection.map((protection, index) => (
              <motion.div
                key={index}
                className="bg-center bg-cover p-6 rounded-[20px] border border-[var(--grey-15)] space-y-[18px] lg:space-y-5 xl:space-y-6"
                style={{
                  backgroundImage: "url('/images/protection-card.svg')",
                }}
                variants={staggerItem}
              >
                <div className="flex items-center gap-3.5">
                  <img src={protection.image} alt="Protection Icons" />
                  <h3 className="font-normal text-lg lg:text-xl xl:text-2xl">
                    {protection.title}
                  </h3>
                </div>
                <p className="font-light text-sm lg:text-base xl:text-lg text-[var(--grey-70)]">
                  {protection.description}
                </p>
              </motion.div>
            ))}
        </motion.div>
      </section>

      <FAQs />
    </div>
  );
};

export default Securitypage;
