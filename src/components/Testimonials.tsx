import { motion, type PanInfo } from "motion/react";
import { staggerContainer, staggerItem } from "./animations/motion";
import { useState, useEffect, useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { fetchHomepageData, type TestimonialEntry } from "../api/Fetchdata";

interface TestimonialCardProps {
  item: TestimonialEntry;
}

const TestimonialCard = ({ item }: TestimonialCardProps) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
    className="shrink-0 w-full lg:w-[73.333%] rounded-xl border border-[var(--grey-15)] p-5 bg-[var(--grey-11)]"
  >
    <div className="mt-1 flex items-center justify-between">
      <div className="w-[40%] h-px bg-[var(--grey-15)]"></div>
      <img src="/images/quote-icon.svg" alt="Quote Icon" />
      <div className="w-[40%] h-px bg-[var(--grey-15)]"></div>
    </div>
    <p className="text-center font-normal text-sm my-[30px] leading-[150%]">
      {item.description}
    </p>
    <p className="text-center font-medium text-base text-[var(--green-60)]">
      {item.name}
      {item.role && (
        <span className="block mt-1 text-[11px] font-light text-[var(--grey-70)] uppercase tracking-wide">
          {item.role}
        </span>
      )}
    </p>
  </motion.div>
);

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState("individuals");
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [testimonials, setTestimonials] = useState<{
    individuals: TestimonialEntry[];
    businesses: TestimonialEntry[];
  }>({ individuals: [], businesses: [] });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth < 1024;
  const list =
    activeTab === "individuals"
      ? testimonials.individuals
      : testimonials.businesses;

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await fetchHomepageData();
        if (mounted && data.testimonials) {
          setTestimonials(data.testimonials);
        }
      } catch {
        if (mounted) setError("Failed to load testimonials");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  // reset index when tab changes
  useEffect(() => {
    setIndex(0);
  }, [activeTab]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // auto-scroll for desktop
  const intervalRef = useRef<number | null>(null);
  useEffect(() => {
    if (!isMobile && list.length > 1) {
      intervalRef.current = window.setInterval(() => {
        setIndex((i) => (i + 1) % list.length);
      }, 4000); // 4s auto scroll
    }
    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isMobile, list.length]);

  // next/prev
  const next = () => {
    if (list.length > 0) {
      setIndex((i) => (i + 1) % list.length);
    }
  };
  const prev = () => {
    if (list.length > 0) {
      setIndex((i) => (i - 1 + list.length) % list.length);
    }
  };

  // translate amount per slide
  const itemWidth = isMobile ? 100 : 73.333;

  // drag handlers for mobile swipe (snap to nearest slide)
  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (isMobile && list.length > 0) {
      const threshold = 50; // pixels to trigger swipe
      if (info.offset.x < -threshold && index < list.length - 1) {
        setIndex(index + 1);
      } else if (info.offset.x > threshold && index > 0) {
        setIndex(index - 1);
      } else {
        // snap back to current index
        setIndex(index);
      }
    }
  };

  const showCarousel = list.length > 0;

  return (
    <section className="w-full px-4 lg:px-[80px] 2xl:px-[162px] max-w-[1596px] mx-auto mt-[80px] lg:mt-[120px] 2xl:mt-[150px]">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          variants={staggerContainer}
          className="flex flex-col max-w-[831px]"
        >
          <motion.h2
            variants={staggerItem}
            className="font-medium text-[28px] lg:text-[38px] text-center mb-2.5 lg:text-left"
          >
            Our <span className="text-[var(--green-60)]">Testimonials</span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-center lg:text-left font-light text-sm lg:text-base text-[var(--grey-70)] mb-5"
          >
            Discover how YourBank has transformed lives with innovative digital
            solutions and personalized customer service. See why our clients
            trust us for a secure and prosperous financial journey
          </motion.p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          className="w-full max-w-[320px] mx-auto"
        >
          <div className="w-full bg-[#1C1C1C] rounded-[82px] border border-[#262626] p-3 text-black text-center font-normal text-sm">
            {[
              { tab: "individuals", label: "For Individuals" },
              { tab: "businesses", label: "For Businesses" },
            ].map((tab, i) => (
              <motion.button
                variants={staggerItem}
                onClick={() => setActiveTab(tab.tab)}
                key={i}
                className={`px-[18px] py-2.5 rounded-[140px] cursor-pointer ${
                  activeTab === tab.tab
                    ? "bg-[var(--green-60)] text-black"
                    : "text-white"
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CAROUSEL */}
      <div className="mt-[40px]">
        {loading && (
          <p className="text-center text-sm text-[var(--grey-70)]">
            Loading testimonials...
          </p>
        )}
        {error && !loading && (
          <p className="text-center text-sm text-red-400">{error}</p>
        )}
        {!loading && !error && showCarousel && (
          <div className="relative overflow-hidden lg:px-[10%]">
            <motion.div
              className="flex gap-5"
              animate={{ x: `-${index * itemWidth}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              drag={isMobile ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
            >
              {list.map((item, i) => (
                <TestimonialCard key={i} item={item} />
              ))}
            </motion.div>

            {/* CONTROLS */}
            {list.length > 1 && (
              <>
                {/* Left Arrow (desktop only) */}
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-0 
                             w-[52px] h-[52px] rounded-full items-center justify-center
                             bg-[var(--grey-11)] border border-[var(--grey-15)] 
                             hover:border-[var(--green-60)]/60 transition-colors"
                >
                  <FaArrowLeftLong className="text-[var(--green-60)]" size={25} />
                </button>

                {/* Right Arrow (desktop only) */}
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-0 
                             w-[52px] h-[52px] rounded-full items-center justify-center
                             bg-[var(--grey-11)] border border-[var(--grey-15)] 
                             hover:border-[var(--green-60)]/60 transition-colors"
                >
                  <FaArrowRightLong className="text-[var(--green-60)]" size={25} />
                </button>

                {/* Dots (mobile only) */}
                <div className="flex lg:hidden items-center gap-1 mt-[30px] justify-center">
                  {list.map((_, i) => (
                    <span
                      key={i}
                      aria-label={`Go to testimonial ${i + 1}`}
                      className={`w-2 h-2 rounded-full ${
                        i === index
                          ? "bg-[var(--green-60)]"
                          : "bg-[var(--grey-20)]"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
