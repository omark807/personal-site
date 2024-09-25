import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const BlogsPage = () => {
  // This would typically come from an API or database
  const upcomingBlogs = [
    { id: 1, title: "The Future of AI", date: "2023-06-01" },
    { id: 2, title: "Web Development Trends in 2023", date: "2023-06-15" },
    { id: 3, title: "Introduction to Next.js", date: "2023-07-01" },
    { id: 4, title: "Mastering React Hooks", date: "2023-07-15" },
  ];

  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Our Blog</title>
        <meta name="description" content="Check out our upcoming blog posts" />
      </Head>

      <main className="py-8">
        <h1 className="text-3xl font-bold mb-6">Our Blog</h1>
        <p className="mb-6">Welcome to our blog! Here are some upcoming posts:</p>

        <ul className="space-y-4">
          {upcomingBlogs.map((blog) => (
            <li key={blog.id} className="border p-4 rounded-lg">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-gray-600">Coming on: {blog.date}</p>
              <Link href={`/blog/${blog.id}`} className="text-blue-500 hover:underline">
                Read more (coming soon)
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default BlogsPage;
