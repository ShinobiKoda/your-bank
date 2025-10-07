import { motion } from "motion/react";
import { fadeInUp, fadeInLeft, fadeInRight } from "./animations/motion";
import { useState, useEffect } from "react";
import {
  fetchAboutpageData,
  type AboutpageData,
} from "../api/getAboutpageData";

const Aboutpage = () => {
  const [data, setData] = useState<AboutpageData | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const d = await fetchAboutpageData();
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
    <div className="w-full">
      <section className="w-full mt-[30px] lg:mt-[50px] max-w-[1596px] mx-auto px-4 lg:px-[80px] 2xl:mt-[53px] 2xl:px-[162px]">
        <motion.div
          className="w-full bg-cover bg-center rounded-[20px] p-3.5 lg:hidden relative h-[850px]"
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
              src="/images/about-hero-img.svg"
              alt="Career Hero Img"
              className="w-full"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <div className="bg-[var(--grey-10)] rounded-[20px] p-6 absolute z-20 top-[226px] left-3.5 right-3.5 bottom-3.5 flex flex-col items-center justify-center gap-3.5 text-center">
              <h1 className="font-medium text-[28px]">
                Where Banking Meets{" "}
                <span className="text-[var(--green-60)]">Excellence!</span>
              </h1>
              <p className="text-[var(--grey-70)]">
                At YourBank, we believe that banking should be more than just
                transactions. It should be an experience that empowers
                individuals and businesses to thrive and reach their financial
                goals. As a trusted financial institution, we are committed to
                delivering exceptional banking services that go beyond
                expectations. With a focus on innovation, personalized
                solutions, and unwavering integrity, we strive to provide the
                best banking experience for our valued customers. Join us on
                this exciting journey and discover a new level of banking
                excellence.
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
            className="relative z-20 rounded-tl-[20px] rounded-bl-[20px] space-y-5 rounded-tr-0 rounded-br-[60px] bg-[var(--grey-10)] p-[60px] max-w-[658px] max-h-[538px]"
            variants={fadeInLeft}
          >
            <h1 className="font-medium text-[48px] xl:text-[58px]">
              Where Banking Meets{" "}
              <span className="text-[var(--green-60)]">Excellence!</span>
            </h1>
            <p className="font-light text-base text-[var(--grey-70)] xl:text-lg">
              At YourBank, we believe that banking should be more than just
              transactions. It should be an experience that empowers individuals
              and businesses to thrive and reach their financial goals. As a
              trusted financial institution, we are committed to delivering
              exceptional banking services that go beyond expectations. With a
              focus on innovation, personalized solutions, and unwavering
              integrity, we strive to provide the best banking experience for
              our valued customers. Join us on this exciting journey and
              discover a new level of banking excellence.
            </p>
          </motion.div>
          <motion.div
            className="w-full h-full max-w-[715px] absolute right-[40px] z-10 top-0"
            variants={fadeInRight}
          >
            <img
              src="/images/about-hero-img.svg"
              alt="Career Hero Image"
              className="w-full h-full"
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="w-full mt-[80px] lg:mt-[120px] 2xl:mt-[150px] max-w-[1596px] mx-auto px-4 lg:px-[80px] 2xl:px-[162px]">
        <div className="text-center lg:text-left space-y-2.5 xl:space-y-3.5">
          <h2 className="text-[var(--green-60)] font-normal text-[28px] lg:text-[38px] xl:text-[48px]">
            Mission & Vision
          </h2>
          <p className="text-sm font-light text-[var(--grey-70)] lg:text-base xl:text-lg leading-[150%]">
            We envision being a leading force in the industry, driven by
            innovation, integrity, and inclusivity, creating a brighter
            financial future for individuals and businesses while maintaining a
            strong commitment to customer satisfaction and community development
          </p>
        </div>
        <div className="w-full mt-[60px] flex flex-col gap-[50px]">
          <div className="w-full flex flex-col gap-[30px] lg:flex-row items-center lg:gap-0">
            <div className="w-full max-w-[500px] flex items-center justify-center mx-auto">
              <img
                src="/images/mission-img.svg"
                alt="Mission Image"
                className="w-full"
              />
            </div>
            <div className="text-center space-y-2.5 max-w-[735px] lg:pl-[40px] lg:text-left lg:border-l border-[var(--green-60)]">
              <h3 className="font-medium text-[26px] lg:text-[32px] xl:text-[38px]">
                Mission
              </h3>
              <p className="font-light text-sm text-[var(--grey-70)] lg:text-base xl:text-lg">
                At YourBank, our mission is to empower our customers to achieve
                financial success. We are dedicated to delivering innovative
                banking solutions that cater to their unique needs. Through
                personalized services, expert guidance, and cutting-edge
                technology, we aim to build strong, lasting relationships with
                our customers. Our mission is to be their trusted partner,
                helping them navigate their financial journey and realize their
                dreams.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-[30px] lg:flex-row-reverse items-center lg:gap-0">
            <div className="w-full max-w-[500px] flex items-center justify-center mx-auto">
              <img
                src="/images/vision-img.svg"
                alt="Mission Image"
                className="w-full"
              />
            </div>
            <div className="text-center space-y-2.5 max-w-[735px] lg:pr-[40px] lg:text-left lg:border-r border-[var(--green-60)]">
              <h3 className="font-medium text-[26px] lg:text-[32px] xl:text-[38px]">
                Mission
              </h3>
              <p className="font-light text-sm text-[var(--grey-70)] lg:text-base xl:text-lg">
                At YourBank, our mission is to empower our customers to achieve
                financial success. We are dedicated to delivering innovative
                banking solutions that cater to their unique needs. Through
                personalized services, expert guidance, and cutting-edge
                technology, we aim to build strong, lasting relationships with
                our customers. Our mission is to be their trusted partner,
                helping them navigate their financial journey and realize their
                dreams.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mt-[80px] lg:mt-[120px] 2xl:mt-[150px] max-w-[1596px] mx-auto px-4 lg:px-[80px] 2xl:px-[162px]">
        <div className="text-center lg:text-left space-y-2.5 xl:space-y-3.5">
          <h2 className="text-[var(--green-60)] font-normal text-[28px] lg:text-[38px] xl:text-[48px]">
            Press Releases
          </h2>
          <p className="text-sm font-light text-[var(--grey-70)] lg:text-base xl:text-lg leading-[150%]">
            Stay updated with the latest happenings and exciting developments at
            YourBank through our press releases.
          </p>
        </div>
        <div className="mt-[40px] lg:mt-[60px] xl:mt-[80px] grid grid-cols-1 gap-5 lg:grid-cols-2 xl:gap-[30px]">
          {data?.press_releases.map((release, index) => (
            <div
              key={index}
              className="w-full p-5 rounded-t-[40px] rounded-b-[16px] bg-[var(--grey-11)] border border-[var(--grey-15)]"
            >
              <img src={release.image} alt="Press Release Image" className="w-full"/>
              <h4 className="mt-[30px] font-normal text-lg lg:text-xl xl:text-2xl">{release.title}</h4>
              <div className="flex items-center flex-wrap gap-1.5 mt-2.5 font-light text-sm text-[var(--grey-70)] lg:text-base xl:text-lg">
                <div className="px-3 py-1.5 rounded-[68px] bg-[var(--grey-10)] border border-[var(--grey-15)] flex items-center justify-center">
                  Location: {release.location}
                </div>
                <div className="px-3 py-1.5 rounded-[68px] bg-[var(--grey-10)] border border-[var(--grey-15)] flex items-center justify-center">
                  Data: {release.date}
                </div>
              </div>
              <p className="mt-6 font-light text-sm lg:text-base xl:text-lg text-[var(--grey-70)]">{release.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Aboutpage;
