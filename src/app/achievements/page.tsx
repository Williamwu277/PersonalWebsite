import AchievementView from "../../components/achievementView";

export default function Achievements() {
  return (
    <div className="my-16 mx-auto flex flex-col flex-wrap gap-3 justify-center items-center max-w-xl w-4/5 mb-20">
      <div className="w-11/12 font-[family-name:var(--font-geist-mono)]">
        <h1 className="text-4xl font-extrabold">Achievements</h1>
      </div>
      <hr className="w-full h-0.25 border-blue-300 mb-1"></hr>
      <div className="flex w-11/12">
        <p className="text-sm inline-block">
          Here is a list of achievements that I'm particularly proud about!
          Achievements are sorted by date and a colour tier system from Gold to Bronze 🟨⬜🟫.
          Click on an achievement for more information.
        </p>
      </div>
      <hr className="w-full h-0.25 border-blue-300 mb-1"></hr>
      <AchievementView 
        title="Canadian Computing Competition" 
        achieve="Honour Roll" 
        description="Placed in the top 5 percentile" 
        date="Jan 2025" 
        link="http://localhost:3000/blog" 
        importance="Gold">
      </AchievementView>
      <AchievementView title="h" description="h" achieve="h" date="Jan 2025" link="http://localhost:3000/projects" importance="Silver"/>
      <AchievementView title="h" description="h" achieve="h" date="Jan 2025" link="http://localhost:3000/projects" importance="Bronze"/>
    </div>
  );
}

