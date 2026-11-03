import type { Project } from "@/types/Project";

const imageEditor: Project = {
  title: "Image Editor",

  highlights: [
    "Built a browser-based image annotation and editing tool using Vue.js and TypeScript.",
    "Implemented drawing tools including pen, rectangle, arrow, and text annotations.",
    "Developed undo/redo functionality for editing history management.",
    "Supported image export, clipboard copy, and image enhancement operations.",
  ],

  challenges: [
    "Managing canvas redraw operations efficiently after each edit.",
    "Implementing accurate undo and redo functionality for multiple drawing actions.",
    "Handling different annotation types within a unified editing workflow.",
    "Maintaining image quality during export and enhancement operations.",
  ],

  results: [
    "Delivered a lightweight browser-based image editing solution.",
    "Enabled users to perform common image editing tasks without installing software.",
    "Improved understanding of Canvas API and client-side image processing.",
    "Strengthened experience with TypeScript and Vue.js application architecture.",
  ],

  architecture: {
    direction: "vertical",

    groups: [
      {
        id: "input",
        title: "Input Layer",
        nodes: [
          {
            id: "image-loader",
            title: "Image Loader",
            description: "Loads user-uploaded images",
          },
        ],
      },
      {
        id: "core",
        title: "Core Engine",
        nodes: [
          {
            id: "canvas",
            title: "Canvas Rendering Engine",
            description: "Renders images, drawings, and editing operations",
          },
        ],
      },
      {
        id: "editing",
        title: "Editing Modules",
        nodes: [
          {
            id: "drawing-tools",
            title: "Drawing Tools Module",
            description: "Handles drawing tools and user interactions",
          },
          {
            id: "history",
            title: "History Manager",
            description: "Manages undo and redo operations",
          },
        ],
      },
      {
        id: "output",
        title: "Output Services",
        nodes: [
          {
            id: "export",
            title: "Export & Clipboard Service",
            description: "Exports edited images and copies them to clipboard",
          },
        ],
      },
    ],

    connections: [
      { from: "image-loader", to: "canvas", label: "Load Image" },
      { from: "drawing-tools", to: "canvas", label: "Drawing Operations" },
      { from: "canvas", to: "history", label: "Record Changes" },
      { from: "history", to: "canvas", label: "Undo / Redo" },
      { from: "canvas", to: "export", label: "Export Image" },
    ],
  },

  description:
    "This is a web-based image editing tool focused on essential and practical features, allowing users to edit images quickly without installing complex software.",

  stack: ["Vue.js", "TypeScript", "Canvas API", "HTML5", "CSS3"],

  type: "Web Application",

  githubUrl: "https://github.com/anh0701/image-editor",
  demoUrl: "https://anh0701.github.io/image-editor/",
};

export default imageEditor;
