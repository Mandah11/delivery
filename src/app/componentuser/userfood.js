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
              <div className="w-[365px] h-[210px]"></div>
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
    </div>
  );
};
