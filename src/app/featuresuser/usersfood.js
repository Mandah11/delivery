"use client";

import { useState, useEffect } from "react";
import { FoodLogo } from "../admin/icon/adminfoodlogo";
import { UserFood } from "../componentuser/userfood";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const UsersFood = () => {
  const [food, setFood] = useState([]);

  const getFoodDatas = async () => {
    const data = await fetch(`http://localhost:8000/foodCategory`, options);
    const jsondata = await data.json();
    setFood(jsondata);
    console.log("food", jsondata);
  };
  useEffect(() => {
    getFoodDatas();
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center ">
      <div className="bg-black">
        <div className="h-[172px] bg-black flex items-center">
          <div className="flex  ml-20 h-20 gap-3">
            {" "}
            <FoodLogo />
            <div>
              <p className="text-white text-2xl ">
                Nom<span className="text-red-600">Nom</span>
              </p>
              <p className="text-white ">Swift delivery</p>
            </div>
          </div>
        </div>
        <img src="./special.png" />
      </div>
      <div className="w-full items-center justify-center bg-[#404040] flex flex-col py-10">
        {food.map((food, index) => {
          return (
            <UserFood
              foodcategoryname={food.categoryName}
              id={food._id}
              key={index}
            />
          );
        })}
      </div>
      <div className="h-[755px] bg-black w-full">ff</div>
    </div>
  );
};
