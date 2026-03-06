"use client";
import {
  BookOpen,
  Leaf,
  Bus,
  Wallet,
  Users,
  GraduationCap,
  FileText,
  ClipboardCheck,
  RefreshCcw,
  Smartphone,
  TrendingUp
} from "lucide-react";

export default function FeaturesSection() {

  const whyChoose = [
    { text: "Better study environment", icon: BookOpen },
    { text: "Pollution-free area", icon: Leaf },
    { text: "Easy transportation", icon: Bus },
    { text: "Budget-friendly living", icon: Wallet },
    { text: "Supportive team and management", icon: Users }
  ];

  const BestforFMGE = [
    { text: "Best combination of faculties", icon: GraduationCap },
    { text: "Concise workbooks", icon: FileText },
    { text: "Subject-wise & monthly tests", icon: ClipboardCheck },
    { text: "Revisions and test series", icon: RefreshCcw },
    { text: "Dedicated Arise  Jaipur App", icon: Smartphone },
    { text: "High passing percentage", icon: TrendingUp }
  ];

  return (
    <section className="py-10 bg-gray-100">
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-blue-800">
          Arise Medical Academy Jaipur Facilities
        </h3>
        <p className="text-gray-500 mt-4">
          There are many reasons to choose Arise Medical Academy Jaipur
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 text-gray-600 mt-8">

        {/* Left Section */}
        <div className="mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Why Choose Arise Jaipur?
          </h3>

          {whyChoose.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 mb-3 bg-white ps-5 p-3 rounded-xl 
             shadow-md hover:shadow-xl 
             hover:-translate-y-1 
             hover:bg-blue-50 
             transition-all duration-300 ease-in-out cursor-pointer
              border-s-4 border-blue-700"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <Icon className="text-gray-600 w-5 h-5 transition-colors duration-300 group-hover:text-blue-600" />
                <span className="transition-colors duration-300">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* Right Section */}
        <div className="mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Why Arise Jaipur is Best for FMGE?
          </h3>

         {BestforFMGE.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 mb-3 bg-white ps-5 p-3 rounded-xl 
             shadow-md hover:shadow-xl 
             hover:-translate-y-1 
             hover:bg-blue-50 
             transition-all duration-300 ease-in-out cursor-pointer
              border-s-4 border-blue-700"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <Icon className="text-gray-600 w-5 h-5 transition-colors duration-300 group-hover:text-blue-600" />
                <span className="transition-colors duration-300">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}