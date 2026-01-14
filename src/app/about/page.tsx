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
                Hi there! I&apos;m William, and this is a short summary of what I&apos;ve been up to:
                <ul className="list-disc w-11/12 text-sm mb-2 mt-3 ml-8 space-y-1">
                    <li>
                        Second year studying Computer Science at <Emphasis href="https://uwaterloo.ca">U of Waterloo</Emphasis>
                    </li>
                    <li>
                        Co-Director of the autonomous Rover Team in <Emphasis href="https://www.watonomous.ca">Watonomous</Emphasis>
                    </li>
                </ul>
                Previously,
                <ul className="list-disc w-11/12 text-sm mb-2 mt-3 ml-8 space-y-1">
                    <li>
                        Software Engineering at <Emphasis href="https://www.leapap.com">LeapAP</Emphasis>, where I worked on web-scrapers
                    </li>
                    <li>
                        Competitive programming contest organizer on <Emphasis href="https://dmoj.ca">DMOJ</Emphasis> with 9 organized contests, 12 original problems authored, and 13,000+ solution attempts
                    </li>
                    <li>
                        Avid hackathon participant with 15+ hackathons and 3 wins
                    </li>
                </ul>
                Side questing / hobbies:
                <ul className="list-disc w-11/12 text-sm mb-2 mt-3 ml-8 space-y-1">
                    <li>
                        Teamfight Tactics, basketball, gym, food and reading
                    </li>
                </ul>
                You can take a look at my <Link href="/projects" className="inline-block hover-grow emphasis">projects</Link>, <Link href="/timeline" className="inline-block hover-grow emphasis">timeline</Link>, or <Emphasis href="/ResumeWilliam.pdf">resume</Emphasis> for 
                more details and contact info. Don&apos;t hesitate to reach out!
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
