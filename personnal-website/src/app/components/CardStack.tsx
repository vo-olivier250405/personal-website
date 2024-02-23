"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedTooltip } from "./AnimatedToolTips";
import { SKILLS } from "@/lib/utils";

type Card = {
  id: number;
  sentence: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  const handleOnClick = () => {
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards];
      newArray.unshift(newArray.pop()!);
      return newArray;
    });
  };

  return (
    <div className="relative m-auto h-60 w-60 md:h-60 md:w-144">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute items-center dark:bg-black bg-gray-400 h-60 w-60 md:h-144 md:w-166 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
            onClick={handleOnClick}
          >
            <div className="text-xl md:text-6xl m-auto text-neutral-900 dark:text-neutral-200 justify-center items-center">
              <div className="m-auto md:text-2xl text-gray-600">
                {card.sentence}
              </div>
              {card.content === "SKILLS" ? (
                <AnimatedTooltip items={SKILLS} />
              ) : (
                card.content
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
