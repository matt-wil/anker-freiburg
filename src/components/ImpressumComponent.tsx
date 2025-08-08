"use client";

import { useTranslations } from "next-intl";
import { CSSProperties, useRef, useState, MouseEvent } from "react";
import { GiOpenTreasureChest } from "react-icons/gi";
import Tooltip from "../components/Tooltip";

const Impressum = () => {
  const t = useTranslations();
  const [mouseX, setMouseX] = useState<number>(0);
  const [mouseY, setMouseY] = useState<number>(0);
  const [circleSize, setCircleSize] = useState<string>("100px");
  const [isMaskActive, setIsMaskActive] = useState<boolean>(false);
  const containerRef = useRef<HTMLElement>(null);

  const handleClick = () => {
    setCircleSize(circleSize === "100px" ? "200px" : "100px");
  };

  const handleMouseMove = (e: MouseEvent<HTMLElement>): void => {
    if (containerRef.current) {
      const { left, top } = containerRef.current.getBoundingClientRect();
      setMouseX(e.clientX - left);
      setMouseY(e.clientY - top);
    }
  };

  const handleMouseEnter = (): void => {
    setIsMaskActive(true);
  };

  const handleMouseExit = (): void => {
    setIsMaskActive(false);
  };

  const clipPathStyle: CSSProperties = {
    clipPath: isMaskActive
      ? `circle(${circleSize} at ${mouseX}px ${mouseY}px)`
      : `circle(${circleSize} at 50% 50%)`,
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
      onClick={handleClick}
      className="relative"
    >
      <section className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold">
          {t("impressum.header")}
        </h2>
        <div>
          <p className="p-5 md:px-15">{t("impressum.content")}</p>
        </div>
        <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl m-10 text-center opacity-0">
          {<GiOpenTreasureChest />}
        </h2>
      </section>
      <section
        className="absolute top-0 flex flex-col justify-center items-center gap-5 bg-[#c2f9eb]/40 text-[#FF8573]"
        style={clipPathStyle}
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold">
          {t("impressum.header")}
        </h2>
        <div>
          <p className="p-5 md:px-15">{t("impressum.content")}</p>
        </div>
        <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl m-10 text-center">
          {
            <Tooltip text="Anker`s Treasure Chest" position="bottom">
              <GiOpenTreasureChest
                onClick={() =>
                  alert(
                    "Now you have found Ankers Treasure come in store and try your luck on the Glücksrad!",
                  )
                }
              />
            </Tooltip>
          }
        </h2>
      </section>
    </section>
  );
};

export default Impressum;
