import type { Project } from "@/types/Project";

const smartCheck: Project = {
  title: "SmartCheck",

  highlights: [
    "Built an AI-based quality inspection application using YOLOv8.",
    "Trained custom object detection models for defect identification.",
    // "Implemented image upload and real-time inspection workflow.",
    "Developed a web dashboard to visualize detection results.",
  ],

  challenges: [
    "Collecting and labeling training data for defect detection.",
    "Improving detection accuracy on small objects and edge cases.",
    "Handling different image resolutions and lighting conditions.",
    "Balancing inference speed and model performance.",
  ],
  results: [],
  architecture: {
    direction: "horizontal",

    groups: [
      {
        id: "input",
        title: "Input Layer",
        nodes: [
          {
            id: "image",
            title: "Image Upload",
            description:
              "Allows users to upload product images for automated quality inspection",
          },
        ],
      },
      {
        id: "backend",
        title: "Backend API Layer",
        nodes: [
          {
            id: "api",
            title: "REST API",
            description:
              "Receives inspection requests, handles image processing workflows, and exposes inspection results",
          },
        ],
      },
      {
        id: "processing",
        title: "AI Processing Layer",
        nodes: [
          {
            id: "yolo",
            title: "YOLOv8 Inference",
            description:
              "Runs the trained object detection model to identify potential defects in product images",
          },
          {
            id: "classification",
            title: "Defect Classification",
            description:
              "Processes detection results to determine defect categories and inspection outcomes",
          },
        ],
      },
      {
        id: "data",
        title: "Data Layer",
        nodes: [
          {
            id: "storage",
            title: "Inspection Result Storage",
            description: "Stores inspection results for retrieval and tracking",
          },
        ],
      },
      {
        id: "output",
        title: "Presentation Layer",
        nodes: [
          {
            id: "dashboard",
            title: "Inspection Dashboard",
            description:
              "Displays detected defects and inspection results through a web interface",
          },
        ],
      },
    ],

    connections: [
      { from: "image", to: "api", label: "Upload Image" },
      { from: "api", to: "yolo", label: "Inference Request" },
      { from: "yolo", to: "classification", label: "Detection Results" },
      { from: "classification", to: "storage", label: "Save Results" },
      { from: "storage", to: "api", label: "Retrieve Results" },
      { from: "api", to: "dashboard", label: "REST API Response" },
    ],
  },

  description: "Pre-process and Post-process Quality Inspection.",

  stack: ["YOLOv8", "Python", "HTML", "CSS", "PostgreSQL"],

  type: "AI System",

  githubUrl: "https://github.com/anh0701/SmartCheck",
  demoUrl: "",
};

export default smartCheck;
