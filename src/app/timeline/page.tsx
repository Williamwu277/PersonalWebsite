import AchievementView from "../../ui/achievementView";
import YearView from "../../ui/yearView";

export default function Timeline() {

  const data = [
    {
      year: '2025',
      achievements: [
        'Graduated from university',
        'Started first job',
        'Won hackathon',
      ],
    },
    {
      year: '2024',
      achievements: [
        'Internship at Company X',
        'Published research paper',
      ],
    },
  ];

  return (
    <div className="my-28 mx-auto flex flex-col gap-3 max-w-xl w-4/5 mb-20 font-clean">
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
        importance="Silver"
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
        link="https://codeforces.com/profile/washed" 
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
        importance="Gold"
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
        title="Canadian Computing Competition"
        achieve="Honour Roll"
        description="Achieved a placement of 75/3262 with a score of 48/75 on CCC Senior 2022"
        date="Feb 2022"
        link="https://cemc.uwaterloo.ca/resources/past-contests?grade=All&academic_year=All&contest_category=29"
        importance="Silver"
      />

    </div>
  );
}
