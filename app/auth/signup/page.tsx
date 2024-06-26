'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { BiUser } from "react-icons/bi";
import { CiLock, CiMail } from "react-icons/ci";
import Header from "@/components/Header/page";

// export const metadata: Metadata = {
//   title: "SignUp Page | Alphabyte Electronics",
//   description: "This is Next.js SignUp Page Alphabyte Electronics Template",
// };

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5050/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Handle success, e.g., redirect user to another page
        console.log("User registered successfully");
      } else {
        // Handle error
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      {/* <!-- ===== Header Start ===== --> */}
      <Header />
      {/* <!-- ===== Header End ===== --> */}
      <div className="px-10 md:px-40 md:py-10 bg-grey-bg_primary min-h-screen">
        <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex flex-wrap items-center">
            <div className="hidden w-full xl:block xl:w-1/2">
              <div className="px-26  text-center">
                <Link className="mb-5.5 inline-block" href="/">
                  <Image
                    className="hidden dark:block"
                    src={"/images/logo/logo.svg"}
                    alt="Logo"
                    width={250}
                    height={50}
                  />
                  <Image
                    className="dark:hidden"
                    src={"/images/logo/logo.svg"}
                    alt="Logo"
                    width={250}
                    height={50}
                  />
                </Link>
                <p className="2xl:px-20">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  suspendisse.
                </p>

                <span className="mt-15 inline-block">
                  <Image
                    src={"/images/illustration/signup.svg"}
                    alt="Logo"
                    width={350}
                    height={350}
                  />
                </span>
              </div>
            </div>

            <div className="w-full border-stroke xl:w-1/2 xl:border-l-2 dark:border-strokedark">
              <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                <span className="mb-1.5 block font-medium">Start for free</span>
                <h2 className="mb-9 text-2xl font-bold text-black sm:text-title-xl2 dark:text-white">
                  Sign Up to AlphaByte
                </h2>

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />

                      <span className="absolute right-4 top-4">
                        <BiUser className="w-5 h-5" />
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />

                      <span className="absolute right-4 top-4">
                        <CiMail className="w-5 h-5" />
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />

                      <span className="absolute right-4 top-4">
                        <CiLock className="w-5 h-5" />
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Re-type Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Re-enter your password"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />

                      <span className="absolute right-4 top-4">
                        <CiLock className="w-5 h-5" />
                      </span>
                    </div>
                  </div>

                  <div className="mb-5">
                    <input
                      type="submit"
                      value="Create account"
                      className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                    />
                  </div>

                  <button className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-3 py-2 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50">
                    <span>
                      <Image
                        src={"/images/brand/brand-01.svg"}
                        alt="Google"
                        width={35}
                        height={35}
                      />
                    </span>
                    Sign up with Google
                  </button>

                  <div className="mt-6 text-center">
                    <p>
                      Already have an account?{" "}
                      <Link href="/auth/signin" className="text-primary">
                        Sign in
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
