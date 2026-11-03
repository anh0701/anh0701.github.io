import type { Project } from "@/types/Project";
import bepNha from "./items/bep-nha";
import smartCheck from "./items/smart-check";
import recorderA from "./items/recorder-a";
import plsql_parser from "./items/plsql-parser";
import imageEditor from "./items/image-editor";
import foreignLanguage from "./items/foreign-language";
import whatChoice from "./items/what-choice";
import sbiCli from "./items/sbi-cli";
import devTool from "./items/dev-tool";

export const projects: Project[] = [
  bepNha,
  smartCheck,
  plsql_parser,
  recorderA,
  foreignLanguage,
  imageEditor,
  whatChoice,
  sbiCli,
  devTool,
];
