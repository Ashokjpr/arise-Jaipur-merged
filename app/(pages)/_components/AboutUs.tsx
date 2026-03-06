"use client";
import Link from "next/link";
import Image from "next/image";

function AboutUs() {
  return (
    <section id="about-us" className="py-10 bg-gray-100 w-full">
      <div className="container text-center mx-auto px-4 lg:max-w-screen-xl md:max-w-screen-md">
        
          <h2
            className="text-3xl md:text-5xl font-bold mb-6 text-blue-950"
            data-aos="zoom-in-down"
          >
            About Us
          </h2>

          <p
            className="text-sm md:text-lg text-gray-700 leading-relaxed"
            data-aos="zoom-in-up"
          >
            Arise Medical Academy was established in 2010 with a vision to provide innovative, learner-centered medical coaching. Known as one of the best FMGE coaching institutes, Arise  Jaipur is committed to helping students achieve their career goals with skill, compassion, and professionalism.
            <br></br>
            The Jaipur Centre, started in 2023, focuses on delivering top-quality FMGE coaching with expert faculty support and proven results. With a strong presence in Jaipur, Arise  Jaipur continues to shape future medical practitioners through dedicated guidance and academic excellence.
          </p>

          {/* Button */}
          <div className="mt-8 flex justify-center ">
            <Link
              href="https://wa.me/919929113115"
              target="_blank"
              className="text-white bg-green-500 px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-900 transition duration-300"
            >
              Contact Us
            </Link>
          </div>

      </div>

     </section>
  );
}

export default AboutUs;
