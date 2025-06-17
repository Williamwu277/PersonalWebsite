'use client';
import { usePathname } from "next/navigation";
import { FileUser, Github, Linkedin } from "lucide-react";

export default function Footbar() {
  const pathname = usePathname();

  return (
    <div className={(pathname === "/" ? "" : "bg-slate-900 border-t-[1px] border-slate-400 ") + " z-30 fixed bottom-0 left-0 w-full pt-5 font-[family-name:var(--font-geist-mono)]"}>
      {/* Footbar links */}
      <div className="mb-3 flex gap-6 flex-wrap items-center justify-center text-xs">
        <a className="text-sm hover-grow" href="https://www.linkedin.com/in/williamwu277/" target="_blank">
          <Linkedin />
        </a>
        <a className="text-sm hover-grow" href="https://github.com/Williamwu277" target="_blank">
          <Github />
        </a>
        <a className="text-sm hover-grow" href="/ResumeWilliamE.pdf" target="_blank">
          <FileUser />
        </a>
      </div>
      {/* Copyright */}
      <div className="mb-1 flex flex-wrap items-center justify-center">
        <p className="text-gray-300 text-xs">© 2025 William Wu</p>
      </div>
    </div>
  );
}
