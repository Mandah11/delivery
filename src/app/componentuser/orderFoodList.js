"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FoodList } from "./foodListInfo";
import { Textarea } from "@/components/ui/textarea";
import { FoodLogoCart } from "../admin/icon/adminlogocart";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../featuresuser/userContext";
import { OrderWhiteIcon } from "../admin/icon/orderwhite";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { userAgent } from "next/server";
export const OrderFood = ({
  addfood,
  setAddFood,
  handleRemove,
  valueAddress,
  valueSetAddress,
  total,
  id,
}) => {
  const handleCheck = async () => {
    try {
      const res = await fetch("http://localhost:8000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          user: id,
          totalPrice: total,
          deliveryaddress: valueAddress,
        }),
      });
      console.log("taf");
    } catch (err) {
      console.log(err);
    }
  };
  console.log("value", valueAddress);

  return (
    <SheetContent className="bg-[#404040] w-[600px]">
      <SheetHeader>
        <SheetTitle className="text-white text-xl mt-5 ml-3 h-10">
          <div className="flex items-center gap-3">
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
              {(!addfood.length == 0 && (
                <div className="w-135 mt-5 h-175 flex rounded-2xl text-xl items-center flex-col justify-around bg-white">
                  <div className=" h-[75%] w-120 flex justify-around flex-col mt-3">
                    <div className="text-[#71717A] h-10 text-2xl w-115 font-semibold ">
                      My cart
                    </div>

                    <div className="w-full h-[89%]  overflow-scroll ">
                      {addfood.map((data) => {
                        return (
                          <FoodList
                            key={data.id}
                            src={data.src}
                            foodName={data.foodName}
                            ingredients={data.ingredients}
                            step={data.step}
                            id={data.id}
                            handleRemove={handleRemove}
                            price={data.price}
                            setAddFood={setAddFood}
                            addfood={addfood}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className="w-120 h-40 flex  justify-between  flex-col">
                    <div className="text-[#71717A] h-11 text-xl flex items-end  font-semibold ">
                      Delivery location
                    </div>
                    <div className=" h-26  flex flex-col justify-between">
                      <Textarea
                        placeholder="Please share your complete address"
                        value={valueAddress}
                        onChange={valueSetAddress}
                        className="h-10"
                      />
                    </div>
                  </div>
                </div>
              )) || (
                <div className="w-135 mt-5 h-175 flex rounded-2xl text-xl items-center flex-col justify-around bg-white">
                  <div className=" h-[75%] w-120 flex justify-around flex-col mt-3">
                    <div className="text-black  h-10 text-2xl w-full font-semibold ">
                      My cart
                    </div>

                    <div className="w-full h-[89%]  flex justify-center">
                      <div className="w-full h-[50%] bg-gray-100 flex flex-col items-center justify-center rounded-2xl">
                        <div className="w-[80%] flex justify-center items-center h-15 ">
                          {" "}
                          <FoodLogoCart />
                        </div>
                        <div className="w-[80%] h-10  text-[22px]  font-bold flex justify-center   items-center ">
                          {" "}
                          Your cart is empty
                        </div>
                        <div className="w-[80%] h-10  text-[15px] flex flex-col justify-center items-center">
                          <div className="w-full flex items-center justify-center">
                            Hungry? 🍔 Add some delicious dishes to your cart
                            and
                          </div>
                          <div className="w-full flex items-center justify-center">
                            satisfy your cravings!
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-120 h-40 "></div>
                </div>
              )}

              <div className="bg-white w-135 h-64 rounded-2xl mt-10 flex justify-center items-center">
                <div className="h-[90%] w-121  flex flex-col justify-between">
                  <div className="text-[#8b8b90] h-10 text-[23px] w-124 font-semibold flex mr-4  ">
                    Payment info
                  </div>
                  <div className="w-120  h-58  flex justify-around flex-col mt-1.5 mr-3 ">
                    <div className="h-[54%] flex flex-col justify-between ">
                      <div className=" h-18  flex flex-col justify-between ">
                        <div className="h-9  flex text-[18px] items-center justify-between">
                          <div>Items</div>
                          {(!addfood.length == 0 && (
                            <div className="h-10 flex items-center  text-xl font-bold text-black">
                              {total}
                            </div>
                          )) || (
                            <div className="h-10 flex items-center  text-xl font-bold text-black">
                              -
                            </div>
                          )}
                        </div>

                        <div className="h-9  text-[18px] flex items-center justify-between">
                          <div>Shipping</div>
                          {(!addfood.length == 0 && (
                            <div className="h-10 flex items-center  text-xl font-bold text-black">
                              99
                            </div>
                          )) || (
                            <div className="h-10 flex items-center  text-xl font-bold text-black">
                              -
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="h-5  flex items-center">
                        <div className="w-full border border-dashed border-[#09090B80]"></div>
                      </div>
                    </div>
                    <div className="h-12 text-[18px]  flex justify-between">
                      <div className=" h-10 flex items-center text-[18px]">
                        Total
                      </div>{" "}
                      {(!addfood.length == 0 && (
                        <div className="h-10 flex items-center  text-xl font-bold text-black">
                          {total + 99}
                        </div>
                      )) || (
                        <div className="h-10 flex items-center  text-xl font-bold text-black">
                          -
                        </div>
                      )}
                    </div>

                    <button
                      onClick={handleCheck}
                      className="w-full h-10 bg-[#EF4444] mt-1 cursor-pointer flex items-center justify-center rounded-2xl"
                    >
                      <div className="text-white font-medium">Checkout</div>
                    </button>
                  </div>
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
  );
};
