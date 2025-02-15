export interface Post {
    id: number;
    title: string;
    slug: string;
    summary: string;
    content: string;  
    author: string;
    time: string;
    excerpt: string;
    image: string;
    tags: string[];
  }