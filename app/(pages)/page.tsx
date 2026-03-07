'use client'
import Hero from "./_components/Hero";
import StatsSection from "./_components/StatsSection";
import CoursesSection from "./_components/CoursesSection";
import AboutUs from "./_components/AboutUs";
import GoogleReview from "../../components/shared/GoogleReview";
import Faqs from "./_components/FAQSection";
import FacilitiesSection from "./_components/FacilitiesSection";
import InstagramFeed from "./_components/InstagramFeed";

function page() {
  return (
    <div className="bg-white text-gray-800">
      <Hero />
      <AboutUs />
      <StatsSection />
      <InstagramFeed />
      {/* <CoursesSection /> */}
      <FacilitiesSection />
      <GoogleReview />
      <Faqs />

    </div>
  )
}

export default page
