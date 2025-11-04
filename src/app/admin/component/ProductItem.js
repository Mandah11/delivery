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
export const Product = ({ FoodcategoryName, id }) => {
  const [foodsType, setFoodsType] = useState([]);
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
    <div className=" bg-white max-h-fit mb-5 w-[1171px]">
      <p className="ml-5 h-15 mt-3  flex items-center">{FoodcategoryName}</p>{" "}
      <div className="w-[1131px] flex flex-wrap gap-4 ml-5 pb-5">
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
  );
};
