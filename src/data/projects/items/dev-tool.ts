
import type { Project } from "@/types/Project";

const devTool: Project = {
  title: "Dev Tool",

  description:
    "A collection of lightweight developer utilities for converting, formatting, and processing CSV, JSON, and string data directly in the browser.",

  type: "Web Application",

  stack: ["HTML", "CSS", "JavaScript"],

  highlights: [
    "Built a collection of browser-based tools for common data conversion and formatting tasks.",
    "Implemented CSV to JSON conversion for structured data processing.",
    "Added JSON formatting and CSV to Markdown table conversion.",
    "Supported JSON-to-string escaping and string-to-JSON parsing.",
    "Designed a lightweight interface for quick and convenient developer workflows.",
  ],

  challenges: [
    "Handling CSV data with different delimiters, quoted values, and line breaks.",
    "Validating JSON input and providing clear parsing errors.",
    "Handling special characters and escape sequences during string conversion.",
    "Maintaining consistent output formatting across different conversion tools.",
  ],

  results: [
    "Consolidated five commonly used developer utilities into a single web application.",
    "Simplified everyday data conversion and formatting tasks without requiring external tools.",
    "Enabled users to process data directly in the browser.",
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
            title: "Web Interface",
            description:
              "Provides a unified interface for selecting tools, entering data, and viewing conversion results",
          },
        ],
      },
      {
        id: "tools",
        title: "Conversion Tools",
        nodes: [
          {
            id: "csv-json",
            title: "CSV → JSON",
            description: "Converts CSV data into structured JSON format",
          },
          {
            id: "json-pretty",
            title: "JSON Pretty",
            description: "Formats and beautifies JSON data for readability",
          },
          {
            id: "csv-markdown",
            title: "CSV → Markdown",
            description: "Converts CSV data into Markdown tables",
          },
          {
            id: "json-string",
            title: "JSON → String",
            description: "Converts JSON data into an escaped string",
          },
          {
            id: "string-json",
            title: "String → JSON",
            description: "Parses JSON strings into JavaScript objects",
          },
        ],
      },
      {
        id: "processing",
        title: "Processing Layer",
        nodes: [
          {
            id: "conversion",
            title: "Data Conversion & Validation",
            description:
              "Handles parsing, formatting, escaping, and input validation directly in the browser",
          },
        ],
      },
    ],

    connections: [
      { from: "ui", to: "conversion", label: "User Input" },
      { from: "conversion", to: "csv-json" },
      { from: "conversion", to: "json-pretty" },
      { from: "conversion", to: "csv-markdown" },
      { from: "conversion", to: "json-string" },
      { from: "conversion", to: "string-json" },
    ],
  },

  githubUrl: "",
  demoUrl: "",
};

export default devTool;
