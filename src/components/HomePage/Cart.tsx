import React from "react";

export default function Cart() {
  return (
    <div className="m-auto flex w-[400px] flex-col gap-2 rounded-xl bg-[#C1EF5B] p-5">
      <img
        className="m-auto w-[300px]"
        src="images/teacher.jpeg"
        alt="Teacher"
      />
      <p className="m-auto w-[300px]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit saepe
        nulla tenetur sed! Repellendus doloremque laudantium nobis tempore ab
        reprehenderit, ipsum eaque? Commodi, quibusdam corrupti? Et mollitia
        perferendis laudantium nulla!
      </p>
      <button className=" m-auto rounded-lg bg-[#2F8FE2] p-5 text-white">
        See More
      </button>
    </div>
  );
}
