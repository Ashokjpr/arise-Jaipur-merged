"use client";

import Image from "next/image";

export default function SuccessHero() {
  return (
     <section className="w-full">

      {/* Banner Image */}
      <Image
        src="/images/SUCCESS-STORY-PC.png"
        alt="Success Event"
        width={1440}   // original image width
        height={500}   // original image height (adjust if needed)
        priority
        className="w-full h-auto"
      />

    </section>
    // <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[90vh] overflow-hidden">

    //   {/* Background Image (Responsive) */}
    //   <div className="absolute inset-0">
    //     <Image
    //       src="/images/SUCCESS-STORY-PC.png" // use high quality image
    //       alt="Success Event"
    //       fill
    //       priority
    //       className="object-cover w-100 h-auto"
    //       sizes="100vw"
    //     />
    //   </div>

    //   {/* Overlay */}
    //   {/* <div className="absolute inset-0 bg-black/40"></div> */}

    //   {/* Content */}
    //   {/* <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4 sm:px-6"> */}

    //     {/* Heading */}
    //     {/* <h1 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight max-w-5xl">
    //       GLIMPSES OF SUCCESS EVENT HELD IN JAIPUR FOR FMGE JAN 2024
    //     </h1> */}

    //     {/* Sub Text */}
    //     {/* <p className="mt-4 sm:mt-6 text-red-400 text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold max-w-4xl leading-relaxed">
    //       10+ Students Scored 200+ Marks & 140+ Students Cleared FMGE in First Attempt
    //     </p> */}

    //   {/* </div> */}
    // </section>
  );
}