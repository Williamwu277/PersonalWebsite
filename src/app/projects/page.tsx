import ProjectView from "../../components/projectView";
import TagGroup from "../../components/tagGroup";

export default function Projects() {
  return (
    <div className="my-16 mx-auto flex flex-col flex-wrap gap-3 justify-center items-center max-w-3xl w-4/5 mb-20">
      <div className="w-11/12 font-[family-name:var(--font-geist-mono)]">
        <h1 className="text-4xl font-extrabold">Projects</h1>
      </div>
      <hr className="w-full h-0.25 border-blue-300 mb-1"></hr>
      <div className="flex flex-col w-11/12">
        <p className="text-sm mb-3">
          Here is a collection of projects that I&apos;m particularly proud of. Feel free to explore!
          You can find more on the <a href="https://github.com/Williamwu277" className="text-blue-300 font-bold">Github</a>. 
          As well, you can find many of my hackathon participations on <a href="https://github.com/andrewchu16/eyedentify/" className="text-blue-300 font-bold">Devpost</a>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-[100px_auto] gap-y-2 mb-1">
          <p className="text-sm font-bold underline">Languages</p>
          <TagGroup tags={["Python", "Java", "C++", "HTML", "Javascript", "CSS", "SQL", "R", "Racket"]}/>
          <p className="text-sm font-bold underline">Frameworks</p>
          <TagGroup tags={["Flask", "FastAPI", "React", "Next.js", "Streamlit"]}/>
          <p className="text-sm font-bold underline">Technologies</p>
          <TagGroup tags={["Git", "AWS", "PostgreSQL", "Pandas", "Matplotlib", "OpenAI"]}/>
        </div>
      </div>
      <hr className="w-full h-0.25 border-blue-300 mb-1"></hr>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full grid-rows-[auto] place-items-center">
        <ProjectView 
          name="AdmissEd"
          desc="A full-stack web app for admission statistic analysis and visualization. Upload your data in CSV format to generate a report. See it live at https://admissed.com"
          src="/portfolioAdmissed.jpg" 
          link="https://admissed.com" 
          tags={["React", "CSS", "AWS", "Pandas", "Matplotlib", "FastAPI"]}
        />
        <ProjectView 
          name="Layoff Evaders Dashboard"
          desc="A comprehensive dashboard with real-time data, graphs and a chat bot to supplement the VR Layoff Evaders exercising game. Won 2nd @ DeltaHacks"
          src="/portfolioLayoffEvaders.jpg" 
          link="https://github.com/martin226/layoffevaders" 
          tags={["Streamlit", "Python", "Cohere", "Pandas", "DeltaHacks"]}
        />
        <ProjectView 
          name="Portfolio Website"
          desc="My portolio website! Made with lots of love and care. Includes animations, about, projects, achievements and blog functionality"
          src="/portfolioPicture.jpg" 
          link="https://github.com/Williamwu277/PersonalWebsite" 
          tags={["Next.js", "React", "Tailwind", "HTML", "Typescript"]}
        />
        <ProjectView 
          name="DMOJ Contest Organizing"
          desc="Organized 9 competitive programming contests on the DMOJ platform, with 1500+ participants combined. My problems have received 13000+ solve attempts."
          src="/portfolioAAC.jpg" 
          link="https://dmoj.ca/user/williamwu277" 
          tags={["Python", "Java", "C++", "YAML", "Problem Solving", "Blackbox Testing"]}
        />
        <ProjectView 
          name="Eyedentify"
          desc="A web app to take class attendance using facial recognition. Built using Flask and the face recognition library. Won 2nd and Best Web App @ YrHacks"
          src="/portfolioEyedentify.jpg" 
          link="https://github.com/andrewchu16/eyedentify" 
          tags={["Python", "Flask", "Face Recognition", "YrHacks"]}
        />
        <ProjectView 
          name="Friend Bot"
          desc="A discord chat bot so you never have to be alone again! Built using the discord.py python library and Cohere. Won Best API Usage @ YrHacks 2022"
          src="/portfolioFriendbot.jpg" 
          link="https://github.com/andrewchu16/friend-bot" 
          tags={["Python", "Cohere", "discord.py", "YrHacks"]}
        />
        <ProjectView 
          name="LemonAid"
          desc="A user-time-efficient pantry web app leveraging OpenAI's APIs to scan groceries and generate recipes given pantry contents."
          src="/portfolioLemonAid.jpg" 
          link="https://github.com/1spyral/LemonAid" 
          tags={["Python", "OpenAI", "Flask", "JSON", "DALL-E", "GPT-4", "IgnitionHacks"]}
        />
        <ProjectView 
          name="Cows-vs-Ducks"
          desc="A Plants vs. Zombies-like strategy game where cows aim to defend their lawn against the invading ducks! Includes animations and various game mechanics"
          src="/portfolioCowsVsDucks.jpg" 
          link="https://github.com/rhhscs/cows-vs-ducks" 
          tags={["Java", "Game-Dev", "OOP", "State-machine", "Animation"]}
        />
      </div>
    </div>
  );
}
