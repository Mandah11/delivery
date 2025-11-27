export const OrderList = ({ user, totalPrice, deliveryAddress, index }) => {
  const indexs = [index + 1];

  return (
    <>
      <div className="w-full  h-13  flex border-x border-b border-gray-200">
        <div className="w-[4%] h-full bg- flex justify-center items-center bg-amber-200">
          <input type="checkbox"></input>
        </div>
        <div className="w-[5%] bg-amber-500 h-full flex justify-center items-center">
          {indexs}
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
          {totalPrice}
        </div>
        <div className="w-[20%] bg-blue-400 h-full items-center flex justify-center">
          {deliveryAddress}
        </div>
        <div className="w-[15%] bg-pink-400 h-full items-center flex  justify-center">
          {user}
        </div>
      </div>
    </>
  );
};
