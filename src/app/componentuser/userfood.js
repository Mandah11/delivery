"use client";
import { useEffect } from "react";
import { useState } from "react";
import { OrderSelect } from "./orderselect";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const UserFood = ({ foodcategoryname, id, getData }) => {
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
        {foodsTypes.map((foodsinform) => {
          return (
            <OrderSelect
              key={foodsinform._id}
              id={foodsinform._id}
              src={foodsinform.image}
              foodName={foodsinform.foodName}
              price={foodsinform.price}
              ingredients={foodsinform.ingredients}
              getData={getData}
            />
          );
        })}
      </div>
    </div>
  );
};
