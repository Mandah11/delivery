"use client";

import { LeftIcon } from "@/app/admin/icon/lefticon";
import Link from "next/link";
import { useState } from "react";
const checkinputHasSpecial = (string) => {
  return /[!#$%^&*(),?":{}<>]/.test(string);
};
const check = (string) => {
  return /[@]/.test(string);
};
export const Stepone = ({ handleNextStep, handleStart }) => {
  return (
    <div className=" w-screen h-screen  flex justify-end  py-5 ">
      <div className="w-[93%]  h-full flex justify-between items-center">
        <div className="h-[50%]  w-[40%] flex justify-center ">
          <div className="  w-[90%]  h-[60%] flex flex-col justify-between  ">
            <div>
              <button
                className="w-10 h-10 border flex justify-center items-center"
                onClick={handleStart}
              >
                <LeftIcon />
              </button>
            </div>
            <div className="h-18  w-full  flex flex-col justify-between ">
              <p className="h-10  text-[25px] font-medium">
                Create your account
              </p>
              <p className="h-8  text-[17px] text-[#848282]  ">
                Sign up to explore your favorite dishes.
              </p>
            </div>
            <div className="h-10  w-[70%]   flex flex-col justify-center  ">
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="w-full border h-9 rounded-md px-2"
              />
            </div>
            <button
              className="h-9 w-[70%] bg-gray-300 text-white flex justify-center items-center"
              onClick={handleNextStep}
            >
              Let's go
            </button>
            <div className="flex justify-center gap-4 text-[#6d6d6d] w-[70%]">
              <p>Already have an account?</p>
              <Link href={"/login"}>
                <p className="text-blue-400">Log in</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-[70%] mr-10 flex justify-center h-full py-5 bg-blue-400 "></div>
      </div>
    </div>
  );
};
