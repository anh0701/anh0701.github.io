import Button from "./common/Button"
import { scrollToId } from "@/utils/scroll"
import Section from "./common/Section"
import { useTheme } from "@/context/ThemeContext";
import Stars from "./Stars";

export default function Hero() {
  const { theme } = useTheme();

  return (
    <Section
      id="home"
      title=""
      className="
      relative
      min-h-[90vh] flex items-center mx-auto
      bg-gradient-to-b from-indigo-50 via-white to-white
      dark:bg-gradient-to-b dark:from-black dark:via-slate-900 dark:to-black
      transition-colors duration-500
    "
    >

        {theme === "dark" && (
          <Stars />
        )}

      <div className="px-6 max-w-6xl mx-auto w-full relative z-10">
        <div className="max-w-xl">

          <h1 className="heading-hero font-bold mb-6 leading-tight text-slate-900 dark:text-white">
            Hi all, I'm Anh
          </h1>

          <p className="text-gray-600 dark:text-gray-300 max-w-2xl body-large leading-relaxed mb-8">
            Software Developer | Java-based Backend.
            Currently exploring .NET, Python, and Flutter.
            Enthusiast in Image Processing and system optimization.
          </p>

          <div className="flex gap-4">
            <Button onClick={() => scrollToId("contact")}>
              Contact Me
            </Button>
          </div>

        </div>
      </div>
    </Section>
  );
}