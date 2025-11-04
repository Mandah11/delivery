"use client";
import Link from "next/link";
import { FoodLogo } from "../icon/adminfoodlogo";
import { MenuLogo } from "../icon/foodmenulogo.js";
import { OrderLogo } from "../icon/orderfoodlogo";
import { useState, useEffect } from "react";
import { MenuItem } from "../component/MenuItem";
import { Product } from "../component/ProductItem";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const FoodMenus = () => {
  const [foodMenu, setFoodMenu] = useState([]);
  const [addCategory, setAddCategory] = useState(false);
  const [foods, setFoods] = useState([]);
  const getData = async () => {
    const data = await fetch(`http://localhost:8000/foodCategory`, options);
    const jsondata = await data.json();
    setFoodMenu(jsondata);
    console.log("category", jsondata);
  };
  const getFood = async () => {
    const data = await fetch(`http://localhost:8000/food`, options);
    const jsondata = await data.json();
    setFoods(jsondata);
    console.log("food", jsondata);
  };
  useEffect(() => {
    getData(), getFood();
  }, []);

  return (
    <div className="w-full h-full flex">
      <div className="w-[1440px] flex m-auto">
        <div className="w-[200px] ">
          <div className="w-[165px] h-11 mt-9 px-5  flex items-center text-[15px] gap-2">
            <FoodLogo />
            <div>
              <div className="text-[18px] font-medium">NomNom</div>
              <div className="text-[12px]">Swift delivery</div>
            </div>
          </div>
          <div className="w-[165px] h-[104px] px-5 mt-10 ">
            <button className="w-full h-10 bg-black rounded-2xl text-white flex justify-center items-center text-[13px] gap-3">
              <MenuLogo />
              Food Menu
            </button>
            <Link href={"/order"}>
              <button className="w-full h-10 rounded-2xl  flex justify-center items-center text-[13px] gap-3 mt-6">
                <OrderLogo />
                Order
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[1271px] bg-[#f5f5f7] rounded-2xl min-h-[930px] items-center justify-center flex flex-col max-h-fit">
          <div className="w-[1171px] h-[236px] items-end flex flex-col mt-5 mb-6 ">
            <button className=" h-9 w-9 bg-black rounded-3xl"> </button>
            <div className="w-[1171px] h-44 mt-6 bg-white rounded-xl flex flex-col justify-evenly items-center">
              <div className="w-[1123px] h-7 text-[25px] font-medium">
                Dishes category
              </div>
              <div className="w-[1123px] h-[84px] gap-3 flex ">
                <div>
                  {foods && (
                    <button className="w-auto rounded-2xl pl-2 gap-2 flex items-center border p-2 h-9">
                      All dishes
                      <div className="bg-black text-white rounded-2xl w-10 mr-1 h-5.5 justify-center items-center ">
                        {foods.length}
                      </div>
                    </button>
                  )}
                </div>
                {foodMenu.map((name, index) => {
                  return (
                    <MenuItem
                      categoryName={name.categoryName}
                      key={index}
                      totalfood={name.food}
                    />
                  );
                })}
                <div
                  onClick={() => {
                    setAddCategory(!addCategory);
                  }}
                >
                  <button
                    className="h-9 rounded-3xl bg-[#ef4444] w-9"
                    // onClick={() => {
                    //   setAddCategory(!addCategory);
                    // }}
                  >
                    {" "}
                    +{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[1171px] h-[582px]  overflow-y-auto bg-[#f5f5f7] ">
            {foodMenu.map((food, index) => {
              return (
                <Product
                  FoodcategoryName={food.categoryName}
                  id={food._id}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
      {addCategory && (
        <div className="flex absolute  bg-black/30 w-full h-full justify-center">
          <div className="w-[460px] h-[272px] bg-white mt-80">
            <div className="w-[412px] h-[52px]"></div>
          </div>
        </div>
      )}
    </div>
  );
};
