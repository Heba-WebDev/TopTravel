import Image from "next/image";
import Link from "next/link";
export default function DealsCard({
  key,
  destination,
  country,
  startingPrice,
}) {
  return (
    <div className="max-w-[350px]">
      <Image
        src="/images/home/hills.jpg"
        alt="city"
        width={350}
        height={240}
        className="rounded-t-lg"
      />
      <div className=" border bg-blue-50 px-2 py-6 text-sm">
        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <span className="text-lg font-bold">{destination}</span>
            <span className="flex items-center gap-1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              {country}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 ">
            <span>Starting from</span>
            <span className="w-fit justify-end self-center rounded bg-gray-200 px-3 py-[1px] text-center text-sm font-bold text-orange-600">
              ${startingPrice}
            </span>
          </div>
        </div>

        <button className="mt-3 w-full bg-orange-600 py-2 text-white">
          Book Now
        </button>
      </div>
    </div>
  );
}
