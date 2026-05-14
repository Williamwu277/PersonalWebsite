'use client';
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

type BlogViewProps = {
  url: string,
  title: string,
  date: string,
}

export default function BlogView({ url, title, date }: BlogViewProps) {

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
      className={`flex flex-col items-center w-full transform transition duration-300 ease-in-out ${hover ? 'hover:underline hover:decoration-2 hover:underline-offset-2 hover:scale-[1.02]' : 'opacity-50'}`}
    >
      <div className="flex w-full items-end p-1">
        <p className="font-bold text-sm">{title}</p>
        <span className="mb-1 mx-2 h-[2px] flex-1 bg-[radial-gradient(circle,currentColor_1px,transparent_1px)] bg-[length:8px_1px]" />
        <p className="text-sm">{date}</p>
      </div>
    </Link>
  );
}
