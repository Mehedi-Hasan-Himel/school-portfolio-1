import React from "react";

export default function Impression() {
  return (
    <section className="px-10">
      <section>
        <h1 className="text-center text-[48px]">Parents Impression</h1>
        <br />
        <br />
      </section>
      <section className="m-auto flex max-w-[1200px] flex-col items-center gap-5 rounded-xl bg-[#E7418A] px-5 pb-10 md:flex-row md:px-0 md:pb-0">
        <img
          className=""
          width={400}
          height={420}
          src="images/parents.png"
          alt=""
        />
        <p className="max-h-[180px] max-w-[800px] leading-10 text-white">
          “Here we denounce with righteous indignation and dislike men who are
          so beguiled and demoralized by the charms of pleasure of the moment
          .................”
        </p>
      </section>
    </section>
  );
}
