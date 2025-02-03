import Image from "next/image";

export default function TagGroup( { tags } : { tags: Array<string> } ) {
    return (
        <div className="flex flex-wrap gap-1 w-full">
            {
                tags.map((t, index) => 
                    <div key={index} className="flex border-2 rounded-lg min-w-12 px-2 w-fit h-fit text-xs justify-center" >
                        <p>{t}</p>
                    </div>
                )
            }
        </div>
    );
  }
  