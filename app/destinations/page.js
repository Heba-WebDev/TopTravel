"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

async function getData() {
  const res = await fetch(
    "https://api.jsonbin.io/v3/b/64d55fff8e4aa6225ece0ee3",
  );
  if (!res.ok) {
    console.error("Failed to fetch data");
  }
  return res.json();
}

export default function Destinations() {
  const [data, setData] = useState(null);
  const [asia, setAsia] = useState(false);
  const [europe, setEurope] = useState(false);
  const [northAmerica, setNorthAmerica] = useState(false);

  useEffect(() => {
    getData().then((result) => {
      setData(result?.record?.sort((a, b) => a.contientn - b.contientn));
    });
  }, []);

  const handleAsia = () => {
    setAsia(!asia);
  };

  const handleEurope = () => {
    setEurope(!europe);
  };

  const handleNorthAmerica = () => {
    setNorthAmerica(!northAmerica);
  };

  const filteredEurope = data?.filter(
    (destination) => destination.continent === "Europe",
  );
  const filteredAsia = data?.filter(
    (destination) => destination.continent === "Asia",
  );
  const filteredNorthAmerica = data?.filter(
    (destination) => destination.continent === "North America",
  );

  return (
    <div className="container-custom grid gap-8 py-[8rem]">
      <section className="text-center">
        <h1 className="pb-8 text-6xl font-bold">Travel Destinations</h1>
        <p className="mx-auto w-[100%] pb-8 md:w-[50%]">
          Spanning cities, countries and continents, we cover all types of
          travel destinations around the world. Do not see your travel
          destination listed? We are adding new destinations very soon, stay
          tuned.
        </p>
      </section>
      <section>
        <div
          className="flex cursor-pointer justify-between border border-x-0 border-t-0 border-gray-300 py-3"
          onClick={() => handleAsia()}
        >
          <h2 className="text-3xl font-bold">Asia</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div
          className={`grid grid-cols-1 justify-between gap-4 py-[2rem] md:grid-cols-2 ${
            asia ? "block" : "hidden"
          }`}
        >
          {filteredAsia &&
            filteredAsia.map((destination) => {
              return (
                <div key={destination.id} className="">
                  <div className="flex flex-col gap-2 pb-6">
                    <h2 className="text-xl font-bold">{destination.country}</h2>
                    <Link href="#">
                      <h3 className="text-lg">{destination.city}</h3>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </section>

      <section>
        <div
          className="flex cursor-pointer justify-between border border-x-0 border-t-0 border-gray-300 py-3 "
          onClick={() => handleEurope()}
        >
          <h2 className="text-3xl font-bold">Europe</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div
          className={`grid grid-cols-1 justify-between gap-4 py-[2rem] md:grid-cols-2 ${
            europe ? "block" : "hidden"
          }`}
        >
          {filteredEurope &&
            filteredEurope.map((destination) => {
              return (
                <div key={destination.id} className="">
                  <div className="flex flex-col gap-2 pb-6">
                    <h2 className="text-xl font-bold">{destination.country}</h2>
                    <Link href="#">
                      <h3 className="text-lg">{destination.city}</h3>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </section>

      <section>
        <div
          className="flex cursor-pointer justify-between border border-x-0 border-t-0 border-gray-300 py-3"
          onClick={() => handleNorthAmerica()}
        >
          <h2 className="text-3xl font-bold">North America</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div
          className={`grid grid-cols-1 justify-between gap-4 py-[2rem] md:grid-cols-2 ${
            northAmerica ? "block" : "hidden"
          }`}
        >
          {filteredNorthAmerica &&
            filteredNorthAmerica.map((destination) => {
              return (
                <div key={destination.id} className="">
                  <div className="flex flex-col gap-2 pb-6">
                    <h2 className="text-xl font-bold">{destination.country}</h2>
                    <Link href="#">
                      <h3 className="text-lg">{destination.city}</h3>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
}
