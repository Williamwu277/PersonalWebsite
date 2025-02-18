'use client';
import { useState } from "react";

export default function AchievementView( 
    { title, description, achieve, date, link, importance } : 
    { title: string, description: string, achieve: string, date: string, link: string, importance: "Gold" | "Silver" | "Bronze" } ) 
{   

    const [show, setShow] = useState(false);

    function showHandler(){
        setShow(!show);
    }

    function showDescription(){
        if(show){
            return (
                <p className="text-xs md:col-span-3 mt-1">{description} <a href={link} target="_blank">🔗</a></p>
            );
        }
    }

    let color: string = "";
    if(importance === "Gold"){
        color = "border-yellow-400 ";
    }else if(importance === "Silver"){
        color = "border-gray-300 ";
    }else{
        color = "border-yellow-900 ";
    }

    return (
        <div onClick={showHandler} className={color + "grid grid-cols-auto md:grid-cols-[auto_100px_75px] gap-x-2 cursor-pointer max-w-xl w-full h-full border-2 rounded-lg py-1 px-3 on font-[family-name:var(--font-geist-mono)]"}>
            <p className="text-sm font-bold">{title}</p>
            <p className="text-sm">{achieve}</p>
            <div className="flex md:justify-end w-full">
                <p className="text-sm w-fit">{date}</p>
            </div>
            {showDescription()}
        </div>
    );
}
  