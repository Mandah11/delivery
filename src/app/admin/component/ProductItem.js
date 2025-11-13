"use client";
import { useEffect } from "react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Pens } from "../icon/pen";
import { Label } from "@/components/ui/label";
import { PhotoIcon } from "../icon/photo";
import Image from "next/image";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
const UPLOAD_PRESET = "delivery";
const CLOUD_NAME = "dgqpcqw6o";

export const Product = ({ FoodcategoryName, id, getdata, getfood }) => {
  const [logoUrl, setLogoUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();

    formData.append("file", file);

    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,

        {
          method: "POST",

          body: formData,
        }
      );

      const data = await response.json();

      return data.secure_url;
    } catch (error) {
      console.error("Cloudinary upload failed:", error);
    }
  };

  const handleLogoUpload = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    setUploading(true);

    try {
      const url = await uploadToCloudinary(file);

      setLogoUrl(url);
    } catch (err) {
      console.log("Failed to upload logo: " + err.message);
    } finally {
      setUploading(false);
    }
  };

  const [foodsType, setFoodsType] = useState([]);
  const [addfood, setAddFood] = useState({
    foodName: "",
    price: "",
    ingredients: "",
  });
  const [successmes, setSuccessMes] = useState("");
  const [addFoodstype, setAddFoodsType] = useState(false);
  const [changeFoodstype, setChangeFoodsType] = useState(false);

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
          image: logoUrl,
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
    console.log("foodcategoryid", jsondata);
  };

  useEffect(() => {
    getFoodType();
  }, []);

  return (
    <>
      <div className=" bg-white max-h-fit mb-5 w-full rounded-2xl flex justify-center flex-col">
        <div className="w-full">
          <p className="ml-8 h-16 flex items-center text-xl">
            {FoodcategoryName}
          </p>
        </div>

        <div className="w-[90%] flex flex-wrap  gap-10 justify-start   pb-5  ">
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
                className="w-[270px] h-[241px] border border-gray-400 rounded-2xl flex flex-col items-center justify-around bg-amber-300 "
                key={index}
              >
                <div className="relative w-[241px] h-[129px] bg-blue-300">
                  <Image
                    src={inform.image || "/facebook.png"}
                    width={100}
                    height={100}
                    alt="image failed"
                    className="w-full h-full object-cover rounded-lg"
                    style={{ width: "92%", height: "130px" }}
                  />

                  <div className="absolute top-2 right-2 ">
                    <button
                      className="h-9 w-9 rounded-full flex justify-center items-center bg-white cursor-pointer text-red-500 shadow-md"
                      onClick={() => setChangeFoodsType(true)}
                    >
                      <Pens />
                    </button>
                  </div>
                </div>

                <div className="w-[238px] h-[35%]  flex flex-col justify-around items-center">
                  <div className="h-6  flex justify-between w-[220px]  ">
                    <p>{inform.foodName}</p>
                    <p>{inform.price}</p>
                  </div>
                  <div className="h-12 w-[220px] text-md overflow-scroll ">
                    <p>{inform.ingredients}</p>
                  </div>
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
            <div className="w-[410px] h-47 flex flex-col  justify-around">
              <p className="h-6">Food image</p>
              <div className="h-[150px] bg-[#2563eb]/15">
                {uploading && <p className="text-blue-600">Uploading...</p>}
                {!logoUrl ? (
                  <div>
                    <Label htmlFor="file-input">
                      <div className=" w-full h-35 flex items-center justify-center">
                        <div className=" w-[80%]  flex justify-between items-center flex-col h-[40%]">
                          <button className="w-8 h-8 rounded-2xl bg-white flex items-center justify-center">
                            <PhotoIcon />
                          </button>
                          <p> Choose a file or drag & drop it here</p>
                        </div>
                      </div>
                    </Label>
                    <input
                      type="file"
                      accept="image/*"
                      id="file-input"
                      onChange={handleLogoUpload}
                      disabled={uploading}
                      className="hidden"
                    />
                  </div>
                ) : (
                  <div>
                    <div className="relative w-full h-38">
                      <Image
                        src={logoUrl}
                        alt="Uploaded logo"
                        fill
                        className="object-contain rounded border border-gray-300 "
                      />
                    </div>
                  </div>
                )}
              </div>
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
