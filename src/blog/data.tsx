import { JSX } from "react";
import Blog1 from "./blog1";


export const data: Array<{
    url: string,
    title: string,
    desc: string,
    date: string,
    tags: Array<string>,
    blog: JSX.Element
}> = [
    {
        url: "blog1",
        title: "New Years Resolution Reflection",
        desc: "On the various regrets, lost opportunities, realizations and gains that I've had",
        date: "2 Feb 2025",
        tags: ["Reflection", "Improvement", "Goals"],
        blog: Blog1()
    }
]