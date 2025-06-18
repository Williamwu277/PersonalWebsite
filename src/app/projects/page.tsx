import ProjectView from "../../ui/projectView";
import Emphasis from "../../ui/emphasis";
import portfolioAdmissed from "../../assets/portfolioAdmissed.jpg";
import portfolioAAC from "../../assets/portfolioAAC.jpg";
import portfolioCowsVsDucks from "../../assets/portfolioCowsVsDucks.jpg";
import portfolioEyedentify from "../../assets/portfolioEyedentify.jpg";
import portfolioFriendbot from "../../assets/portfolioFriendbot.jpg";
import portfolioLayoffEvaders from "../../assets/portfolioLayoffEvaders.jpg";
import portfolioLemonAid from "../../assets/portfolioLemonAid.jpg";
import portfolioPicture from "../../assets/portfolioPicture.jpg";

const projects = [
  {
    name: "AdmissEd",
    desc: "A full-stack web app for analyzing and visualizing admission statistics. Upload online CSV data to filter and instantly generate a detailed report for each school or program.",
    src: portfolioAdmissed,
    github: "https://github.com/Williamwu277/Admissed", 
    links: ["https://admissed.com"],
    announcements: ["Deployed"],
    tags: ["Python", "React", "AWS", "Pandas", "Matplotlib", "FastAPI"],
  },
  {
    name: "Layoff Evaders Dashboard",
    desc: "A real-time analytics dashboard featuring interactive graphs and a chatbot, designed to complement Layoff Evaders—a VR game where players perform physical exercises to control their character in a Subway Surfer–style experience.",
    src: portfolioLayoffEvaders,
    github: "https://github.com/martin226/layoffevaders",
    links: ["https://devpost.com/software/layoff-evaders"],
    announcements: ["2nd Place"],
    tags: ["Python", "Cohere", "Streamlit", "Pandas", "Firebase"],
  },
  {
    name: "Portfolio Website",
    desc: "A sleek, modern portfolio website designed and built from the ground up. Showcases projects, achievements and a personal brand through smooth animations and responsive design.",
    src: portfolioPicture,
    github: "https://github.com/Williamwu277/PersonalWebsite",
    links: ["https://www.williamwu277.ca"],
    announcements: [],
    tags: ["Next JS", "React", "Tailwind CSS", "Typescript", "Framer Motion"],
  },
  {
    name: "DMOJ Contests",
    desc: "Organized 9 competitive programming contests on the DMOJ platform, authoring 12 original problems designed to challenge users' algorithmic thinking (Cover art is also mine).",
    src: portfolioAAC,
    github: "https://github.com/Williamwu277/Competitive-Programming",
    links: [
      "https://dmoj.ca/user/williamwu277",
      "https://dmoj.ca/contest/aac7"
    ],
    announcements: ["1500+ Competitors", "13000+ Attempts"],
    tags: ["Python", "Java", "C++", "YAML", "LaTeX"],
  },
  {
    name: "Eyedentify",
    desc: "A web app that streamlines classroom attendance by leveraging facial recognition technology. Includes built-in capabilities to automatically manage attendance data for teachers.",
    src: portfolioEyedentify,
    github: "https://github.com/andrewchu16/eyedentify",
    links: ["https://devpost.com/software/eyedentify-f9358o"],
    announcements: ["2nd Place", "Best Web App"],
    tags: ["Python", "Flask", "Face Recognition"],
  },
  {
    name: "Friend Bot",
    desc: "A Discord chatbot powered by the Cohere LLM—designed to keep you company and ensure that you're never alone.",
    src: portfolioFriendbot,
    github: "https://github.com/andrewchu16/friend-bot",
    links: ["https://devpost.com/software/friend-bot-2vnapw"],
    announcements: ["Best API Usage"],
    tags: ["Python", "Cohere", "Discord"],
  },
  {
    name: "LemonAid",
    desc: "An intelligent, time-efficient pantry web app that uses AI to scan your groceries and instantly generate tailored recipes based on the ingredients you have on hand.",
    src: portfolioLemonAid,
    github: "https://github.com/1spyral/LemonAid",
    links: ["https://devpost.com/software/lemonaid-3pz74j"],
    announcements: [],
    tags: ["Python", "OpenAI", "Flask", "JSON", "DALL-E", "GPT-4"],
  },
  {
    name: "Cows-vs-Ducks",
    desc: "A Plants vs. Zombies–inspired strategy game where cows defend their lawn against invading ducks! Features dynamic animations and diverse gameplay mechanics.",
    src: portfolioCowsVsDucks,
    github: "https://github.com/rhhscs/cows-vs-ducks",
    links: [],
    announcements: [],
    tags: ["Java", "Java Swing", "OOP"],
  },
];

export default function Projects() {
  return (
    <div className="my-28 mx-auto flex flex-col flex-wrap gap-3 justify-center items-center max-w-xl w-4/5 mb-20 font-clean">
      <div className="grid grid-cols-1 gap-5 w-full grid-rows-[auto] place-items-center mb-4">
        {
          projects.map((v, index) => {
            return (
              <ProjectView
                key={index}
                name={v.name}
                desc={v.desc}
                src={v.src}
                github={v.github}
                links={v.links}
                announcements={v.announcements}
                tags={v.tags}
              />
            );
          })
        }
        <div className="flex justify-center items-center max-w-xl w-full p-5 border-[1pt] border-slate-400 border-dashed font-clean">
          <p>See my other projects on <Emphasis href="https://github.com/Williamwu277">GitHub</Emphasis> or <Emphasis href="https://devpost.com/williamwu277">Devpost</Emphasis></p>
        </div>
      </div>
    </div>
  );
}
