"use client"
import Hero from "./_components/about-hero"
import AboutSection from "./_components/AboutSection"
import AimObjective from "./_components/AimObjective"
import MissionVision from "./_components/MissionVision"
import SpecialitiesServices from "./_components/SpecialitiesServices"
import OurBranches from "./_components/OurBranches"
import BranchCard from "./_components/BranchCard"

function page() {
  return (
    <div  className="w-full max-w-8xl mx-auto overflow-hidden">
      <Hero />
      <AboutSection />
      <AimObjective />
      <MissionVision />
      <SpecialitiesServices />
      {/* <OurBranches /> */}
      <BranchCard />
    </div>
  )
}

export default page
