export const Foods = ({ foodname, price, inform }) => {
  return (
    <div className="w-[270px] h-[241px] rounded-2xl flex flex-col items-center justify-evenly border border-gray-300">
      <div className="w-[238px] h-[129px] bg-amber-200 rounded-xl"></div>
      <div className="w-[238px] h-[60px]  flex flex-col justify-between items-center">
        <div className="h-5  flex justify-between w-[220px] items-center ">
          <p className="text-red-500 text-[18px]">{foodname}</p>
          <p className="text-[15px]">{price}</p>
        </div>
        <div className="h-8">{inform}</div>
      </div>
    </div>
  );
};
