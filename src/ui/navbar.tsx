'use client';
import Link from "next/link";
import { Power } from 'lucide-react';
import { PageContext } from "./providers";
import { useContext, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";


export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { toggleHandler, disableNav, toggleDisableNav } = useContext(PageContext);
  const sections = ["About", "Projects", "Timeline", "Blog"];

  useEffect(() => {
    setTimeout(() => {
      toggleDisableNav(false);
    }, 3500);
  }, []);

  return (
    <div className={`z-20 flex justify-center fixed top-0 left-0 w-full font-clean ${pathname === "/" ? "" : "bg-slate-900 border-b-[1px] border-slate-600"}`}>
      <div className={`hover-grow flex shadow-md shadow-slate-600 w-fit py-3 px-6 border-white border-[1px] rounded-3xl my-5 gap-6 flex-wrap items-center justify-center text-sm
        ${disableNav ? " opacity-50 pointer-events-none " : "" }`
      }>
        <Link 
          href="/"
          onClick={() => {
            if(pathname !== "/"){
              toggleDisableNav(true);
              setTimeout(() => toggleDisableNav(false), 3000);
            }
          }}
        >
          <Power className="hover-grow" />
        </Link>
        {
          sections.map((v, index) => {
            return (
              <Link
                key={index}
                onClick={(e) => {
                  if (pathname === "/") {
                    e.preventDefault();
                    toggleHandler();
                    toggleDisableNav(true);
                    setTimeout(() => router.push(`/${v.toLowerCase()}`), 3000);
                    setTimeout(() => toggleDisableNav(false), 3500);
                  }
                }}
                className="hover-grow" 
                href={`/${v.toLowerCase()}`}>{v}</Link>
            );
          })
        }
      </div>
    </div>
  );
}
