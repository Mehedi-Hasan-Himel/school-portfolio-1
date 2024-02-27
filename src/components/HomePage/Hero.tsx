import React from "react";
// add google font poppins
// add google font poppins

export default function Hero() {
  return (
    <section className="h-[50vh] w-full object-cover py-32 md:h-screen">
      <div className="flex items-center justify-center  text-5xl">
        <div className="h-screen w-full py-5">
          {/* <img
            width={500}
            height={500}
            className="h-[70vh] w-full"
            src="images/apply.jpeg"
            alt="apply for teacher"
          /> */}
          <img
            className="w-full md:h-screen"
            src="images/hero.jpeg"
            alt="hero image"
          />
        </div>
        <div className="absolute top-10 mt-[-130px] flex h-full w-full  flex-col items-center justify-center font-semibold sm:mt-[-150px] md:mt-[-150px] md:gap-5 lg:mt-[-100px] ">
          <h1 className=" rounded-xl bg-[#e7418971] p-5 text-xl   text-white sm:text-3xl lg:text-5xl">
            Holiday International School Bangladesh
          </h1>
          <div className="flex justify-evenly gap-5 rounded-xl bg-[#c0ef5b78] p-5  text-xl text-white sm:text-3xl md:gap-10">
            <span> RABBE </span>
            <span> JIDNI </span>
            <span> ELMA </span>
          </div>
          <h2 className="rounded-xl bg-[#2f8ee288] p-5 text-xl text-white sm:text-3xl">
            Your Child Our Responsibility
          </h2>
        </div>
      </div>
    </section>
  );
}
