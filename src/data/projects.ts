import type { Project } from "@/types/Project";

export const projects: Project[] = [
  {
    title: "SmartCheck",

    description: "Pre-process and Post-process Quality Inspection.",

    stack: ["YOLOv8", "Python", "HTML", "CSS", "PostgreSQL"],

    type: "AI System",

    githubUrl: "https://github.com/anh0701/SmartCheck",
    demoUrl: "",
    preview: "projects/smart-check.png",
  },

  {
    title: "Image Editor",

    description:
      "This is a web-based image editing tool focused on essential and practical features, allowing users to edit images quickly without installing complex software.",

    stack: ["TypeScript", "Vue.Js", "Image Processing"],

    type: "System",

    githubUrl: "https://github.com/anh0701/image-editor",
    demoUrl: "https://anh0701.github.io/image-editor/",
    preview: "projects/image-editor.png",
  },

  {
    title: "FFmpeg Screen Capture (Python)",

    description:
      "A lightweight, efficient recording utility built with Python. Leverages FFmpeg for low-latency screen recording, supporting multiple output formats and high-quality compression.",

    stack: ["Python", "PySide6", "FFMPEG", "X11"],

    type: "System",

    githubUrl: "https://github.com/anh0701/recorder-a",
    demoUrl: "",
    preview: "projects/recorder.png",
  },

  {
    title: "What to Eat Today?",

    description:
      "Decide smart, eat well. Perfect meal recommendations tailored just for you.",

    stack: ["TypeScript", "React", "json"],

    type: "System",

    githubUrl: "https://github.com/anh0701/what-choice",
    demoUrl: "https://anh0701.github.io/what-choice/",
    preview: "projects/what-choice.png",
  },

  {
    title: "Language Learning Web",
    description:
      "A language learning web application that helps users practice vocabulary and grammar through interactive quizzes. ",
    stack: ["html", "css", "js", "json"],
    type: "System",
    githubUrl: "https://github.com/anh0701/foreign-language",
    demoUrl: "https://anh0701.github.io/foreign-language/",
    preview: "projects/learning-web.png",
  },

  // {
  //   title: "PL/SQL Parser",
  //   description: "A PL/SQL syntax analysis project built with ANTLR4 ",
  //   stack: ["Python", "ANTLR4", "Flask"],
  //   type: "System",
  //   githubUrl: "https://github.com/anh0701/plsql_parser",
  //   demoUrl: ""
  // },

  {
    title: "Tool generates spring boot project",
    description: "Command line tool create project spring boot. ",
    stack: ["Shell", "PowerShell"],
    type: "System",
    githubUrl: "https://github.com/anh0701/sbi-cli",
    demoUrl: "",
    preview: "projects/sbi-cli.png",
  },

  {
    title: "Dev Tool",
    description: "Useful tools for developers.",
    stack: ["html", "css", "js"],
    type: "System",
    githubUrl: "https://github.com/anh0701/dev-tool",
    demoUrl: "https://anh0701.github.io/dev-tool/",
    preview: "projects/dev-tool.png",
  },
];
