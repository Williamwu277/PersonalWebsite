export default function TagGroup({ important, tags }: { important: Array<string>, tags: Array<string> }) {
  return (
    <div className="flex flex-wrap gap-1 w-fit">
      {
        important.map((t, index) => 
          <div
            key={index}
            className={`flex border-2 rounded-lg min-w-12 px-2 w-fit h-fit text-xs justify-center shadow-sm shadow-white hover-grow bg-white text-slate-900 font-black`}>
            <p>{t}</p>
          </div>
        )
      }
      {
        tags.map((t, index) =>
          <div
            key={index}
            className={`flex border-2 rounded-lg min-w-12 px-2 w-fit h-fit text-xs justify-center shadow-sm shadow-white hover-grow`}>
            <p>{t}</p>
          </div>
        )
      }
    </div>
  );
}
