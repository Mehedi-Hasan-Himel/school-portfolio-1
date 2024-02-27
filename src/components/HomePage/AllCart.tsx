import React from "react";
import Cart from "./Cart";

export default function AllCart() {
  return (
    <section className="">
      <div className="flex flex-wrap gap-5 px-5 ">
        <Cart />
        <Cart />
        <Cart />
      </div>
      <section className="relative h-screen w-full py-5">
        <img
          width={500}
          height={500}
          className="h-[70vh] w-full"
          src="images/apply.jpeg"
          alt="apply for teacher"
        />

        <h3 className="max-w-[1000px absolute left-10 top-10 rounded-lg bg-white p-5 text-xl  font-semibold  text-[#2F8FE2] sm:text-5xl">
          <i> Have a passion for teaching ?</i>
        </h3>
        <div className=" absolute  bottom-80 right-10">
          <button className="  rounded-lg bg-white p-5 text-xl font-semibold text-[#2F8FE2] sm:text-3xl">
            Apply as a Teacher
          </button>
        </div>
      </section>
    </section>
  );
}
