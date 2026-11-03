import type { Project } from "@/types/Project";

const recorderA: Project = {
  title: "FFmpeg Screen Capture (Python)",

  highlights: [
    "Built a desktop screen recording application using Python and PySide6.",
    "Integrated FFmpeg to capture screen content with low-latency recording.",
    "Provided configurable recording options including output format and quality settings.",
    "Designed a lightweight graphical interface for recording control and file management.",
  ],
  challenges: [
    "Managing FFmpeg processes and monitoring recording states reliably.",
    "Reducing CPU and memory consumption during long recording sessions.",
    "Handling different screen resolutions and multi-monitor environments.",
    "Ensuring stable recording performance across Linux desktop environments.",
  ],
  results: [
    // "Delivered a lightweight screen capture utility with minimal system overhead.",
    "Successfully generated high-quality video recordings using FFmpeg encoding.",
    "Improved understanding of multimedia pipelines and process management.",
    "Gained hands-on experience integrating native system tools into desktop applications.",
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
            title: "PySide6 Desktop UI",
            description:
              "Provides recording controls and configuration interface",
          },
        ],
      },
      {
        id: "control",
        title: "Application Control Layer",
        nodes: [
          {
            id: "controller",
            title: "Recording Controller",
            description:
              "Handles recording actions, settings, and application workflow",
          },
        ],
      },
      {
        id: "recording",
        title: "Recording Pipeline",
        nodes: [
          {
            id: "manager",
            title: "FFmpeg Process Manager",
            description:
              "Builds FFmpeg commands and manages recording processes",
          },
          {
            id: "capture",
            title: "Screen & Audio Capture",
            description: "Captures desktop frames and optional audio input",
          },
        ],
      },
      {
        id: "output",
        title: "Output Layer",
        nodes: [
          {
            id: "video",
            title: "Video Output Handler",
            description: "Handles encoded video output and recording files",
          },
        ],
      },
    ],

    connections: [
      {
        from: "ui",
        to: "controller",
        label: "User Actions",
      },
      {
        from: "controller",
        to: "manager",
        label: "Recording Commands",
      },
      {
        from: "manager",
        to: "capture",
        label: "Start / Stop Capture",
      },
      {
        from: "capture",
        to: "video",
        label: "Encoded Video",
      },
    ],
  },

  description:
    "A lightweight, efficient recording utility built with Python. Leverages FFmpeg for low-latency screen recording, supporting multiple output formats and high-quality compression.",

  stack: ["Python", "PySide6", "FFMPEG", "X11"],

  type: "Desktop Application",

  githubUrl: "https://github.com/anh0701/recorder-a",
  demoUrl: "",
};

export default recorderA;
