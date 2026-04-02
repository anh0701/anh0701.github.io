export type Project = {
  title: string
  desc: string
  url: string
  techs: string[]
}

export const projects: Project[] = [
  {
    title: "SmartCheck",
    desc: "Pre-process and Post-process Quality Inspection",
    techs: ["YOLOv8", "Python", "CustomTkinter", "PostgreSQL"],
    url: "https://github.com/anh0701/SmartCheck",
  },
  {
    title: "MES Dispatching Board",
    desc: "Centralized hub for real-time shop-floor control. Synchronizing labor, machinery, and materials for seamless production execution.",
    techs: [".NET", "Blazor", "MSSQL", "Docker"],
    url: "https://github.com/anh0701/Dispatching-Re-routing",
  },
  {
    title: "Log Analytics & Automation Testing Tool",
    desc: "This test flow describes a simulated production test system for electronic products ",
    techs: ["Python", "Flask","Pandas", "HTML", "CSS"],
    url: "https://github.com/anh0701/automated-test-tool",
  },
  {
    title: "Image Editor",
    desc: "This is a web-based image editing tool focused on essential and practical features, allowing users to edit images quickly without installing complex software.",
    techs: ["TypeScript", "Vue.Js", "Image Processing"],
    url: "https://github.com/anh0701/image-editor",
  },
  {
    title: "FFmpeg Screen Capture (Python)",
    desc: "A lightweight, efficient recording utility built with Python. Leverages FFmpeg for low-latency screen recording, supporting multiple output formats and high-quality compression.",
    techs: ["Python", "PySide6", "FFMPEG", "X11"],
    url: "https://github.com/anh0701/recorder-a",
  },
  {
    title: "PL/SQL Parser",
    desc: "A PL/SQL syntax analysis project built with ANTLR4 ",
    techs: ["Python", "ANTLR4", "Flask"],
    url: "https://github.com/anh0701/plsql_parser",
  },
  {
    title: "Tool generates spring boot project",
    desc: "Command line tool create project spring boot. ",
    techs: ["Shell", "PowerShell"],
    url: "https://github.com/anh0701/sbi-cli",
  },
  {
    title: "What to Eat Today?",
    desc: "Decide smart, eat well. Perfect meal recommendations tailored just for you.",
    techs: ["TypeScript", "React"],
    url: "https://github.com/anh0701/what-choice",
  },
  {
    title: "Study with Me",
    desc: "A collection of study notes and learning materials",
    techs: ["Tech", "Note"],
    url: "https://github.com/anh0701/study-with-me",
  },
  {
    title: "Language Learning Web",
    desc: "A language learning web application that helps users practice vocabulary and grammar through interactive quizzes. ",
    techs: ["html", "css", "js"],
    url: "https://github.com/anh0701/foreign-language",
  },
  {
    title: "Dev Tool",
    desc: "Useful tools for developers.",
    techs: ["html", "css", "js"],
    url: "https://github.com/anh0701/dev-tool",
  },

]
