"use client";
import Link from "next/link";
import { LeftIcon } from "../../admin/icon/lefticon";
import { useState } from "react";
const checkHasSpecial = (string) => {
  return /[!%^*(),.?":{}<>]/.test(string);
};
export const Steptwo = ({ handleNextStep, handleBackStep }) => {
  const [data, setData] = useState({
    password: "",
    confirmpassword: "",
  });
  const [errorstatepassword, setErrorStatePassword] = useState("");
  const [errorstateconfirm, setErrorStateConfirm] = useState("");
  const handleButtonClick = () => {
    if (data.password === "") {
      setErrorStatePassword("password is required");
    } else if (!checkHasSpecial(data.password)) {
      setErrorStatePassword("Weak password. Use numbers and symbols.");
    }
    if (data.confirmpassword === "") {
      setErrorStateConfirm("confirmpassword is required");
    } else if (data.confirmpassword !== data.password) {
      setErrorStateConfirm("Those password didn't match. Try again");
    } else {
      handleNextStep();
    }
  };
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
            <div
              className={
                errorstatepassword
                  ? "h-40  w-[77%]  flex flex-col justify-between"
                  : "h-31 w-[70%]  flex flex-col justify-between"
              }
            >
              <div>
                <input
                  id="Password"
                  type="Password"
                  placeholder="Password"
                  className={
                    errorstatepassword
                      ? "w-full border h-9 rounded-md px-2 border-red-500"
                      : "w-full border h-9 rounded-md px-2"
                  }
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
                {errorstatepassword && (
                  <div className="ml-1 text-[15px] text-red-500">
                    {errorstatepassword}
                  </div>
                )}
              </div>
              <div>
                <input
                  id="Confirm"
                  type="Password"
                  placeholder="Confirm"
                  className={
                    errorstateconfirm
                      ? "w-full border h-9 rounded-md px-2 border-red-500"
                      : "w-full border h-9 rounded-md px-2"
                  }
                  value={data.confirmpassword}
                  onChange={(e) =>
                    setData({ ...data, confirmpassword: e.target.value })
                  }
                />
                {errorstateconfirm && (
                  <div className="ml-1 text-[15px] text-red-500">
                    {errorstateconfirm}
                  </div>
                )}
              </div>

              <div className="flex text-[#71717A] px-2 gap-2">
                <input type="checkbox" />
                <p> Show password</p>
              </div>
            </div>
            <button
              className={
                errorstateconfirm
                  ? "h-9 w-[70%] bg-gray-300 text-white flex justify-center items-center mt-3"
                  : "h-9 w-[70%] bg-gray-300 text-white flex justify-center items-center"
              }
              style={{
                background: data.password.length < "3" ? "#6b6b6b" : "black",
              }}
              onClick={handleButtonClick}
            >
              Let's go
            </button>
            <div
              className={
                errorstateconfirm
                  ? "flex justify-center gap-4 text-[#6d6d6d] w-[70%] mt-2"
                  : "flex justify-center gap-4 text-[#6d6d6d] w-[70%]"
              }
            >
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
