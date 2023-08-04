import Image from "next/image";
import Link from "next/link";
export default function ExploreDestinations() {
  return (
    <aside className="bg-orange-50">
      <section className="container-custom flex flex-col-reverse gap-6 md:grid md:grid-cols-2 md:gap-0">
        <div className="flex flex-col gap-6 self-center">
          <h2 className="w-[100%] text-5xl font-extrabold md:w-[85%]">
            Nearby or distant locations, we handle it all
          </h2>
          <p className=" w-[100%] md:w-[85%]">
            Thriving metropolises, exotic isles, secluded getaways, and
            everything in between. Our first-hand knowledge and insider
            expertise span the world.
          </p>
          <Link
            href="/"
            className="mb-[3rem] w-[80%] border-black bg-black px-3 py-2 text-center text-white hover:bg-orange-50  hover:text-black hover:transition hover:duration-300 hover:ease-in-out md:mb-0  md:w-[75%] lg:w-[60%]"
          >
            EXPLORE DESTINATIONS
          </Link>
        </div>
        <Image
          className="col-span-1 object-fill"
          src="/images/home/venice.jpg"
          alt=""
          width={800}
          height={350}
          priority
        />
      </section>
      <section className="container-custom flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-0">
        <Image
          className="col-span-1"
          src="/images/home/hills.jpg"
          alt=""
          width={808}
          height={350}
          priority
        />
        <div className="flex w-[100%] flex-col gap-6 self-center md:w-[85%] md:justify-self-end">
          <h2 className="text-5xl font-extrabold">
            Tailored for travelers of large numbers
          </h2>
          <p>
            Whether you’re organizing a once-in-a-lifetime adventure, a family
            reunion, a group trip, or a weekend getaway, we’ve got you covered.
            If it’s on your group’s list, we’ll book it.
          </p>
          <Link
            href="/"
            className="w-[80%] border border-black bg-black px-3 py-2 text-center text-white  hover:bg-orange-50 hover:text-black hover:transition hover:duration-300 hover:ease-in-out md:w-[75%] lg:w-[60%]"
          >
            EXPLORE DESTINATIONS
          </Link>
        </div>
      </section>
    </aside>
  );
}
