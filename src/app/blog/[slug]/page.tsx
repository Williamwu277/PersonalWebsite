import fs from 'fs';
import path from 'path'
import ReactMarkdown from 'react-markdown';
import { notFound } from "next/navigation";
import { index } from "../../../blog";
import { StaticImageData } from "next/image";
import Image from "next/image";

type page = {
    url: string,
    title: string,
    date: string,
    image: StaticImageData,
    blogImages: Record<string, StaticImageData>
}

function getPostContent(slug: string) {
    const filePath = path.join(process.cwd(), 'src/blog', `${slug}.md`);
    return fs.readFileSync(filePath, 'utf8');
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {

    const slug = (await params).slug;

    const pages: Array<page> = index;

    const currentPage: page | undefined = pages.find(page => page.url === slug);

    if (!currentPage) {
        return notFound();
    }

    const content = getPostContent(slug);

    return (
        <div className="my-[122px] mx-auto max-w-xl w-4/5 mb-24">
            <div className="prose prose-invert prose-hr:m-3 font-clean text-sm">
                <ReactMarkdown
                    components={{
                        img: ({ src, alt }) => {
                            // Map Markdown src to imported image
                            if(currentPage.blogImages[src as keyof typeof currentPage.blogImages]) {
                                return <Image src={currentPage.blogImages[src as keyof typeof currentPage.blogImages]} alt={alt || ""} width={800} height={400} loading="lazy" />;
                            }
                            return <img src={src} alt={alt} />;
                        },
                    }}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </div>
    );
}
