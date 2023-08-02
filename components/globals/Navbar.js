"use client";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="relative flex items-center justify-around bg-orange-50 px-6 py-[1rem] text-base md:py-[2rem]">
      <div className="container mx-auto">
        {/* Logo */}
        <span className="text-xl">TOP TRAVEL {isNavOpen}</span>
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>
      {/* Big screen's nav links */}
      <ul className="container mx-auto hidden items-center justify-between text-base md:flex">
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
   mt-[-1%] flex w-[100%] flex-col items-center space-y-[4rem] bg-orange-50
   py-6 transition duration-300 ease-in"
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
