import Link from "next/link";
import TagGroup from "../../ui/tagGroup";
import { JSX } from "react";
import { data } from "../../blog/data";

export default function Blog() {

  const pages: Array<{
    url: string,
    title: string,
    desc: string,
    date: string,
    tags: Array<string>,
    blog: JSX.Element
  }> = data;

  return (
    <div className="my-28 mx-auto flex flex-col flex-wrap gap-3 justify-center items-center max-w-xl w-4/5 mb-20 font-clean">
      <div className="w-11/12">
        <h1 className="text-4xl font-extrabold">Blog</h1>
      </div>
      <hr className="w-full h-0.25 border-indigo-400 mb-1"></hr>
      <div className="flex w-11/12">
        <p className="text-sm inline-block">
          Here are some of my thoughts on various unrelated topics. These may include reflections,
          Computer Science proofs, feelings about my projects or even cooking recipes I have fooled around with.
        </p>
      </div>
      <hr className="w-full h-0.25 border-indigo-400 mb-1"></hr>
      {
        pages.map((page, index) => (
          <Link href={"/blog/" + page.url} key={index} className="grid grid-cols-1 md:grid-cols-[auto_auto] border-4 border-indigo-400 rounded-lg w-full p-3">
            <p className="font-bold text-sm">{page.title}</p>
            <div className="flex w-full md:justify-end">
              <p className="text-sm">{page.date}</p>
            </div>
            <hr className="w-full border-0.5 mb-2 border-indigo-400 col-span-2"></hr>
            <p className="text-xs col-span-2 mb-2">{page.desc}</p>
            <TagGroup tags={page.tags}/>
          </Link>
        ))
      }
    </div>
  );
}
