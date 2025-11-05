"use client";
import { useEffect } from "react";
import { useState } from "react";
import { FoodMenus } from "../features/Foodinfo";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const Product = ({ FoodcategoryName, id }) => {
  const [foodsType, setFoodsType] = useState([]);
  const [addFoodstype, setAddFoodsType] = useState(false);
  const getFoodType = async () => {
    const data = await fetch(
      `http://localhost:8000/food/findId/${id}`,
      options
    );
    const jsondata = await data.json();
    setFoodsType(jsondata);
    console.log("food", jsondata);
  };
  useEffect(() => {
    getFoodType();
  }, []);

  return (
    <>
      <div className=" bg-white max-h-fit mb-5 w-[1171px] rounded-2xl">
        <p className="ml-5 h-15 mt-3  flex items-center">{FoodcategoryName}</p>{" "}
        <div className="w-[1131px] flex flex-wrap gap-4 ml-5 pb-5">
          <div className="w-[270px] h-[241px] border-2 border-dashed border-red-400 rounded-2xl flex flex-col items-center justify-evenly">
            <div className="flex justify-center flex-col items-center gap-4">
              <button
                className="h-9 rounded-3xl bg-[#ef4444] w-9 text-white"
                onClick={() => {
                  setAddFoodsType(true);
                }}
              >
                +
              </button>
              <div className="flex justify-center items-center flex-col">
                <p>Add new Dish to</p>
                <p>{FoodcategoryName}</p>
              </div>
            </div>
          </div>
          {foodsType.map((inform, index) => {
            return (
              <div
                className="w-[270px] h-[241px] border border-gray-400 rounded-2xl flex flex-col items-center justify-evenly"
                key={index}
              >
                <div className="w-[238px] h-[129px] bg-amber-200 "></div>
                <div className="w-[238px] h-[60px]  flex flex-col justify-between items-center">
                  <div className="h-5  flex justify-between w-[220px] ">
                    <p>{inform.foodName}</p>
                    <p>{inform.price}</p>
                  </div>
                  <div className="h-8">fjdfjf</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {addFoodstype && (
        <div className="flex fixed inset-0   z-1 bg-black/30 w-full h-full justify-center items-center">
          <div className="w-[460px] h-[592px] bg-white  rounded-2xl ml-10 items-center flex flex-col justify-evenly ">
            <div className="w-[412px] h-[52px] flex ">
              <div className="h-7 w-[366px] ml-1 text-[19px] font-medium mt-1">
                Add new Dish to {FoodcategoryName}
              </div>
              <button
                className="h-9 w-9 bg-[#f5f5f7] rounded-2xl text-xl"
                onClick={() => setAddFoodsType(false)}
              >
                x
              </button>
            </div>
            <div className="w-[412px] h-15 justify-between  flex ">
              <div className="w-[194px] h-15">
                <p>Food name</p>
                <input
                  className="h-[38px] px-2 border"
                  placeholder="Type food name"
                />
              </div>
              <div className="w-[194px] h-15">
                <p>Food price</p>
                <input
                  className="h-[38px] px-2 border"
                  placeholder="Enter price"
                />
              </div>
            </div>
            <div className="w-[412px] h-28  flex flex-col">
              <p>Ingredients</p>
              <div className="h-[90px] inline-0 border">
                <input
                  className="min-h-8 max-h-10 w-full px-2 flex outline-hidden"
                  placeholder="List ingredients..."
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
