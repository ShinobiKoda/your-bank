import { useState, useEffect } from "react";
import {
  fetchCareerpageData,
  type CareerpageData,
} from "../api/getCareerspageData";
import { ClimbingBoxLoader } from "react-spinners";

const Careerspage = () => {
  const [data, setData] = useState<CareerpageData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const d = await fetchCareerpageData();
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

  return (
    <div className="w-full">
      <section className="w-full mt-[30px] lg:mt-[50px] max-w-[1596px] mx-auto px-4 lg:px-[80px] 2xl:mt-[53px] 2xl:px-[162px]">
        <div
          className="w-full bg-cover bg-center rounded-[20px] p-3.5 lg:hidden"
          style={{ backgroundImage: "url('/images/career-hero-bg.svg')" }}
        >
          <div className="w-full h-[200px]">
            <img src="/images/career-hero-img.svg" alt="Career Hero Img" className="w-full"/>
          </div>
          <div>
            <div className="bg-[var(--grey-10)] rounded-[20px] p-6 relative z-20 left-0 w-full flex flex-col items-center justify-center gap-3.5 text-center">
              <h1 className="font-medium text-[28px]">
                Welcome to{" "}
                <span className="text-[var(--green-60)]">YourBank</span> Careers
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
          </div>
        </div>

        <div className="w-full hidden lg:block">

        </div>
      </section>


    </div>
  );
};

export default Careerspage;
