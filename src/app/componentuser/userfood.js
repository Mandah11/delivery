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
    <div className="w-[90%]   flex flex-col items-center">
      <div className="w-[96%]  h-20 flex items-center ">
        <p className="text-white text-3xl font-medium">{foodcategoryname}</p>
      </div>
      <div className=" flex flex-wrap w-full ">
        {foodsTypes.map((foodsinform, index) => {
          return (
            <div
              className="w-[397px] ml-8.5 min-h-[342px] h-fit border border-gray-400 bg-white rounded-2xl flex flex-col items-center justify-evenly mb-5 mt-3"
              key={index}
            >
              <div className="w-[365px] h-[210px] rounded-xl"></div>
              <div className="w-[365px] min-h-20 h-fit   flex flex-col justify-between items-center">
                <div className="w-full h-8 flex justify-between">
                  <p>{foodsinform.foodName}</p>
                  <p>{foodsinform.price}</p>
                </div>
                <div className="w-full min-h-10 h-fit">
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
