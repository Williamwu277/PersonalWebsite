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
    <div className="flex flex-col items-center max-w-xl w-full border-[1pt] border-white shadow-white shadow-sm font-clean hover-grow">
      <div className="flex flex-row bg-slate-900 justify-between w-full px-3 py-1">
        <div className="flex gap-2">
          <h1 className="font-black">{name}</h1>
          <TagGroup tags={announcements} invertStyle={true} />
        </div>
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
        className="border-y-[1px] border-white h-[10rem] object-cover mb-2"
        src={src}
        alt={name}
        width={600}
        height={200}
        loading="eager"
      />
      <div className="grid gap-4 w-full px-3 mb-1">
        <p className="text-xs w-full">{desc}</p>
      </div>
      <div className="pt-1 px-3 pb-3 w-full">
        <TagGroup tags={tags} />
      </div>
    </div>
  );
}
