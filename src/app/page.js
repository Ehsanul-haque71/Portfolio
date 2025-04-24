import Image from "next/image";
import Hero from "./Component/Hero";
import Specialties from "./Component/Specialties";
import Resume from "./Component/Resume";
import Recent from "./Component/Recent";
import Testimonial from "./Component/Testimonial";
import Ads from "./Component/Ads";
import Blog from "./Component/Blog";


export default function Home() {
  return (
    <div>
      <Hero />
      <Specialties />
      <Resume />
      <Recent />
      <Testimonial />
      <Ads/>
      <Blog/>
    </div>
  );
}
