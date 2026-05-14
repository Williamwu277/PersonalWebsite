import { StaticImageData } from "next/image";
import blog1 from "../assets/blog1.jpg";

export const index: Array<{
    url: string,
    title: string,
    date: string,
    blogImages: Record<string, StaticImageData>
}> = [
    {
        url: "blog1",
        title: "Skdjgksjd gDdgd dgj g skdgj sagkjdlj dksjJSk",
        date: "14 May 2026",
        blogImages: {
            "blog1": blog1
        }
    },
    {
        url: "blog1",
        title: "End of Year One Reflection",
        date: "16 Aug 2025",
        blogImages: {
            "blog1": blog1
        }
    }
]