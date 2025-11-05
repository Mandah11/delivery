"use client";
import { LeftIcon } from "../../admin/icon/lefticon";
import { useState } from "react";
import { useRouter } from "next/navigation";
const checkemailHasSpecial = (string) => {
  return /[!#$%^&*(),?":{}<>]/.test(string);
};
const emailkey = (string) => {
  return /[@]/.test(string);
};
const checkpasswordHasSpecial = (string) => {
  return /[!%^*(),.?":{}<>]/.test(string);
};

export const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

      localStorage.setItem("token", token);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full h-full">
      <div className="w-[1440px] flex justify-evenly m-auto bg-gray-50 py-5 items-center">
        <div className="w-104 h-94 flex flex-col justify-between ">
          <div>
            <button className="w-9 h-9 border flex justify-center items-center">
              <LeftIcon />
            </button>
          </div>
          <div className="h-15 w-full  flex flex-col justify-between">
            <p className="h-8 text-[23px] font-medium ">Log in</p>
            <p className="h-6 text-[17px] text-[#848282] ">
              Log in to enjoy your favorite dishes
            </p>
          </div>
          <div className="h-31  w-full  flex flex-col justify-between   ">
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full border h-9 rounded-md px-2"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full border h-9 rounded-md px-2"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <p className="h-9 items-end flex ml-1">Forgot Password ?</p>
          </div>
          <button
            className="h-9 w-full bg-gray-300 text-white flex justify-center items-center"
            onClick={handleInputChange}
          >
            {" "}
            Let's go
          </button>
          <div className="flex justify-center gap-4 text-[#6d6d6d]">
            <p>Don't have an account?</p>
            <p className="text-blue-400">Sign up</p>
          </div>
        </div>
        <div className="w-214 h-226 bg-blue-300"></div>
      </div>
    </div>
  );
};
