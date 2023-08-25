"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { validateEmail } from "../../utils/validation";
const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Destinations",
    path: "/destinations",
  },
  {
    label: "FAQs",
    path: "/faqs",
  },
  {
    label: "Contact Us",
    path: "/contact",
  },
];
export default function Footer() {
  const now = new Date();
  const year = now.getFullYear();
  const [email, setEmail] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateEmail(email)) {
      console.log("it's an email");
    } else {
      console.log("invalid email");
    }
  };
  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <footer className="container-custom border-top grid gap-6  border border-b-0 border-l-0 border-r-0 border-gray-300  py-[4rem] text-sm">
      <section className="grid grid-cols-1 justify-around gap-8 md:grid-cols-2 md:gap-0">
        <div className="w-100  gap-6 md:justify-start md:gap-0">
          <Link
            href="/"
            className="text-normal flex items-center gap-2 self-start justify-self-center py-0 text-left text-xl font-bold uppercase"
          >
            TOP{" "}
            <Image
              src="/images/globals/icons8-airplane-50.png"
              alt="airplane"
              width={20}
              height={20}
            />
            TRAVEL
          </Link>

          <div className="flex flex-col items-center gap-6 pt-6 text-left md:flex-row md:justify-normal md:gap-10">
            {links.map(({ label, path }) => (
              <li
                key={path}
                className="list-none self-start pt-4 hover:text-orange-600 md:pt-0"
              >
                <Link href={path}>{label}</Link>
              </li>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-3 uppercase  ">
          <span className="font-bold">Subscribe</span>
          <p className="pb-3">
            Sign up with your email address to stay in-the-know with travel
            recs, hotel features & travel advisor news.
          </p>
          <form className="flex" onSubmit={handleSubmit}>
            <label htmlFor="email"></label>
            <input
              type="text"
              id="email"
              name="email"
              autoComplete="on"
              placeholder="Enter email"
              value={email}
              onChange={handleChange}
              className="w-full p-3 placeholder:px-2"
            />
            <button className="w-1/2 bg-gray-500 p-3 text-white hover:bg-orange-600">
              Submit
            </button>
          </form>
        </div>
      </section>
      <section className="flex flex-col justify-between gap-3 text-center text-[12px] text-gray-400 md:flex-row md:gap-0 md:text-left">
        <span>© Copyright, Top Travel {year}. All rights reserved.</span>
        <span>Terms & Conditions.</span>
      </section>
    </footer>
  );
}
