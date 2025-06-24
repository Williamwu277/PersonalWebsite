export default function YearView({
  year,
  achievements,
}: {
  year: string;
  achievements: string[];
}) {

  return (
    <div className="grid grid-cols-[50px_1fr] h-fit">
      <div className="sticky top-0 h-fit">
        <p className="bg-yellow-300">
          {year}
        </p>
      </div>
      <div className="flex flex-col pb-[150vh]">
        {achievements.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </div>
  );
}
