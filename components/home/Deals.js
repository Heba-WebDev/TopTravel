"use client";

import data from "../../app/api/data.json";
import DealsCard from "./DealsCard";
export default function Deals() {
  console.log(data);
  return (
    <div className=" bg-blue-50 py-[8rem]">
      <div
        className="container-custom grid gap-4 text-center font-light
      "
      >
        <h2 className="text-6xl">
          Exclusive <span className="text-orange-600">deals & discounts</span>
        </h2>
        <p className="text-gray-600">
          Discover our fantastic early booking discounts & start planning your
          journey.
        </p>
      </div>
      <div className="container-custom pt-[5rem]">
        <div className="flex flex-wrap justify-center gap-8">
          {data &&
            data.slice(0, 3).map((c) => {
              return (
                <DealsCard
                  key={c.id}
                  destination={c.destination}
                  country={c.country}
                  startingPrice={c.startingPrice}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
