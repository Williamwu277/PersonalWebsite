import Image, { StaticImageData } from "next/image";
import TagGroup from "./tagGroup";

export default function ProjectView( { name, desc, src, link, tags } : { name: string, desc: string, src: StaticImageData, link: string, tags: Array<string> } ) {
    return (
        <a href={link} target="_blank" className="flex flex-col items-center max-w-sm w-full h-full border-4 rounded-lg border-indigo-400 p-3 font-clean">
            <div className="w-11/12 mb-0.5">
                <h1 className="">{name}</h1>
            </div>
            <hr className="w-full border-0.5 mb-3 border-indigo-400 "></hr>
            <div className="grid grid-cols-[auto_auto] gap-4 w-11/12 mb-1">
                <Image 
                    className="w-[7rem] h-[7rem] object-cover rounded-md mb-3 border-white border-2"
                    src={src}
                    alt={name}
                    width={200}
                    height={200}
                    loading="eager"
                />
                <p className="text-xs w-full">{desc}</p>
            </div>
            <TagGroup tags={tags} />
        </a>
    );
  }
  