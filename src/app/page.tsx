'use client';
import { motion } from "framer-motion";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { PageContext } from "../components/providers";
import Image from "next/image";



export default function Home() {
  const words: Array<string> = ["Welcome", "to ", "My ", "World."]
  const router = useRouter();
  const [ clickable, setClickable ] = useState(false);
  const { toggleAnimation, toggleHandler } = useContext(PageContext);

  function handlePageTransition(){
    if(clickable){
      setClickable(false);
      toggleHandler();
      setTimeout(() => router.push("/about"), 2250);
    }
  }

  return (
    <>
    {toggleAnimation && (
      <motion.div 
        transition={{ duration: 2, ease: "easeInOut" }}
        initial={{ x: "100vw" }}
        animate={{ x: "-80vw" }}
      >
        <svg
          className="absolute z-50 w-[180vw] h-screen"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
        >
          <path d="M300,0 
                  C350,50 400,150 350,200 
                  C300,250 350,300 400,350 
                  C450,400 400,450 350,500 
                  C300,550 350,600 400,600 
                  L1000,600 L1000,0 Z" 
                fill="black"/>
        </svg>
      </motion.div>
    )}
    <div 
      onClick={handlePageTransition}
      className={"flex flex-col bg-indigo-900 w-full h-screen place-content-center font-[family-name:var(--font-geist-sans)] "+(clickable?"cursor-pointer":"")}
    >
      <div className="grid grid-cols-4 h-[350px]">

      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-wrap w-fit h-full col-span-6 gap-x-3 lg:gap-x-6 justify-center">
          {
            words.map((word, index) => {
              if(!toggleAnimation){
                return (
                <motion.h1
                  key={index}
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.5}}
                  onAnimationComplete={
                    () => {
                      if(index==3) setClickable(true);
                    }
                  }
                  className={(index==3?"text-indigo-400 ":"")+"text-6xl lg:text-[86px] font-extrabold"}
                >
                  {word}
                </motion.h1>);
              }
              return <h1 key={index} className={(index==3?"text-indigo-400 ":"")+"text-6xl lg:text-[86px] font-extrabold"}>{word}</h1>
            })
          }
        </div>
        
        <Image 
          className="w-[9rem] h-[3rem] md:w-[16rem] md:h-[5rem] pl-[2rem]"
          src={"/portfolioName.png"}
          alt={"WilliamWu"}
          width={200}
          height={200}
        />
      </div>
    </div>
    </>
  );
}
