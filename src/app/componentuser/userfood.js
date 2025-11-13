"use client";
import { useEffect } from "react";
import { useState } from "react";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const UserFood = ({ foodcategoryname, id }) => {
  const [foodsTypes, setFoodsTypes] = useState([]);
  const [foodinfo, setFoodInfo] = useState(false);
  const [foodadd, setFoodAdd] = useState(false);
  const [logo, setLogo] = useState(false);
  const [step, setStep] = useState(1);
  const handleNext = () => {
    return setStep(step + 1);
  };

  const handleBack = () => {
    if (step === 1) {
      return step;
    } else {
      setStep(step - 1);
    }
  };
  const handleLogochange = () => {
    return setLogo(!logo);
  };
  const getFoodTypes = async () => {
    const data = await fetch(
      `http://localhost:8000/food/findId/${id}`,
      options
    );
    const jsondata = await data.json();
    setFoodsTypes(jsondata);
    console.log("food", jsondata);
  };

  useEffect(() => {
    getFoodTypes();
  }, []);
  return (
    <div className="w-full  flex flex-col items-center p-10 ">
      <div className="w-[87%] h-20 flex items-start ">
        <p className="text-white text-3xl font-medium">{foodcategoryname}</p>
      </div>
      <div className=" flex w-[90%] flex-wrap  gap-25  ml-18  ">
        {foodsTypes.map((foodsinform, index) => {
          return (
            <div
              className="w-[397px] min-h-[342px] h-fit  border bg-white border-gray-400 rounded-2xl flex flex-col items-center justify-evenly "
              key={index}
            >
              <div className="w-[365px] h-[210px] bg-amber-300 relative">
                <img
                  src={foodsinform.image || "/facebook.png"}
                  width={100}
                  height={100}
                  alt="image failed"
                  className="w-full h-full object-cover rounded-lg "
                  onClick={() => setFoodInfo(true)}
                />
                <div
                  className="absolute bottom-4 right-4"
                  onClick={handleLogochange}
                >
                  <button className="h-11 w-11 rounded-full flex justify-center items-center bg-white cursor-pointer text-red-500 ">
                    {logo ? <p>+</p> : <p>-</p>}
                  </button>
                </div>
              </div>
              <div className="w-[365px] min-h-20 h-fit flex flex-col justify-between items-center">
                <div className="h-8  flex justify-between w-full ">
                  <p>{foodsinform.foodName}</p>
                  <p>{foodsinform.price}</p>
                </div>
                <div className="h-fit min-h-10 w-full">
                  {foodsinform.ingredients}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {foodinfo && (
        <div className="flex fixed inset-0   z-1 bg-black/30 w-full h-full justify-center items-center">
          <div className="w-[826px] h-[412px] bg-white  rounded-2xl ml-10 items-center flex justify-evenly  ">
            <div className="w-[377px] h-[364px] bg-amber-300">ff</div>
            <div className="w-[377px] h-[364px] ">
              <div className="w-full h-9 flex justify-end items-center">
                <button
                  className="w-9 h-9 rounded-3xl border border-gray-500"
                  onClick={() => {
                    setFoodInfo(false);
                  }}
                >
                  {" "}
                  x{" "}
                </button>
              </div>
              <div className="w-full h-[328px]  flex flex-col justify-between">
                <div className="w-full h-24  flex justify-between flex-col">
                  <div className="h-9  text-[30px] flex items-center">
                    {" "}
                    Sunshine Stackers
                  </div>
                  <div className="w-full h-12  text-[16px] flex items-center">
                    {" "}
                    Fluffy pancakes stacked with fruits, cream, syrup, and
                    powdered sugar.
                  </div>
                </div>
                <div className="w-full h-31 justify-between flex flex-col">
                  <div className="h-14 w-full flex items-center">
                    <div className="h-full w-[256px]">
                      <div className="h-6  text-[16px] flex items-center">
                        Total price
                      </div>
                      <div className="h-8  text-[24px] font-semibold flex items-center">
                        {" "}
                        2766
                      </div>
                    </div>
                    <div className="w-[121px] h-11 flex justify-between items-center">
                      <button
                        className="w-11 h-11 rounded-4xl  flex items-center justify-center border border-gray-600"
                        onClick={handleBack}
                      >
                        -
                      </button>
                      <div className="h-11 w-[30px] flex justify-center items-center">
                        {step}
                      </div>
                      <button
                        className="w-11 h-11 rounded-4xl  flex items-center justify-center border border-gray-600"
                        onClick={handleNext}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button className="h-11 w-full rounded-3xl text-white bg-black">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
