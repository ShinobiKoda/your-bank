import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GoChevronDown } from "react-icons/go";

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQsProps {
  faqs?: FAQItem[];
  initiallyOpen?: number | number[]; // support multiple defaults
  allowMultiple?: boolean; // always allow multiple
  desktopMulti?: boolean; // enable multi only on desktop (>=1024px)
  breakpointPx?: number; // custom breakpoint
}

const FAQs = ({
  faqs = [],
  initiallyOpen = 0,
  allowMultiple = false,
  desktopMulti = true,
  breakpointPx = 1024,
}: FAQsProps) => {
  // track viewport for responsive multi-open
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${breakpointPx}px)`);
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpointPx]);

  const multiEnabled = allowMultiple || (desktopMulti && isDesktop);

  // open state
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

  // reconcile when multi mode toggles
  useEffect(() => {
    if (multiEnabled) {
      // move singleOpen into set
      if (singleOpen !== null && !openItems.has(singleOpen)) {
        setOpenItems(new Set(openItems).add(singleOpen));
      }
    } else {
      // collapse to first open item
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

  return (
    <section
      className="mt-[80px] w-full px-4 lg:px-[80px] 2xl:px-[162px] max-w-[1596px] mx-auto lg:mt-[120px] 2xl:mt-[150px]"
      aria-labelledby="faq-heading"
    >
      <div className="mb-[50px] space-y-2.5">
        <h2
          id="faq-heading"
          className="font-medium text-[28px] lg:text-[38px] text-center lg:text-left"
        >
          <span className="text-[var(--green-60)]">Frequently</span> Asked
          Questions
        </h2>
        <p className="font-light text-sm lg:text-base text-[var(--grey-70)] text-center lg:text-left">
          Still have any questions? Contact our team via
          <span className="text-[var(--green-60)]"> support@yourbank.com</span>
        </p>
      </div>
      <ul
        className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4 lg:items-start"
        role="list"
      >
        {faqs.map((faq, index) => {
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
                className="text-left flex items-center gap-4 justify-between"
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
    </section>
  );
};

export default FAQs;
