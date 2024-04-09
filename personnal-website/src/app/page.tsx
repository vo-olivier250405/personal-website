import { FollowerPointerCard } from "./components/FloutingDiv";
import AboutScreen from "./screens/AboutScreen";
import Header from "./screens/Header";
import ExperiencesScreen from "./screens/ExperiencesScreen";
import ProjectsScreen from "./screens/ProjectsScreen";

export default function Home() {
  return (
    <>
      <FollowerPointerCard className="overflow-y-auto bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 w-screen h-screen">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <div className="pt-24 lg:w-1/2 lg:py-24">
            <AboutScreen />
            <ExperiencesScreen />
            <ProjectsScreen />
          </div>
        </div>
      </FollowerPointerCard>
    </>
  );
}
