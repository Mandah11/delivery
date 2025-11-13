"use client";
import { useState } from "react";
import { Stepone } from "./features/stepone";
import { Steptwo } from "./features/steptwo";
import { useRouter } from "next/navigation";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
const checkHasSpecialCharacters = (string) => {
  return /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/.test(string);
};
const checkHasSpecial = (string) => {
  return /[!#@$%&№₮]/.test(string);
};
export default function Home() {
  const [step, setStep] = useState(1);
  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handleBackStep = () => {
    if (step === 1) {
      return;
    } else {
      setStep(step - 1);
    }
  };
  const handleStart = () => {
    if (step === 1) {
      return setStep(step + 2);
    }
  };
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const value = (email || "").trim();
  const handleEmailButtonClick = () => {
    if (!value.trim()) {
      setErrorEmail("email is required");
    } else if (!checkHasSpecialCharacters(value)) {
      setErrorEmail("example@gmail.com");
    } else {
      handleNextStep();
    }
  };

  const [data, setData] = useState({
    password: "",
    confirmpassword: "",
  });
  const [errorstate, setErrorState] = useState({});

  const handleAddChange = async () => {
    try {
      const res = await fetch("http://localhost:8000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: data.password,
        }),
      });
      const errors = validateInput();
      if (Object.keys(errors).length === 0) {
        setErrorState({});
        router.push("/");
        console.log("arano");
      } else {
        setErrorState(errors);
        console.log("errrooor");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const validateInput = () => {
    const errors = {};
    if (!data.password.trim()) {
      errors.password = "password is required";
    } else if (!checkHasSpecial(data.password)) {
      errors.password = "Password must include letters and numbers.";
    }

    if (!data.confirmpassword.trim()) {
      errors.confirmpassword = "confirmpassword is required";
    } else if (data.confirmpassword !== data.password) {
      errors.confirmpassword = "Password do not match. Please try again.";
    }
    return errors;
  };

  return (
    <>
      {step === 1 && (
        <Stepone
          handleNextStep={handleNextStep}
          handleStart={handleStart}
          valueEmail={email}
          onchangeEmail={(e) => setEmail(e.target.value)}
          handleEmailButtonClick={handleEmailButtonClick}
          Email={errorEmail}
        />
      )}
      {step === 2 && (
        <Steptwo
          handleBackStep={handleBackStep}
          handleButtonClick={handleAddChange}
          errorstatepassword={errorstate.password}
          errorstateconfirm={errorstate.confirmpassword}
          valuePassword={data.password}
          valueConfirm={data.confirmpassword}
          onchangePassword={(e) =>
            setData({ ...data, password: e.target.value })
          }
          onchangeCondfirm={(e) =>
            setData({ ...data, confirmpassword: e.target.value })
          }
        />
      )}
    </>
  );
}
