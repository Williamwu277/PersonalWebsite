import { notFound } from "next/navigation";
import { JSX } from "react";
import { data } from "../../../blog/data";


export default async function BlogPage({ params } :  { params: Promise<{ slug: string }> }) {

    const slug = (await params).slug;

    const pages: Array<{
        url: string,
        title: string,
        desc: string,
        date: string,
        tags: Array<string>,
        blog: JSX.Element
    }> = data;

    const renderedPage: {
        url: string,
        title: string,
        desc: string,
        date: string,
        blog: JSX.Element
    } | undefined = pages.find(page => page.url === slug);

    if(typeof renderedPage === "undefined"){
        return notFound();
    }

    return (
        <div className="my-16 mx-auto flex flex-col flex-wrap gap-3 justify-center items-center max-w-xl w-4/5 mb-20 font-clean">
        <div className="w-11/12">
            <h1 className="text-4xl font-extrabold">{renderedPage.title}</h1>
        </div>
        <hr className="w-full h-0.25 border-indigo-400 mb-1"></hr>
        <div className="grid grid-cols-1 md:grid-cols-[auto_100px] gap-5 w-11/12">
            <p className="text-sm">{renderedPage.desc}</p>
            <div className="flex md:justify-end">
                <p className="text-sm inline-block">
                {renderedPage.date}
                </p>
            </div>
        </div>
        <hr className="w-full h-0.25 border-indigo-400 mb-1"></hr>
        {renderedPage.blog}
        </div>
    );
}
