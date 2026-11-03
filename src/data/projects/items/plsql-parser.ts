import type { Project } from "@/types/Project";

const plsql_parser: Project = {
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
  architecture: {
    direction: "vertical",

    groups: [
      {
        id: "api",
        title: "API Layer",
        nodes: [
          {
            id: "flask",
            title: "Flask REST API",
            description:
              "Exposes PL/SQL parsing functionality as a REST service",
          },
        ],
      },
      {
        id: "parsing",
        title: "Parsing Layer",
        nodes: [
          {
            id: "grammar",
            title: "ANTLR4 Grammar",
            description: "Defines lexical tokens and PL/SQL parser rules",
          },
          {
            id: "parser",
            title: "Python Parser",
            description: "Generates and traverses parse trees",
          },
        ],
      },
      {
        id: "ast",
        title: "AST Processing Layer",
        nodes: [
          {
            id: "ast-builder",
            title: "AST Builder",
            description:
              "Transforms parse trees into structured AST representations",
          },
        ],
      },
    ],

    connections: [
      {
        from: "flask",
        to: "parser",
        label: "Parsing Request",
      },
      {
        from: "grammar",
        to: "parser",
        label: "Lexer & Parser Rules",
      },
      {
        from: "parser",
        to: "ast-builder",
        label: "Parse Tree",
      },
    ],
  },
  description: "A PL/SQL syntax analysis project built with ANTLR4 ",
  stack: ["Python", "ANTLR4", "Flask"],
  type: "System",
  githubUrl: "https://github.com/anh0701/plsql_parser",
  demoUrl: "",
};

export default plsql_parser;
