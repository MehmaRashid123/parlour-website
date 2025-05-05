import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Nav2 from "@/components/Nav2";
import Navbar from "@/components/Navbar";
import Packages from "@/components/Packages";
import Services from "@/components/Services";
import Link from "next/link";

export default function Home() {
  return (
    <div>
    <Navbar/>
    <Nav2/>
    <Hero/>
    <h2 className='text-white bg-black flex justify-center font-[Montserrat] font-extrabold text-7xl p-15'>Services</h2>
    <Services/>
    <Packages/>
    <Gallery/>
    <h2 className='text-white bg-black flex justify-center font-[Montserrat] font-extrabold text-7xl p-15'>Contact Us</h2>
    <Contact/>
    <br />
   
    </div>
  );
}
