import Link from "next/link";
export default function Footer() {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer className="container-custom border-top border border-b-0 border-l-0 border-r-0 border-gray-300  py-[4rem] text-sm">
      <div className="  grid-rows-auto grid auto-cols-fr grid-cols-2 gap-x-1 gap-y-10  md:grid-cols-8 lg:grid-cols-12 lg:gap-y-0 lg:py-14">
        <div className="col-span-2 row-span-1 text-xl font-bold uppercase md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-2">
          <span>Top Travel</span>
        </div>
        <div className="col-span-1 row-span-1 flex flex-col gap-y-3 uppercase md:col-start-3 md:col-end-6 lg:col-start-3 lg:col-end-5">
          <span className="font-bold">For Travel Advisors</span>
          <ul className="flex flex-col gap-3 ">
            <li>
              <Link href="/">Become an advisor</Link>
            </li>
            <li>
              <Link href="/">Advisor Resources</Link>
            </li>
            <li>
              <Link href="/">Travel advisor FAQ</Link>
            </li>
            <li>
              <Link href="/">Community Stories</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 row-span-1 flex flex-col gap-y-3 uppercase md:col-start-3 md:col-end-6 lg:col-start-5 lg:col-end-7">
          <span className="font-bold">For Travelers</span>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/">Why book with us</Link>
            </li>
            <li>
              <Link href="/">Travel Destinations</Link>
            </li>
            <li>
              <Link href="/">Travel guide</Link>
            </li>
            <li>
              <Link href="/">Travel Categories</Link>
            </li>
            <li>
              <Link href="/">Partners</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 row-span-1 flex flex-col gap-y-3 uppercase md:col-start-6 md:col-end-9 md:row-start-1 md:row-end-2 lg:col-start-7">
          <span className="font-bold">Our Company</span>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">The Journal</Link>
            </li>
            <li>
              <Link href="/">Press</Link>
            </li>
            <li>
              <Link href="/">Careers</Link>
            </li>
            <li>
              <Link href="/">Contact Us</Link>
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
      </div>
    </footer>
  );
}
