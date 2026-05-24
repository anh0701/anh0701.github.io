export const featuredProject = {
  title: "PL/SQL to MySQL Query Translator",
  description:
    "A backend engine that transforms PL/SQL queries into MySQL-compatible syntax using ANTLR4-based parsing and rule-driven AST transformations.",
  github: "https://github.com/anh0701/plsql_parser",
  demo: "",
  stack: ["Python", "Flask", "ANTLR4", "Docker"],
  metrics: [
    { label: "Source Dialect", value: "PL/SQL" },
    { label: "Target Dialect", value: "MySQL" },
    { label: "Latency", value: "43ms" },
  ],
};
