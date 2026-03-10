//  in this ARISE  MEDICAL ACADEMY BUILDING  BETTER DOCTORS is text


import Image from "next/image";

export default function AriseLogo() {
  return (
    <div className="flex items-center">

      {/* Round Logo Image */}
      <div className="relative w-12 h-12 md:w-16 md:h-16 mr-1 md:mr-0">
        <Image
          src="/images/1-1.png"
          alt="image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="leading-none">
        <p className="text-2xl md:text-4xl font-bold text-indigo-800 ">
          ARISE
        </p>

        <p className="text-[8px] md:text-[10px] font-bold text-indigo-900 -mt-0.5 md:-mt-1 whitespace-nowrap">
          MEDICAL ACADEMY
        </p>

        <p className="text-[5px] md:text-[7px] font-bold m-0 whitespace-nowrap">
          <span className="text-green-600">BUILDING</span>{" "}
          <span className="text-red-600">BETTER DOCTORS</span>
        </p>
      </div>

    </div>
  );
}