import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const UsefulLinks = [
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Contact",
      link: "/Contact",
    },

    {
      title: "Refund Policy",
      link: "/Refund-Policy",
    },
    {
      title: "Terms & Condition",
      link: "/Terms-Condition",
    },
    {
      title: "Privacy Policy",
      link: "/Privacy-Policy",
    },
  ];

  const ContactInfo = [
    {
      title: "Area Location",
      link: "/",
    },
    {
      title: "+88 0123456789",
      link: "/",
    },
    {
      title: "contact@brand.com",
      link: "/",
    },
    {
      title: "Dhaka, Bangladesh",
      link: "/",
    },
  ];

  return (
    <footer className=" body-font   bottom-0 w-full">
      <section className="m-auto max-w-[1320px] ">
        <div className="container mx-auto  grid grid-cols-1 gap-5 border-b px-5 py-24 sm:grid-cols-2 lg:grid-cols-3">
          <div className="w-100 mx-auto flex flex-col gap-5">
            <div>
              <Link
                href="/"
                className="title-font flex items-center justify-center font-medium md:justify-start"
              >
                <span className="mt-5  text-xl">Brand name</span>
              </Link>
              <p className=" text-sm ">
                Brand Name Leading Hospitality
                Consultancy firm in Bangladesh. To provide you better and
                affordable service. Tourism is our passion and not just a
                business. We believe more in delivering than just promising.
                With rich expertise and experience wholesale tourism market, we
                understand the requirement of the customer and provide the
                quality and professional service.
              </p>
            </div>
          </div>

          <div className="mx-auto w-64">
            <h2 className="title-font mb-3 text-sm font-medium tracking-widest ">
              Useful Links
            </h2>
            <nav className="mb-10 flex list-none flex-col	 gap-2">
              {UsefulLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.link} className=" hover:text-gray-400">
                    {link.title}
                  </Link>
                </li>
              ))}
            </nav>
          </div>

          <div className="mx-auto w-64">
            <h2 className="title-font mb-3 text-sm font-medium tracking-widest ">
              Contact Information
            </h2>
            <nav className="mb-10 flex list-none flex-col	 gap-2">
              {ContactInfo.map((contact, index) => (
                <li key={index}>
                  <Link href={contact.link} className=" hover:text-gray-400">
                    {contact.title}
                  </Link>
                </li>
              ))}
            </nav>
          </div>

          {/* <div className="-mb-10 mt-10 flex flex-grow flex-wrap text-center  md:mt-0 md:flex-row md:pl-20 md:text-left">
            
          </div> */}
        </div>

        {/* <hr /> */}
        <div className="">
          <div className="container mx-auto flex flex-col flex-wrap px-5 py-4 sm:flex-row">
            <p className="text-center text-sm  sm:text-left">
              © 2024  Brand Name —
              <Link
                href="https://www.linkedin.com/in/mehedi-hasan-himel/"
                className="ml-1 text-blue-500"
                target="_blank"
              >
                @GreatBro-IT
              </Link>
            </p>
            <span className="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
              <Link href="/" className="">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </Link>
              <Link href="/" className="ml-3 ">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </Link>
              <Link href="/" className="ml-3 ">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </Link>
              <Link href="/" className="ml-3 ">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </section>
    </footer>
  );
}
