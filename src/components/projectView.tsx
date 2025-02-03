import Image from "next/image";
import TagGroup from "./tagGroup";

export default function ProjectView( { name, src, link, tags } : { name: string, src: string, link: string, tags: Array<string> } ) {
    return (
        <a href={link} className="flex flex-col items-center max-w-sm w-full h-full border-4 rounded-lg border-blue-300 p-3 font-[family-name:var(--font-geist-mono)]">
            <div className="w-11/12 mb-0.5">
                <h1 className="">{name}</h1>
            </div>
            <hr className="w-full border-0.5 mb-3 border-blue-300 "></hr>
            <div className="grid grid-cols-[auto_auto] gap-4 w-11/12">
                <Image 
                    className="w-[7rem] h-[7rem] object-cover rounded-md mb-3"
                    src={src}
                    alt={name}
                    width={200}
                    height={200}
                />
                <p className="text-xs w-full">PEEPEE HWHSH dddd s s s AKSDHJFK DJSFLKDJ AFKLJADSKLJF KDJFLKJSD F</p>
            </div>
            <TagGroup tags={tags} />
        </a>
    );
  }
  