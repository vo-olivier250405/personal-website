import { experiencesData } from "@/lib/resumeData";
import GlassMorphCard from "../components/GlassMorphCard";

export default function ExperiencesScreen() {
  return (
    <div className="p-4 m-4 justify-center items-center" id="experiences">
      <strong className="text-white">
        <h2>EXPERIENCES</h2>
      </strong>
      <div className="grid">
        {experiencesData.map((experience, index) => (
          <div key={index}>
            <GlassMorphCard>
              <a key={index} href={experience.link} target="blank">
                <div className="mt-4 mb-4 grid sm:grid-cols-2 md:grid-cols-2">
                  <p>{experience.date}</p>
                  <div className="grid">
                    <strong className="text-white hover:text-cyan-400">
                      {experience.title}
                    </strong>
                    <p className="text-sm mt-4">{experience.description}</p>
                    <div className="flex flex-wrap gap-4 text-cyan-400 text-sm mt-4">
                      {experience.labels.map((label, idx) => (
                        <p
                          key={idx}
                          className="bg-cyan-950 rounded-3xl w-fit p-2"
                        >
                          {label}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </GlassMorphCard>
          </div>
        ))}
      </div>
    </div>
  );
}
