"use client";

import { useState, useEffect } from "react";
import { FoodLogo } from "../admin/icon/adminfoodlogo";
import { UserFood } from "../componentuser/userfood";
import { Foods } from "../admin/icon/food";
import { Loc } from "../admin/icon/location";
import { RightIcon } from "../admin/icon/righticon";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { OrderIcon } from "../admin/icon/order";
import { UserIcon } from "../admin/icon/user";
import { OrderWhiteIcon } from "../admin/icon/orderwhite";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  const [address, setAddress] = useState("");
  const [addloc, setAddLoc] = useState(false);

  const getFoodDatas = async () => {
    const data = await fetch(`http://localhost:8000/foodCategory`, options);
    const jsondata = await data.json();
    setFood(jsondata);
    console.log("food", jsondata);
  };
  useEffect(() => {
    getFoodDatas();
  }, []);
  const handleAddressChange = async () => {
    setAddLoc(false);
  };
  const handleCancelChange = async () => {
    setAddLoc(false);
    setAddress("");
  };

  return (
    <div className="w-screen h-full flex flex-col items-center ">
      <div className="bg-black w-screen items-center flex flex-col ">
        <div className="h-30  justify-between flex items-center w-[90%] ">
          <div className="flex h-18 items-center gap-3  w-[20%]">
            <FoodLogo />
            <div>
              <p className="text-white text-2xl ">
                Nom<span className="text-red-600">Nom</span>
              </p>
              <p className="text-white ">Swift delivery</p>
            </div>
          </div>

          <div className="w-auto  flex justify-end items-center gap-3">
            <button className="w-auto h-10 bg-white rounded-xl   ">
              <div className="flex items-center gap-2 px-3 text-md">
                <Loc />
                <p className="text-red-500"> Delivery address :</p>
                <div
                  className="h-5 flex items-center"
                  onClick={() => setAddLoc(true)}
                >
                  {(address.length === 0 && (
                    <div className="flex items-center h-5  text-[#8b8989]">
                      Add Location
                    </div>
                  )) || (
                    <div className="flex items-center h-5  text-[#8b8989]">
                      {address}
                    </div>
                  )}

                  <p className="h-4">
                    <RightIcon />
                  </p>
                </div>
              </div>
            </button>
            <Sheet>
              <SheetTrigger className="w-9 h-9 rounded-3xl flex bg-white items-center justify-center cursor-pointer">
                <OrderIcon />
              </SheetTrigger>
              <SheetContent className="bg-[#404040] w-[600px]">
                <SheetHeader>
                  <SheetTitle className="text-white text-xl bg-amber-300 h-10">
                    <div className="flex items-center gap-5">
                      <OrderWhiteIcon />
                      Order Detail
                    </div>
                  </SheetTitle>
                  <SheetDescription>
                    <Tabs defaultValue="account" className="w-[400px]">
                      <TabsList>
                        <TabsTrigger value="account">Card</TabsTrigger>

                        <TabsTrigger value="password">Order</TabsTrigger>
                      </TabsList>
                      <TabsContent value="account" className=" w-142">
                        <div className="w-135 mt-5 h-180 flex rounded-2xl text-xl items-center flex-col justify-around bg-white">
                          <div className=" h-[75%] w-120 flex justify-around flex-col mt-3">
                            <div className="text-[#71717A] h-10 text-2xl w-115 font-semibold ">
                              My cart
                            </div>
                            <div className="w-full h-[90%] overflow-scroll ">
                              <div className="w-120  border-dashed border-b border-[#09090B80]  items-center h-45 flex gap-5 mb-5 ">
                                <div className="w-[28%]  h-35 border rounded-2xl">
                                  <img src="facebook.png"></img>
                                </div>
                                <div className="flex flex-col w-[71%]">
                                  <div className="  h-35 flex justify-between">
                                    <div className=" w-[85%]">
                                      <p className="text-[#EF4444] text-base">
                                        Sunshine Stackers{" "}
                                      </p>
                                      <p className="text-xs text-black">
                                        Fluffy pancakes stacked with fruits,
                                        cream, syrup, and powdered sugar.
                                      </p>
                                    </div>
                                    <button className="h-9 w-9 border rounded-full flex justify-center items-center border-red-500 cursor-pointer text-red-500">
                                      X
                                    </button>
                                  </div>
                                  <div className="w-[330px] gap-3 flex">
                                    <div className="flex gap-5">
                                      <button>-</button>
                                      <button>1</button>
                                      <button>+</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-120 h-40">
                            <div className="text-[#71717A] h-10 text-2xl font-semibold">
                              Delivery location
                            </div>
                            <Textarea placeholder="Please share your complete address" />
                            <p className=" text-sm text-[#EF4444]">
                              Please complete your address
                            </p>
                          </div>
                        </div>

                        <div className="bg-white w-135 h-60 rounded-2xl mt-10 flex justify-center">
                          <div className="w-115">
                            <p className="text-[#71717A] h-10 text-xl">
                              Payment info
                            </p>
                            <div className="w-full border border-dashed border-[#09090B80]"></div>
                            <button className="w-full h-10 bg-[#EF4444] cursor-pointer flex items-center justify-center rounded-2xl">
                              <p className="text-white font-medium">Checkout</p>
                            </button>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="password">
                        Change your password here.
                      </TabsContent>
                    </Tabs>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <div>
              <button className="h-10 w-10 bg-red-500 rounded-3xl flex items-center justify-center">
                <UserIcon />
              </button>
            </div>
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
      {addloc && (
        <div className="flex absolute  bg-black/30 w-full h-full justify-center items-center">
          <div className="w-[460px] h-[272px] bg-white  rounded-2xl ml-10 items-center flex flex-col justify-between py-3 ">
            <div className="w-[415px]  justify-between h-[52px] flex ">
              <div className="h-7 w-[366px] ml-1 text-[19px] font-medium mt-1">
                Please write your delivery address!
              </div>
              <button
                className="h-8 w-8 bg-[#f5f5f7] rounded-2xl text-xl justify-center flex items-center "
                onClick={() => setAddLoc(false)}
              >
                x
              </button>
            </div>
            <div className="w-[90%]  h-25">
              <Textarea
                placeholder="Please share your complete address"
                className="h-20"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="w-[412px] h-16  flex gap-2 justify-end items-end">
              <button
                className="h-10 w-[90px] bg-white border border-gray-500 text-black  rounded-md"
                onClick={handleCancelChange}
              >
                Cancel
              </button>
              <button
                className="h-10 w-[123px] bg-black text-white  rounded-md"
                onClick={handleAddressChange}
              >
                Delivery Here
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
