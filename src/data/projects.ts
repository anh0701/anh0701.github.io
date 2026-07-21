import type { Project } from "@/types/Project";

export const projects: Project[] = [
  {
    title: "SmartCheck",

    highlights: [
      "Built an AI-based quality inspection application using YOLOv8.",
      "Trained custom object detection models for defect identification.",
      // "Implemented image upload and real-time inspection workflow.",
      "Developed a web dashboard to visualize detection results."
    ],

    challenges: [
      "Collecting and labeling training data for defect detection.",
      "Improving detection accuracy on small objects and edge cases.",
      "Handling different image resolutions and lighting conditions.",
      "Balancing inference speed and model performance."
    ],
    results:[],
    architecture: [
      "Image Upload",
      "YOLOv8 Inference",
      "Defect Classification",
      "Result Storage",
      "Inspection Dashboard"
    ],

    description: "Pre-process and Post-process Quality Inspection.",

    stack: ["YOLOv8", "Python", "HTML", "CSS", "PostgreSQL"],

    type: "AI System",

    githubUrl: "https://github.com/anh0701/SmartCheck",
    demoUrl: "",

  },

  {
    title: "PL/SQL Parser",

    highlights: [
      "Built a lexical and syntactic analyzer for PL/SQL using ANTLR4",
      "Supports parsing of core PL/SQL constructs (blocks, procedures, functions, control flow)",
      "Designed AST structure for further code transformation and analysis",
      "Exposed parsing service via Flask API for integration with external tools",
    ],
    challenges: [
      "Handling complex and ambiguous PL/SQL grammar rules with ANTLR4",
      "Resolving conflicts in nested blocks and recursive grammar structures",
      "Designing a clean AST representation from raw parse trees",
      "Ensuring parser stability with real-world PL/SQL code variations",
    ],
    results: [
      "Successfully parsed a wide range of PL/SQL scripts with high accuracy",
      // "Built a reusable parsing engine that can be extended for SQL dialect transformation",
      "Enabled downstream applications such as code analysis and SQL conversion tooling",
    ],
    architecture: [
      "ANTLR4 grammar defining lexical tokens and parser rules for PL/SQL",
      "Python-based parser layer generating and traversing parse trees",
      "AST builder module for converting parse tree into structured representation",
      "Flask REST API exposing parsing functionality as a service",
    ],
    description: "A PL/SQL syntax analysis project built with ANTLR4 ",
    stack: ["Python", "ANTLR4", "Flask"],
    type: "System",
    githubUrl: "https://github.com/anh0701/plsql_parser",
    demoUrl: ""
  },

  {
    title: "FFmpeg Screen Capture (Python)",

    highlights: [
      "Built a desktop screen recording application using Python and PySide6.",
      "Integrated FFmpeg to capture screen content with low-latency recording.",
      "Provided configurable recording options including output format and quality settings.",
      "Designed a lightweight graphical interface for recording control and file management."
    ],
    challenges: [
      "Managing FFmpeg processes and monitoring recording states reliably.",
      "Reducing CPU and memory consumption during long recording sessions.",
      "Handling different screen resolutions and multi-monitor environments.",
      "Ensuring stable recording performance across Linux desktop environments."
    ],
    results: [
      // "Delivered a lightweight screen capture utility with minimal system overhead.",
      "Successfully generated high-quality video recordings using FFmpeg encoding.",
      "Improved understanding of multimedia pipelines and process management.",
      "Gained hands-on experience integrating native system tools into desktop applications."
    ],
    architecture: [
      "PySide6 Desktop UI",
      "Recording Controller",
      "FFmpeg Process Manager",
      "Screen Capture Pipeline",
      "Video Output Handler"
    ],

    description:
      "A lightweight, efficient recording utility built with Python. Leverages FFmpeg for low-latency screen recording, supporting multiple output formats and high-quality compression.",

    stack: ["Python", "PySide6", "FFMPEG", "X11"],

    type: "Desktop Application",

    githubUrl: "https://github.com/anh0701/recorder-a",
    demoUrl: "",

  },

  {
    title: "Image Editor",

    highlights: [
      "Built a browser-based image annotation and editing tool using Vue.js and TypeScript.",
      "Implemented drawing tools including pen, rectangle, arrow, and text annotations.",
      "Developed undo/redo functionality for editing history management.",
      "Supported image export, clipboard copy, and image enhancement operations."
    ],

    challenges: [
      "Managing canvas redraw operations efficiently after each edit.",
      "Implementing accurate undo and redo functionality for multiple drawing actions.",
      "Handling different annotation types within a unified editing workflow.",
      "Maintaining image quality during export and enhancement operations."
    ],

    results: [
      "Delivered a lightweight browser-based image editing solution.",
      "Enabled users to perform common image editing tasks without installing software.",
      "Improved understanding of Canvas API and client-side image processing.",
      "Strengthened experience with TypeScript and Vue.js application architecture."
    ],

    architecture: [
      "Image Loader",
      "Canvas Rendering Engine",
      "Drawing Tools Module",
      "History Manager",
      "Export & Clipboard Service"
    ],

    description:
      "This is a web-based image editing tool focused on essential and practical features, allowing users to edit images quickly without installing complex software.",

    stack: ["Vue.js","TypeScript","Canvas API","HTML5","CSS3"],

    type: "Web Application",

    githubUrl: "https://github.com/anh0701/image-editor",
    demoUrl: "https://anh0701.github.io/image-editor/",

  },

  {
    title: "Language Learning Web",

    highlights: [
      "Interactive vocabulary practice with multiple exercise types (fill-in-the-blank, word rearrangement, multiple choice)",
      "Flashcard system for spaced repetition and quick memorization",
      "Mini story-based exercises to improve contextual understanding",
      "Immediate feedback to reinforce correct grammar and vocabulary usage",
    ],
    challenges: [
      "Designing multiple exercise formats with consistent data structure",
      "Ensuring smooth user experience across different learning modes (quiz, flashcard, story)",
      "Handling validation logic for word ordering and text input accuracy",
      "Balancing randomness with structured learning progression",
    ],
    results: [
      "Improved engagement through diverse and interactive learning activities",
      "Helped users practice vocabulary in both isolated and contextual forms",
      "Created a reusable quiz engine adaptable to different exercise types",
    ],

    architecture: [
      "Vanilla JavaScript for core logic and DOM manipulation",
      "Modular structure separating quiz engine, UI rendering, and data layer",
      "JSON-based vocabulary and question bank for easy content extension",
      "Client-side state management for tracking progress and results",
    ],

    description:
      "A language learning web application that helps users practice vocabulary and grammar through interactive quizzes. ",
    stack: ["html", "css", "js", "json"],
    type: "Web Application",
    githubUrl: "https://github.com/anh0701/foreign-language",
    demoUrl: "https://anh0701.github.io/foreign-language/",

  },

  {
    title: "What to Eat Today?",

    highlights: [
      // "Personalized meal recommendations based on user preferences and constraints",
      "Fast decision-making UI to reduce 'what to eat' indecision",
      "Dynamic suggestion system with randomized + rule-based logic",
      "Responsive design for mobile-first usage",
    ],
    challenges: [],
    results: [
      "Reduced user decision time for daily meals through instant suggestions",
      "Improved user experience with more relevant and varied recommendations",
      // "Built a reusable recommendation module for future expansion (diet tracking, favorites)",
    ],
    architecture: [
      "React-based frontend with component-driven UI design",
      "TypeScript for type-safe recommendation models and state handling",
      "JSON-based data source for lightweight and easily extensible meal database",
        "Rule-based recommendation engine",
      ],

    description:
      "Decide smart, eat well. Perfect meal recommendations tailored just for you.",

    stack: ["TypeScript", "React", "json"],

    type: "Web Application",

    githubUrl: "https://github.com/anh0701/what-choice",
    demoUrl: "https://anh0701.github.io/what-choice/",

  },

  {
    title: "Tool generates spring boot project",

    highlights: [
      "CLI tool for generating standardized Spring Boot project structures",
      "Automates project scaffolding including packages, configs, and build setup",
      "Supports customizable templates for different project types",
      "Reduces manual setup time for new backend services",
    ],

    challenges: [
      "Designing flexible project templates that work across different Spring Boot versions",
      "Handling cross-platform CLI behavior (Shell vs PowerShell differences)",
      "Ensuring generated project structure follows clean architecture conventions",
      "Managing template consistency and maintainability",
    ],

    results: [
      "Reduced Spring Boot project initialization time from minutes to seconds",
      "Standardized project structure across multiple backend services",
      "Improved developer onboarding with consistent scaffolding",
    ],

    architecture: [
      "CLI-based generator implemented using Shell and PowerShell scripts",
      "Template-driven project scaffolding system",
      "File system automation for package and configuration generation",
      "Modular script design separating template logic and execution layer",
    ],

    description: "Command line tool create project spring boot. ",
    stack: ["Shell", "PowerShell"],
    type: "System",
    githubUrl: "https://github.com/anh0701/sbi-cli",
    demoUrl: "",

  },

  {
    title: "Dev Tool",

    highlights: [],
    challenges: [],
    results:[],
    architecture:[],

    description: "Useful tools for developers.",
    stack: ["html", "css", "js"],
    type: "Web Application",
    githubUrl: "https://github.com/anh0701/dev-tool",
    demoUrl: "https://anh0701.github.io/dev-tool/",
  },
];
