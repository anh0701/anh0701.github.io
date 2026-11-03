import type { Project } from "@/types/Project";

const sbiCli: Project = {
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

  architecture: {
    direction: "vertical",

    groups: [
      {
        id: "execution",
        title: "Execution Layer",
        nodes: [
          {
            id: "cli",
            title: "CLI Interface",
            description: "Shell and PowerShell scripts for command execution",
          },
        ],
      },
      {
        id: "generation",
        title: "Generation Engine",
        nodes: [
          {
            id: "template",
            title: "Template Engine",
            description: "Provides reusable project scaffolding templates",
          },
          {
            id: "scripts",
            title: "Modular Script Logic",
            description: "Separates template processing and execution logic",
          },
        ],
      },
      {
        id: "filesystem",
        title: "File System Layer",
        nodes: [
          {
            id: "generator",
            title: "Project Scaffolding",
            description:
              "Generates project structure, packages, and configuration files",
          },
        ],
      },
    ],

    connections: [
      {
        from: "cli",
        to: "scripts",
        label: "Execute Commands",
      },
      {
        from: "scripts",
        to: "template",
        label: "Load Templates",
      },
      {
        from: "template",
        to: "generator",
        label: "Template Data",
      },
      {
        from: "scripts",
        to: "generator",
        label: "File Operations",
      },
    ],
  },

  description: "Command line tool create project spring boot. ",
  stack: ["Shell", "PowerShell"],
  type: "System",
  githubUrl: "https://github.com/anh0701/sbi-cli",
  demoUrl: "",
};
export default sbiCli;
