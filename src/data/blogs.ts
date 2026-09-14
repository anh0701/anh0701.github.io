// import antlrContent from "../content/blog/antlr-parser.md?raw";
import webToMarkdownContent from "../content/blog/web-to-markdown.md?raw";
import aboutPortfolioContent from "../content/blog/about-portfolio.md?raw";

export const blogs = [
  {
    slug: "about-portfolio",

    title:
      "My Portfolio Evolution: From Over-Engineering with Angular to Scaling with React",

    date: "May 2026",

    preview:
      "A portfolio is more than just a gallery of projects; it is a live record of a developer’s technical mindset and growth.",

    tags: ["portfolio", "architecture"],

    content: aboutPortfolioContent,
  },

  // {
  //   slug: "antlr-parser",

  //   title: "Building SQL Parser with ANTLR4",

  //   date: "May 2026",

  //   preview: "Building a SQL dialect parser using ANTLR4.",

  //   tags: ["ANTLR4", "PostgreSQL", "System Design"],

  //   content: antlrContent,
  // },

  {
    slug: "web-to-markdown",
    title: "Building a Web to Markdown Browser Extension",
    date: "September 2026",
    preview: "Designing a lightweight browser extension to convert web pages and selected content into clean Markdown.",
    tags: ["JavaScript", "Browser Extension", "Markdown", "Web Parsing"],
    content: webToMarkdownContent,
  },
];
