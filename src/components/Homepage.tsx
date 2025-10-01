import { HiCheckCircle } from "react-icons/hi2";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ClimbingBoxLoader } from "react-spinners";
import {
  fadeInRight,
  scaleIn,
  staggerContainer,
  staggerItem,
  featuresContainer,
  featureTabsContainer,
  featureTabPill,
  featureCard,
  featureGrid,
} from "./animations/motion";
import { GoArrowUpRight } from "react-icons/go";
import {
  fetchHomepageData,
  type HomepageData,
  type FAQEntry,
} from "../api/Fetchdata";
import type { FeatureItem } from "../api/Fetchdata";
import FAQs from "./FAQs";
import Testimonials from "./Testimonials"

const Homepage = () => {
  const [data, setData] = useState<HomepageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const d = await fetchHomepageData();
        if (mounted) setData(d);
      } catch {
        if (mounted) setError("Failed to load homepage data");
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  const [activeTab, setActiveTab] = useState("individuals");
  const [activeFeatureTab, setActiveFeatureTab] = useState<string>("online");

  const activeFeatures =
    activeFeatureTab !== "faqs" && data?.features[activeFeatureTab]
      ? (data.features[activeFeatureTab] as FeatureItem[])
      : [];
  const featureTabs = data?.featureTabs ?? [];

  const chunkFeatures = (items: FeatureItem[]) => {
    const mid = Math.ceil(items.length / 2);
    return [items.slice(0, mid), items.slice(mid)];
  };

  if (loading) {
    return (
      <div
        className="w-full h-screen flex items-center justify-center"
        role="status"
        aria-busy="true"
        aria-label="Loading homepage content"
      >
        <ClimbingBoxLoader color="var(--green-60)" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="w-full flex items-center justify-center py-40">
        <p className="text-sm text-red-400">{error || "No data available"}</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <section className="w-full mt-[50px] lg:mt-[90px] max-w-[1596px] mx-auto px-4 lg:px-[80px] 2xl:mt-[153px] 2xl:px-[162px] lg:grid lg:grid-cols-2 lg:gap-[100px]">
        <motion.div
          className="flex flex-col items-center justify-center w-full lg:items-start lg:justify-start max-w-[825px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={staggerItem}
            className="pl-2 pr-4 py-2 bg-[#262626] font-light text-[12px] lg:text-sm flex items-center gap-0.5 rounded-[61px]"
          >
            <HiCheckCircle className="text-[var(--green-60)]" size={30} />
            <span>No LLC Required, No Credit Check.</span>
          </motion.p>
          <motion.h2
            variants={staggerItem}
            className="mt-[12px] font-medium text-[28px] lg:text-[38px] text-center lg:text-left"
          >
            Welcome to YourBank Empowering Your{" "}
            <span className="text-[var(--green-60)]">Financial Journey</span>
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
            className="mt-[30px] font-normal text-sm px-6 py-3.5 bg-[var(--green-60)] text-black rounded-[82px] cursor-pointer"
          >
            Open Account
          </motion.button>
        </motion.div>
        <div className="w-full max-w-[512px] mx-auto">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full mt-[54.43px] lg:mt-0"
          >
            <img src="/images/cta-img.svg" alt="CTA Image" className="w-full" />
          </motion.div>
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full flex justify-end mt-3.5"
          >
            <div className="bg-[#22251B] pl-[12.31px] pr-[5.13px] py-[5.13px] flex items-center rounded-[41.02px] gap-1.5">
              <p className="font-normal text-[12.4px]">Supported Currency</p>
              <div className="bg-[#1A1A1A] flex items-center rounded-[28.2px] gap-1 px-[5.13px] py-[5.13px]">
                {data.supportedCurrencies.map((currency, index) => (
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

      <motion.section className="w-full mt-[69.37px] lg:mt-[111.76px] px-4 lg:px-[80px] 2xl:px-[162px] max-w-[1596px] mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col lg:flex-row lg:justify-between lg:items-center"
        >
          <motion.div
            variants={staggerItem}
            className="flex flex-col max-w-[831px]"
          >
            <h2 className="font-medium text-[28px] lg:text-[38px] text-center mb-2.5 lg:text-left">
              Our <span className="text-[var(--green-60)]">Products</span>
            </h2>
            <p className="text-center lg:text-left font-light text-sm lg:text-base text-[var(--grey-70)] mb-5">
              Discover a range of comprehensive and customizable banking
              products at YourBank, designed to suit your unique financial needs
              and aspirations
            </p>
          </motion.div>
          <motion.div
            variants={staggerItem}
            className="w-full max-w-[320px] mx-auto"
          >
            <div className="w-full bg-[#1C1C1C] rounded-[82px] border border-[#262626] p-3 text-black text-center font-normal text-sm">
              {[
                { tab: "individuals", label: "For Individuals" },
                { tab: "businesses", label: "For Businesses" },
              ].map((tab, index) => (
                <button
                  onClick={() => setActiveTab(tab.tab)}
                  key={index}
                  className={`px-[18px] py-2.5 rounded-[140px] cursor-pointer ${
                    activeTab === tab.tab
                      ? "bg-[var(--green-60)] text-black"
                      : "text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
        <div className="mt-[60px] lg:mt-[80px]">
          {(() => {
            const items =
              activeTab === "individuals"
                ? data.products.individuals
                : data.products.business;
            return (
              <motion.div
                key={activeTab}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="w-full grid gap-[60px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 "
              >
                {items.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="flex flex-col lg:flex-row lg:items-center lg:gap-[30px] min-h-[238px]"
                  >
                    <div className="flex flex-col">
                      <div className="w-full flex items-center justify-center mb-5">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="font-normal text-xl text-center mb-3">
                        {item.title}
                      </h3>
                      <p className="font-light text-sm lg:text-base text-[var(--grey-70)] text-center leading-[150%]">
                        {item.description}
                      </p>
                    </div>
                    {index !== items.length - 1 && (
                      <hr className="w-full border-t border-[#262626] mt-[30px] lg:mt-0 lg:w-0 lg:h-full lg:border-t-0 lg:border-l lg:mx-auto lg:my-0" />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            );
          })()}
        </div>
      </motion.section>

      <section className="w-full mt-[80px] lg:mt-[120px] px-4 lg:px-[80px] 2xl:px-[162px] max-w-[1596px] mx-auto">
        <h2 className="text-center text-[var(--green-60)] font-medium text-[28px] lg:text-[38px] mb-2.5 lg:text-left">
          Use Cases
        </h2>
        <p className="font-light text-sm lg:text-base mb-[60px] text-center text-[var(--grey-70)] lg:text-left">
          At YourBank, we cater to the diverse needs of individuals and
          businesses alike, offering a wide range of financial solutions
        </p>
        <div className="w-full lg:grid lg:grid-cols-2 lg:gap-[60px]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="w-full bg-center bg-cover bg-no-repeat p-5 grid grid-cols-2 gap-2.5 rounded-[20px]"
            style={{ backgroundImage: "url('/images/use-cases-bg.svg')" }}
          >
            {data.useCases.individuals.map((use, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="min-w-[54px] min-h-[160px] rounded-xl bg-[var(--grey-10)] border border-[var(--grey-15)] px-3.5 py-5 flex flex-col items-center justify-center gap-3.5"
              >
                <img src={use.image} alt="Use Case Image" />
                <p className="text-center font-normal text-sm lg:text-base">
                  {use.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="w-full mt-[30px]"
          >
            <motion.h2
              variants={staggerItem}
              className="font-medium text-xl lg:text-[26px] text-center mb-2.5 lg:text-left"
            >
              For Individuals
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="font-light text-sm lg:text-base text-[var(--grey-70)] text-center lg:text-left"
            >
              For individuals, our mortgage services pave the way to
              homeownership, and our flexible personal loans provide vital
              support during various life milestones. We also prioritize
              retirement planning, ensuring a financially secure future for our
              customers
            </motion.p>
            <div>
              <div className="flex flex-col gap-[30px] items-center justify-center lg:justify-start lg:items-start text-center lg:text-left mt-[50px] w-full max-w-[258px] mx-auto lg:flex-row lg:max-w-full">
                <motion.p
                  variants={staggerItem}
                  className="flex flex-col border-b lg:border-r lg:border-b-0 border-dashed border-[var(--grey-15)] pb-[30px] w-full"
                >
                  <span className="font-medium text-[40px] text-[var(--green-60)]">
                    78%
                  </span>
                  <span className="font-light text-sm lg:text-base text-[var(--grey-70)]">
                    Secure Retirement Planning
                  </span>
                </motion.p>
                <motion.p
                  variants={staggerItem}
                  className="flex flex-col border-b lg:border-r lg:border-b-0 border-dashed border-[var(--grey-15)] pb-[30px] w-full"
                >
                  <span className="font-medium text-[40px] text-[var(--green-60)]">
                    63%
                  </span>
                  <span className="font-light text-sm lg:text-base text-[var(--grey-70)]">
                    Manageable Debt Consolidation
                  </span>
                </motion.p>
                <motion.p variants={staggerItem} className="flex flex-col">
                  <span className="font-medium text-[40px] text-[var(--green-60)]">
                    91%
                  </span>
                  <span className="font-light text-sm lg:text-base text-[var(--grey-70)]">
                    Reducing Financial Burdens
                  </span>
                </motion.p>
              </div>
              <motion.div
                variants={staggerItem}
                className="w-full flex items-center justify-center mt-[50px] lg:justify-start"
              >
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-5 py-3.5 text-sm font-normal rounded-[82px] bg-[var(--grey-11)] border border-[var(--grey-15)] cursor-pointer overflow-hidden transition-colors duration-300 hover:bg-[var(--grey-15)]"
                >
                  <span className="relative z-10">Learn More</span>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0.15) 100%)",
                    }}
                  />
                  <motion.span
                    aria-hidden
                    initial={{ x: "-120%" }}
                    whileHover={{ x: "120%" }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    className="absolute top-0 left-0 h-full w-[50%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-40"
                  />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:grid lg:grid-cols-2 lg:gap-[60px] lg:mt-[40px]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="order-2  w-full bg-center bg-cover bg-no-repeat p-5 grid grid-cols-2 gap-2.5 mt-[40px] rounded-[20px]"
            style={{ backgroundImage: "url('/images/use-cases-bg.svg')" }}
          >
            {data.useCases.business.map((use, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="min-w-[54px] min-h-[160px] rounded-xl bg-[var(--grey-10)] border border-[var(--grey-15)] px-3.5 py-5 flex flex-col items-center justify-center gap-3.5"
              >
                <img src={use.image} alt="Use Case Image" />
                <p className="text-center font-normal text-sm lg:text-base">
                  {use.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <div className="">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="w-full mt-[30px]"
            >
              <motion.h2
                variants={staggerItem}
                className="font-medium text-xl lg:text-[26px] text-center mb-2.5 lg:text-left"
              >
                For Business
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="font-light text-sm lg:text-base text-[var(--grey-70)] text-center lg:text-left"
              >
                For businesses, we empower growth with working capital solutions
                that optimize cash flow, and our tailored financing options fuel
                business expansion. Whatever your financial aspirations,
                YourBank is committed to providing the right tools and support
                to achieve them
              </motion.p>
              <div className="flex flex-col gap-[30px] lg:flex-row items-center justify-center text-center lg:text-left mt-[50px] w-full max-w-[258px] lg:max-w-full mx-auto">
                <motion.p
                  variants={staggerItem}
                  className="flex flex-col border-b border-dashed lg:border-r lg:border-b-0 border-[var(--grey-15)] pb-[30px] w-full"
                >
                  <span className="font-medium text-[40px] text-[var(--green-60)]">
                    65%
                  </span>
                  <span className="font-light text-sm lg:text-base text-[var(--grey-70)]">
                    Cash Flow Management
                  </span>
                </motion.p>
                <motion.p
                  variants={staggerItem}
                  className="flex flex-col border-b border-dashed lg:border-r lg:border-b-0 border-[var(--grey-15)] pb-[30px] w-full"
                >
                  <span className="font-medium text-[40px] text-[var(--green-60)]">
                    70%
                  </span>
                  <span className="font-light text-sm lg:text-base text-[var(--grey-70)]">
                    Drive Business Expansion
                  </span>
                </motion.p>
                <motion.p variants={staggerItem} className="flex flex-col">
                  <span className="font-medium text-[40px] text-[var(--green-60)]">
                    45%
                  </span>
                  <span className="font-light text-sm lg:text-base text-[var(--grey-70)]">
                    Streamline payroll processing
                  </span>
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              variants={staggerItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="w-full flex items-center justify-center mt-[50px] lg:justify-start"
            >
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-5 py-3.5 rounded-[82px] font-normal text-sm bg-[var(--grey-11)] border border-[var(--grey-15)] cursor-pointer overflow-hidden transition-colors duration-300 hover:bg-[var(--grey-15)]"
              >
                <span className="relative z-10">Learn More</span>
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0.15) 100%)",
                  }}
                />
                <motion.span
                  aria-hidden
                  initial={{ x: "-120%" }}
                  whileHover={{ x: "120%" }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  className="absolute top-0 left-0 h-full w-[50%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-40"
                />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 lg:px-[80px] 2xl:px-[162px] max-w-[1596px] mx-auto mt-[80px] lg:mt-[120px] 2xl:mt-[150px]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-2.5"
        >
          <motion.h2
            variants={staggerItem}
            className="text-[28px] lg:text-[38px] font-medium text-center lg:text-left"
          >
            <span>Our</span>
            <span className="text-[var(--green-60)]"> Features</span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-center lg:text-left text-[var(--grey-70)] font-light text-sm lg:text-base"
          >
            Experience a host of powerful features at YourBank, including
            seamless online banking, secure transactions, and personalized
            financial insights, all designed to enhance your banking experience
          </motion.p>
        </motion.div>
        <motion.div
          variants={featuresContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-[50px] space-y-5 lg:grid lg:grid-cols-[1fr_3fr] lg:items-start lg:gap-5"
        >
          <motion.div
            variants={featureTabsContainer}
            className="w-full bg-[var(--grey-11)] rounded-[20px] p-5 lg:p-10 flex flex-row gap-5 overflow-x-scroll lg:overflow-hidden lg:flex-col"
          >
            {featureTabs.map((t) => {
              const active = activeFeatureTab === t.key;
              return (
                <motion.button
                  variants={featureTabPill}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  key={t.key}
                  onClick={() => setActiveFeatureTab(t.key)}
                  className={`relative rounded-[100px] min-w-[144px] text-nowrap px-5 py-3.5 border font-normal text-sm cursor-pointer transition-colors ${
                    active
                      ? "border-[var(--green-60)]/60 bg-[var(--grey-10)] text-[var(--green-60)]"
                      : "border-[var(--grey-15)] bg-[var(--grey-10)] text-white/70 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{t.label}</span>
                </motion.button>
              );
            })}
          </motion.div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeatureTab}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={featureGrid}
              className="space-y-5 lg:grid lg:grid-cols-2 lg:gap-5"
            >
              {chunkFeatures(activeFeatures).map((col, colIndex) => (
                <motion.div
                  key={colIndex}
                  className="space-y-5"
                  variants={staggerContainer}
                >
                  {col.map((feature) => (
                    <motion.div
                      key={feature.title}
                      variants={featureCard}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="relative overflow-hidden w-full p-[30px] space-y-5 rounded-[14px] bg-[var(--grey-11)] border border-[var(--grey-15)] lg:min-h-[227px] group transition-colors hover:border-[var(--green-60)]/40"
                    >
                      <h3 className="w-full flex items-center justify-between font-normal text-lg">
                        <span>{feature.title}</span>
                        <GoArrowUpRight
                          className="text-[var(--green-60)] group-hover:scale-110 transition-transform"
                          size={30}
                        />
                      </h3>
                      <p className="font-light text-sm text-[var(--grey-70)] leading-[150%]">
                        {feature.description}
                      </p>
                      <span
                        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background:
                            "linear-gradient(120deg, rgba(132,255,164,0.07), rgba(132,255,164,0) 70%)",
                        }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </section>

      {Array.isArray(data.faqs) && data.faqs.length > 0 && (
        <FAQs faqs={data.faqs as FAQEntry[]} />
      )}

      <Testimonials />
    </div>
  );
};

export default Homepage;
