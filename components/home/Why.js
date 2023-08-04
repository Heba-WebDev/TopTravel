import Link from "next/link";

export default function Why() {
  return (
    <div className="bg-orange-50 py-[8rem]">
      <div className="container-custom mx-auto grid w-[100%] gap-8 text-left md:w-[70%] md:text-center">
        <h2 className="text-4xl font-extrabold italic md:text-6xl">
          Revolutionary journeys fueled by innovation and personal care
        </h2>
        <p className="mx-auto w-[100%] md:w-[85%]">
          Our trip planners possess the expertise, resources, and networks to
          craft your ideal holiday. Receive exceptional suggestions and
          benefits, a smooth reservation process, and perhaps even a new
          companion along the way.
        </p>
        <Link
          href="/"
          className=" w-[40%] border border-black bg-black px-2 py-3 text-center uppercase text-white hover:bg-orange-50 hover:text-black hover:transition hover:duration-300 hover:ease-in-out md:mx-auto md:w-[30%]"
        >
          Why Top Travel
        </Link>
      </div>
    </div>
  );
}
