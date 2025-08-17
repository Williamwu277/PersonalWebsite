export default function Emphasis( { children, href, currentTab } : { children: string, href: string, currentTab?: string } ) {
    return (
        <a 
            className="inline-block hover-grow emphasis"
            href={href}
            target={currentTab ? "_self" : "_blank"}
        >
            {children}
        </a>
    );
  }
  