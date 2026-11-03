export interface ArchitectureNode {
  id: string;
  title: string;
  description?: string;
}

export interface ArchitectureGroup {
  id: string;
  title: string;
  nodes: ArchitectureNode[];
}

export interface ArchitectureConnection {
  from: string;
  to: string;
  label?: string;
}

export interface ProjectArchitecture {
  direction: "horizontal" | "vertical";
  groups: ArchitectureGroup[];
  connections: ArchitectureConnection[];
}

export interface Project {
  title: string;
  description: string;
  type?: string;
  stack: string[];
  highlights?: string[];
  challenges?: string[];
  results?: string[];
  architecture?: ProjectArchitecture;
  githubUrl?: string;
  demoUrl?: string;
}
