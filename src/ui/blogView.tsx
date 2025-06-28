'use client';
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";

type BlogViewProps = {
  url: string,
  title: string,
  date: string,
  image: StaticImageData
}

export default function BlogView({ url, title, date, image }: BlogViewProps) {

  // need to disable hover to remove rendering bug where border still exists after navigation
  const [hover, setHover] = useState(true);
  const router = useRouter();

  return (
    <Link
      onClick={
        (e) => {
          e.preventDefault();
          setHover(false);
          router.push(`/blog/${url}`, { scroll: true });
        }
      }
      href={`/blog/${url}`}
      className={`shadow-sm shadow-white flex flex-col items-center border-white border-[1px] w-full transform transition duration-300 ease-in-out ${hover ? 'hover:scale-105' : 'opacity-50'}`}
    >
      <Image 
        className="object-cover h-[10rem]"
        src={image}
        alt="Photo"
        width={600}
        height={200}
        loading="eager"
      />
      <div className="flex w-full justify-between border-white bg-slate-950 p-3">
        <p className="font-bold text-sm">{title}</p>
        <p className="text-sm">{date}</p>
      </div>
    </Link>
  );
}
