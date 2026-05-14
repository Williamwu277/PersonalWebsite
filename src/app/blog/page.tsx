import BlogView from "../../ui/blogView";
import { index } from "../../blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog"
};

export default function Blog() {

    const pages: Array<{
        url: string,
        title: string,
        date: string,
    }> = index;

    return (
        <div className="my-28 mx-auto flex flex-col flex-wrap gap-1 justify-center items-center max-w-xl w-11/12 mb-24 font-clean">
            {
                pages.map((page, index) => (
                    <BlogView
                        key={index}
                        url={page.url}
                        title={page.title}
                        date={page.date}
                    />
                ))
            }
        </div>
    );
}
