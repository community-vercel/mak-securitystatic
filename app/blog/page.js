 
import { promises as fs } from 'fs';
import path from 'path';

export default async function Blog() {
  const postsDirectory = path.join(process.cwd(), 'src/data/blog');
  const filenames = await fs.readdir(postsDirectory);
  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = await fs.readFile(filePath, 'utf8');
      const { data } = matter(fileContents);
      return { slug: filename.replace('.md', ''), ...data };
    })
  );

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Security Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div key={post.slug} className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600">{post.excerpt}</p>
            <a href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
}