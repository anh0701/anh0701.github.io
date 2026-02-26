import Button from "./common/Button"
import { scrollToId } from "@/utils/scroll"
import Section from "./common/Section"

export default function Hero() {
  return (
    <Section id="home" title="">
      <h1 className="text-6xl font-bold mb-6 leading-tight">
        Hi all, I'm Anh <span className="inline-block">👋</span>
      </h1>

      <p className="text-gray-500 max-w-2xl text-lg leading-relaxed mb-8">
        Software Developer | Java-based Backend. 
        Currently exploring .NET, Python, and Flutter. 
        Enthusiast in Image Processing and system optimization.
      </p>

      <div className="flex gap-4">
        <Button onClick={() => scrollToId("contact")}>Contact Me</Button>
        {/* <Button variant="outline" onClick={() => scrollToId("resume")}>Notes</Button> */}
      </div>
    </Section>
  )
}