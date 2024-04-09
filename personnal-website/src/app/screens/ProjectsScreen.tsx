import { projectsData } from "@/lib/resumeData";
import GlassMorphCard from "../components/GlassMorphCard";

export default function ProjectsScreen() {
  return (
    <div className="p-4 m-4 justify-center items-center" id="projects">
      <strong className="text-white">
        <h2>PROJECTS</h2>
      </strong>
      {projectsData.map((project, index) => (
        <a
          href={project.link}
          target="blank"
          rel="noopener noreferrer"
          className="flex justify-between gap-4"
          key={index}
        >
          <GlassMorphCard className="flex justify-between gap-4">
            <img
              src={project.imgRef}
              alt={project.title}
              className="lg:w-44 w-32 h-32 border border-white rounded-sm"
            />
            <div>
              <strong className="text-white">
                <h1 className="hover:text-cyan-400">{project.title}</h1>
              </strong>
              <p>{project.description}</p>
              <div className="flex flex-wrap gap-4 text-cyan-400 text-sm mt-4">
                {project.labels.map((label, index) => (
                  <p key={index} className="bg-cyan-950 rounded-3xl w-fit p-2">
                    {label}
                  </p>
                ))}
              </div>
            </div>
          </GlassMorphCard>
        </a>
      ))}
    </div>
  );
}
