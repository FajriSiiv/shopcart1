import { StarIcon } from "@heroicons/react/solid";
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);

  return (
    <div className="pt-[110px] px-10">
      {state.map((e) => (
        <div
          className="py-3 sm:px-10 flex flex-col sm:flex-row  justify-center border-[1px] border-slate-600 m-5 p-3 sm:p-0"
          key={e.id}
        >
          <img
            className="w-[200px] pb-5 sm:pb-0 sm:pr-10 h-[200px] object-contain"
            src={e.image}
            alt=""
          />
          <div className="flex flex-col sm:w-[500px] lg:pl-10">
            <h2 className="text-lg font-semibold">Name : {e.title}</h2>
            <h3 className="text-[16px]">Price : ${e.price}</h3>
            <span className="flex items-center mt-2 lg:text-lg">
              {[1, 2, 3, 4, 5].map((ratings) => (
                <StarIcon
                  key={ratings}
                  className={`w-5 h-5
                    ${
                      e.rating.rate >= ratings
                        ? "fill-slate-900 "
                        : "fill-gray-200"
                    }`}
                  aria-hidden="true"
                />
              ))}{" "}
              {e.rating.rate}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
