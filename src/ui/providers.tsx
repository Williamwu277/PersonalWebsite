'use client';
import Navbar from "./navbar";
import Footbar from "./footbar";
import { createContext, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

type PageContextType = {
    toggleAnimation: boolean;
    toggleHandler: () => void;
    disableNav: boolean;
    toggleDisableNav: (state : boolean) => void;
}

export const PageContext = createContext<PageContextType>({
    toggleAnimation: false, 
    toggleHandler: () => {},
    disableNav: true,
    toggleDisableNav: () => {},
});

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    
    const [ toggleAnimation, setToggleAnimation ] = useState(false);
    const [ disableNav, setDisableNav ] = useState(true);
    const pathname = usePathname();

    function toggleHandler() {
        setToggleAnimation(!toggleAnimation);
    }

    function toggleDisableNav(state : boolean){
        setDisableNav(state);
    }

    return (
        <>
            <PageContext.Provider value={{toggleAnimation, toggleHandler, disableNav, toggleDisableNav}}>
                <Navbar />
                {
                    toggleAnimation && pathname !== "/" ? 
                    <motion.div 
                        initial={{opacity: 0 }}
                        animate={{opacity: 1}}
                        transition={{duration: 1}}
                        onAnimationComplete={() => toggleHandler()}
                    >
                        {children}
                    </motion.div>
                    :
                    children
                }
                <Footbar/>
            </PageContext.Provider>
        </>
    );
}
