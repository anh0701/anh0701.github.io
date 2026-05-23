import antlrContent from "../content/blog/antlr-parser.md?raw";
import elasticContent from "../content/blog/elastic-sync.md?raw";
import aboutPortfolioContent from "../content/blog/about-portfolio.md?raw";

export const blogs = [
  {
    slug: "antlr-parser",

    title: "Building SQL Parser with ANTLR4",

    date: "May 2026",

    preview: "Building a SQL dialect parser using ANTLR4.",

    tags: ["ANTLR4", "PostgreSQL", "System Design"],

    content: antlrContent,
  },

  // {
  //   slug: "elastic-sync",

  //   title: "Scaling Elasticsearch Sync Pipelines",

  //   date: "April 2026",

  //   preview: "Real-time sync pipelines from MySQL to Elasticsearch.",

  //   tags: ["Kafka", "Elasticsearch", "Distributed Systems"],

  //   content: elasticContent,
  // },

  {
    slug: "about-portfolio",

    title:
      "My Portfolio Evolution: From Over-Engineering with Angular to Scaling with React",

    date: "April 2026",

    preview:
      "A portfolio is more than just a gallery of projects; it is a live record of a developer’s technical mindset and growth.",

    tags: ["portfolio", "architecture"],

    content: aboutPortfolioContent,
  },
];
