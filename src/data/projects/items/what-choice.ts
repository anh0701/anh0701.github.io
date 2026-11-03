import type { Project } from "@/types/Project";

const whatChoice: Project = {
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
  architecture: {
    direction: "vertical",

    groups: [
      {
        id: "presentation",
        title: "Presentation Layer",
        nodes: [
          {
            id: "react",
            title: "React Component-based UI",
            description:
              "Renders meal recommendations and handles user interactions",
          },
          {
            id: "state",
            title: "TypeScript State Management",
            description: "Manages user selections and recommendation state",
          },
        ],
      },
      {
        id: "recommendation",
        title: "Recommendation Engine",
        nodes: [
          {
            id: "engine",
            title: "Rule-based Recommendation Engine",
            description:
              "Processes user inputs and applies recommendation rules",
          },
        ],
      },
      {
        id: "data",
        title: "Data Layer",
        nodes: [
          {
            id: "json",
            title: "JSON Meal Database",
            description: "Stores meal data in an extensible JSON structure",
          },
        ],
      },
    ],

    connections: [
      {
        from: "react",
        to: "engine",
        label: "User Preferences",
      },
      {
        from: "state",
        to: "engine",
        label: "Selection State",
      },
      {
        from: "engine",
        to: "json",
        label: "Retrieve Meal Data",
      },
    ],
  },

  description:
    "Decide smart, eat well. Perfect meal recommendations tailored just for you.",

  stack: ["TypeScript", "React", "json"],

  type: "Web Application",

  githubUrl: "https://github.com/anh0701/what-choice",
  demoUrl: "https://anh0701.github.io/what-choice/",
};
export default whatChoice;
