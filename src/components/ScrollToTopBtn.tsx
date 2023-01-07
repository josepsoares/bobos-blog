import { useEffect, useState } from "preact/hooks";
import type { FunctionalComponent } from "preact";
import { Icon } from "@iconify/react";

import useWindowSize from "../utils/useWindowSize";
import { BREAKPOINTS } from "../utils/constants";

const GoTopButton: FunctionalComponent = () => {
  const [threshold, setThreshold] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    window.addEventListener("scroll", () =>
      setThreshold(() => (window.scrollY >= 650 ? true : false))
    );

    return () => {
      window.removeEventListener("scroll", () =>
        setThreshold(() => (window.scrollY >= 650 ? true : false))
      );
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      disabled={!threshold}
      style={{ top: "90%", right: "5%" }}
      className={
        threshold
          ? "hover:bg-secondary-500 active:bg-secondary-500 fixed z-10 bg-primary-500 p-2 text-gray-200 opacity-80 shadow-md transition-all duration-500 ease-in-out hover:opacity-100 active:opacity-100"
          : "hover:bg-secondary-500 active:bg-secondary-500 fixed z-10 bg-primary-500 p-2 text-gray-200 opacity-0 transition-all duration-500 ease-in-out"
      }
    >
      <Icon
        icon="ph:arrow-up"
        onClick={() => scrollToTop()}
        width={width >= BREAKPOINTS.lg ? 40 : 35}
        height={width >= BREAKPOINTS.lg ? 40 : 35}
      />
    </button>
  );
};

export default GoTopButton;
