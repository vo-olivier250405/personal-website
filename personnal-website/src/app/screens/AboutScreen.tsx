export default function AboutScreen() {
  return (
    <div className="p-4 m-4 grid justify-center items-center" id="about">
      <strong className="text-white">
        <h2>ABOUT</h2>
      </strong>
      <div className="lg:w-1/2 text-md">
        <p className="mt-4">
          When I was 13 years old, I started to create{" "}
          <a
            href="https://drive.google.com/file/d/1pCu_qf83LbPwMSwA57ww89hpfxn9TyKJ/view"
            className="font-bold hover:text-white"
          >
            games.{" "}
          </a>
          After that, I decided to give my best to create beautiful and cool
          things. So I start to learn the web developpment. Now I learn it at
          Etna, and I&apos;ve done so many projects, I learn new skills very
          shortly and I will continue !
        </p>
        <p className="mt-4">
          Today, I want to be Fullstack web developper, more specifically
          back-end developper. I want to help the front developper.
        </p>
        <p className="mt-4">
          If you don&apos;t see me coding, I&apos;m probably reading, playing
          chess or just having{" "}
          <a href="https://badtimesimulator.io/" className="text-with-image">
            &quot;a very good time&quot;.
          </a>
          <img
            src="/assets/sans.png"
            className="hidden w-64 h-64 absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]"
            id="custom-cursor-image"
            alt="sans"
          />
        </p>
      </div>
    </div>
  );
}
