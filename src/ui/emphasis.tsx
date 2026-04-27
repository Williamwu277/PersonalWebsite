import Image, { StaticImageData } from "next/image";

export default function Emphasis( { children, href, currentTab, image } : { children: string, href: string, currentTab?: boolean, image?: StaticImageData} ) {
    return (
        <a 
            className="inline-block hover-grow emphasis"
            href={href}
            target={currentTab ? "_self" : "_blank"}
        >
            {image && <Image className="w-5 inline-block rounded-md mr-1" src={image} alt="Logo" width={200} height={200} />}
            {children}
        </a>
    );
  }
  