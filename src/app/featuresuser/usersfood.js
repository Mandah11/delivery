"use client";

import { useState, useEffect, useMemo } from "react";
import { FoodLogo } from "../admin/icon/adminfoodlogo";
import { UserFood } from "../componentuser/userfood";
import { Foods } from "../admin/icon/food";
import { Loc } from "../admin/icon/location";
import { RightIcon } from "../admin/icon/righticon";
import {
  Sheet,
  // SheetContent,
  // SheetDescription,
  // SheetHeader,
  // SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { OrderIcon } from "../admin/icon/order";
import { UserIcon } from "../admin/icon/user";
// import { OrderWhiteIcon } from "../admin/icon/orderwhite";
import { Textarea } from "@/components/ui/textarea";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Link from "next/link";
import { FoodList } from "../componentuser/foodListInfo";
import { jwtDecode } from "jwt-decode";
import { useUser } from "./userContext";
import { useRouter } from "next/navigation";
import { FoodLogoCart } from "../admin/icon/adminlogocart";
import { OrderFood } from "../componentuser/orderFoodList";

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
  const [addfood, setAddFood] = useState([]);
  const [address, setAddress] = useState("");
  const [addloc, setAddLoc] = useState(false);
  const [userclick, setUserClick] = useState(false);
  const { user, setUser } = useUser();
  console.log(user?._id, "useruseruser");

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
  const handleUser = async () => {
    setUserClick(!userclick);

    if (user) {
      try {
        const { token } = await res.json();
        const res = await fetch("http://localhost:8000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
          headers: JSON.stringify({
            Authorization: token,
          }),
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("tar");
    }
  };

  const getData = async () => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("fooddata");
      const jsondata = JSON.parse(data);
      setAddFood(jsondata);
      console.log(jsondata, "hohohooho");
    }
  };

  const handleRemove = (id) => {
    const removedFoods = addfood.filter((item) => item.id !== id);
    setAddFood(removedFoods);

    localStorage.setItem("fooddata", JSON.stringify(removedFoods));
  };

  // const getTokenData = async () => {
  //   const token = localStorage.getItem("token");
  //   console.log(token, "jjjjjjj");
  //   try {
  //     const { id, email } = jwtDecode(token);
  //     console.log(email, "id");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    getData();
  }, []);
  const router = useRouter();
  const handleSignOut = async () => {
    const tokens = localStorage.getItem("token");
    if (tokens) {
      localStorage.removeItem("token");
      setUser(null);
      router.push("/login");
      console.log("push");
    } else {
      console.log("error");
    }
  };
  const processed = useMemo(() => {
    return addfood.map((data) => data.price * data.step);
  }, [addfood]);
  console.log(processed, "akakakakak");
  const total = useMemo(() => {
    return processed.reduce((sum, num) => sum + num, 0);
  }, [processed]);
  console.log(total, "totalshdee");

  return (
    <div className="w-screen h-full flex flex-col items-center ">
      <div className="h-30 bg-black justify-center flex items-center w-full fixed z-10">
        <div className="h-30 justify-between flex items-center w-[90%]">
          <div className="flex h-18 items-center gap-3  w-[20%]">
            <FoodLogo />
            <div>
              <p className="text-white text-2xl ">
                Nom<span className="text-red-600">Nom</span>
              </p>
              <p className="text-white ">Swift delivery </p>
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
            <div className="flex w-auto gap-2  ">
              <Sheet>
                <SheetTrigger className="w-10 h-10 rounded-3xl flex bg-white items-center justify-center cursor-pointer">
                  <OrderIcon />
                </SheetTrigger>
                <OrderFood
                  addfood={addfood}
                  setAddFood={setAddFood}
                  handleRemove={handleRemove}
                  valueAddress={address}
                  valueSetAddress={(e) => setAddress(e.target.value)}
                  total={total}
                  id={user?._id}
                />
              </Sheet>

              <div>
                <button
                  className="h-10 w-10 bg-red-500 rounded-3xl flex items-center justify-center"
                  onClick={handleUser}
                >
                  <UserIcon />
                </button>
              </div>
              {userclick &&
                (user?.email ? (
                  <div className="w-[188px] h-[104px] bg-white flex flex-col justify-evenly items-center rounded-xl fixed mt-12 right-6 ">
                    <div className="h-8 w-[156px] justify-center overflow-scroll  flex items-center text-[19px]">
                      <p className=" w-auto">{user?.email}</p>
                    </div>

                    <div className="h-9 w-[156px] flex justify-center">
                      <button
                        className="h-full w-auto py-2 px-2 bg-[#dbdbde] rounded-xl flex items-center"
                        onClick={handleSignOut}
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="w-[185px] h-[41px] bg-white flex justify-evenly items-center rounded-xl fixed mt-13 right-2 ">
                    {" "}
                    <Link href={"/login"}>
                      <p className="cursor-pointer">Log In</p>{" "}
                    </Link>{" "}
                    <Link href={"/signup"}>
                      <p className="cursor-pointer">Sing Up</p>{" "}
                    </Link>{" "}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full aspect-1440/570 pt-27">
        <img src="./special.png" />
      </div>
      <div className="w-full items-center justify-center bg-[#404040] flex flex-col">
        {food.map((food) => {
          return (
            <UserFood
              foodcategoryname={food.categoryName}
              id={food._id}
              key={food._id}
              getData={getData}
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
        <div className="flex w-screen h-screen bg-black/30 fixed  justify-center items-center">
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
