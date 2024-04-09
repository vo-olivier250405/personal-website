import { Links } from "../components/Links";

export default function Header() {
  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 lg:p-64">
      <div className="p-8 m-4">
        <strong className="text-white">
          <h1 className="lg:text-5xl text-3xl p-4 items-start">
            <a href="/">Vo Olivier</a>
          </h1>
        </strong>
        <h3 className="text-white text-md">Web developper student at Etna</h3>
        <p className="mt-4 max-w-xs leading-normal">
          I&apos;m currently in my first year of project management at ETNA !
          I&apos;m looking for a work-study position, and here are my projects
          and my technical skills!
        </p>
      </div>
      <nav className="nav hidden lg:grid p-8" aria-label="In-page jump links">
        <ul className="p-4 w-max">
          <li>
            <a className="group flex items-center py-3 active" href="#about">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                About
              </span>
            </a>
          </li>
          <li>
            <a className="group flex items-center py-3 " href="#experiences">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                Experience
              </span>
            </a>
          </li>
          <li>
            <a className="group flex items-center py-3 " href="#projects">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                Projects
              </span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex gap-5 flex-row items-start justify-start p-8 m-4">
        <Links />
      </div>
    </div>
  );
}
