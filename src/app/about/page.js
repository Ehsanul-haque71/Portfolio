import React from 'react'
import AboutMe from './_components/AboutMe'
import Vision from './_components/Vision'
import ResumeAll from './_components/ResumeAll';
import TestimonialMe from './_components/TestimonialMe';
import AdsMe from "./_components/AdsMe";

const About = () => {
  return (
    <div>
      <AboutMe/>
      <Vision/>
      <ResumeAll/>
      <TestimonialMe />
      <AdsMe/>
    </div>
  )
}

export default About
