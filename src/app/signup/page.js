"use client";
import { useState } from "react";
import { Stepone } from "./features/stepone";
import { Steptwo } from "./features/steptwo";
import { Login } from "../login/features/login";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
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
  const handleEnd = () => {
    if (step === 3) {
      return setStep(step - 2);
    }
  };
  const handleStart = () => {
    if (step === 1) {
      return setStep(step + 2);
    }
  };
  return (
    <>
      {step === 1 && (
        <Stepone handleNextStep={handleNextStep} handleStart={handleStart} />
      )}
      {step === 2 && (
        <Steptwo
          handleNextStep={handleNextStep}
          handleBackStep={handleBackStep}
        />
      )}
      {step === 3 && <Login handleEnd={handleEnd} />}
    </>
  );
}
