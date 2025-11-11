"use client";

import { useState, useEffect } from "react";
import { FoodLogo } from "../admin/icon/adminfoodlogo";
import { UserFood } from "../componentuser/userfood";
import { Foods } from "../admin/icon/food";
import { Loc } from "../admin/icon/location";

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
        <div className="h-30 bg-amber-200 justify-between flex items-center ">
          <div>
            <div className="flex h-18 items-center gap-3 bg-amber-500">
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

          <div>
            <button className="w-50 h-10 bg-white rounded-xl ">
              <div className="flex items-center gap-2">
                <Loc />
                <p className="text-red-500"> Delivery address:</p>
              </div>
            </button>
          </div>
        </div>
        <img src="./special.png" />
      </div>
      <div className="w-full items-center justify-center bg-[#404040] flex flex-col">
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
      <div className="h-[755px] bg-black w-full py-10">
        <div className="w-full bg-red-500 whitespace-nowrap overflow-hidden flex items-center h-15 ">
          <div className=" text-2xl text-white w-full animation-scroll  gap-2">
            {Array(40)
              .fill("Fresh Fast Delivered")
              .map((text, i) => (
                <span key={i}>{text}</span>
              ))}
          </div>
        </div>
        <div className="w-screen h-[90%] flex flex-col justify-evenly items-center">
          <div className="w-[90%] flex h-[50%] justify-between   ">
            <div className="w-[10%] bg-black  flex justify-end">
              <div className="h-full w-auto">
                <Foods />
                <div>
                  <p className="text-[22px] text-white  ">
                    Nom<span className="text-red-400">Nom</span>
                  </p>
                  <p className="text-white">Swift delivery</p>
                </div>
              </div>
            </div>

            <div className="w-[73%] flex ">
              <div className="w-[28%]  flex flex-col items-start ">
                <div>
                  <p className="text-[20px] text-[#d8d6d6] h-10  ">NOMNOM</p>
                </div>
                <div className=" flex w-full text-[17px] ">
                  <div className="  w-[50%]  flex flex-col items-start h-28   justify-between ">
                    <button className="text-white cursor-pointer">Home</button>
                    <button className="text-white cursor-pointer">
                      Contact us
                    </button>
                    <button className="text-white cursor-pointer">
                      Delivery zone
                    </button>
                  </div>
                </div>
              </div>
              <div className="h-full w-[40%]  ">
                <div>
                  <p className="text-[20px] text-[#d8d6d6] h-10  ">MENU</p>
                </div>
                <div className=" flex w-full text-[17px] ">
                  <div className="  w-[40%]  flex flex-col items-start h-50  justify-between ">
                    <button className="text-white cursor-pointer">
                      Appetizers
                    </button>
                    <button className="text-white cursor-pointer">
                      Salads
                    </button>
                    <button className="text-white cursor-pointer">
                      Pizzas
                    </button>
                    <button className="text-white cursor-pointer">
                      Main dishes
                    </button>
                    <button className="text-white cursor-pointer">
                      Desserts
                    </button>
                  </div>

                  <div className=" w-[40%]  flex flex-col items-start h-50 justify-evenly ">
                    <button className="text-white cursor-pointer">
                      Side dish{" "}
                    </button>
                    <button className="text-white cursor-pointer">
                      Brunch
                    </button>
                    <button className="text-white cursor-pointer">
                      Desserts
                    </button>
                    <button className="text-white cursor-pointer">
                      Beverages
                    </button>
                    <button className="text-white cursor-pointer">
                      Fish & Sea foods
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[20%]">
                <div>
                  <p className="text-[20px] text-[#d8d6d6] h-10  ">FOLLOW US</p>
                </div>
                <div className="flex gap-2">
                  <img className="w-7 h-7" src="./facebook.png"></img>
                  <img className="w-7 h-7" src="./instagram.png"></img>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[90%] flex justify-end">
            <div className="w-[96%]  border-t-2 border-[#71717A]  flex gap-10 text-[#71717A] h-15 items-center ">
              <p>Copy right 2024</p>
              <p>Nomnom LLC</p>
              <p>Privacy policy </p>
              <p>Terms and conditoin</p>
              <p>Cookie policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
