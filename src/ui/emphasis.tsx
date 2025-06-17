export default function Emphasis( { children, href } : { children: string, href: string } ) {
    return (
        <a 
            className="inline-block hover-grow text-blue-400 font-black underline underline-offset-4"
            href={href}
            target="_blank"
        >
            {children}
        </a>
    );
  }
  