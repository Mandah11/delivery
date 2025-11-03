"use client";
import Link from "next/link";
import { FoodLogo } from "../icon/adminfoodlogo";
import { MenuLogo } from "../icon/foodmenulogo.js";
import { OrderLogo } from "../icon/orderfoodlogo";
import { useState, useEffect } from "react";
import { MenuItem } from "../component/MenuItem";
import { Foods } from "../component/Foods";

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
  const [foods, setFoods] = useState([]);
  const getData = async () => {
    const data = await fetch(`http://localhost:8000/foodCategory`, options);
    const jsondata = await data.json();
    setFoodMenu(jsondata);
    console.log("fhdjfd", jsondata);
  };
  const getFood = async () => {
    const data = await fetch(`http://localhost:8000/food`, options);
    const jsondata = await data.json();
    setFoods(jsondata);
    console.log("darara", jsondata);
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
                {foodMenu.map((name, index) => {
                  return (
                    <MenuItem
                      categoryName={name.categoryName}
                      key={index}
                      totalfood={name.food}
                    />
                  );
                })}
                <div>
                  <button className="h-9 rounded-3xl bg-[#ef4444] w-9">
                    {" "}
                    +{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[1171px] h-[582px]  overflow-y-auto bg-[#f5f5f7]">
            <div className="w-[1171px] h-[600px] bg-white rounded-2xl mb-10">
              <p className="ml-5 h-18  flex items-center">Appeti</p>
              <div className="w-[1131px] flex flex-wrap gap-4 ml-5">
                {foods.map((food, index) => {
                  return (
                    <Foods
                      foodname={food.foodName}
                      price={food.price}
                      inform={food.ingredients}
                      key={index}
                    />
                  );
                })}
                {/* <div className="w-[270px] h-[241px] bg-blue-500 rounded-2xl flex flex-col items-center justify-evenly">
                  <div className="w-[238px] h-[129px] bg-amber-200"></div>
                  <div className="w-[238px] h-[60px] bg-amber-800 flex flex-col justify-between items-center">
                    <div className="h-5 bg-blue-300 flex justify-between w-[220px] ">
                      <p>duprakito</p>
                      <p>3747</p>
                    </div>
                    <div className="h-8 bg-gray-700">hfhfh</div>
                  </div>
                </div> */}
                {/* <div className="w-[270px] h-[241px] bg-blue-500 rounded-2xl">
                  {" "}
                  gjdgjg
                </div>
                <div className="w-[270px] h-[241px] bg-blue-500 rounded-2xl">
                  {" "}
                  gjdgjg
                </div>
                <div className="w-[270px] h-[241px] bg-blue-500 rounded-2xl">
                  {" "}
                  gjdgjg
                </div>
                <div className="w-[270px] h-[241px] bg-blue-500 rounded-2xl">
                  {" "}
                  gjdgjg
                </div>
                <div className="w-[270px] h-[241px] bg-blue-500 rounded-2xl">
                  {" "}
                  gjdgjg
                </div> */}
              </div>
            </div>
            <div className="w-[1171px] h-[600px] bg-white rounded-2xl mb-10">
              <p className="ml-5 h-18  flex items-center">Appetizers</p>
              <div className="w-[1131px] flex flex-wrap gap-4 ml-5">
                <div className="w-[270px] h-[241px] bg-blue-500 rounded-2xl">
                  {" "}
                  gjdgjg
                </div>
                <div className="w-[270px] h-[241px] bg-blue-500 rounded-2xl">
                  {" "}
                  gjdgjg
                </div>
                <div className="w-[270px] h-[241px] bg-blue-500 rounded-2xl">
                  {" "}
                  gjdgjg
                </div>
                <div className="w-[270px] h-[241px] bg-blue-500 rounded-2xl">
                  {" "}
                  gjdgjg
                </div>
                <div className="w-[270px] h-[241px] bg-blue-500 rounded-2xl">
                  {" "}
                  gjdgjg
                </div>
                <div className="w-[270px] h-[241px] bg-blue-500 rounded-2xl">
                  {" "}
                  gjdgjg
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
