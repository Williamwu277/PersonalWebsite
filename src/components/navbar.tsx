'use client';
import Link from "next/link";
import { PageContext } from "../components/providers";
import { useContext } from "react";
import { useRouter, usePathname } from "next/navigation";


export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { toggleAnimation, toggleHandler } = useContext(PageContext);

  return (
    <div className="z-20 absolute top-0 left-0 w-full font-[family-name:var(--font-geist-mono)]">
        <div className="mt-5 flex gap-6 flex-wrap items-center justify-center text-sm">
            <Link 
              onClick={(e) => {
                if(pathname === "/"){
                  e.preventDefault();
                  toggleHandler();
                  setTimeout(() => router.push("/about"), 2250);
                }
              }}
              className="hover:underline" href="/about">About</Link>
            <Link 
              onClick={(e) => {
                if(pathname === "/"){
                  e.preventDefault();
                  toggleHandler();
                  setTimeout(() => router.push("/projects"), 2250);
                }
              }}
              className="hover:underline" href="/projects">Projects</Link>
            <Link className="hover:underline" href="/achievements">Achievements</Link>
            <Link className="hover:underline" href="/blog">Blog</Link>
        </div>
    </div>
  );
}
