import React from "react";

export default function Why() {
  return (
    <section className="  px-20 py-48 text-center">
      <section className="m-auto md:max-w-[1000px]">
        <h1 className="text-3xl font-bold text-[#2F8FE2]	">
          Why Creative International ?
        </h1>
        <br />
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in
          section 1.10.32.
        </p>
        <br />
        <p>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from de
          Finibus Bonorum et Malorum by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </p>
      </section>
      <br />
      <button className="right-0 rounded-lg bg-[#2F8FE2] p-5 text-white">
        See More
      </button>
      <br /> <br />
      <iframe
        className="m-auto h-[50vh] w-[70vw] lg:h-[70vh] lg:w-[90vw]"
        src="https://www.youtube.com/embed/WFmtNsgdYsA?si=g-I_MMDfeHzy-B5_"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </section>
  );
}
