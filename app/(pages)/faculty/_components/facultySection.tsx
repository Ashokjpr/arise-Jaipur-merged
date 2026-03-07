"use client";

import FacultyCard from "./FacultyCard";

export default function FacultyPage() {
  const faculty = [
    {
      name: "Dr. Abbas Ali",
      subject: "Anatomy",
      qualification: "MBBS, MD",
      image: "/images/Faculty/Abbas Ali.png",
    },
    {
      name: "Dr. Abdul Jazeer",
      subject: "Physiology",
      qualification: "MBBS, MD",
      image: "/images/Faculty/Abdul Jazeer.png",
    },
    {
      name: "Dr. Devesh Mishra",
      subject: "Pathology",
      qualification: "MBBS, MD",
      image: "/images/Faculty/Devesh Mishra.png",
    },
    {
      name: "Dr. DK",
      subject: "Pharmacology",
      qualification: "MBBS, MD",
      image: "/images/Faculty/DK.png",
    },
    {
      name: "Dr.J Magendran",
      subject: "Medicine",
      qualification: "MBBS, MD",
      image: "/images/Faculty/J Magendran.png",
    },
    {
      name: "Dr. Khaleel",
      subject: "Surgery",
      qualification: "MBBS, MS",
      image: "/images/Faculty/Khaleel.png",
    },
    {
      name: "Dr. M Nadeem Zafar",
      subject: "Anatomy",
      qualification: "MBBS, MD",
      image: "/images/Faculty/M Nadeem Zafar.png",
    },
    {
      name: "Dr. Prassan Vij",
      subject: "Physiology",
      qualification: "MBBS, MD",
      image: "/images/Faculty/Prassan Vij.png",
    },
    {
      name: "Dr. Pritesh Singh",
      subject: "Pathology",
      qualification: "MBBS, MD",
      image: "/images/Faculty/Pritesh Singh.png",
    },
    {
      name: "Dr. Priyansh Jain",
      subject: "Pharmacology",
      qualification: "MBBS, MD",
      image: "/images/Faculty/Priyansh Jain.png",
    },
    {
      name: "Dr. RAjiv Dhawan",
      subject: "Medicine",
      qualification: "MBBS, MD",
      image: "/images/Faculty/RAjiv Dhawan.png",
    },
    {
      name: "Dr. Salman Kamal",
      subject: "Surgery",
      qualification: "MBBS, MS",
      image: "/images/Faculty/Salman Kamal.png",
    },
     {
      name: "Dr. Sandeep Sharma",
      subject: "Medicine",
      qualification: "MBBS, MD",
      image: "/images/Faculty/Sandeep Sharma.png",
    },
    {
      name: "Dr. Sudha Seeharam",
      subject: "Surgery",
      qualification: "MBBS, MS",
      image: "/images/Faculty/Sudha Seeharam.png",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900"
           data-aos="fade-up">
            OUR FACULTY
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Faculty Grid */}
        <div className="container grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10 py-5">
          {faculty.map((member, index) => (
            <div key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            >
              <FacultyCard
              name={member.name}
              subject={member.subject}
              image={member.image}
            />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
