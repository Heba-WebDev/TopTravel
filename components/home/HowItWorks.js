import Image from "next/image";
import Link from "next/link";

export default function HowItWorks() {
  return (
    <div className="container-custom grid justify-center py-[12rem]">
      <div
        className="relative grid gap-4 text-center font-light
      "
      >
        <h2 className="text-6xl font-light">
          How it <span className="text-orange-600">works</span>
        </h2>
        <p className="text-gray-600">
          We ensure that you’ll embark on a perfectly planned, safe vacation at
          a price you can afford.
        </p>
        <div className="absolute left-[70%] top-[105%] w-[30%] opacity-[0.5] md:right-[50%] md:top-[105%]">
          <Image
            src="/images/home/airplanes.svg"
            alt=""
            width={150}
            height={40}
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
            />
          </div>
          <div className="absolute left-0 top-[-5%] h-[100%] w-[100%]">
            <Image
              src="/images/home/line2.svg"
              alt=""
              width={150}
              height={40}
            />
          </div>
          <div className="grid gap-2">
            <h3 className="text-xl font-bold">Choose a package</h3>
            <p className="max-w-[18rem] text-sm font-light text-gray-500">
              Choose one of our travel packages and customize it if needed
            </p>
          </div>
        </div>

        <div className="relative grid gap-8 bg-white px-4 py-[2rem]">
          <div>
            <Image src="/images/home/fill.svg" alt="" width={40} height={40} />
          </div>
          <div className="absolute right-0 top-[-5%] h-[100%] w-[100%]">
            <Image
              src="/images/home/line2.svg"
              alt=""
              width={150}
              height={40}
            />
          </div>
          <div className="grid gap-2">
            <h3 className="text-xl font-bold">Fill a form</h3>
            <p className="max-w-[18rem] text-sm font-light text-gray-500">
              Choose one of our travel packages and customize it if needed
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
            />
          </div>
          <div className="grid gap-2">
            <h3 className="text-xl font-bold">Book the trip</h3>
            <p className="max-w-[18rem] text-sm font-light text-gray-500">
              Choose one of our travel packages and customize it if needed
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
