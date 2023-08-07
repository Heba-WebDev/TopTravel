import Image from "next/image";

export default function Perks() {
  return (
    <div className="container-custom grid gap-6 py-[8rem]">
      <div className="relative pb-3">
        <h2 className="pb-3 text-5xl font-extrabold  md:text-6xl">
          Endless perks with our partners
        </h2>
        <div className="h-3 w-[30%] bg-orange-400"></div>
      </div>
      <div className="flex flex-wrap gap-[4rem] md:flex-nowrap md:gap-3">
        <section className="grid gap-4 md:gap-2">
          <Image
            src="/images/home/hotel1.jpg"
            width={700}
            height={500}
            alt="hotel"
          ></Image>
          <h3 className="text-2xl font-bold ">Unwind in Comfort</h3>
          <p className="w-[100%] font-light md:w-[95%]">
            Our partner hotels offer a 15% discount on accommodations for groups
            of 5 or more. Start your day with a complimentary breakfast and
            enjoy the convenience of early check-in at no extra cost. Relax in
            luxurious rooms and experience the ultimate comfort during your
            travels.
          </p>
          <span className="block">
            <span className="text-orange-400">★</span> $100 hotel credit.
          </span>
          <span className="block">
            <span className="text-orange-400">★</span> Breakfast daily.
          </span>
          <span className="block">
            <span className="text-orange-400">★</span> Extended check-in/out
            whenever possible.
          </span>
        </section>

        <section className="grid gap-4 md:gap-2">
          <Image
            src="/images/home/activity.jpg"
            width={700}
            height={500}
            alt="hotel"
          ></Image>
          <h3 className="text-2xl font-bold">Fun for Everyone</h3>
          <p className="w-[100%] font-light md:w-[95%]">
            Experience the thrill of new adventures with our partner activity
            providers. Groups of 5 or more receive a 15% discount on a variety
            of activities for both kids and adults. Plan your next day’s
            adventure with ease and make unforgettable memories with your travel
            companions.
          </p>
          <span className="block">
            <span className="text-orange-400">★</span> Varity of actitives.
          </span>
          <span className="block">
            <span className="text-orange-400">★</span> Catered to kids and
            adults.
          </span>
          <span className="block">
            <span className="text-orange-400">★</span> Day or night, whatever
            suits you.
          </span>
        </section>

        <section className="grid gap-4 md:gap-2">
          <Image
            src="/images/home/dinning.jpg"
            width={700}
            height={500}
            alt="hotel"
          ></Image>
          <h3 className="text-2xl font-bold">Dine in Style</h3>
          <p className="w-[100%] font-light md:w-[95%]">
            Indulge in delicious cuisine with our partner restaurants. Groups of
            5 or more receive a 15% discount on dining, with no advanced booking
            required. Whether you’re in the mood for lunch or dinner, our
            partners offer a wide range of options to satisfy your cravings. Bon
            appétit!
          </p>
          <span className="block">
            <span className="text-orange-400">★</span> Your meal of choice
          </span>
          <span className="block">
            <span className="text-orange-400">★</span> Walk-in any day
          </span>
          <span className="block">
            <span className="text-orange-400">★</span> No extra cost, where
            reserviations needed.
          </span>
        </section>
      </div>
    </div>
  );
}
