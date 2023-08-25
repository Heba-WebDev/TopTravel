import Image from "next/image";
import Link from "next/link";

export default function HowItWorks() {
  return (
    <div
      className="container-custom grid justify-center scroll-smooth py-[12rem]"
      id="howitworks"
    >
      <div
        className="relative grid gap-4 text-center font-light
      "
      >
        <h2 className="text-6xl font-light">
          How it <span className="text-orange-600">works</span>
        </h2>
        <p className="text-gray-600">
          Experience a flawlessly organized and secure vacation, designed to fit
          your budget without compromising quality.
        </p>
        <div className="absolute left-[70%] top-[105%] w-[30%] opacity-[0.5] md:right-[50%] md:top-[105%]">
          <Image
            src="/images/home/airplanes.svg"
            alt=""
            width={150}
            height={40}
            className="h-auto w-auto"
          />
        </div>
      </div>
      <section className="grid grid-cols-1 gap-4 pt-[4rem] md:grid-cols-3">
        <div className="relative grid gap-8 bg-white px-4 py-[2rem]">
          <div>
            <Image
              src="/images/home/location1.svg"
              alt=""
              width={40}
              height={40}
              className="h-auto w-auto"
            />
          </div>
          <div className="absolute left-0 top-[-5%] h-[100%] w-[100%]">
            <Image
              src="/images/home/line2.svg"
              alt=""
              width={150}
              height={40}
              className="h-auto w-auto"
            />
          </div>
          <div className="z-20 grid gap-2 ">
            <h3 className="text-xl font-bold">Choose a package</h3>
            <p className="max-w-[18rem] text-sm font-light text-gray-500">
              Select from our range of travel packages and personalize it to
              suit your preferences.
            </p>
          </div>
        </div>

        <div className="relative grid gap-8 bg-white px-4 py-[2rem]">
          <div className="">
            <Image
              src="/images/home/fill.svg"
              alt=""
              width={40}
              height={40}
              className="h-auto w-auto"
            />
          </div>
          <div className="absolute right-0 top-[-5%] h-[100%] w-[100%]">
            <Image
              src="/images/home/line2.svg"
              alt=""
              width={150}
              height={40}
              className="h-auto w-auto"
            />
          </div>
          <div className="z-20 grid gap-2">
            <h3 className="text-xl font-bold">Fill a form</h3>
            <p className="max-w-[18rem] text-sm font-light text-gray-500">
              Provide arrival and departure dates, along with other essential
              details.
            </p>
          </div>
        </div>

        <div className="relative grid gap-8 bg-white px-4 py-[2rem]">
          <div>
            <Image src="/images/home/pay.svg" alt="" width={40} height={40} />
          </div>
          <div className="absolute right-0 top-[-5%] h-[100%] w-[100%]">
            <Image
              src="/images/home/line2.svg"
              alt=""
              width={150}
              height={40}
              className="z-0 h-auto w-auto"
            />
          </div>
          <div className="z-20 grid gap-2 ">
            <h3 className="text-xl font-bold">Book the trip</h3>
            <p className="max-w-[18rem] text-sm font-light text-gray-500">
              Confirm the details, make payment and start packing your bags.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
