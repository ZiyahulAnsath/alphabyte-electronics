'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { CiLock, CiMail } from "react-icons/ci";
import Header from "@/components/Header/page";

const SignIn: React.FC = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      const response = await fetch("http://localhost:5050/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include", // Include cookies in the request
      });
      if (response.ok) {
        const data = await response.json();
        const { token, user } = data;
        // Store the token in local storage
        localStorage.setItem("token", token);
        localStorage.setItem("username", user.username);
        localStorage.setItem("email", user.email); 
        localStorage.setItem("role", user.role); 
        localStorage.setItem("userId", user._id); 

        console.log("Login successful");

        // Check the role and redirect accordingly
        // if (user.role === "user") {

          window.location.href = '/';
        // } else {
          // Handle redirection for other roles if needed
        // }
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-grey-bg_primary px-10 md:px-40 md:py-10">
        <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex flex-wrap items-center">
            <div className="hidden w-full xl:block xl:w-1/2">
              <div className="px-26 text-center">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse.
                </p>
                <span className="mt-15 inline-block">
                  <Image
                    src={"/images/illustration/login.svg"}
                    alt="Logo"
                    width={350}
                    height={350}
                  />
                </span>
              </div>
            </div>
            <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
              <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                <span className="mb-1.5 block font-medium">Start for free</span>
                <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                  Sign In to AlphaByte
                </h2>
                <form onSubmit={handleSubmit}>
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
                        <CiMail className="h-5 w-5" />
                      </span>
                    </div>
                  </div>
                  <div className="mb-6">
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
                        <CiLock className="h-5 w-5 " />
                      </span>
                    </div>
                  </div>
                  <div className="mb-5">
                    <input
                      type="submit"
                      value="Sign In"
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
                    Sign in with Google
                  </button>
                  <div className="mt-6 text-center">
                    <p>
                      Don’t have any account?{" "}
                      <Link href="/auth/signup" className="text-primary">
                        Sign Up
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

export default SignIn;
