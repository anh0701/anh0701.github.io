import type { Project } from "@/types/Project";

const bepNha: Project = {
  title: "Bếp Nhà",

  highlights: [
    "Designed and developed a full-stack application for daily meal planning and ingredient management.",
    "Implemented ingredient-based dish recommendations and randomized meal suggestions.",
    "Integrated a YOLOv8-based model to recognize ingredients from uploaded images.",
    "Developed a RAG-based AI assistant to provide cooking guidance and answer food-related questions.",
  ],

  challenges: [
    "Designing a database structure for dishes, ingredients, categories, and cooking history.",
    "Handling ingredient matching and missing-ingredient calculations for dish recommendations.",
    "Training a custom YOLOv8 model with a manually collected and annotated dataset.",
    "Integrating AI capabilities into the existing backend while maintaining reliable application workflows.",
  ],

  results: [
    "Developed a full-stack application with integrated AI features.",
    "Combined traditional ingredient-matching logic with AI-powered ingredient recognition and cooking assistance.",
  ],

  architecture: {
    direction: "vertical",

    groups: [
      {
        id: "frontend",
        title: "Frontend",
        nodes: [
          {
            id: "react",
            title: "React Application",
            description:
              "Component-based interface for meal planning, ingredient management, and AI interactions",
          },
          {
            id: "ingredient",
            title: "Ingredient Management",
            description:
              "Manages household ingredients, quantities, categories, and allergen information",
          },
          {
            id: "dish",
            title: "Dish Management",
            description:
              "Maintains dish information, recipes, ingredients, and meal classifications",
          },
          {
            id: "menu",
            title: "Meal Planning",
            description:
              "Supports daily meal planning based on available dishes and ingredients",
          },
          {
            id: "random",
            title: "Random Dish Selection",
            description:
              "Suggests dishes or complete meals while considering meal roles and selection constraints",
          },
          {
            id: "history",
            title: "Cooking History & Statistics",
            description:
              "Tracks cooking activities and summarizes dish frequency and cooking patterns",
          },
          {
            id: "chat",
            title: "AI Assistant Interface",
            description:
              "Provides a conversational interface for cooking questions and meal suggestions",
          },
        ],
      },
      {
        id: "backend",
        title: "Backend",
        nodes: [
          {
            id: "api",
            title: "Express.js REST API",
            description:
              "Exposes endpoints for ingredient, dish, menu, cooking history, and AI-related operations",
          },
          {
            id: "business",
            title: "Business Logic & Services",
            description:
              "Handles application rules, ingredient matching, meal recommendations, and data processing",
          },
        ],
      },
      {
        id: "services",
        title: "AI Services",
        nodes: [
          {
            id: "fastapi",
            title: "FastAPI Recognition Service",
            description:
              "Provides an independent REST API for image-based ingredient recognition",
          },
          {
            id: "yolo",
            title: "YOLOv8 Detection Model",
            description:
              "Uses a custom-trained object detection model to identify ingredients in uploaded images",
          },
          {
            id: "rag",
            title: "RAG-based AI Assistant",
            description:
              "Retrieves relevant cooking knowledge to provide context-aware responses",
          },
          {
            id: "gemini",
            title: "Gemini API",
            description:
              "Provides language model capabilities for conversational cooking assistance",
          },
        ],
      },
      {
        id: "database",
        title: "Data Layer",
        nodes: [
          {
            id: "postgres",
            title: "PostgreSQL",
            description:
              "Stores structured data for ingredients, dishes, recipes, cooking history, and related records",
          },
        ],
      },
    ],

    connections: [
      { from: "react", to: "api", label: "HTTP Requests" },
      { from: "api", to: "business", label: "Route to Services" },
      { from: "business", to: "postgres", label: "Data Access" },
      { from: "business", to: "fastapi", label: "Image Recognition Request" },
      { from: "fastapi", to: "yolo", label: "Model Inference" },
      { from: "business", to: "rag", label: "AI Queries" },
      { from: "rag", to: "gemini", label: "Language Generation" },
    ],
  },

  description:
    "An AI-powered cooking assistant for ingredient management, meal planning, and cooking recommendations.",

  stack: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "YOLOv8",
    "Python",
    "Gemini API",
  ],

  type: "AI-powered Full-stack Application",

  githubUrl: "https://github.com/anh0701/bep-nha",
  demoUrl: "https://www.youtube.com/watch?v=CdgJImJcgc8",
};

export default bepNha;
