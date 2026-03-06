'use client'
import Top10Slider from "./Top10Slider"

const topStudent2026 = [
  { name: "Rahul Sharma", marks: "235", image: "/images/DrJazeer.jpg" },
  { name: "Priya Verma", marks: "228", image: "/images/DrJazeer.jpg" },
  { name: "Aman Gupta", marks: "221", image: "/images/DrJazeer.jpg" },
  { name: "Sneha Mehta", marks: "218", image: "/images/DrJazeer.jpg" },
  { name: "Karan Singh", marks: "215", image: "/images/DrJazeer.jpg" },
  { name: "Anjali Rao", marks: "210", image: "/images/DrJazeer.jpg" },
  { name: "Rohit Jain", marks: "205", image: "/images/DrJazeer.jpg" },
  { name: "Simran Kaur", marks: "202", image: "/images/DrJazeer.jpg" },
  { name: "Vikas Yadav", marks: "200", image: "/images/DrJazeer.jpg" },
  { name: "Neha Patel", marks: "198", image: "/images/DrJazeer.jpg" },
];

const topStudent2025 = [
  { name: "Rahul Sharma", marks: "235", image: "/images/DrJazeer.jpg" },
  { name: "Priya Verma", marks: "228", image: "/images/DrJazeer.jpg" },
  { name: "Aman Gupta", marks: "221", image: "/images/DrJazeer.jpg" },
  { name: "Sneha Mehta", marks: "218", image: "/images/DrJazeer.jpg" },
  { name: "Karan Singh", marks: "215", image: "/images/DrJazeer.jpg" },
  { name: "Anjali Rao", marks: "210", image: "/images/DrJazeer.jpg" },
  { name: "Rohit Jain", marks: "205", image: "/images/DrJazeer.jpg" },
  { name: "Simran Kaur", marks: "202", image: "/images/DrJazeer.jpg" },
  { name: "Vikas Yadav", marks: "200", image: "/images/DrJazeer.jpg" },
  { name: "Neha Patel", marks: "198", image: "/images/DrJazeer.jpg" },
];

const topStudent2024 = [
  { name: "Rahul Sharma", marks: "235", image: "/images/DrJazeer.jpg" },
  { name: "Priya Verma", marks: "228", image: "/images/DrJazeer.jpg" },
  { name: "Aman Gupta", marks: "221", image: "/images/DrJazeer.jpg" },
  { name: "Sneha Mehta", marks: "218", image: "/images/DrJazeer.jpg" },
  { name: "Karan Singh", marks: "215", image: "/images/DrJazeer.jpg" },
  { name: "Anjali Rao", marks: "210", image: "/images/DrJazeer.jpg" },
  { name: "Rohit Jain", marks: "205", image: "/images/DrJazeer.jpg" },
  { name: "Simran Kaur", marks: "202", image: "/images/DrJazeer.jpg" },
  { name: "Vikas Yadav", marks: "200", image: "/images/DrJazeer.jpg" },
  { name: "Neha Patel", marks: "198", image: "/images/DrJazeer.jpg" },
];

const topStudent2023 = [
  { name: "Rahul Sharma", marks: "235", image: "/images/DrJazeer.jpg" },
  { name: "Priya Verma", marks: "228", image: "/images/DrJazeer.jpg" },
  { name: "Aman Gupta", marks: "221", image: "/images/DrJazeer.jpg" },
  { name: "Sneha Mehta", marks: "218", image: "/images/DrJazeer.jpg" },
  { name: "Karan Singh", marks: "215", image: "/images/DrJazeer.jpg" },
  { name: "Anjali Rao", marks: "210", image: "/images/DrJazeer.jpg" },
  { name: "Rohit Jain", marks: "205", image: "/images/DrJazeer.jpg" },
  { name: "Simran Kaur", marks: "202", image: "/images/DrJazeer.jpg" },
  { name: "Vikas Yadav", marks: "200", image: "/images/DrJazeer.jpg" },
  { name: "Neha Patel", marks: "198", image: "/images/DrJazeer.jpg" },
];
function TopAchievers() {


  return (
    <section className="bg-blue-50 pt-5">
    {/* Heading */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-600 tracking-wide hover:text-blue-900 transition">
              SUCCESS STORY
            </h1>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
          </div>
    
        
        <div>
      <section id="fmge2026"><Top10Slider students={topStudent2026} title="Top 10 FMGE Achievers 2026" /></section>
      <section id="fmge2025"><Top10Slider students={topStudent2025} title="Top 10 FMGE Achievers 2025" /></section>
      <section id="fmge2024"> <Top10Slider students={topStudent2024} title="Top 10 FMGE Achievers 2024"/></section>
      <section id="fmge2023"><Top10Slider students={topStudent2023} title="Top 10 FMGE Achievers 2023"/></section>
    </div>
    </section>
  )
}

export default TopAchievers
