import fm from 'front-matter';

type Frontmatter = {
  title: string;
  date: string;
  summary: string;
  tags?: string[];
};

const modules = import.meta.glob<string>('../assets/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

export const getAllPosts = () => {
  return Object.entries(modules).map(([path, raw]) => {
    const slug = path.split('/').pop()?.replace('.md', '') || '';

    const { attributes, body } = fm<Frontmatter>(raw);

    return {
      slug,
      title: attributes.title || '',
      date: attributes.date || '',
      summary: attributes.summary || '',
      tags: attributes.tags || [],
      content: body,
    };
  });
};