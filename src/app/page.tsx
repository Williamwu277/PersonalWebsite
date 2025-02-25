'use client';
import { motion } from "framer-motion";
import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PageContext } from "../ui/providers";
import frontPage1 from "../assets/frontPage1.jpg";
import frontPage2 from "../assets/frontPage2.jpg";
import frontPage3 from "../assets/frontPage3.jpg";
import frontPage4 from "../assets/frontPage4.jpg";
import Image, { StaticImageData } from "next/image";



export default function Home() {
  const words: Array<string> = ["Welcome", "to ", "My ", "World."]
  const images: StaticImageData[] = [frontPage1, frontPage2, frontPage3, frontPage4];
  const router = useRouter();
  const [ clickable, setClickable ] = useState(false);
  const [ imgPaths, setImgPaths ] = useState<null[] | StaticImageData[]>([null, null, null, null]);
  const { toggleAnimation, toggleHandler } = useContext(PageContext);

  const pictureFrame = (
    <svg className="col-start-1 row-start-1 w-full h-full" viewBox="0 0 300 500" preserveAspectRatio="none">
      <rect x="10" y="10" width="280" height="480" fill="none" stroke="#312e81" strokeWidth="20" rx="0"/>
      <line x1="150" y1="10" x2="150" y2="490" stroke="#312e81" strokeWidth="20"/>
      <line x1="10" y1="170" x2="290" y2="170" stroke="#312e81" strokeWidth="20"/>
      <line x1="10" y1="330" x2="290" y2="330" stroke="#312e81" strokeWidth="20"/>
    </svg>
  )

  function handlePageTransition(){
    if(clickable){
      setClickable(false);
      toggleHandler();
      setTimeout(() => router.push("/about"), 2250);
    }
  }

  useEffect(() => {
    setTimeout(
      () => setImgPaths(images),
    2750);
  }, [images]);

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
      className={"flex flex-col gap-y-12 bg-indigo-900 w-full h-[100dvh] items-center place-content-center font-[family-name:var(--font-geist-sans)] "+(clickable?"cursor-pointer":"")}
    >
      <div className="grid grid-cols-2 md:grid-cols-[auto_auto_auto_auto] px-20 md:mt-10 gap-x-5 gap-y-5 place-items-center w-fit h-[250px] ">
        {
          imgPaths.map((v, index) => {
            if(toggleAnimation){
              return(
                <div key={index} className="grid grid-cols-1 grid-rows-1 w-[120px] h-[150px] md:w-[160px] md:h-[200px] lg:w-[200px] lg:h-[250px]">
                  <Image className="object-cover col-start-1 row-start-1 mx-auto w-11/12 h-11/12 rounded-t-[6rem]" src={images[index]} alt={"frontPage"+index} width={200} height={400} loading="eager" objectFit="contain"/>
                  {pictureFrame}
                </div>
              )
            }
            return (
              <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5, delay: (index+1)*0.5}}
                key={index} className="grid grid-cols-1 grid-rows-1 w-[120px] h-[150px] md:w-[160px] md:h-[200px] lg:w-[200px] lg:h-[250px]"
              >
                {
                  v == null ? 
                  <div className="object-cover col-start-1 row-start-1 w-11/12 h-11/12 mx-auto my-1 bg-indigo-200 rounded-t-[6rem]"/>
                  :
                  <Image className="object-cover col-start-1 row-start-1 mx-auto w-11/12 h-11/12 rounded-t-[6rem]" src={v} alt={"frontPage"+index} width={200} height={400} objectFit="contain"/>
                }
                {pictureFrame}
              </motion.div>
            )
          })
        }
      </div>
      <div className="flex flex-col w-full justify-center items-center mt-12 md:mt-0">
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
          className="w-[6rem] h-[2rem] md:w-[9rem] md:h-[3rem] mt-10 md:mt-0"
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


/*
<motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5 }}
                  >
                    <Image className="object-cover col-start-1 row-start-1 mx-auto w-11/12 h-11/12 rounded-t-[6rem]" src={v} alt={"frontPage"+index} width={200} height={400} objectFit="contain"/>
                  </motion.div>
                  */