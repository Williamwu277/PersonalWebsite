import { Github, ExternalLink } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import TagGroup from "./tagGroup";

type ProjectViewProps = {
  name: string;
  desc: string;
  src: StaticImageData;
  github: string;
  links: string[];
  announcements: string[];
  tags: string[];
};

export default function ProjectView({ name, desc, src, github, links, announcements, tags }: ProjectViewProps) {
  return (
    <div className="flex flex-col items-center max-w-xl w-full font-clean hover-grow border-white border-2">
      <div className="bg-slate-950 flex flex-row justify-between w-full px-3 py-1">
        <h1 className="font-black">{name}</h1>
        <div className="flex gap-2">
          <a href={github} target="_blank"><Github className="hover-grow"/></a>
          {
            links.map((v, index) => {
              return (
                <a key={index} href={v} target="_blank"><ExternalLink className="hover-grow"/></a>
              );
            })
          }
        </div>
      </div>
      <Image
        className="border-y-[1px] border-white h-[12rem] object-cover mb-2"
        src={src}
        alt={name}
        width={600}
        height={200}
        loading="eager"
      />
      <div className="grid gap-4 w-full px-3 mb-1">
        <p className="text-xs w-full">{desc}</p>
      </div>
      <div className="flex flex-row pt-1 gap-1 px-3 pb-3 w-full">
        <TagGroup important={announcements} tags={tags} />
      </div>
    </div>
  );
}
