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
          Here is a list of achievements that I&apos;m particularly proud about!
          Achievements are sorted by date and a colour tier system from Gold to Bronze 🟨⬜🟫.
          Click on an achievement for more information.
        </p>
      </div>
      <hr className="w-full h-0.25 border-blue-300 mb-1"></hr>

      <AchievementView
        title="DeltaHacks"
        achieve="2nd Place"
        description="I created the companion dashboard to our VR game, Layoff Evaders, using Streamlit. We won 2nd over 600+ competitors"
        date="Jan 2025"
        link="https://devpost.com/software/layoff-evaders"
        importance="Gold"
      />

      <AchievementView
        title="National Mathematics Scholarship"
        achieve=""
        description="One of approximately 10 awarded in the Faculty of Mathematics for excellence in academics and extracurriculars"
        date="Apr 2024"
        link="https://uwaterloo.ca/undergraduate-entrance-awards/awards/mathematics-national-scholarships"
        importance="Gold"
      />

      <AchievementView
        title="President's Scholarship of Distinction"
        achieve=""
        description="Awarded to students admitted to the University of Waterloo with an average of 95%+ (~99.0% Top 6)"
        date="Apr 2024"
        link="https://uwaterloo.ca/undergraduate-entrance-awards/awards/mathematics-national-scholarships"
        importance="Bronze"
      />

      <AchievementView
        title="Canadian Computing Competition"
        achieve="Honour Roll"
        description="Achieved a placement of 111/3947 with a score of 47/75 on CCC Senior 2024"
        date="Feb 2024"
        link="https://cemc.uwaterloo.ca/resources/past-contests?grade=All&academic_year=All&contest_category=29"
        importance="Silver"
      />

      <AchievementView 
        title="Codeforces" 
        achieve="1893 Rating" 
        description="Reached a peak rating of 1893 (Expert ranking and top 5%) on Codeforces" 
        date="Aug 2023" 
        link="https://codeforces.com/profle/washed" 
        importance="Silver"
      />

      <AchievementView
        title="CEMC Euclid Math Contest"
        achieve="Honour Roll"
        description="Achieved Group V (top 5%) on the honour roll in Grade 11 with a score of 82/100"
        date="Apr 2023"
        link="https://cemc.uwaterloo.ca/resources/past-contests?grade=All&academic_year=All&contest_category=24"
        importance="Silver"
      />

      <AchievementView
        title="CEMC Hypatia Math Contest"
        achieve="Honour Roll"
        description="Achieved Group IV (top 5%) on the honour roll with a score of 34/40"
        date="Apr 2023"
        link="https://cemc.uwaterloo.ca/resources/past-contests?grade=All&academic_year=All&contest_category=25"
        importance="Bronze"
      />

      <AchievementView 
        title="YrHacks" 
        achieve="2nd Place" 
        description="Won 2nd place overall and the Best Web App category over 350 competitors with our facial recognition attendance taker" 
        date="Mar 2023" 
        link="https://devpost.com/software/eyedentify-f9358o" 
        importance="Gold"
      />

      <AchievementView
        title="Canadian Computing Competition"
        achieve="Honour Roll"
        description="Achieved a placement of 92/3420 with a score of 48/75 on CCC Senior 2023"
        date="Feb 2023"
        link="https://cemc.uwaterloo.ca/resources/past-contests?grade=All&academic_year=All&contest_category=29"
        importance="Silver"
      />

      <AchievementView 
        title="USACO" 
        achieve="Platinum" 
        description="Reached the highest division of the USA Computing Olympiad" 
        date="Dec 2022" 
        link="https://usaco.org/current/data/dec22_gold_results.html" 
        importance="Silver"
      />

      <AchievementView 
        title="DMOJ" 
        achieve="1991 Rating" 
        description="Reached a peak rating of 1991 (Master) on DMOJ: Modern Online Judge" 
        date="Oct 2022" 
        link="https://dmoj.ca/user/williamwu277" 
        importance="Bronze"
      />

      <AchievementView 
        title="YrHacks" 
        achieve="Best API" 
        description="Won the Best API award over 350 participants with a discord chat bot. This was my introduction to generative AI and LLM APIs" 
        date="Apr 2022" 
        link="https://devpost.com/software/friend-bot-2vnapw" 
        importance="Gold"
      />

      <AchievementView
        title="CEMC Galois Math Contest"
        achieve="Honour Roll"
        description="Achieved Group II (top 5%) on the honour roll as well as school-champion with a score of 36/40"
        date="Apr 2022"
        link="https://cemc.uwaterloo.ca/resources/past-contests?grade=All&academic_year=All&contest_category=25"
        importance="Bronze"
      />

      <AchievementView
        title="Canadian Computing Competition"
        achieve="Honour Roll"
        description="Achieved a placement of 75/3262 with a score of 48/75 on CCC Senior 2022"
        date="Feb 2022"
        link="https://cemc.uwaterloo.ca/resources/past-contests?grade=All&academic_year=All&contest_category=29"
        importance="Silver"
      />

      <AchievementView
        title="Breakout Scratch Game"
        achieve="4700+ Plays"
        description="One of my earliest Scratch games, introducing me to the joy of CS"
        date="Mar 2017"
        link="https://scratch.mit.edu/projects/151783114/"
        importance="Bronze"
      />

    </div>
  );
}

