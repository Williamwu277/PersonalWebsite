'use client';
import { motion } from "framer-motion";
import Link from "next/link";



export default function Home() {
  const firstPart: string = "Welcome to My ";
  const secondPart: string = "World."

  return (
    <div className="flex ml-5 mr-5 flex-col h-screen justify-center items-center font-[family-name:var(--font-geist-sans)]">
      <div>
        <h1 className="inline text-6xl lg:text-8xl font-extrabold">
          {
            firstPart.split('').map((letter, index) => (
              <motion.span
                key={index}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1}}
              >
                {letter}
              </motion.span>
            ))
          }
        </h1>
        {
          secondPart.split('').map((letter, index) => (
            <motion.span
              key={index}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.1, delay: (firstPart.length + index) * 0.1}}
            >
              <h1 className="inline text-6xl lg:text-8xl font-extrabold bg-indigo-900">{letter}</h1>
            </motion.span>
          ))
        }
      </div>
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 1, delay: 2.5}}
      >
        <Link href="/about"><button className="text-sm my-10 font-[family-name:var(--font-geist-mono)]">Explore →</button></Link>
      </motion.div>
    </div>
  );
}