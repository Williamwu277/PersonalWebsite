'use client';
import { useState } from "react";

export default function AchievementView( 
    { title, description, achieve, date, link, importance } : 
    { title: string, description: string, achieve: string, date: string, link: string, importance: "Gold" | "Silver" } ) 
{   
    const [show, setShow] = useState(false);

    const color = (() => {
        if(importance === "Gold") return "border-sky-200 shadow-white border-[1px] bg-slate-700";
        else return "border-white shadow-white border-[1px]";
    })();

    function showHandler(){
        setShow(!show);
    }
    
    return (
        <div onClick={showHandler} className={`${color} shadow-sm hover:border-4 transition-all duration-300 flex flex-col cursor-pointer justify-center max-w-xl w-full h-full rounded-lg px-3 font-clean`}>
            <div className="px-1 py-3 grid grid-cols-auto md:grid-cols-[auto_100px_75px] gap-x-2">
                <p className={`text-sm`}>{title}</p>
                <p className="text-sm">{achieve}</p>
                <div className="flex md:justify-end w-full">
                    <p className="text-sm w-fit">{date}</p>
                </div>
            </div>
            <div className={`${show ? "max-h-40 opacity-100" : "max-h-0 opacity-0"} transition-all duration-1000 overflow-hidden`}>
                <p className="text-xs px-1 pb-3">{description} <a href={link} target="_blank">🔗</a></p>
            </div>
        </div>
    );
}
  