import React, { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
// import { addCart } from "../../components/redux/action";
import { ADDITEM } from "../../components/redux/reducer/handleCart";

const Details = ({ product }) => {
  console.log(product);
  const rates = Math.floor(product.rating.rate);

  const dispatch = useDispatch();

  return (
    <div className="lg:px-10 lg:pt-[120px] px-2 py-[110px]">
      <div className="grid lg:grid-cols-2 lg:grid-rows-none grid-rows-2 mt-10 justify-center">
        <div className="flex justify-center items-center h-[400px] row-span-1 lg:col-span-1 ">
          <img
            className="object-contain p-5  w-full h-full"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="px-5 py-5 row-span-3 lg:col-span-1 ">
          <h3 className="lg:text-6xl text-xl text-semibold">{product.title}</h3>
          <h4 className="flex items-center mt-2 text-2xl">
            {[1, 2, 3, 4, 5].map((ratings) => (
              <StarIcon
                key={ratings}
                className={
                  rates >= ratings
                    ? "fill-slate-900 w-8 h-8"
                    : "fill-gray-200 w-8 h-8"
                }
                aria-hidden="true"
              />
            ))}
            <span className="ml-2">{product.rating.rate}</span>
          </h4>
          <h4 className="font-bold text-4xl mt-5">$ {product.price}</h4>
          <p className="mt-3 text-sm lg:text-md">{product.description}</p>

          <button
            onClick={() => dispatch(ADDITEM({ product }))}
            className="btn-kat m-0 mt-5"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch("https://fakestoreapi.com/products/" + id);

  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
}

export default Details;
