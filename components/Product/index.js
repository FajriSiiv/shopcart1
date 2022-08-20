import Link from "next/link";
import React, { useState } from "react";

const Product = ({ product, loading }) => {
  const Loading = () => {
    return (
      <>
        <div className="flex flex-col justify-center items-center animate-pulse">
          <div className="h-[20vw] w-[90vw] bg-slate-200 mb-3 rounded-[20px]"></div>
          <div className="h-[5vw] w-[90vw] bg-slate-200 rounded-[20px]"></div>
        </div>
      </>
    );
  };

  const FilterPorduct = () => {
    return (
      <>
        <div className="px-8 py-8   mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {product.map((product) => {
            return (
              <div
                key={product.id}
                className="group relative border-2 border-slate-200"
              >
                <div className="w-full min-h-80  aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-[40%] lg:h-80 lg:aspect-none flex justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full object-contain w-[50%] pt-5 "
                  />
                </div>
                <div className="mt-4 flex justify-between px-4 pb-3">
                  <div>
                    <h3 className="text-md text-gray-700">
                      {product.title.substring(0, 20)}
                    </h3>
                    <p className="first-letter:uppercase opacity-25 ">
                      {product.category}
                    </p>
                    <p className="mt-1 text-md text-gray-500">
                      ${product.price}
                    </p>
                    <Link href="/product/[id]" as={`/product/${product.id}`}>
                      <button className="btn-kat m-0 mt-4">Buy Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div>
      <h1 className="text-center font-semibold uppercase text-5xl mt-10">
        Product
      </h1>
      {loading ? <Loading /> : <FilterPorduct />}
    </div>
  );
};

export default Product;
