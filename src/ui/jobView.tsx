import Image, { StaticImageData } from "next/image";

export default function JobView({
  desc,
  dates,
  src,
  url
}: {
  desc: string,
  dates: string,
  src: StaticImageData
  url: string
}) {

  return (
    <a href={url} target="_blank" className="w-full">
      <div className="grid grid-cols-[85px_2fr_1fr] gap-2 w-full items-center place-items-center bg-slate-900 border-white border-[1px] rounded-lg hover-grow">
        <Image 
          className="rounded-tl-lg rounded-bl-lg"
          src={src}
          alt="Photo"
          width={200}
          height={200}
          loading="eager"
        ></Image>
        <div className="w-full">
            <p className="font-bold text-sm ml-2">{desc}</p>
        </div>
        <p className="text-xs mr-4">{dates}</p>
      </div>
    </a>
  );
}
