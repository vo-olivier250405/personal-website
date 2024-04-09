import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassMorphCardProps = {
  children: ReactNode;
  className?: string;
};

export default function GlassMorphCard(props: GlassMorphCardProps) {
  return (
    <div
      className={cn(
        "mt-4 p-4 rounded-lg hover:border-t border-neutral-100/15 hover:bg-neutral-100/10  hover:backdrop-blur-sm duration-100 ease-in",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}
