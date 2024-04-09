import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};
export const Card = (props: CardProps) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className={`mx-4 flex h-fit flex-col rounded-md border-2 border-neutral-200 bg-transparent/15  p-8 backdrop-blur-sm sm:h-[50%] md:w-4/5 lg:w-3/5`}
      >
        {props.children}
      </div>
    </div>
  );
};
