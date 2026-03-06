"use client"
import HeroSection from "./_components/HeroSection"
import TimelineSection from "./_components/TimelineSection"
import Students from "./_components/Students"
import TestimonialSection from "./_components/TestimonialSection"
import CTASection from "./_components/CTASection"
import TopAchievers from "./_components/TopAchievers"
 
function page() {
  return (
    <div>
      <HeroSection />
      <TimelineSection />
      <TopAchievers />
      {/* <Students /> */}
      <TestimonialSection />
      <CTASection />
    </div>
  )
}

export default page
