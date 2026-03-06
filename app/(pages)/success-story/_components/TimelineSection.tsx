"use client";

import Link from "next/link";
import Image from "next/image";
import { FaUserGraduate, FaAward } from "react-icons/fa";

const steps = [
  {
    link:"#fmge2026",
    title: "Top 10 FMGE Achievers 2026",
    desc: ""
  },
  {
    link:"#fmge2025",
    title: "Top 10 FMGE Achievers 2025",
    desc: ""
  },
  {
    link:"#fmge2024",
    title: "Top 10 FMGE Achievers 2024",
    desc: ""
  },
  {
    link:"#fmge2023",
    title: "Top 10 FMGE Achievers 2023",
    desc: ""
  },
  
];
export default function MedicalSuccessStatus() {

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ================= LEFT SIDE ================= */}
        <div>
          <h1 className="text-4xl text-blue-800 mx-auto text-center">Event Highlights</h1>
           <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-3"></div>
          <div className="relative">
         
                   {/* Vertical Line (Desktop Only) */}
                   <div className=" absolute left-1/2 top-0 h-full w-1 bg-green-200 -translate-x-1/2"></div>
         
                   <div className="space-y-7">
                     {steps.map((step, index) => (
                       <div
                         key={index}
                         className={`relative flex flex-col md:flex-row items-center md:items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                           }`}
                       >
                         {/* Step Content */}
                         
                         <div className="md:w-1/2 ">
                         <Link href={step.link}>
                           <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300  border-s-4 border-blue-700">
                             <h3 className=" font-semibold text-blue-900 mb-2">
                               {step.title}
                             </h3>
                             <p className="text-gray-600 text-sm leading-relaxed">
                               {step.desc}
                             </p>
                           </div>
                           </Link>
                         </div>
         
                         {/* Circle Number */}
                         <div className="absolute md:static left-1/2 -translate-x-1/2 md:translate-x-0 -mt-6 md:mt-0 z-10">
                           <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-700 text-white font-bold shadow-lg border-4 border-white">
                             {index+1}
                           </div>
                         </div>
         
                         {/* Spacer */}
                         <div className="md:w-1/2"></div>
                       </div>
                     ))}
                   </div>
         
                 </div>
        </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="relative w-full h-80 sm:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-100"
            data-aos="fade-left"
          >
            <Image
              src="/images/SUCCESS-img.png"  // Replace with your image
              alt="Success Event Jaipur"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}