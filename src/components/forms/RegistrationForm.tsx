"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    agreeToPolicy: false,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      className="p-3 sm:px-8 relative h-screen lg:overflow-hidden bg-[#373A8D] xl:bg-white dark:bg-darkmode-800 xl:dark:bg-darkmode-600 before:hidden before:xl:block before:content-[''] before:w-[57%] before:-mt-[28%] before:-mb-[16%] before:-ml-[13%] before:absolute before:inset-y-0 before:left-0 before:transform before:rotate-[-4.5deg] before:bg-[#373A8D]/20 before:rounded-[100%] before:dark:bg-darkmode-400 after:hidden after:xl:block after:content-[''] after:w-[57%] after:-mt-[20%] after:-mb-[13%] after:-ml-[13%] after:absolute after:inset-y-0 after:left-0 after:transform after:rotate-[-4.5deg] after:bg-[#373A8D] after:rounded-[100%] after:dark:bg-darkmode-700"
    >
      <div className="container relative z-10 sm:px-10">
        <div className="block grid-cols-2 gap-4 xl:grid">
          {/* BEGIN: Register Info */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden min-h-screen flex-col xl:flex"
          >
            <Link href="/" className="-intro-x flex items-start pl-5 pt-5">
              <Image
                src="/img/LogoT4B.png"
                alt="Logo"
                width={150}
                height={150}
                className="w-35 h-35"
              />
            </Link>
            <div className="my-auto">
              <Image
                src="/img/illustration.svg"
                alt="Register Illustration"
                width={400}
                height={300}
                className="-intro-x -mt-16 w-1/2"
              />
              <div className="-intro-x mt-10 text-4xl font-medium leading-tight text-white">
                Welcome to Train4best
              </div>
              <div className="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-slate-400">
                Customer Service : +62 821-3023-7117
              </div>
            </div>
          </motion.div>
          {/* END: Register Info */}

          {/* BEGIN: Register Form */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="my-10 flex h-screen py-5 xl:my-0 xl:h-auto xl:py-0"
          >
            <div className="mx-auto my-auto w-full rounded-md bg-white px-5 py-8 shadow-md dark:bg-darkmode-600 sm:w-3/4 sm:px-8 lg:w-2/4 xl:ml-20 xl:w-auto xl:bg-transparent xl:p-0 xl:shadow-none">
              <h2 className="intro-x text-center text-2xl font-bold text-black xl:text-left xl:text-3xl">
                Sign Up
              </h2>
              <div className="intro-x mt-2 text-center text-slate-400 dark:text-slate-400 xl:hidden">
                Welcome to Train4best 
              </div>
              <form onSubmit={handleSubmit} className="intro-x mt-8">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="intro-x block min-w-full px-4 py-3 xl:min-w-[350px] disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#373A8D] focus:ring-opacity-20 focus:border-[#373A8D] focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="intro-x mt-4 block min-w-full px-4 py-3 xl:min-w-[350px] disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#373A8D] focus:ring-opacity-20 focus:border-[#373A8D] focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="intro-x mt-4 block min-w-full px-4 py-3 xl:min-w-[350px] disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#373A8D] focus:ring-opacity-20 focus:border-[#373A8D] focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="intro-x mt-4 block min-w-full px-4 py-3 xl:min-w-[350px] disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#373A8D] focus:ring-opacity-20 focus:border-[#373A8D] focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80"
                />
                <div className="intro-x mt-3 grid h-1 w-full grid-cols-12 gap-4">
                  <div className="col-span-3 h-full rounded bg-success"></div>
                  <div className="col-span-3 h-full rounded bg-success"></div>
                  <div className="col-span-3 h-full rounded bg-success"></div>
                  <div className="col-span-3 h-full rounded bg-slate-100 dark:bg-darkmode-800"></div>
                </div>
                <Link
                  href="#"
                  className="intro-x mt-2 block text-xs text-slate-500 sm:text-sm"
                >
                  What is a secure password?
                </Link>
                <input
                  type="password"
                  name="passwordConfirmation"
                  placeholder="Password Confirmation"
                  value={formData.passwordConfirmation}
                  onChange={handleChange}
                  className="intro-x mt-4 block min-w-full px-4 py-3 xl:min-w-[350px] disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#373A8D] focus:ring-opacity-20 focus:border-[#373A8D] focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80"
                />
                <div className="intro-x mt-4 flex items-center text-xs text-slate-600 dark:text-slate-500 sm:text-sm">
                  <input
                    type="checkbox"
                    name="agreeToPolicy"
                    checked={formData.agreeToPolicy}
                    onChange={handleChange}
                    className="mr-2 border transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-[#373A8D] focus:ring-opacity-20"
                  />
                  <label className="cursor-pointer select-none">
                    I agree to the Envato
                  </label>
                  <Link
                    href="/privacy"
                    className="ml-1 text-[#373A8D] dark:text-slate-200"
                  >
                    Privacy Policy
                  </Link>
                </div>
                <div className="intro-x mt-5 text-center xl:mt-8 xl:text-left">
                  <button
                    type="submit"
                    className="w-full px-4 py-3 align-top xl:mr-3 xl:w-32 transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-[#373A8D] focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 bg-[#373A8D] border-[#373A8D] text-white"
                  >
                    Register
                  </button>
                  <Link
                    href="/login"
                    className="mt-3 w-full px-4 py-3 align-top xl:mt-0 xl:w-32 transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-[#373A8D] focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&:hover:not(:disabled)]:bg-secondary/20 [&:hover:not(:disabled)]:dark:bg-darkmode-100/10">
                    Sign in
                  </Link>
                </div>
              </form>
            </div>
          </motion.div>
          {/* END: Register Form */}
        </div>
      </div>
    </motion.div>
  );
};

export default RegistrationForm;
