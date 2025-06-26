import fs from 'fs';
import path from 'path'
import ReactMarkdown from 'react-markdown';
import { notFound } from "next/navigation";
import { index } from "../../../blog";
import { StaticImageData } from "next/image";

function getPostContent(slug: string){
  const filePath = path.join(process.cwd(), 'src/blog', `${slug}.md`);
  return fs.readFileSync(filePath, 'utf8');
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {

  const slug = (await params).slug;

  const pages: Array<{
    url: string,
    title: string,
    date: string,
    image: StaticImageData,
  }> = index;

  const exists: boolean = pages.some(page => page.url === slug);

  if (!exists) {
    return notFound();
  }

  const content = getPostContent(slug);

  return (
    <div className="my-28 mx-auto max-w-xl w-4/5 mb-20">
      <div className="prose prose-invert">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
