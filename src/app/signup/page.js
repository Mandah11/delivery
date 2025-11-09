"use client";
import { useState } from "react";
import { Stepone } from "./features/stepone";
import { Steptwo } from "./features/steptwo";
import { Login } from "../login/features/login";

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
      {" "}
      {step === 1 && (
        <Stepone handleNextStep={handleNextStep} handleStart={handleStart} />
      )}{" "}
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
