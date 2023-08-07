import Image from "next/image";
import Link from "next/link";

export default function WorkWithUs() {
  return (
    <div className="container-custom  flex flex-col-reverse py-[8rem] md:grid md:grid-cols-2 md:gap-0">
      <section className="col-span-1 row-span-2 flex flex-col justify-center gap-7 bg-orange-200 px-[1rem] py-6 md:px-4  md:py-1 lg:px-[2.5rem]">
        <h2 className="text-5xl font-bold">
          Are you the go-to person for travel tips?
        </h2>
        <p className="text-normal">
          Turn it into a dream job. We will show you the ropes and make you look
          great. Work from anywhere, side hustle or full time—the best gig you
          did not know existed.
        </p>
        <Link
          href="/"
          className="w-[65%] border border-black bg-black px-2 py-3 text-center uppercase text-white hover:bg-orange-200 hover:text-black hover:transition hover:duration-300 hover:ease-in-out md:w-[45%] lg:w-[30%]"
        >
          Learn More
        </Link>
      </section>
      <section className="object-cover">
        <Image
          src="/images/home/woman_smiling.jpg"
          width={740}
          height={230}
          alt="smiling woman"
          priority
          className="col-span-1 row-span-2 max-h-[35rem] object-cover object-center"
        ></Image>
      </section>
    </div>
  );
}
