"use client";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="container-custom relative flex items-center justify-between py-[1.5rem] font-light md:py-[2rem]">
      <div className="flex-1 ">
        {/* Logo */}
        <span className=" text-normal py-4 font-bold">
          TOP TRAVEL {isNavOpen}
        </span>
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
      <ul className="hidden items-center justify-end gap-6  text-base md:flex ">
        <li>
          <Link href="#">Destenations</Link>
        </li>
        <li>
          <Link href="#">Partners</Link>
        </li>
        <li>
          <Link href="#">Why Top Travel</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </ul>
      {/* Small screen's nav links */}
      {isNavOpen && (
        <div class="cursor-pointer md:hidden">
          <ul
            class="translate absolute left-[0%] top-16 z-20
   mt-[-1%] flex w-[100%] flex-col items-center space-y-[5rem] bg-orange-50
   py-[5rem] transition duration-300 ease-in"
          >
            <li>
              <Link href="#">Destenations</Link>
            </li>
            <li>
              <Link href="#">Partners</Link>
            </li>
            <li>
              <Link href="#">Why Top Travel</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
