"use client";
import { useEffect } from "react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const Product = ({ FoodcategoryName, id, getdata, getfood }) => {
  const [foodsType, setFoodsType] = useState([]);
  const [addfood, setAddFood] = useState({
    foodName: "",
    price: "",
    ingredients: "",
  });
  const [successmes, setSuccessMes] = useState("");
  const [addFoodstype, setAddFoodsType] = useState(false);
  const handleAddChange = async () => {
    try {
      const res = await fetch("http://localhost:8000/food", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          foodName: addfood.foodName,
          price: addfood.price,
          ingredients: addfood.ingredients,
          category: id,
        }),
      });
      getdata();
      getfood();
      setAddFood("");
      setAddFoodsType(false);
      getFoodType();
      setSuccessMes("New dish is being added to the menu");
      setTimeout(() => setSuccessMes(""), 3000);
    } catch (err) {
      console.log(err);
    }
  };
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
      <div className=" bg-white max-h-fit mb-5 w-full rounded-2xl">
        <p className="ml-8 h-16   flex items-center text-xl">
          {FoodcategoryName}
        </p>{" "}
        <div className="w-[95%] flex flex-wrap gap-9 ml-8  pb-5 ">
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
                <div className="w-[238px] h-[129px] "></div>
                <div className="w-[238px] h-[60px]  flex flex-col justify-between items-center">
                  <div className="h-5  flex justify-between w-[220px] ">
                    <p>{inform.foodName}</p>
                    <p>{inform.price}</p>
                  </div>
                  <div className="h-8">{inform.ingredients}</div>
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
            <div className="w-[412px] h-15 justify-between  flex">
              <div className="w-[194px] h-15">
                <p>Food name</p>
                <input
                  className="h-[38px] px-2 border mt-1"
                  placeholder="Type food name"
                  value={addfood.foodName}
                  onChange={(e) =>
                    setAddFood({
                      ...addfood,
                      foodName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="w-[194px] h-15 ">
                <p>Food price</p>
                <input
                  className="h-[38px] px-2 border mt-1"
                  placeholder="Enter price"
                  value={addfood.price}
                  onChange={(e) =>
                    setAddFood({
                      ...addfood,
                      price: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="w-[412px] h-28  flex flex-col">
              <p className="ml-1">Ingredients</p>
              <div className="mt-2 ">
                <Textarea
                  placeholder="List ingredients..."
                  className="h-[90px]"
                  id="message"
                  value={addfood.ingredients}
                  onChange={(e) =>
                    setAddFood({
                      ...addfood,
                      ingredients: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="w-[412px] h-42 flex flex-col justify-between">
              <p className="h-3.5">Food image</p>
              <div className="h-[138px] bg-[#2563eb]/10"></div>
            </div>
            <div className="w-[412px] h-16  flex justify-end items-end">
              <button
                className="h-10 w-[123px] bg-black text-white  rounded-md"
                onClick={handleAddChange}
              >
                Add Dish
              </button>
            </div>
          </div>
        </div>
      )}
      {successmes && (
        <div className="flex fixed inset-0  z-1 w-full h-[5%]  justify-center items-center mt-2">
          <div className="bg-black rounded-md text-white h-12 flex items-center justify-center w-auto px-3">
            {successmes}
          </div>
        </div>
      )}
    </>
  );
};
