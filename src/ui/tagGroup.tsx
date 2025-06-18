export default function TagGroup({ tags, invertStyle }: { tags: Array<string>, invertStyle?: boolean }) {
  return (
    <div className="flex flex-wrap gap-1 w-fit">
      {
        tags.map((t, index) =>
          <div
            key={index} 
            className={`flex border-2 rounded-lg min-w-12 px-2 w-fit h-fit text-xs justify-center shadow-sm shadow-white hover-grow
              ${invertStyle && ' bg-white text-slate-900 font-black '}`
          }>
            <p>{t}</p>
          </div>
        )
      }
    </div>
  );
}
