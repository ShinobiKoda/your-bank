import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
} from "./animations/motion";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import {
  fetchCareerpageData,
  type CareerpageData,
} from "../api/getCareerspageData";
import FAQs from "./FAQs";
import BottomCTA from "./BottomCTA";

const Careerspage = () => {
  const [data, setData] = useState<CareerpageData | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const d = await fetchCareerpageData();
        if (mounted) setData(d);
      } catch {
        // ignore error for now
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="w-full relative">
      <div
        className={`w-full transition-[filter] duration-700 ease-[cubic-bezier(.4,0,.2,1)]`}
      >
        <section className="w-full mt-[30px] lg:mt-[50px] max-w-[1596px] mx-auto px-4 lg:px-[80px] 2xl:mt-[53px] 2xl:px-[162px]">
          <motion.div
            className="w-full bg-cover bg-center rounded-[20px] p-3.5 lg:hidden relative h-[750px]"
            style={{ backgroundImage: "url('/images/career-hero-bg.svg')" }}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="w-full h-[200px] max-w-[700px] mx-auto"
              variants={fadeInUp}
            >
              <img
                src="/images/career-hero-img.svg"
                alt="Career Hero Img"
                className="w-full"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="bg-[var(--grey-10)] rounded-[20px] p-6 absolute z-20 top-[226px] left-3.5 right-3.5 bottom-3.5 flex flex-col items-center justify-center gap-3.5 text-center">
                <h1 className="font-medium text-[28px]">
                  Welcome to{" "}
                  <span className="text-[var(--green-60)]">YourBank</span>{" "}
                  Careers
                </h1>
                <p className="text-[var(--grey-70)]">
                  Join our team and embark on a rewarding journey in the banking
                  industry. At YourBank, we are committed to fostering a culture
                  of excellence and providing opportunities for professional
                  growth. With a focus on innovation, customer service, and
                  integrity, we strive to make a positive impact in the lives of
                  our customers and communities. Join us today and be a part of
                  our mission to shape the future of banking.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full hidden lg:flex bg-cover bg-center min-h-[648px] rounded-[20px] p-10 relative"
            style={{ backgroundImage: "url('/images/career-hero-bg.svg')" }}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="relative z-20 rounded-tl-[20px] rounded-bl-[20px] space-y-5 rounded-tr-0 rounded-br-[60px] bg-[var(--grey-10)] p-[60px] max-w-[658px] max-h-[490px]"
              variants={fadeInLeft}
            >
              <h1 className="font-medium text-[48px] xl:text-[58px]">
                Welcome to{" "}
                <span className="text-[var(--green-60)]">YourBank</span>{" "}
                Careers!
              </h1>
              <p className="font-light text-base text-[var(--grey-70)] xl:text-lg">
                Join our team and embark on a rewarding journey in the banking
                industry. At YourBank, we are committed to fostering a culture
                of excellence and providing opportunities for professional
                growth. With a focus on innovation, customer service, and
                integrity, we strive to make a positive impact in the lives of
                our customers and communities. Join us today and be a part of
                our mission to shape the future of banking.
              </p>
            </motion.div>
            <motion.div
              className="w-full h-full max-w-[715px] absolute right-[40px] z-10 top-0"
              variants={fadeInRight}
            >
              <img
                src="/images/career-hero-img.svg"
                alt="Career Hero Image"
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        </section>

        <section className="w-full mt-[80px] lg:mt-[120px] 2xl:mt-[150px] max-w-[1596px] mx-auto px-4 lg:px-[80px] 2xl:px-[162px]">
          <motion.div
            className="w-full text-center lg:text-left space-y-2.5"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-medium text-[28px] lg:text-[38px] xl:text-[48px]">
              Our <span className="text-[var(--green-60)]">Values</span>
            </h2>
            <p className="font-light text-sm text-[var(--grey-70)] lg:text-base xl:text-lg">
              At YourBank, our values form the foundation of our organization
              and guide our actions. We believe in upholding the highest
              standards of integrity, delivering exceptional service, and
              embracing innovation. These values define our culture and shape
              the way we work together to achieve our goals.
            </p>
          </motion.div>

          <motion.div
            className="mt-[50px] lg:mt-[60px] xl:mt-[80px] space-y-[50px] lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-[60px] xl:gap-[80px]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div
              className="space-y-3.5 pl-5 border-l border-[var(--green-60)]"
              variants={staggerItem}
            >
              <h3 className="font-medium text-3xl text-[var(--grey-30)] lg:text-[40px] xl:text-[58px]">
                Intergrity
              </h3>
              <p className="font-light text-sm lg:text-base xl:text-lg">
                We conduct ourselves with utmost honesty, transparency, and
                ethical behavior. We believe in doing what is right for our
                customers, colleagues, and stakeholders, even when faced with
                difficult choices.
              </p>
            </motion.div>
            <motion.div
              className="space-y-3.5 pl-5 border-l border-[var(--green-60)]"
              variants={staggerItem}
            >
              <h3 className="font-medium text-3xl text-[var(--grey-30)] lg:text-[40px] xl:text-[58px] text-nowrap">
                Customer Centricity
              </h3>
              <p className="font-light text-sm lg:text-base xl:text-lg">
                Our customers are at the heart of everything we do. We are
                dedicated to understanding their needs, providing personalized
                solutions, and delivering exceptional service that exceeds
                expectations.
              </p>
            </motion.div>
            <motion.div
              className="space-y-3.5 pl-5 border-l border-[var(--green-60)]"
              variants={staggerItem}
            >
              <h3 className="font-medium text-3xl text-[var(--grey-30)] lg:text-[40px] xl:text-[58px]">
                Collaboration
              </h3>
              <p className="font-light text-sm lg:text-base xl:text-lg">
                We foster a collaborative and inclusive work environment, where
                teamwork and diversity are celebrated. By leveraging the unique
                strengths and perspectives of our employees, we drive innovation
                and achieve greater success together.
              </p>
            </motion.div>
            <motion.div
              className="space-y-3.5 pl-5 border-l border-[var(--green-60)]"
              variants={staggerItem}
            >
              <h3 className="font-medium text-3xl text-[var(--grey-30)] lg:text-[40px] xl:text-[58px]">
                Innovation
              </h3>
              <p className="font-light text-sm lg:text-base xl:text-lg">
                We embrace change and constantly seek innovative solutions to
                meet the evolving needs of our customers. We encourage our
                employees to think creatively, challenge conventions, and
                explore new ideas to drive the future of banking.
              </p>
            </motion.div>
          </motion.div>
        </section>

        <section className="w-full mt-[80px] lg:mt-[120px] 2xl:mt-[150px] max-w-[1596px] mx-auto px-4 lg:px-[80px] 2xl:px-[162px]">
          <motion.div
            className="w-full text-center lg:text-left space-y-2.5"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-medium text-[28px] lg:text-[38px] xl:text-[48px]">
              Our <span className="text-[var(--green-60)]">Benefits</span>
            </h2>
            <p className="font-light text-sm text-[var(--grey-70)] lg:text-base xl:text-lg">
              At YourBank, we value our employees and are dedicated to their
              well-being and success. We offer a comprehensive range of benefits
              designed to support their personal and professional growth.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-12 mt-[60px] xl:mt-[80px] lg:grid lg:grid-cols-2 lg:gap-[60px] xl:gap-[100px]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {data?.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-tl-[40px] lg:rounded-br-[40px] rounded-bl-[14px] lg:rounded-tr-[14px] rounded-br-[14px] space-y-5"
                style={{ background: "var(--custom-gradient" }}
                variants={staggerItem}
              >
                <div className="flex items-center gap-2.5">
                  <img src={benefit.image} alt="Benefit Icon" />
                  <h4 className="font-base text-normal lg:text-xl xl:text-2xl">
                    {benefit.title}
                  </h4>
                </div>
                <p className="font-light text-sm lg:text-base xl:text-lg text-[var(--grey-70)]">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="w-full mt-[80px] lg:mt-[120px] 2xl:mt-[150px] max-w-[1596px] mx-auto px-4 lg:px-[80px] 2xl:px-[162px]">
          <motion.div
            className="w-full text-center lg:text-left space-y-2.5"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-medium text-[var(--green-60)] text-[28px] lg:text-[38px] xl:text-[48px]">
              Job Openings
            </h2>
            <p className="font-light text-sm text-[var(--grey-70)] lg:text-base xl:text-lg">
              Explore exciting job openings at YourBank, where we value talent,
              innovation, and a passion for customer service. Join our team and
              be part of shaping a brighter future in the banking industry
            </p>
          </motion.div>

          <motion.div
            className="w-full mt-[60px] flex flex-col gap-5 lg:grid lg:grid-cols-2 xl:gap-[30px]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {data?.job_openings.map((job, index) => (
              <motion.div
                className="bg-[var(--grey-11)] border border-[var(--grey-15)] rounded-2xl p-6 space-y-[30px]"
                key={index}
                variants={staggerItem}
              >
                <div className="space-y-2.5">
                  <h4 className="font-semibold text-xl lg:text-2xl xl:text-[30px]">
                    {job.title}
                  </h4>
                  <div className="flex items-center flex-wrap gap-1.5">
                    <p className="px-2.5 py-1.5 rounded-[68px] bg-[var(--grey-10)] border border-[var(--grey-15)] text-[var(--grey-70)] lg:text-base xl:text-lg text-sm">
                      Location: {job.location}
                    </p>
                    <p className="px-2.5 py-1.5 rounded-[68px] bg-[var(--grey-10)] border border-[var(--grey-15)] text-[var(--grey-70)] lg:text-base xl:text-lg text-sm">
                      Department: {job.department}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg lg:text-xl xl:text-2xl">
                    About the Job
                  </h3>
                  <p className="font-light text-sm text-[var(--grey-70)] lg:text-base xl:text-lg">
                    As a Relationship Manager at YourBank, you will be
                    responsible for developing and maintaining relationships
                    with our valued customers. You will proactively identify
                    their financial needs and offer tailored solutions to help
                    them achieve their goals. We are seeking individuals with
                    excellent communication skills, a strong sales acumen, and a
                    passion for delivering exceptional customer service.
                  </p>
                </div>
                <div className="space-y-2.5">
                  <h3 className="font-semibold text-lg lg:text-xl xl:text-2xl">
                    Requirements & Qualifications
                  </h3>
                  <motion.ul
                    variants={staggerContainer}
                    className="flex flex-col gap-3.5"
                  >
                    {job.requirements.map((requirement, index) => (
                      <motion.li
                        variants={staggerItem}
                        key={index}
                        className="flex items-center text-[var(--grey-70)] gap-2"
                      >
                        <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                          <BsFillSuitcaseLgFill className="w-full" />
                        </div>
                        <span className="text-sm lg:text-base xl:text-lg">
                          {requirement}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                <button className="px-5 py-3 bg-[var(--green-60)] text-sm font-medium xl:text-lg text-black rounded-[82px]">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <FAQs />

        <BottomCTA />
      </div>
    </div>
  );
};

export default Careerspage;
