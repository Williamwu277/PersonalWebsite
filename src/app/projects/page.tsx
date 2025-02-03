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
        <p className="text-sm mb-2">
          Here is a collection of projects that I'm particularly proud of. Feel free to explore!
          You can find more on the <a href="https://github.com/Williamwu277" className="text-blue-300 font-bold">Github</a>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-[100px_auto] gap-y-2 mb-1">
          <p className="text-sm font-bold underline">Languages</p>
          <TagGroup tags={["Python", "C++", "Java", "Javascript", "HTML", "CSS", "SQL"]}/>
          <p className="text-sm font-bold underline">Frameworks</p>
          <TagGroup tags={["Flask", "FastAPI", "NextJS"]}/>
          <p className="text-sm font-bold underline">Technologies</p>
          <TagGroup tags={["React", "Pandas", "Matplotlib", "PostgreSQL"]}/>
        </div>
      </div>
      <hr className="w-full h-0.25 border-blue-300 mb-1"></hr>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full grid-rows-[auto] place-items-center">
        <ProjectView name="project1" src="/portfolioImage.png" link="http://localhost:3000/projects" tags={["hi", "Next.js", "Next.js", "Next.js", "Next.js","Next.js", "Next.js"]}/>
        <ProjectView name="project1" src="/portfolioImage.png" link="http://localhost:3000/projects" tags={["hi", "bye"]}/>
      </div>
    </div>
  );
}
