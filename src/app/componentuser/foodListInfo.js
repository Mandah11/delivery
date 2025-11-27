"use client";

import { useState } from "react";

export const FoodList = ({
  handleRemove,
  src,
  foodName,
  ingredients,
  food,
  quantity,
  price,
  addfood,
  setAddFood,
}) => {
  const [Count, setCount] = useState(quantity);
  console.log(addfood, "adddddfooood");

  const handleAddCount = () => {
    setCount((prev) => {
      const newCount = prev + 1;

      const changedFoods = addfood.map((item) =>
        item.food === food ? { ...item, quantity: newCount } : item
      );

      setAddFood(changedFoods);
      localStorage.setItem("fooddata", JSON.stringify(changedFoods));

      return newCount;
    });
  };

  const handleCount = () => {
    if (Count === 1) {
      return Count;
    } else {
      setCount((prev) => {
        const lessCount = prev - 1;
        const changedFood = addfood.map((item) =>
          item.food === food ? { ...item, quantity: lessCount } : item
        );
        setAddFood(changedFood);
        localStorage.setItem("fooddata", JSON.stringify(changedFood));

        return lessCount;
      });
    }
  };

  return (
    <div className="w-120  border-dashed border-b border-[#09090B80]   h-43 flex gap-5 mb-5 ">
      <div className="w-[28%]  h-38 border rounded-lg">
        <img className="w-full h-full rounded-lg" src={src}></img>
      </div>
      <div className="flex flex-col w-[71%] h-35 ">
        <div className="  h-35 flex justify-between">
          <div className=" w-[85%]">
            <p className="text-[#EF4444] text-base">{foodName}</p>
            <p className="text-xs text-black">{ingredients}</p>
          </div>
          <button
            className="h-7 w-7 border rounded-full flex justify-center items-center border-red-500 cursor-pointer text-red-500"
            onClick={() => handleRemove(food)}
          >
            x
          </button>
        </div>
        <div className="w-[330px] gap-3 justify-between flex">
          <div className="flex gap-5">
            <button onClick={handleCount}>-</button>
            <button>{Count}</button>
            <button onClick={handleAddCount}>+</button>
          </div>
          <div>{price * Count}</div>
        </div>
      </div>
    </div>
  );
};
