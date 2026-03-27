'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import StudentCard from "./StudentCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Top10saliderProps {
  students: any;
  title: string;
}
interface Student {
  image: string;
  name: string;
  marks: string;
}

export default function Top10Slider({
  students, title}:Top10saliderProps) {
  return (
    <section className="py-4 bg-blue-50">
      <div className=" max-w-7xl mx-auto">

        <h2 className="text-xl md:text-4xl font-semibold text-center text-blue-900 mb-5 md:mb-10">
          {title}
        </h2>

        <div className="mx-5">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
          >
            {students.map((student:Student, index:number) => (
              <SwiperSlide key={index} className="mb-10 ">
                <StudentCard image={student.image} name={student.name} marks={student.marks} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}