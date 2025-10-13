import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClipLoader } from "react-spinners";
import { motion, AnimatePresence } from "motion/react";
import {
  fadeInUp,
  scaleIn,
  fadeInLeft,
  fadeInRight,
} from "../animations/motion";

const schema = z.object({
  firstName: z.string().min(2, "First Name must be at least two characters"),
  lastName: z.string().min(2, "Last Name must be at least two characters"),
  email: z.email("Invalid email Address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;

const Signup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSuccessMessage("");
    console.log("✅ Form submitted:", data);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Submitted Successfully");
    setIsSubmitting(false);
    setSuccessMessage("Form submitted successfully!");
    reset();
  };

  // Hide success message after 2.5 seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 2500);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <motion.div
      className="w-full mt-[30px] lg:mt-[50px] max-w-[1596px] mx-auto px-4 lg:px-[80px] 2xl:mt-[53px] 2xl:px-[162px]"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <motion.div
        className="w-full bg-center bg-cover p-[30px] rounded-2xl"
        style={{ backgroundImage: "url('/images/auth-bg-mobile.svg')" }}
        initial="hidden"
        animate="visible"
        variants={scaleIn}
      >
        <motion.div
          className="w-full text-center space-y-2.5 mb-[40px]"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="font-medium text-[28px] text-[var(--green-60)]">
            Sign Up
          </h2>
          <p className="font-light text-sm text-[var(--grey-70)]">
            Join our community today! Create an account to unlock exclusive
            features and personalized experiences.
          </p>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full space-y-5 lg:space-y-[30px] max-w-[664px] mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
            <motion.div className="space-y-2" variants={fadeInLeft}>
              <input
                {...register("firstName")}
                className="border p-4 w-full font-light text-base rounded-[88px] border-[var(--grey-15)] bg-[var(--grey-10)] text-[var(--grey-35)] outline-none"
                placeholder="Enter First Name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </motion.div>
            <motion.div className="space-y-2" variants={fadeInRight}>
              <input
                {...register("lastName")}
                className="border p-4 w-full font-light text-base rounded-[88px] border-[var(--grey-15)] bg-[var(--grey-10)] text-[var(--grey-35)] outline-none"
                placeholder="Enter Last Name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </motion.div>
            <motion.div className="space-y-2" variants={fadeInLeft}>
              <input
                {...register("email")}
                className="border p-4 w-full font-light text-base rounded-[88px] border-[var(--grey-15)] bg-[var(--grey-10)] text-[var(--grey-35)] outline-none"
                placeholder="Enter Your Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </motion.div>
            <motion.div className="space-y-2" variants={fadeInRight}>
              <input
                {...register("password")}
                className="border p-4 w-full font-light text-base rounded-[88px] border-[var(--grey-15)] bg-[var(--grey-10)] text-[var(--grey-35)] outline-none"
                placeholder="Enter Your Password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </motion.div>
          </div>
          <div className="w-full flex items-center justify-center">
            <motion.button
              type="submit"
              disabled={!isValid}
              className="relative px-6 py-3.5 rounded-[63px] bg-[var(--green-60)] text-[var(--grey-15)] font-normal text-sm w-full max-w-[404px] overflow-hidden"
            >
              <span className={`${isSubmitting ? "opacity-0" : "opacity-100"}`}>
                Sign Up
              </span>
              {isSubmitting && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <ClipLoader size={20} color="var(--grey-15)" />
                </span>
              )}
            </motion.button>
          </div>
        </motion.form>
        <AnimatePresence>
          {successMessage && (
            <motion.p
              className="text-[var(--green-60)] font-normal text-sm text-center mt-[30px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {successMessage}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Signup;
