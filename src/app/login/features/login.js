"use client";
import { LeftIcon } from "../../admin/icon/lefticon";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const Login = ({ handleEnd }) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tokenerr, setTokenErr] = useState("");
  const handleInputChange = async () => {
    try {
      const res = await fetch("http://localhost:8000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const { token } = await res.json();
      if (token) {
        localStorage.setItem("token", token);
        router.push("/");
      } else {
        setTokenErr("not token");
        setTimeout(() => setTokenErr(""), 3000);
      }
    } catch (err) {
      console.log(err);
      setTokenErr("not token");
      setTimeout(() => setTokenErr(""), 3000);
    }
  };

  return (
    <div className=" w-screen h-screen  flex justify-end  py-5 ">
      <div className="w-[93%]  h-full flex justify-between items-center">
        <div className="h-[48%] w-[40%] flex justify-center ">
          <div className="  w-[90%]  h-[73%] flex flex-col justify-between  ">
            <div>
              <button
                className="w-10 h-10 border flex justify-center items-center"
                onClick={handleEnd}
              >
                <LeftIcon />
              </button>
            </div>
            <div className="h-18  w-full  flex flex-col justify-between ">
              <p className="h-10  text-[25px] font-medium">Log in</p>
              <p className="h-8  text-[17px] text-[#848282]  ">
                Log in to enjoy your favorite dishes.
              </p>
            </div>
            <div className="h-32 w-[70%]  flex flex-col justify-between  ">
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="w-full border h-9 rounded-md px-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                id="Password"
                type="Password"
                placeholder="Password"
                className="w-full border h-9 rounded-md px-2"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <p className=" items-end flex ml-1">Forgot Password ?</p>
            </div>
            <button
              className="h-9 w-[70%] bg-gray-300 text-white flex justify-center items-center"
              onClick={handleInputChange}
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
        {tokenerr && (
          <div className="flex fixed inset-0  z-1 w-full h-[5%]  justify-center items-center mt-2">
            <div className="bg-black rounded-md text-white h-12 flex items-center justify-center w-auto px-3">
              {tokenerr}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
