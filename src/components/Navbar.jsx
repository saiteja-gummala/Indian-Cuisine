import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-between md:mx-auto px-3 bg-zinc-600 p-4">
        <h1 className="flex gap-3">
          <span className="text-orange-500 font-semibold text-4xl md:text-5xl mb-2">
            Biryani
          </span>
          <span className="font-semibold text-4xl md:text-5xl text-white">Indian</span>
          <span className="font-semibold text-4xl md:text-5xl text-green-700">Cuisine</span>
        </h1>
        <div className="flex gap-3 px-3 py-1 md:gap-10 md:font-semibold font-semibold">
          <button className="hover:bg-slate-600 px-3 py-1 text-zinc-300 bg-slate-700 rounded-md">
            Home
          </button>
          <button className="hover:bg-slate-600 px-2 py-1 bg-slate-700 text-zinc-300 rounded-md">
            Menu
          </button>
          <button className="hover:bg-slate-600 px-2 py-1 bg-slate-700 text-zinc-300  rounded-md">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
