import BlogView from "../../ui/blogView";
import { index } from "../../blog";
import { StaticImageData } from "next/image";

export default function Blog() {

  const pages: Array<{
    url: string,
    title: string,
    date: string,
    image: StaticImageData
  }> = index;

  return (
    <div className="my-28 mx-auto flex flex-col flex-wrap gap-3 justify-center items-center max-w-xl w-4/5 mb-20 font-clean">
      {
        pages.map((page, index) => (
          <BlogView
            key={index}
            url={page.url}
            title={page.title}
            date={page.date}
            image={page.image}
          />
        ))
      }
    </div>
  );
}
