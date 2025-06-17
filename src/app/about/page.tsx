'use client';
import Image from "next/image";
import Emphasis from "../../ui/emphasis";
import profileImage from "../../assets/portfolioImage.jpg";


export default function About() {
  return (
    <div className="my-32 mx-auto flex flex-col flex-wrap gap-3 justify-center items-center max-w-xl w-4/5 mb-20 font-clean">
      
      <p className="w-11/12 text-sm mb-3">
        Hello! My name is William. I&apos;m currently a CS student at <Emphasis href="https://uwaterloo.ca">UWaterloo</Emphasis> and 
         Software Developer Co-op at <Emphasis href="https://www.leapap.com">LeapAP</Emphasis>. 
        <br></br><br></br>
        Lately, I&apos;ve been delving into the world of autonomous software as part of the Rover subteam in <Emphasis href="https://www.watonomous.ca">Watonomous</Emphasis>.
        Additionally, my experience organizing programming contests on <Emphasis href="https://dmoj.ca">DMOJ</Emphasis> has enhanced my knowledge of algorithms and data structures.
        Moreover, by building personal web applications and participating in a multitude of hackathons, I&apos;ve become proficient in various full-stack technologies.
        <br></br><br></br>
        At this moment, I&apos;m exploring AI and seeking further opportunities to apply my problem-solving skills to the real-world.
        In my free time, I enjoy food, books and basketball.
      </p>
      <hr className="w-full h-0.25 border-slate-400 mb-1"></hr>
      <Image 
        className="max-w-[16rem] w-4/5 border-[1px] border-white"
        src={profileImage}
        alt="Photo"
        width={300}
        height={300}
        loading="eager"
      ></Image>
    </div>
  );
}
