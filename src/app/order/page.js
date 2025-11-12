import Link from "next/link";
import { FoodLogo } from "../admin/icon/adminfoodlogo";
import { FoodBlackLogo } from "../admin/icon/adminfoodblacklogo";
import { OrderWhiteLogo } from "../admin/icon/orderwhitefoodlogo";
import { StateIcon } from "../admin/icon/statusIcon";
import { DownIcon } from "../admin/icon/downicon";
import { LeftIcon } from "../admin/icon/lefticon";
import { RightIcon } from "../admin/icon/righticon";

export default function Home() {
  return (
    <div className="w-full h-full flex">
      <div className="w-full flex justify-between">
        <div className="w-[15%]  flex flex-col items-center">
          <div className="w-[80%]  h-28  mt-7 px-5 flex items-center text-[15px]">
            <FoodLogo />
            <div className="flex flex-col items-center">
              <div className="text-[22px] font-medium">NomNom</div>
              <div className="text-[18px] ml-3 text-[#808081]">
                Swift delivery
              </div>
            </div>
          </div>
          <div className="w-[80%] h-[120px]   mt-8  flex flex-col pl-6">
            <Link href={"/admin"}>
              <button className="w-[90%] h-10  rounded-2xl   flex justify-center items-center text-[16px] gap-3">
                <FoodBlackLogo />
                Food Menu
              </button>
            </Link>
            <button className="w-[90%] h-12 rounded-2xl bg-black text-white flex items-center justify-center text-[16px] gap-3 mt-6 ">
              <OrderWhiteLogo />
              Order
            </button>
          </div>
        </div>

        <div className="w-[90%] bg-[#f5f5f7] h-screen flex  justify-center ">
          <div className="w-[95%] min-h-[948px] flex flex-col  ">
            <div className="h-[60px] w-full  justify-end flex mt-5">
              <button className="w-9 h-9 bg-black rounded-3xl"></button>
            </div>
            <div className="w-full  border border-gray-200 rounded-md h-fit ">
              <div className="h-[76px] w-full flex bg-white  items-center justify-between">
                <div className="w-[485px] h-11  ml-4">
                  <div>Order</div>
                  <div>32 items</div>
                </div>
                <div className="w-[525px] h-11 flex items-center justify-between mr-4">
                  <button className="w-[300px] h-9  rounded-2xl text-[15px] border-gray-500 border flex justify-center items-center">
                    <div>
                      <input type="date"></input>
                    </div>
                    <div className="ml-5">
                      <input type="date"></input>
                    </div>
                  </button>

                  <button className="w-[213px] h-9 bg-black text-white text-[15px] rounded-2xl">
                    Change delivery stated
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="w-full  h-13  flex border border-gray-200">
                  <div className="w-[4%] h-full bg- flex justify-center items-center bg-amber-200">
                    <input type="checkbox"></input>
                  </div>
                  <div className="w-[5%] bg-amber-500 h-full flex justify-center items-center">
                    №
                  </div>
                  <div className="w-[11%] bg-amber-900 h-full items-center flex justify-center">
                    Customer
                  </div>
                  <div className="w-[13%] bg-amber-200 h-full items-center flex  justify-center ">
                    Food
                  </div>
                  <div className="w-[18%] bg-purple-300 h-full items-center flex  justify-center">
                    Date
                  </div>
                  <div className="w-[15%] bg-green-400 h-full items-center flex  justify-center">
                    Total
                  </div>
                  <div className="w-[20%] bg-blue-400 h-full items-center flex justify-center">
                    Delivery Address
                  </div>
                  <div className="w-[15%] bg-pink-400 h-full items-center flex  justify-center">
                    Delivery state
                  </div>
                </div>
                <div className="w-full h-13  flex border border-gray-200">
                  <div className="w-12 h-full flex justify-center items-center bg-amber-500">
                    <input type="checkbox"></input>
                  </div>
                  <div className="w-14 h-full flex justify-center items-center">
                    1
                  </div>
                  <div className="w-[213px] h-full items-center flex justify-center">
                    Amgalan
                  </div>
                  <div className="w-40 h-full items-center flex  justify-end ">
                    <div className=" flex justify-between items-center gap-2 w-25 h-8 ">
                      2 food <DownIcon />
                    </div>
                  </div>
                  <div className="w-40 h-full items-center flex  justify-center">
                    Date
                  </div>
                  <div className="w-40 h-full items-center flex  justify-center">
                    26.8$
                  </div>
                  <div className="w-[213px] h-full items-center flex justify-center">
                    Sukhbaatar
                  </div>
                  <div className="w-40 h-full items-center flex  justify-center">
                    <button className="border border-red-600 rounded-2xl px-2 flex gap-2 h-8 items-center">
                      Pending <StateIcon />
                    </button>
                  </div>
                </div>
                {/* <div className="w-full h-13  flex border-0 border-gray-200">
                  <div className="w-[4%] h-full bg- flex justify-center items-center ">
                    <input type="checkbox"></input>
                  </div>
                  <div className="w-[5%]  h-full flex justify-center items-center">
                    №
                  </div>
                  <div className="w-[11%]  h-full items-center flex justify-center">
                    Customer
                  </div>
                  <div className="w-[13%]  h-full items-center flex  justify-end ">
                    <div className=" flex justify-between items-center gap-2 w-25 h-8 ">
                      2 food <DownIcon />
                    </div>
                  </div>
                  <div className="w-[18%]  h-full items-center flex  justify-center">
                    Date
                  </div>
                  <div className="w-[15%]  h-full items-center flex  justify-center">
                    Total
                  </div>
                  <div className="w-[20%]  h-full items-center flex justify-center">
                    Delivery Address
                  </div>
                  <div className="w-[15%] h-full items-center flex  justify-center">
                    <button className="border  rounded-2xl px-2 flex gap-2 h-8 items-center">
                      Pending <StateIcon />
                    </button>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="h-[88px] flex justify-end items-center gap-2">
              <button className="w-8 h-8 flex justify-center items-center bg-white rounded-2xl">
                <LeftIcon />
              </button>
              <button className="w-8 h-8 flex justify-center items-center bg-white rounded-2xl">
                1
              </button>
              <button className="w-8 h-8 flex justify-center items-center bg-white rounded-2xl">
                2
              </button>
              <button className="w-8 h-8 flex justify-center items-center bg-white rounded-2xl">
                <RightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
