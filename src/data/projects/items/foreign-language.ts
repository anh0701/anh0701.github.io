import type { Project } from "@/types/Project";

const foreignLanguage: Project = {
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

  architecture: {
    direction: "vertical",

    groups: [
      {
        id: "presentation",
        title: "Presentation Layer",
        nodes: [
          {
            id: "ui",
            title: "UI Rendering & DOM Manipulation",
          },
        ],
      },
      {
        id: "application",
        title: "Application Logic",
        nodes: [
          {
            id: "quiz-engine",
            title: "Quiz Engine",
            description: "Core quiz logic and question processing",
          },
          {
            id: "state",
            title: "Client-side State Management",
            description: "Tracks progress and quiz results",
          },
        ],
      },
      {
        id: "data",
        title: "Data Layer",
        nodes: [
          {
            id: "question-bank",
            title: "JSON Vocabulary & Question Bank",
            description: "Stores vocabulary and quiz questions",
          },
        ],
      },
    ],

    connections: [
      { from: "ui", to: "quiz-engine", label: "User Interactions" },
      { from: "quiz-engine", to: "question-bank", label: "Load Questions" },
      { from: "quiz-engine", to: "state", label: "Update Progress & Results" },
      { from: "state", to: "ui", label: "Render Current State" },
    ],
  },

  description:
    "A language learning web application that helps users practice vocabulary and grammar through interactive quizzes. ",
  stack: ["html", "css", "js", "json"],
  type: "Web Application",
  githubUrl: "https://github.com/anh0701/foreign-language",
  demoUrl: "https://anh0701.github.io/foreign-language/",
};

export default foreignLanguage;
