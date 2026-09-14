import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={handleClick}
      aria-label="Back to top"
      className="
        fixed
        right-6
        bottom-6
        z-50
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-zinc-700
        bg-zinc-900/90
        text-zinc-400
        shadow-lg
        backdrop-blur
        transition
        hover:border-zinc-500
        hover:text-white
      "
    >
      <FaArrowUp size={14} />
    </button>
  );
}
