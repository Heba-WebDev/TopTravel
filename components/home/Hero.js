import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative h-full w-full bg-hero bg-cover bg-center bg-no-repeat">
      <div className="">
        <h1 className="pt-[8rem] text-center text-5xl font-extrabold italic text-white md:pt-[6rem] md:text-8xl">
          Dream vacation starts here!
        </h1>
      </div>

      <Link
        href="/"
        className="absolute bottom-8 left-[43%] mt-3 flex flex-col justify-center self-center text-center text-sm uppercase text-white md:left-[47.3%] "
      >
        Learn more
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="absolute bottom-1 left-[50%] h-6 w-6 self-center text-center text-sm text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
  );
}
