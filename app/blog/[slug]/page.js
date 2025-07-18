 
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src/data/blog');
  const filenames = await fs.readdir(postsDirectory);
  return filenames.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}

export default async function BlogPost({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'src/data/blog', `${slug}.md`);
  const fileContents = await fs.readFile(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(content);

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: processedContent.value }}
      />
    </div>
  );
}