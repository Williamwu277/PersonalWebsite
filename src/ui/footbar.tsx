'use client';
import { usePathname } from "next/navigation";
import { FileUser, Github, Linkedin, Twitter } from "lucide-react";

export default function Footbar() {
  const pathname = usePathname();

  return (
    <div className={(pathname === "/" ? "" : "bg-slate-900 border-t-[1px] border-slate-400 ") + " z-30 fixed bottom-0 left-0 w-full pt-5 font-[family-name:var(--font-geist-mono)]"}>
      {/* Footbar links */}
      <div className="mb-3 flex gap-6 flex-wrap items-center justify-center text-xs">
        <a className="hover-grow" href="https://www.linkedin.com/in/williamwu277/" target="_blank" aria-label="LinkedIn">
          <Linkedin />
        </a>
        <a className="hover-grow" href="https://github.com/Williamwu277" target="_blank" aria-label="GitHub">
          <Github />
        </a>
        {/* CS Webring */}
        <div className="flex items-center gap-2">
          <a className="hover-grow text-xl" href='https://cs.uwatering.com/#williamwu277.ca?nav=prev'>←</a>
          <a className="hover-grow" href='https://cs.uwatering.com/#williamwu277.ca' target='_blank'>
            <img
              src='https://cs.uwatering.com/icon.white.svg'
              alt='CS Webring'
              className="w-8 h-auto"
            />
          </a>
          <a className="hover-grow text-xl" href='https://cs.uwatering.com/#williamwu277.ca?nav=next'>→</a>
        </div>
        <a className="hover-grow" href="/ResumeWilliam.pdf" target="_blank" aria-label="Resume">
          <FileUser />
        </a>
        <a className="hover-grow" href="https://x.com/cawwwie" target="_blank" aria-label="Twitter">
          <Twitter />
        </a>
      </div>
      {/* Copyright */}
      <div className="mb-1 flex flex-wrap items-center justify-center">
        <p className="text-gray-300 text-xs">© 2025 William Wu</p>
      </div>
    </div>
  );
}
