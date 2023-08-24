import Link from "next/link";
import Image from "next/image";
const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Destinations",
    path: "/destinations",
  },
  {
    label: "FAQs",
    path: "/faqs",
  },
  {
    label: "Contact Us",
    path: "/contact",
  },
];
export default function Footer() {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer className="container-custom border-top grid gap-6  border border-b-0 border-l-0 border-r-0 border-gray-300  py-[4rem] text-sm">
      <section className="grid grid-cols-1 justify-around gap-8 md:grid-cols-2 md:gap-0">
        <div className="w-100  gap-6 md:justify-start md:gap-0">
          <Link
            href="/"
            className="text-normal flex items-center gap-2 self-start justify-self-center py-0 text-left text-xl font-bold uppercase"
          >
            TOP{" "}
            <Image
              src="/images/globals/icons8-airplane-50.png"
              alt="airplane"
              width={20}
              height={20}
            />
            TRAVEL
          </Link>

          <div className="flex flex-col items-center gap-6 pt-6 text-left md:flex-row md:justify-normal md:gap-10">
            {links.map(({ label, path }) => (
              <li key={path} className="list-none self-start pt-4 md:pt-0">
                <Link href={path}>{label}</Link>
              </li>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-3 uppercase  ">
          <span className="font-bold">Subscribe</span>
          <p className="pb-3">
            Sign up with your email address to stay in-the-know with travel
            recs, hotel features & travel advisor news.
          </p>
          <form className="flex">
            <label htmlFor="email"></label>
            <input
              type="text"
              id="email"
              name="email"
              autoComplete="on"
              placeholder="Enter email"
              className="w-full p-3 placeholder:px-2"
            />
            <button className="w-1/2 bg-gray-500 p-3 text-white">Submit</button>
          </form>
        </div>
      </section>
      <section className="flex flex-col justify-between gap-3 text-center text-[12px] text-gray-400 md:flex-row md:gap-0 md:text-left">
        <span>© Copyright, Top Travel {year}. All rights reserved.</span>
        <span>Terms & Conditions.</span>
      </section>
      {/* <div className="  grid-rows-auto grid auto-cols-fr grid-cols-2 gap-x-1 gap-y-10  md:grid-cols-6 lg:grid-cols-8 lg:gap-y-0 lg:py-14">
        <div className="col-span-3 row-span-2 text-xl font-bold uppercase md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-2">
          <span>Top Travel</span>
        </div>
        <div className="col-span-2 row-span-2 flex flex-col gap-y-3 uppercase md:col-start-3 md:col-end-6 lg:col-start-3 lg:col-end-5">
          <span className="font-bold">For Travelers</span>
          <ul className="flex flex-col gap-3 ">
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/">Destinations</Link>
            </li>
            <li>
              <Link href="/">FAQs</Link>
            </li>
            <li>
              <Link href="/">CONTACT US</Link>
            </li>
          </ul>
        </div>

        <div className="col-span-2 row-span-1 flex flex-col gap-y-3 uppercase md:col-start-9 md:col-end-13 md:row-start-1 md:row-end-2">
          <span className="font-bold">Subscribe</span>
          <p className="pb-3">
            Sign up with your email address to stay in-the-know with travel
            recs, hotel features & travel advisor news.
          </p>
          <form className="flex">
            <label htmlFor="email"></label>
            <input
              type="text"
              id="email"
              name="email"
              autoComplete="on"
              placeholder="Enter email"
              className="w-full p-3 placeholder:px-2"
            />
            <button className="w-1/2 bg-gray-500 p-3 text-white">Submit</button>
          </form>
          <span className="mt-1 text-gray-400  md:bottom-2">
            © {year} Top Travel, All Rights Reserved
          </span>
        </div>
      </div> */}
    </footer>
  );
}
