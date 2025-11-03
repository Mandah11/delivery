export const Foods = ({ FoodcategoryName, foodname, price, inform }) => {
  return (
    <div className=" bg-white max-h-fit mb-5 w-[1171px]">
      <p className="ml-5 h-15 mt-3  flex items-center">{FoodcategoryName}</p>

      <div className="w-[1131px] flex flex-wrap gap-4 ml-5 pb-5">
        <div className="w-[270px] h-[241px] bg-blue-500 rounded-2xl flex flex-col items-center justify-evenly">
          <div className="w-[238px] h-[129px] bg-amber-200"></div>
          <div className="w-[238px] h-[60px] bg-amber-800 flex flex-col justify-between items-center">
            <div className="h-5 bg-blue-300 flex justify-between w-[220px] ">
              <p>{foodname}</p>
              <p>{price}</p>
            </div>
            <div className="h-8 bg-gray-700">{inform}</div>
          </div>
        </div>
        <div className="w-[270px] h-[241px] bg-blue-500 rounded-2xl flex flex-col items-center justify-evenly">
          <div className="w-[238px] h-[129px] bg-amber-200"></div>
          <div className="w-[238px] h-[60px] bg-amber-800 flex flex-col justify-between items-center">
            <div className="h-5 bg-blue-300 flex justify-between w-[220px] ">
              <p>{foodname}</p>
              <p>{price}</p>
            </div>
            <div className="h-8 bg-gray-700">{inform}</div>
          </div>
        </div>
        <div className="w-[270px] h-[241px] bg-blue-500 rounded-2xl flex flex-col items-center justify-evenly">
          <div className="w-[238px] h-[129px] bg-amber-200"></div>
          <div className="w-[238px] h-[60px] bg-amber-800 flex flex-col justify-between items-center">
            <div className="h-5 bg-blue-300 flex justify-between w-[220px] ">
              <p>{foodname}</p>
              <p>{price}</p>
            </div>
            <div className="h-8 bg-gray-700">{inform}</div>
          </div>
        </div>
        <div className="w-[270px] h-[241px] bg-blue-500 rounded-2xl flex flex-col items-center justify-evenly">
          <div className="w-[238px] h-[129px] bg-amber-200"></div>
          <div className="w-[238px] h-[60px] bg-amber-800 flex flex-col justify-between items-center">
            <div className="h-5 bg-blue-300 flex justify-between w-[220px] ">
              <p>{foodname}</p>
              <p>{price}</p>
            </div>
            <div className="h-8 bg-gray-700">{inform}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
