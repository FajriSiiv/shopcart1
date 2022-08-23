import Link from "next/link";
import React from "react";
import { GrCart } from "react-icons/gr";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);

  const Pings = () => {
    return (
      <>
        <span className="animate-ping  absolute top-[-10px] right-0 inline-flex h-5 w-5 rounded-full bg-rose-500 opacity-75"></span>
        <span className="absolute top-[-10px] right-0 flex items-center justify-center rounded-full h-5 w-5 bg-rose-500 text-white text-[12px]">
          {state.length}
        </span>
      </>
    );
  };

  return (
    <nav className="navbar pt-10">
      <h1 className="lg:text-3xl uppercase font-semibold">Shop</h1>
      <ul className="navbar-ul">
        <Link href="/">
          <li className="m-2 cursor-pointer">Home</li>
        </Link>
      </ul>
      <ul className="navbar-ul">
        <Link href="../Cart">
          <li className="navbar-li relative">
            <Pings />
            <GrCart className="h-5 w-5" />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
