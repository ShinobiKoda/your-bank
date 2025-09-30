import { HiCheckCircle } from "react-icons/hi2"; 


const Homepage = () => {
  return (
    <div className="w-full">
      <section className="w-full px-4 lg:px-[80px] 2xl:px-[162px] max-w-[1596px] mx-auto mt-[50px]">
        <div className="flex flex-col items-center justify-center w-full">
          <p className="pl-2 pr-4 py-2 bg-[#262626] font-light text-[12px] flex items-center gap-0.5 rounded-[61px]">
            <HiCheckCircle className="text-[#CAFF33]" size={30}/>
            <span>No LLC Required, No Credit Check.</span>
          </p>
          <h2 className="mt-[12px] font-medium text-[28px]">
            Welcome to YourBank Empowering Your <span>Financial Journey</span>
          </h2>
          <p>
            At YourBank, our mission is to provide comprehensive banking
            solutions that empower individuals and businesses to achieve their
            financial goals. We are committed to delivering personalized and
            innovative services that prioritize our customers' needs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
