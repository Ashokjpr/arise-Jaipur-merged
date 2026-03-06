//  in this ARISE  MEDICAL ACADEMY BUILDING  BETTER DOCTORS is text


import Image from "next/image";

export default function AriseLogo() {
  return (
    <div className="flex items-center">
      
      {/* Round Logo Image */}
      <div className="relative w-16 h-16 ">
        <Image
          src="/images/1-1.png"
          alt="Arise Medical Academy Jaipur"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="leading-none">
  <p className="text-4xl font-bold text-indigo-800 ">
    ARISE
  </p>

  <p className="text-[10px] font-bold text-indigo-900 -mt-1">
    MEDICAL ACADEMY
  </p>

  <p className="text-[7px] font-bold m-0">
    <span className="text-green-600">BUILDING</span>{" "}
    <span className="text-red-600">BETTER DOCTORS</span>
  </p>
</div>

    </div>
  );
}