import { Links } from "./Links";

export const ContactMeSection = () => {
  return (
    <div className="absolute inset-0 bg-[#292727] rounded-lg">
      <div className="grid items-center justify-center mt-32">
        <a
          className="text-2xl m-auto"
          href="mailto:oliviervo.pro@gmail.com?"
          target="blank"
        >
          <p className="hover:text-red-500">oliviervo.pro@gmail.com</p>
        </a>
        <br />

        <p className="m-auto">· 06 41 30 53 80 · Meaux, 77100 France ·</p>
        <Links></Links>
      </div>
    </div>
  );
};
