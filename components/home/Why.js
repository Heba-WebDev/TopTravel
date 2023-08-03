import Link from "next/link";

export default function Why() {
  return (
    <div className="bg-orange-50 py-[8rem]">
      <div className="container mx-auto grid w-[100%] gap-8 text-center md:w-[70%]">
        <h2 className="text-4xl font-extrabold italic md:text-6xl">
          Next-level travel powered by tech and the human touch
        </h2>
        <p className="mx-auto w-[100%] md:w-[85%]">
          Our travel advisors have the tools, insights & connections to build
          your dream vacation. Get killer recommendations & perks, a seamless
          booking experience — and maybe a cool new friend along the way.
        </p>
        <Link
          href="/"
          className="mx-auto w-[70%] bg-black px-2 py-3 uppercase text-white md:w-[30%]"
        >
          Why Top Travel
        </Link>
      </div>
    </div>
  );
}
