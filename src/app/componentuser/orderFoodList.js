"use client";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { FoodList } from "./foodListInfo";
import { Textarea } from "@/components/ui/textarea";
import { FoodLogoCart } from "../admin/icon/adminlogocart";
import { OrderWhiteIcon } from "../admin/icon/orderwhite";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
export const OrderFood = ({
  addfood,
  setAddFood,
  handleRemove,
  valueAddress,
  valueSetAddress,
  total,
  id,
}) => {
  const [errorAddress, setErrorAddress] = useState("");
  const value = (valueAddress || "").trim();
  const handleCheck = async () => {
    if (!value.trim()) {
      setErrorAddress("address is required");
    } else {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_API}/orders`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              accept: "application/json",
            },
            body: JSON.stringify({
              user: id,
              totalPrice: total,
              foodOrderItems: addfood,
              deliveryaddress: valueAddress,
              status: "PENDING",
            }),
          }
        );
      } catch (err) {
        console.log(err);
      }
    }
  };
  console.log("addfooood", addfood);

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
                  <div className=" h-[75%] w-120 flex justify-around flex-col mt-3 ">
                    <div className="text-[#71717A] h-10 text-2xl w-115 font-semibold">
                      My cart
                    </div>

                    <div className="w-full h-[89%]  overflow-scroll ">
                      {addfood.map((data, index) => {
                        return (
                          <FoodList
                            key={index}
                            src={data.src}
                            foodName={data.foodName}
                            ingredients={data.ingredients}
                            quantity={data.quantity}
                            food={data.food}
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
                    <div className=" h-26 flex flex-col justify-between">
                      <Textarea
                        placeholder="Please share your complete address"
                        value={valueAddress}
                        onChange={valueSetAddress}
                        className={
                          errorAddress
                            ? " border h-14 rounded-md px-2 border-red-500 text-red-500"
                            : " border h-14 rounded-md px-2"
                        }
                      />
                      {errorAddress && (
                        <div className="ml-1 h-10 text-[15px] text-red-500">
                          {errorAddress}
                        </div>
                      )}
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
            <TabsContent value="password" className="w-142">
              <div className="w-135 mt-5 h-180 flex rounded-2xl text-xl items-center flex-col bg-white">
                <div className=" h-[75%] w-120 flex justify-around flex-col mt-3">
                  <div className="text-black h-10 text-2xl w-115 font-semibold ">
                    My Order
                  </div>
                  <div className="w-full h-[90%] overflow-scroll ">
                    <div className="w-120 h-55 border-dashed border-b border-[#09090B80] flex flex-col gap-5  ">
                      <div className=" flex justify-between">
                        <div className=" w-full flex justify-around">
                          <p className=" h-8 w-240 font-bold text-base text-black">
                            $12.99
                          </p>
                          <div className="w-240 flex justify-end">
                            <button className="border border-[#EF4444] w-16 h-8 cursor-pointer rounded-full">
                              <p className="text-[#09090B] text-xs font-semibold">
                                Pending
                              </p>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex justify-around">
                        <div className="flex w-140 gap-3">
                          {/* <FoodIcon /> */}
                          <p className="text-sm">Sunshine Stackers </p>
                        </div>
                        <div className="w-140 flex justify-end">
                          <p className="text-sm">x1</p>
                        </div>
                      </div>
                      <div className="w-full flex justify-around items-center">
                        <div className="flex w-140 gap-3">
                          {/* <FoodIcon /> */}
                          <p className="text-sm">Sunshine Stackers </p>
                        </div>
                        <div className="w-140 flex justify-end">
                          <p className="text-sm">x1</p>
                        </div>
                      </div>
                      <div className="gap-3 flex text-sm items-center">
                        {/* <TimeIcon /> */}
                        <p>2024/12/20</p>
                      </div>
                      <div className="flex gap-3 text-sm items-center">
                        {/* <MapIcon /> */}
                        <p>Mongolia, Ub exx</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white w-135 h-70 rounded-2xl mt-10 flex justify-center">
                <div className="w-115">
                  <p className="text-[#71717A] h-10 text-xl">Payment info</p>
                  <div className="w-full border border-dashed border-[#09090B80]"></div>
                  <button className="w-full h-10 bg-[#EF4444] cursor-pointer flex items-center justify-center rounded-2xl">
                    <p className="text-white font-medium">Checkout</p>
                  </button>
                </div>
              </div>
              {/* <div className="w-135 mt-5 h-250 flex rounded-2xl text-xl items-center flex-col bg-white">
                <div className=" w-120 flex h-[25%] justify-around flex-col mt-4.5 ">
                  <div className="text-black  h-10 text-[23px] w-full font-semibold ">
                    Order history
                  </div>
                  <div className="w-full h-[90%]  overflow-scroll">
                    <div className="w-120  border-dashed border-b border-[#09090B80]  h-[90%] flex gap-5 mb-5 flex-col items-center">
                      <div className="h-[90%]  w-[94%] mt-3 bg-amber-600">
                        <div className="flex w-full justify-between  h-[15%] items-center">
                          <div className="h-full text-[19px] text-black font-semibold ">
                            $26.91 (#20156)
                          </div>
                          <div className="w-auto px-2 h-full rounded-2xl text-[17px] flex items-center justify-center border border-black text-black font-medium">
                            Pending
                          </div>
                        </div>
                        <div className="w-full h-[40%] overflow-scroll flex flex-col justify-around text-[15px] bg-amber-100">
                          <div className="flex w-full bg-green-300 justify-between h-7 items-center">
                            <p className="text-[15px]">Sunshine Stakers</p>
                            <div>x1</div>
                          </div>
                          <div className="flex w-full bg-amber-300 justify-between h-7 items-center">
                            <p className="text-[15px]">Sunshine Stakers</p>
                            <div>x1</div>
                          </div>
                        </div>
                        <div className="w-full min-h-7 overflow-scroll bg-purple-300 text-[15px]">
                          hfgfsadgjdsg
                        </div>
                        <div className="w-full min-h-7 overflow-scroll bg-purple-500 text-[15px]">
                          fhgejkhj
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </TabsContent>
          </Tabs>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  );
};
