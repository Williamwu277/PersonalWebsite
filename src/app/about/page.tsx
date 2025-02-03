import Image from "next/image";

export default function About() {
  return (
    <div className="my-16 mx-auto flex flex-col flex-wrap gap-3 justify-center items-center max-w-xl w-4/5 mb-20">
      <div className="w-11/12 font-[family-name:var(--font-geist-mono)]">
        <h1 className="text-4xl font-extrabold">About</h1>
      </div>
      <hr className="w-full h-0.25 border-blue-300 mb-1"></hr>
      <p className="w-11/12 text-sm mb-3 font-[family-name:var(--font-geist-sans)]">
        My name is William and I'm a CS student at the University of Waterloo. I'm passionate about CS
        because of its versatility—by thinking outside of the box and utilizing what I've learned, I can turn my ideas into reality.
        <br></br><br></br>
        While organizing competitive programming contests on DMOJ, I've deepened my knowledge in algorithms and 
        data-structures and sharpened my critical thinking. Moreover, by participating in a multitude
        of hackathons I've become proficient in various back-end technologies. More recently, I've been 
        building on my foundations by engineering and deploying full-stack applications.
        <br></br><br></br>
        Currently, I'm interested in exploring AI
        and seeking opportunities to apply my problem-solving and technical skills to real-world challenges.
      </p>
      <hr className="w-full h-0.25 border-blue-300 mb-1"></hr>
      <Image 
        className="rounded-lg max-w-[16rem] w-4/5 border-4 border-blue-300"
        src="/portfolioImage.png"
        alt="Photo"
        width={300}
        height={300}
      ></Image>
    </div>
  );
}
