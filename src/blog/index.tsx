import { StaticImageData } from "next/image";
import blog1 from "../assets/blog1.jpg";

export const index: Array<{
    url: string,
    title: string,
    date: string,
    image: StaticImageData,
    blogImages: Record<string, StaticImageData>
}> = [
    {
        url: "blog1",
        title: "End of Year One Reflection",
        date: "16 Aug 2025",
        image: blog1,
        blogImages: {
            "blog1": blog1
        }
    }
]