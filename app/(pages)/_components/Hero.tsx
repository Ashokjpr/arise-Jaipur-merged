'use client';
import Image from "next/image";
import Link from "next/link";

import HomeSlider from "./HomeSlider"

export default function Hero() {
  return (
    <section
      className="relative pt-10 md:pt-20  bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/70"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6"
        data-aos="fade-right"
        >Arise Medical Academy Jaipur</h2>
        <p className="text-sm md:text-xl" data-aos="fade-left" >
          India's best FMGE/NEXT academy for all the abroad medical aspirants.
        </p>

        <p className="text-sm md:text-xl" data-aos="fade-left" data-aos-delay="50">
          We provide FMGE/NEXT exam Coaching.
        </p>

        <p className="text-sm md:text-xl mb-8" data-aos="fade-left" data-aos-delay="100">
          A Coaching and training institute focused on medical exam preparation, especially for FMGE/NEXT Screening Examination.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full max-w-[240px] sm:max-w-none mx-auto">
          <Link href="/success-story" className="w-full sm:w-auto" data-aos="fade-left" data-aos-delay="200">
          <button className="w-full sm:w-auto bg-blue-600 px-4 py-3 md:px-6 md:py-3 rounded-lg hover:bg-blue-700 transition">
           Success Story
          </button>
          </Link>
          <Link href="https://registerjaipur.arisemedicalacademy.com/" className="w-full sm:w-auto"  data-aos="fade-right" data-aos-delay="200">
            <button className="w-full bg-white text-blue-600 px-4 py-3 md:px-6 md:py-3 rounded-lg hover:bg-gray-200 transition">
              Register Now
            </button>
          </Link>
        </div>

      </div>
      {/* <div className="mt-12" data-aos="fade-up">
            <Image
                src="/images/banner-2.webp"
                alt="Hero Image"
                width={1200}
                height={600}
                className="mx-auto  md:h-auto min-w-[90%]"
            />
        </div> */}


      <HomeSlider />

    </section>
  );
}
