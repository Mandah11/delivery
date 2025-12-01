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
  const [foods, setFoods] = useState([]);
  const [addfoodcategory, setAddFoodCategory] = useState("");
  const [successmes, setSuccessMes] = useState("");
  const [addCategory, setAddCategory] = useState(false);
  const handleAddCategoryChange = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/foodCategory`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify({
            categoryName: addfoodcategory,
          }),
        }
      );
      await getData();
      await getFood();
      setAddFoodCategory("");
      setAddCategory(false);
      setSuccessMes("New Category is being added to the menu");

      setTimeout(() => setSuccessMes(""), 3000);
    } catch (err) {
      console.log(err);
    }
  };
  const getData = async () => {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/foodCategory`,
      options
    );
    const jsondata = await data.json();
    setFoodMenu(jsondata);
    console.log("category", jsondata);
  };
  const getFood = async () => {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/food`,
      options
    );
    const jsondata = await data.json();
    setFoods(jsondata);
    console.log("food", jsondata);
  };

  useEffect(() => {
    getData();
    getFood();
  }, []);

  return (
    <div className="w-full h-screen flex">
      <div className="flex  w-full justify-between  ">
        <div className="w-[15%]  flex flex-col items-center  ">
          <div className="  w-[80%] h-28  mt-7 px-5 flex items-center text-[15px]">
            <FoodLogo />
            <div className=" flex flex-col items-center">
              <div className="text-[22px] font-medium">NomNom</div>
              <div className="text-[18px] ml-3 text-[#808081]">
                Swift delivery
              </div>
            </div>
          </div>
          <div className="w-[80%] h-[120px]   mt-8  flex flex-col pl-6">
            <button className="w-[90%] h-12 bg-black rounded-2xl text-white  flex justify-center items-center text-[16px] gap-3">
              <MenuLogo />
              Food Menu
            </button>
            <Link href={"/order"}>
              <button className="w-[90%] h-10 rounded-2xl  flex justify-center items-center text-[16px] gap-3 mt-6 ">
                <OrderLogo />
                Order
              </button>
            </Link>
          </div>
        </div>

        <div className="w-[90%] bg-[#f5f5f7]  rounded-2xl min-h-[930px] items-center justify-center flex flex-col max-h-fit">
          <div className="w-[95%] h-[236px] items-end flex flex-col mt-5 mb-6 ">
            <button className=" h-9 w-9 bg-black rounded-3xl"> </button>
            <div className="w-full min-h-30 h-fit bg-white  rounded-xl flex flex-col justify-between mt-5 gap-2">
              <div className="w-[1123px] h-8   text-[25px] flex  font-medium ml-5  mt-3">
                Dishes category
              </div>
              <div className="w-[full] min-h-20 h-fit items-center gap-3 flex flex-wrap ml-5 mb-3 ">
                <div>
                  {foods && (
                    <button className="w-auto rounded-2xl pl-2 gap-2 flex items-center border p-2 h-9">
                      All dishes
                      <div className="bg-black text-white rounded-2xl w-10 mr-1 h-6 justify-center items-center ">
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
                    setAddCategory(true);
                  }}
                >
                  <button className="h-9 rounded-3xl bg-[#ef4444] w-9 text-white">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[95%]  flex flex-col items-center h-full overflow-scroll ">
            {foodMenu.map((food) => {
              return (
                <Product
                  categories={foods}
                  id={food._id}
                  key={food._id}
                  getData={getData}
                  getfood={getFood}
                  foodId={food._id}
                  foodMenu={foodMenu}
                  FoodcategoryName={food.categoryName}
                />
              );
            })}
          </div>
        </div>
      </div>

      {addCategory && (
        <div className="flex absolute  bg-black/30 w-full h-full justify-center items-center">
          <div className="w-[460px] h-[272px] bg-white  rounded-2xl ml-10 items-center flex flex-col justify-evenly ">
            <div className="w-[412px] h-[52px] flex ">
              <div className="h-7 w-[366px] ml-1 text-[19px] font-medium mt-1">
                Add new category
              </div>
              <button
                className="h-9 w-9 bg-[#f5f5f7] rounded-2xl text-xl"
                onClick={() => setAddCategory(false)}
              >
                x
              </button>
            </div>
            <div className="w-[412px] h-18 justify-between  flex flex-col">
              <p className="h-7 ml-1 text-[17px] font-medium">Categoryname</p>
              <input
                className="h-[35px] w-full rounded-md border px-2"
                placeholder="Type category name..."
                value={addfoodcategory}
                onChange={(e) => {
                  setAddFoodCategory(e.target.value);
                }}
              />
            </div>
            <div className="w-[412px] h-16  flex justify-end items-end">
              <button
                className="h-10 w-[123px] bg-black text-white  rounded-md"
                onClick={handleAddCategoryChange}
              >
                Add Category
              </button>
            </div>
          </div>
        </div>
      )}
      {successmes && (
        <div className="flex fixed inset-0  z-1 w-full h-[5%]  justify-center items-center mt-2">
          <div className="bg-black rounded-md text-white h-12 flex items-center justify-center w-auto px-3 ">
            {successmes}
          </div>
        </div>
      )}
    </div>
  );
};
