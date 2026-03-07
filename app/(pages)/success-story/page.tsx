"use client"
import HeroSection from "./_components/HeroSection"
import TimelineSection from "./_components/TimelineSection"
import Students from "./_components/Students"
import CTASection from "./_components/CTASection"
import TopAchievers from "./_components/TopAchievers"
import GoogleReview from "@/components/shared/GoogleReview"
 
function page() {
  return (
    <div>
      <HeroSection />
      <TimelineSection />
      <TopAchievers />
      {/* <Students /> */}
      <GoogleReview />
      <CTASection />
    </div>
  )
}

export default page
