import type { Metadata } from "next";
import Image from "next/image";
import Emphasis from "../../ui/emphasis";
import profileImage from "../../assets/portfolioImage.jpg";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Me"
};

export default function About() {
    return (
        <div className="my-28 mx-auto flex flex-col flex-wrap gap-3 justify-center items-center max-w-xl w-4/5 mb-20 font-clean">

            <p className="w-11/12 text-sm mb-1">
                I&apos;m currently a 2nd year CS student at <Emphasis href="https://uwaterloo.ca">UWaterloo</Emphasis> and
                Software Engineer Co-op at <Emphasis href="https://www.leapap.com">LeapAP</Emphasis>, where I work on web-scrapers.
                Lately, I&apos;ve been delving into the world of autonomous software as part of the Rover team in <Emphasis href="https://www.watonomous.ca">Watonomous</Emphasis>.
                I&apos;m also currently developing an EdTech project to accelerate the learning process.
                <br></br><br></br>
                Previously, I was an avid competitive programmer. I&apos;ve organized 9 programming contests on <Emphasis href="https://dmoj.ca">DMOJ</Emphasis> and achieved certain milestones such as Platinum on the USACO.
                I&apos;ve also participated in 15+ hackathons, with 3 wins at hackathons such as DeltaHacks and YrHacks. You can take a look at
                my <Link href="/projects" className="inline-block hover-grow emphasis">projects</Link>, <Link href="/timeline" className="inline-block hover-grow emphasis">timeline</Link>, or <Emphasis href="/ResumeWilliam.pdf">resume</Emphasis> for more details.
                <br></br><br></br>
                In the future, I plan to explore topics such as AI applications, finance, and backend technologies. I&apos;m seeking opportunities to apply my problem-solving skills to real-world challenges, so feel free to reach out!
            </p>
            <hr className="w-full h-0.25 border-slate-400 mb-1"></hr>
            <Image
                className="mb-4 max-w-[16rem] w-4/5 border-4 border-white"
                src={profileImage}
                alt="Photo"
                width={300}
                height={300}
                loading="eager"
            ></Image>
        </div>
    );
}
