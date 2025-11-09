"use client";
import Link from "next/link";
import { LeftIcon } from "../../admin/icon/lefticon";
export const Steptwo = ({ handleNextStep, handleBackStep }) => {
  return (
    <div className=" w-screen h-screen  flex justify-end  py-5 ">
      <div className="w-[93%]  h-full flex justify-between items-center">
        <div className="h-[48%] w-[40%] flex justify-center ">
          <div className="  w-[90%]  h-[74%] flex flex-col justify-between  ">
            <div>
              <button
                className="w-10 h-10 border flex justify-center items-center"
                onClick={handleBackStep}
              >
                <LeftIcon />
              </button>
            </div>
            <div className="h-18  w-full  flex flex-col justify-between ">
              <p className="h-10  text-[25px] font-medium">
                Create a strong password
              </p>
              <p className="h-8  text-[17px] text-[#848282]  ">
                Create a strong password with letters, numbers.
              </p>
            </div>
            <div className="h-31 w-[70%]  flex flex-col justify-between  ">
              <input
                id="Password"
                type="Password"
                placeholder="Password"
                className="w-full border h-9 rounded-md px-2"
              />
              <input
                id="Confirm"
                type="Confirm"
                placeholder="Confirm"
                className="w-full border h-9 rounded-md px-2"
              />
              <div className="flex text-[#71717A] px-2 gap-2">
                {" "}
                <input type="checkbox" />
                <p> Show password</p>
              </div>
            </div>
            <button
              className="h-9 w-[70%] bg-gray-300 text-white flex justify-center items-center"
              onClick={handleNextStep}
            >
              Let's go
            </button>
            <div className="flex justify-center gap-4 text-[#6d6d6d] w-[70%]">
              <p>Already have an account?</p>
              <Link href={"/signup"}>
                <p className="text-blue-400">Sign up</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-[70%] mr-10 flex justify-center h-full py-5 bg-blue-400 "></div>
      </div>
    </div>
  );
};
