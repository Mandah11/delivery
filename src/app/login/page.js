"use client";
import { LeftIcon } from "../admin/icon/lefticon";

export const LogIn = () => {
  const getLogInLocalStorege = () => {
    const values = localStorage.getItem("LogIn");
    if (values) {
      return JSON.parse(values);
    } else {
      return {
        email: "",
        password: "",
      };
    }
  };
  const [values, setValues] = useState(getLogInLocalStorege());
  const handleinput = (event) => {
    const newObj = { ...values, [event.target.name]: event.target.value };
    setValues(newObj);
  };
  console.log(values);

  return (
    <div className="w-full h-full">
      <div className="w-[1440px] flex justify-evenly m-auto bg-gray-50 py-5 items-center">
        <div className="w-104 h-94 flex flex-col justify-between ">
          <div>
            <button className="w-9 h-9 border flex justify-center items-center">
              <LeftIcon />
            </button>
          </div>
          <div className="h-15 w-full  flex flex-col justify-between">
            <p className="h-8 text-[23px] font-medium ">Log in</p>
            <p className="h-6 text-[17px] text-[#848282] ">
              Log in to enjoy your favorite dishes
            </p>
          </div>
          <div className="h-29  w-full  flex flex-col justify-between   ">
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-full border h-9 rounded-md px-2"
              onChange={handleinput}
            />
            <input
              type="text"
              placeholder="Password"
              className="w-full border h-9 rounded-md px-2"
              onChange={handleinput}
            />
            <p>Forgot Password ?</p>
          </div>
          <button className="h-9 w-full bg-gray-300 text-white">
            {" "}
            Let's go
          </button>
          <div className="flex justify-center gap-4 text-[#6d6d6d]">
            <p>Don't have an account?</p>
            <p className="text-blue-400">Sign up</p>
          </div>
        </div>
        <div className="w-214 h-226 bg-blue-300"></div>
      </div>
    </div>
  );
};
