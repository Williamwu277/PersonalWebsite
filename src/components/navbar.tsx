import Link from "next/link";

export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full font-[family-name:var(--font-geist-mono)]">
        <div className="mt-5 flex gap-6 flex-wrap items-center justify-center text-sm">
            <Link className="hover:underline" href="/about">About</Link>
            <Link className="hover:underline" href="/projects">Projects</Link>
            <Link className="hover:underline" href="/achievements">Achievements</Link>
            <Link className="hover:underline" href="/blog">Blog</Link>
        </div>
    </div>
  );
}
