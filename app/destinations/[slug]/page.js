"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import FormDestination from "../../../components/destinations/FormDestination";

async function getData() {
  const res = await fetch(
    "https://api.jsonbin.io/v3/b/64d55fff8e4aa6225ece0ee3",
  );
  if (!res.ok) {
    console.error("Failed to fetch data");
  }
  return res.json();
}
{
}

export default function Page() {
  const [city, setCity] = useState([]);
  const [clicked, setClicked] = useState({
    itinerary: true,
    inclusion: false,
    exclusion: false,
  });
  const [itinerary, setItinerary] = useState([]);
  const [inclusion, setInclusion] = useState([]);
  const [exclusion, setExclusion] = useState([]);
  const params = useParams();
  const BASE_URL = `/images/destinations/${params.slug}/`;
  useEffect(() => {
    getData().then((result) => {
      setCity(
        result?.record?.filter(
          (destination) => destination?.city === `${params.slug}`,
        ),
        setItinerary(city?.map((c) => c?.itinerary)),
        setInclusion(city?.map((c) => c?.inclusion)),
        setExclusion(city?.map((c) => c?.exclusion)),
        console.log(itinerary, inclusion, exclusion),
      );
    });
  }, [params.slug, city, exclusion, inclusion, itinerary]);

  return (
    <div className="container-custom grid gap-[4rem] py-[8rem]">
      <section className="relative">
        <Image
          src={`${BASE_URL}wallpaper.jpg`}
          alt="wallpaper"
          width={1400}
          height={300}
          className="h-auto rounded-3xl object-cover md:h-[35rem]"
        ></Image>

        <h1 className="absolute bottom-8 left-5 text-[5rem] text-white lg:bottom-2 lg:text-[8rem]">
          Singapore
        </h1>
      </section>

      <section className=" gap-6">
        <div>
          <section className="flex justify-around">
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/images/destinations/generals/hotels.svg"
                alt="accommodation"
                width={80}
                height={80}
                className="fill-orange-300"
              />
              <span className="text-sm font-bold uppercase">
                Accommodations
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/images/destinations/generals/resturantes.svg"
                alt="resturantes"
                width={80}
                height={80}
              />
              <span className="text-sm font-bold uppercase">Restaurants</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/images/destinations/generals/guides.svg"
                alt="guides"
                width={80}
                height={80}
                className="text-orange-300"
              />
              <span className="text-sm font-bold uppercase">Guides</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/images/destinations/generals/activites.svg"
                alt="activites"
                width={80}
                height={80}
                className="text-orange-300"
              />
              <span className="text-sm font-bold uppercase">Activites</span>
            </div>
          </section>

          <section className="grid gap-4 text-[1rem]">
            <p>
              Home to some of the most dazzling islands, Maldives is one of the
              top romantic destinations for couples. Whether you are a newlywed
              on your honeymoon or just looking to make a special occasion even
              more memorable, the award-winning resorts and the pristine beaches
              will surely transport you to a magical world.
            </p>
            <p>
              Price is subject to change without prior notice during high
              seasons including public and New Year holidays.
            </p>
          </section>

          <section className="flex gap-4">
            <button
              className={`border-[3px] border-l-0 border-r-0 border-t-0 border-orange-500 bg-black px-6 py-[4px] text-center text-lg font-bold text-white`}
            >
              Itinerary
            </button>
            <button
              className={`border-[3px] border-l-0 border-r-0 border-t-0 border-orange-500 bg-black px-6 py-[4px] text-center text-lg font-bold text-white`}
            >
              Inclusion
            </button>
            <button
              className={`border-[3px] border-l-0 border-r-0 border-t-0 border-orange-500 bg-black px-6 py-[4px] text-center text-lg font-bold text-white`}
            >
              Exclusions
            </button>
          </section>

          <section className="grid gap-8 border-[4px] border-orange-300 px-2 py-8">
            <p className="text-normal flex max-w-[75%] flex-col">
              <span className="font-bold">Day 1</span> Pick up from Arusha town
              or Kilimanjaro International Airport (JRO) and transfer to Moshi
              town. Half board accommodation at Bristol Cottages or Sal Salinero
              Hotel in Moshi.
            </p>
            <p className="text-normal flex max-w-[75%] flex-col">
              <span className="font-bold">Day 2</span> After breakfast and a
              short tour briefing from the guide, depart to Marangu gate of
              Kilimanjaro National Park (i50-min drive). Upon registering with
              park authorities, the climb officially commences with a fivehour
              walk to the Mandara encampment. Pass through a thick rainforest
              zone with a high chance of rain in the afternoon. Overnight night
              at Mandara Hut (2,750m). Shared bathrooms with running water.
            </p>
            <p className="text-normal flex max-w-[75%] flex-col">
              <span className="font-bold">Day 3</span> Today, continue the
              ascent through the forest for a short time, before reaching the
              heather and moorland zone at roughly 3,000m (approx. 6 hours
              walk). Enjoy stunning views of the mountain peaks at this
              altitude. Overnight at Horombo Hut (3,720m). Shared bathrooms are
              available with running water.
            </p>
            <p className="text-normal flex max-w-[75%] flex-col">
              <span className="font-bold">Day 4</span> The trek continues past
              the final watering point, and ascends to the saddle of
              Kilimanjaro, between the peaks of Kibo and Mawenzi. The vegetation
              thins out as you enter the desert-like alpine zone (approx.
              4,000m) and, once you cross the saddle, Kibo peak comes into view.
              The saddle is an alpine desert that resembles a lunar landscape.
              Be careful to notice signs of altitude sickness. This seven-hour
              walk will be taken at a slow pace. Overnight at Kibo Hut (4,703m),
              a comfortable stone construction (no running water at Kibo Hut).
              Few plants other than lichens and grasses survive in these
              conditions.
            </p>
            <p className="text-normal flex max-w-[75%] flex-col">
              <span className="font-bold">Day 5</span> The trek continues past
              the final watering point, and ascends to the saddle of
              Kilimanjaro, between the peaks of Kibo and Mawenzi. The vegetation
              thins out as you enter the desert-like alpine zone (approx.
              4,000m) and, once you cross the saddle, Kibo peak comes into view.
              The saddle is an alpine desert that resembles a lunar landscape.
              Be careful to notice signs of altitude sickness. This seven-hour
              walk will be taken at a slow pace. Overnight at Kibo Hut (4,703m),
              a comfortable stone construction (no running water at Kibo Hut).
              Few plants other than lichens and grasses survive in these
              conditions.
            </p>
          </section>
        </div>
        <FormDestination />
      </section>
    </div>
  );
}
