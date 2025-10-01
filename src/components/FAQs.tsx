import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GoChevronDown } from "react-icons/go";
import { staggerContainer, staggerItem } from "./animations/motion";

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQsProps {
  faqs?: FAQItem[];
  initiallyOpen?: number | number[];
  allowMultiple?: boolean;
  desktopMulti?: boolean;
  breakpointPx?: number;
}

const FAQs = ({
  faqs = [],
  initiallyOpen = 0,
  allowMultiple = false,
  desktopMulti = true,
  breakpointPx = 1024,
}: FAQsProps) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${breakpointPx}px)`);
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpointPx]);

  const multiEnabled = allowMultiple || (desktopMulti && isDesktop);

  const initialSet = new Set<number>(
    Array.isArray(initiallyOpen) ? initiallyOpen : [initiallyOpen]
  );
  const [openItems, setOpenItems] = useState<Set<number>>(initialSet);
  const [singleOpen, setSingleOpen] = useState<number | null>(
    !multiEnabled
      ? Array.isArray(initiallyOpen)
        ? initiallyOpen[0] ?? null
        : initiallyOpen
      : null
  );

  useEffect(() => {
    if (multiEnabled) {
      if (singleOpen !== null && !openItems.has(singleOpen)) {
        setOpenItems(new Set(openItems).add(singleOpen));
      }
    } else {
      const first = openItems.values().next().value ?? null;
      setSingleOpen(first);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [multiEnabled]);

  if (!faqs.length) return null;

  const isOpen = (idx: number) =>
    multiEnabled ? openItems.has(idx) : singleOpen === idx;

  const toggle = (idx: number) => {
    if (multiEnabled) {
      setOpenItems((prev) => {
        const next = new Set(prev);
        if (next.has(idx)) {
          next.delete(idx);
        } else {
          next.add(idx);  
        }
        return next;
      });
    } else {
      setSingleOpen((prev) => (prev === idx ? null : idx));
    }
  };

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <section
      className="mt-[80px] w-full px-4 lg:px-[80px] 2xl:px-[162px] max-w-[1596px] mx-auto lg:mt-[120px] 2xl:mt-[150px]"
      aria-labelledby="faq-heading"
    >
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once: false, amount: 0.3}} className="mb-[50px] space-y-2.5">
        <motion.h2 variants={staggerItem}
          id="faq-heading"
          className="font-medium text-[28px] lg:text-[38px] text-center lg:text-left"
        >
          <span className="text-[var(--green-60)]">Frequently</span> Asked
          Questions
        </motion.h2>
        <motion.p variants={staggerItem} className="font-light text-sm lg:text-base text-[var(--grey-70)] text-center lg:text-left">
          Still have any questions? Contact our team via
          <span className="text-[var(--green-60)]"> support@yourbank.com</span>
        </motion.p>
      </motion.div>
      <ul
        key={showAll ? "all" : "partial"}
        className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4 lg:items-start"
        role="list"
      >
        {visibleFaqs.map((faq, index) => {
          const open = isOpen(index);
          return (
            <li
              key={index}
              className="border border-[var(--grey-15)] rounded-[10px] overflow-hidden bg-[var(--grey-11)] flex flex-col p-[30px]"
            >
              <button
                type="button"
                aria-expanded={open}
                aria-controls={`faq-panel-${index}`}
                id={`faq-button-${index}`}
                onClick={() => toggle(index)}
                className="text-left flex items-center gap-4 justify-between cursor-pointer"
              >
                <span className="flex-1 min-w-0">
                  <span
                    className={`font-medium text-sm lg:text-lg inline-block align-top ${
                      open
                        ? "whitespace-normal break-words"
                        : "whitespace-nowrap overflow-hidden text-ellipsis block"
                    }`}
                    style={!open ? { maxWidth: "100%" } : undefined}
                  >
                    {faq.q}
                  </span>
                </span>
                <motion.span
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0 text-[var(--green-60)]"
                  aria-hidden
                >
                  <GoChevronDown size={20} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-button-${index}`}
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="border-t border-[var(--grey-15)] overflow-hidden mt-5 pt-5"
                  >
                    <p className="font-light text-sm lg:text-base text-[var(--grey-70)] leading-[150%]">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
      {!showAll && faqs.length > 4 && (
        <div className="w-full flex items-center justify-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="bg-[var(--grey-11)] border border-[var(--grey-15)] px-5 py-3.5 rounded-[100px] mt-[50px] font-normal text-sm cursor-pointer"
            aria-expanded={showAll}
            aria-controls="faq-heading"
          >
            Load All FAQs
          </button>
        </div>
      )}
    </section>
  );
};

export default FAQs;
