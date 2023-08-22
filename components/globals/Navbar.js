"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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
export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="container-custom relative flex items-center justify-between py-[1.5rem] font-light">
      <div className="flex-1 ">
        {/* Logo */}
        <Link
          href="/"
          className="text-normal flex items-center gap-2 py-4 font-bold"
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
      </div>
      {/* Hamburger menu */}
      <div className="md:hidden">
        {!isNavOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="h-6 w-6 hover:cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        ) : (
          <div className="border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="h-6 w-6 border hover:cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        )}
      </div>
      {/* Big screen's nav links */}
      <ul className="hidden items-center justify-end gap-6 text-sm font-[500]  md:flex ">
        {links.map(({ label, path }) => (
          <li key={path}>
            <Link
              href={path}
              className="hover:border-b-4 hover:border-b-orange-600"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Small screen's nav links */}
      {isNavOpen && (
        <div className="cursor-pointer md:hidden">
          <ul
            className="translate absolute left-[0%] top-[5rem] z-20
   mt-[-1%] flex w-[100%] flex-col items-center space-y-[5rem] bg-gray-50
   py-[5rem] transition duration-300 ease-in"
          >
            {links.map(({ label, path }) => (
              <li key={path}>
                <Link href={path} onClick={() => setIsNavOpen(!isNavOpen)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
